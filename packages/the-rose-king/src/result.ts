import { Player } from "./player";

export type GameResult =
  | { finished: false }
  | { finished: true; draw: true }
  | { finished: true; draw: false; winner: Player; loser: Player };
