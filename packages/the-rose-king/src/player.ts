import {
  Color,
  colors,
  HeroCard,
  PowerCard,
  setupHeroCards,
} from "./components";
import { nanoid } from "nanoid";

export type PlayerBase = {
  id: string;
  isBot: boolean;
};

export type Player = PlayerBase & {
  hand: PowerCard[];
  color: Color;
  heroCards: HeroCard[];
};

export const setupPlayers = (): readonly Player[] =>
  colors.map((color) => ({
    id: nanoid(),
    isBot: false,
    hand: [] as PowerCard[],
    color,
    heroCards: setupHeroCards(color),
  }));
