import { Player } from "./player";
import { Board, PowerCard } from "./components";
import { GameStateBase } from "./engine";

export type GameState = GameStateBase<Player> & {
  readonly numMarkers: number;
  readonly board: Board;
  readonly deck: readonly PowerCard[];
  readonly discardPile: readonly PowerCard[];
};
