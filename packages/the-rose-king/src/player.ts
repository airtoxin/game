import {
  Color,
  colors,
  HeroCard,
  PowerCard,
  setupHeroCards,
} from "./components";
import { nanoid } from "nanoid";
import { PlayerBase } from "./engine";

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
