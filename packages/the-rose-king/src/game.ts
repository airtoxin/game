import { Player, setupPlayers } from "./player";
import { allPowerCards, Board, PowerCard, setupBoard } from "./components";
import { EngineOptions, GameStateBase } from "@game/framework";
import { GameCommand, GameCommandType, execCommand } from "./commands";
import { random } from "./random";
import { getValidMoves } from "./queries";
import { Engine } from "@game/framework";

export type GameState = GameStateBase<Player> & {
  readonly numMarkers: number;
  readonly board: Board;
  readonly deck: readonly PowerCard[];
  readonly discardPile: readonly PowerCard[];
};

export type GameResult =
  | { finished: false }
  | { finished: true; draw: true }
  | { finished: true; draw: false; winner: Player; loser: Player };

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
    return { finished: false };
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
