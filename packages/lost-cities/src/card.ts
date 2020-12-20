export type CardColor = typeof CardColors[number];
export const CardColors = ["red", "blue", "green", "yellow", "white"] as const;

type WagerCard = {
  readonly type: "wager";
  readonly color: CardColor;
};
type NumberCard = {
  readonly type: "number";
  readonly color: CardColor;
  readonly number: number;
};

export type Card = WagerCard | NumberCard;

const setupCardByColor = (color: CardColor): readonly Card[] => [
  { type: "wager", color },
  { type: "wager", color },
  { type: "wager", color },
  { type: "number", color, number: 2 },
  { type: "number", color, number: 3 },
  { type: "number", color, number: 4 },
  { type: "number", color, number: 5 },
  { type: "number", color, number: 6 },
  { type: "number", color, number: 7 },
  { type: "number", color, number: 8 },
  { type: "number", color, number: 9 },
  { type: "number", color, number: 10 },
];

export const allCards: readonly Card[] = CardColors.flatMap((color) =>
  setupCardByColor(color)
);

const toNumber = (card: Card): number =>
  CardColors.indexOf(card.color) * 100 +
  (card.type === "wager" ? 0 : card.number);
export const sortCards = (cards: readonly Card[]): Card[] =>
  cards.slice().sort((a, b) => toNumber(a) - toNumber(b));
