import { Player } from "./player";
import invariant from "tiny-invariant";

export type GameEngineContext<S> = {
  state: S;
  activePlayer: Player;
};

export interface EngineOptions<S, MoveTypes extends string> {
  players: Player[];
  setup(): S;
  onGameStart(ctx: GameEngineContext<S>): S;
  onTurnStart(ctx: GameEngineContext<S>): S;
  onTurnEnd(ctx: GameEngineContext<S>): S;
  onGameEnd(ctx: GameEngineContext<S>): S;
  isEnd(ctx: GameEngineContext<S>): boolean;
  move: Record<MoveTypes, Move<S>>;
}

export type Move<S> = <Args extends any[]>(
  ctx: GameEngineContext<S>,
  ...args: Args
) => S;

export class Engine<S, MoveTypes extends string = string> {
  private state: S;
  private activePlayerIndex = 0;
  constructor(private options: EngineOptions<S, MoveTypes>) {
    this.state = options.setup();
  }

  private get ctx(): GameEngineContext<S> {
    const activePlayer = this.options.players[this.activePlayerIndex];
    invariant(
      activePlayer,
      `Cannot find activePlayer with index ${this.activePlayerIndex}.`
    );
    return {
      state: this.state,
      activePlayer,
    };
  }

  move(moveType: MoveTypes, ...args: Parameters<Move<S>>[1]) {
    this.options.move[moveType](this.ctx, ...args);
  }
}

const engine = new Engine<{ end: boolean }>({
  players: [],
  setup() {
    return { end: false };
  },
  onGameStart(ctx) {
    return ctx.state;
  },
  onTurnStart(ctx) {
    return ctx.state;
  },
  onTurnEnd(ctx) {
    return ctx.state;
  },
  onGameEnd(ctx) {
    return ctx.state;
  },
  isEnd() {
    return false;
  },
  move: {},
});
