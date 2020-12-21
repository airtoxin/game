import { nanoid } from "nanoid";

export type CardColor = typeof CardColors[number];
export const CardColors = ["red", "blue", "green", "yellow", "white"] as const;

type WagerCard = {
  readonly id: string;
  readonly type: "wager";
  readonly color: CardColor;
};
type NumberCard = {
  readonly id: string;
  readonly type: "number";
  readonly color: CardColor;
  readonly number: number;
};

export type Card = WagerCard | NumberCard;

const setupCardByColor = (color: CardColor): readonly Card[] => [
  { id: nanoid(), type: "wager", color },
  { id: nanoid(), type: "wager", color },
  { id: nanoid(), type: "wager", color },
  { id: nanoid(), type: "number", color, number: 2 },
  { id: nanoid(), type: "number", color, number: 3 },
  { id: nanoid(), type: "number", color, number: 4 },
  { id: nanoid(), type: "number", color, number: 5 },
  { id: nanoid(), type: "number", color, number: 6 },
  { id: nanoid(), type: "number", color, number: 7 },
  { id: nanoid(), type: "number", color, number: 8 },
  { id: nanoid(), type: "number", color, number: 9 },
  { id: nanoid(), type: "number", color, number: 10 },
];

export const allCards: readonly Card[] = CardColors.flatMap((color) =>
  setupCardByColor(color)
);

const toNumber = (card: Card): number =>
  CardColors.indexOf(card.color) * 100 +
  (card.type === "wager" ? 0 : card.number);
export const sortCards = (cards: readonly Card[]): Card[] =>
  cards.slice().sort((a, b) => toNumber(a) - toNumber(b));
