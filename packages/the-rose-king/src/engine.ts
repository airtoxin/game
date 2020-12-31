import invariant from "tiny-invariant";
import StrictEventEmitter from "strict-event-emitter-types";
import { EventEmitter } from "events";

export type PlayerBase = {
  readonly id: string;
  readonly isBot: boolean;
};

export type GameStateBase<TPlayer extends PlayerBase> = {
  readonly players: readonly TPlayer[];
};

export type GameResultBase = {
  readonly finished: boolean;
};

export type EngineOptions<
  TPlayer extends PlayerBase,
  TGameState extends GameStateBase<TPlayer>,
  TGameCommandType extends string,
  TGameCommand extends {
    readonly type: TGameCommandType | "@@framework@@init@@";
  },
  TGameResult extends GameResultBase
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
  isFinished(): TGameResult;
};

export type GameContext<
  TPlayer extends PlayerBase,
  TGameResult extends GameResultBase
> = {
  readonly activePlayer: TPlayer;
  readonly result: TGameResult;
};

type EngineEvents<
  TGameCommandType extends string,
  TGameCommand extends {
    readonly type: TGameCommandType | "@@framework@@init@@";
  },
  TGameResult extends GameResultBase
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
  TGameResult extends GameResultBase
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
    return {
      activePlayer,
      result: this.engineOptions.isFinished(),
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
