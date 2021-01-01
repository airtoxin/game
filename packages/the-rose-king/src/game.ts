import { Player, setupPlayers } from "./player";
import { allPowerCards, Board, PowerCard, setupBoard } from "./components";
import { Engine, EngineOptions, GameStateBase } from "@game/framework";
import { execCommand, GameCommand, GameCommandType } from "./commands";
import { random } from "./random";
import { getValidMoves } from "./queries";

export type GameState = GameStateBase<Player> & {
  readonly numMarkers: number;
  readonly board: Board;
  readonly deck: readonly PowerCard[];
  readonly discardPile: readonly PowerCard[];
};

export type GameResult =
  | { draw: true }
  | { draw: false; winner: Player; loser: Player };

export const engineOptions: EngineOptions<
  Player,
  GameState,
  GameCommandType,
  GameCommand,
  GameResult
> = {
  setup() {
    return setupGameState();
  },
  move: execCommand,
  getValidMoves(state, ctx) {
    return getValidMoves(state, ctx.activePlayer);
  },
  // TODO
  isFinished() {
    return null;
  },
};

export const setupGameState = (): GameState => {
  const cards = random.shuffle(allPowerCards);
  const players = setupPlayers([cards.slice(0, 5), cards.slice(5, 10)]);
  return {
    players,
    numMarkers: 52,
    board: setupBoard(),
    deck: cards.slice(10),
    discardPile: [],
  };
};

export const engine = new Engine(engineOptions);
