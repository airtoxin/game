import {
  Color,
  colors,
  HeroCard,
  PowerCard,
  setupHeroCards,
} from "./components";
import { PlayerBase } from "./engine";
import { random } from "./random";

export type Player = PlayerBase & {
  readonly hand: PowerCard[];
  readonly color: Color;
  readonly heroCards: HeroCard[];
};

export const setupPlayers = (hands: PowerCard[][]): readonly Player[] =>
  colors.map((color, i) => ({
    id: random.id(),
    isBot: false,
    hand: hands[i] ?? [],
    color,
    heroCards: setupHeroCards(color),
  }));
