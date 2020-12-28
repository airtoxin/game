import { Player } from "./player";

export type Game<S> = {
  name: string;
  playersRange: {
    min: number;
    max: number;
  };
  players: Player[];
  isFinished: boolean;
  isDraw: boolean;
  winners: Player[];
  losers: Player[];
  state: S;
};
