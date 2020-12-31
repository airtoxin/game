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
  TGameCommand extends { readonly type: TGameCommandType },
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

type EngineEvents<TGameResult extends GameResultBase> = {
  change: void;
};
export class Engine<
  TPlayer extends PlayerBase,
  TGameState extends GameStateBase<TPlayer>,
  TGameCommandType extends string,
  TGameCommand extends { readonly type: TGameCommandType },
  TGameResult extends GameResultBase
> {
  private ee: StrictEventEmitter<
    EventEmitter,
    EngineEvents<TGameResult>
  > = new EventEmitter();
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
  ) {
    this.state = engineOptions.setup();
    this.ee.emit("change");
  }

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
    this.ee.emit("change");
    return this;
  }

  command(cmd: TGameCommand): this {
    this.state = this.engineOptions.move(this.state, cmd, this.getCtx());
    this.activePlayerIndex =
      (this.activePlayerIndex + 1) % this.state.players.length;
    this.ee.emit("change");
    return this;
  }

  subscribe(
    callback: (
      state: TGameState,
      ctx: GameContext<TPlayer, TGameResult>,
      validMoves: readonly TGameCommandType[]
    ) => void
  ): this {
    this.ee.on("change", () => {
      const state = this.state;
      const ctx = this.getCtx();
      callback(state, ctx, this.engineOptions.getValidMoves(state, ctx));
    });
    return this;
  }
}
