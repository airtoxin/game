import { Player, PlayerBase, setupPlayers } from "./player";
import { allPowerCards, Board, PowerCard, setupBoard } from "./components";
import { shuffle } from "@game/utils";

export type GameState = {
  readonly numMarkers: number;
  readonly board: Board;
  readonly deck: readonly PowerCard[];
  readonly discardPile: readonly PowerCard[];
};

export type EngineOptions<TGameState, TPlayer extends PlayerBase> = {
  readonly players: readonly TPlayer[];
  setup(): TGameState;
};

const engineOptions: EngineOptions<GameState, Player> = {
  players: setupPlayers(),
  setup() {
    return {
      numMarkers: 52,
      board: setupBoard(),
      deck: shuffle(allPowerCards),
      discardPile: [],
    };
  },
};
