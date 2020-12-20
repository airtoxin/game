import { Card, CardColor } from "./card";

export type Board = {
  readonly [Color in CardColor]: {
    readonly deck: readonly Card[];
    readonly discardPile: readonly Card[];
  };
};

export const setupBoard = (): Board => ({
  red: {
    deck: [],
    discardPile: [],
  },
  blue: {
    deck: [],
    discardPile: [],
  },
  yellow: {
    deck: [],
    discardPile: [],
  },
  green: {
    deck: [],
    discardPile: [],
  },
  white: {
    deck: [],
    discardPile: [],
  },
});
