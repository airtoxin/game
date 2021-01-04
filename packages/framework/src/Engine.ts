import {
  GameCommandBase,
  GameContext,
  GameStateBase,
  PlayerBase,
} from "./types";
import { EventEmitter } from "events";
import StrictEventEmitter from "strict-event-emitter-types";
import invariant from "tiny-invariant";

export type EngineOptions<
  TPlayer extends PlayerBase,
  TGameState extends GameStateBase<TPlayer>,
  TGameCommandType extends string,
  TGameCommand extends GameCommandBase<TGameCommandType>,
  TGameResult
> = {
  setup(): TGameState;
  move(
    state: TGameState,
    command: TGameCommand,
    ctx: GameContext<TPlayer, TGameResult>
  ): TGameState;
  getValidMoves(
    state: TGameState,
    ctx: GameContext<TPlayer, TGameResult>
  ): readonly TGameCommand[];
  // TODO: argument
  isFinished(
    state: TGameState,
    ctx: GameContext<TPlayer, TGameResult>
  ): null | TGameResult;
};

export type EngineEvents<
  TGameCommandType extends string,
  TGameCommand extends GameCommandBase<TGameCommandType>,
  TGameResult
> = {
  change: (command: TGameCommand) => void;
};

export class Engine<
  TPlayer extends PlayerBase,
  TGameState extends GameStateBase<TPlayer>,
  TGameCommandType extends string,
  TGameCommand extends {
    readonly type: TGameCommandType | "@@framework@@init@@";
  },
  TGameResult
> {
  private ee: StrictEventEmitter<
    EventEmitter,
    EngineEvents<TGameCommandType, TGameCommand, TGameResult>
  > = new EventEmitter();
  // @ts-expect-error
  private state: TGameState;
  private activePlayerIndex = 0;

  constructor(
    private engineOptions: EngineOptions<
      TPlayer,
      TGameState,
      TGameCommandType,
      TGameCommand,
      TGameResult
    >
  ) {}

  private getCtx(): GameContext<TPlayer, TGameResult> {
    const activePlayer = this.state.players[this.activePlayerIndex];
    invariant(
      activePlayer,
      `Index out of range activePlayerIndex: ${this.activePlayerIndex}`
    );
    const contextWithoutResult = {
      activePlayer,
      result: null,
    };
    return {
      ...contextWithoutResult,
      result: this.engineOptions.isFinished(this.state, contextWithoutResult),
    };
  }

  start(): this {
    this.state = this.engineOptions.setup();
    this.ee.emit("change", { type: "@@framework@@init@@" } as TGameCommand);
    return this;
  }

  command(cmd: TGameCommand): this {
    this.state = this.engineOptions.move(this.state, cmd, this.getCtx());
    this.activePlayerIndex =
      (this.activePlayerIndex + 1) % this.state.players.length;
    this.ee.emit("change", cmd);
    return this;
  }

  subscribe(
    callback: (
      state: TGameState,
      ctx: GameContext<TPlayer, TGameResult>,
      validMoves: readonly TGameCommand[],
      lastCommand: TGameCommand
    ) => void
  ): this {
    this.ee.on("change", (lastCommand) => {
      const state = this.state;
      const ctx = this.getCtx();
      callback(
        state,
        ctx,
        this.engineOptions.getValidMoves(state, ctx),
        lastCommand
      );
    });
    return this;
  }
}
