import { range } from "@game/utils";
import { nanoid } from "nanoid";

export const colors = ["red", "white"] as const;
export type Color = typeof colors[number];

export const directions = [
  "north",
  "north-east",
  "east",
  "south-east",
  "south",
  "south-west",
  "west",
  "north-west",
] as const;
export type Direction = typeof directions[number];

export type PowerCard = {
  id: string;
  direction: Direction;
  num: number;
};

export const allPowerCards: PowerCard[] = directions.flatMap((direction) =>
  range(3, 1).map((num) => ({
    id: nanoid(),
    direction,
    num,
  }))
);

export type HeroCard = {
  id: string;
  color: Color;
};

export const setupHeroCards = (color: Color): HeroCard[] =>
  range(4).map(() => ({
    id: nanoid(),
    color,
  }));

export type Marker = {
  id: string;
  color: Color;
};

export type BoardCell = Marker | null;
export type Board = {
  grid: BoardCell[][];
  crownPosition: { x: number; y: number };
};

export const setupBoard = (): Board => ({
  grid: range(9).map(() => range(9).map(() => null)),
  crownPosition: { x: 4, y: 4 },
});
