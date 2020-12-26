import { Card, CardColor } from "./card";

export type Board = {
  readonly [Color in CardColor]: {
    readonly discardPile: readonly Card[];
  };
};

export const setupBoard = (): Board => ({
  red: {
    discardPile: [],
  },
  blue: {
    discardPile: [],
  },
  yellow: {
    discardPile: [],
  },
  green: {
    discardPile: [],
  },
  white: {
    discardPile: [],
  },
});
