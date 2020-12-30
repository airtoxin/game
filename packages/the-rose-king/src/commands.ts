import { PowerCard } from "./components";

export type GameCommand = ReturnType<
  | typeof moveCommand
  | typeof moveWithHeroCommand
  | typeof drawCommand
  | typeof passCommand
>;

const moveCommand = (card: PowerCard) => ({
  type: "move" as const,
  card,
});

const moveWithHeroCommand = (card: PowerCard) => ({
  type: "moveWithHero" as const,
  card,
});

const drawCommand = () => ({
  type: "draw" as const,
});

const passCommand = () => ({
  type: "pass" as const,
});
