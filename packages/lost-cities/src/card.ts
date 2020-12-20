export type CardColor = typeof CardColors[number];
export const CardColors = ["red", "blue", "green", "yellow", "white"] as const;

type ContractCard = {
  type: "contract";
  color: CardColor;
};
type NumberCard = {
  type: "number";
  color: CardColor;
  number: number;
};

export type Card = ContractCard | NumberCard;

const setupCardByColor = (color: CardColor): Card[] => [
  { type: "contract", color },
  { type: "contract", color },
  { type: "contract", color },
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

export const cards: Card[] = CardColors.flatMap((color) =>
  setupCardByColor(color)
);
