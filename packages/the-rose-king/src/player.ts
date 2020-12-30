import {
  Color,
  colors,
  HeroCard,
  PowerCard,
  setupHeroCards,
} from "./components";
import { nanoid } from "nanoid";

export type PlayerBase = {
  readonly id: string;
  readonly isBot: boolean;
};

export type Player = PlayerBase & {
  readonly hand: PowerCard[];
  readonly color: Color;
  readonly heroCards: HeroCard[];
};

export const setupPlayers = (): readonly Player[] =>
  colors.map((color) => ({
    id: nanoid(),
    isBot: false,
    hand: [] as PowerCard[],
    color,
    heroCards: setupHeroCards(color),
  }));
