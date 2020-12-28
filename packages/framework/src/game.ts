import { Player } from "./player";

export type Game = {
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
};
