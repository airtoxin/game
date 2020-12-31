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

export const setupPlayers = (hands: PowerCard[][]): readonly Player[] =>
  colors.map((color, i) => ({
    id: nanoid(),
    isBot: false,
    hand: hands[i] ?? [],
    color,
    heroCards: setupHeroCards(color),
  }));
