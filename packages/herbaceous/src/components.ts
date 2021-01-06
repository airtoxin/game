import { random } from "./random";
import { range } from "@game/utils/lib/src";
import deepcopy from "deepcopy";

export const normalHerbCardKindTypes = [
  "Bay",
  "Dill",
  "Rosemary",
  "Saffron",
  "Sage",
  "Lavender",
  "Tarragon",
] as const;
export type NormalHerbCardKindType = typeof normalHerbCardKindTypes[number];

export const specialHerbCardKindTypes = ["Mint", "Chive", "Thyme"] as const;
export type SpecialHerbCardKindType = typeof specialHerbCardKindTypes[number];

export type NormalHerbCardType = {
  id: string;
  type: "Normal";
  kind: NormalHerbCardKindType;
};
export type SpecialHerbCardType = {
  id: string;
  type: "Special";
  kind: SpecialHerbCardKindType;
  num: number;
};

export type HerbCard = NormalHerbCardType | SpecialHerbCardType;
export type HerbCardType = HerbCard["type"];

export const setupCards = (numPlayers: 2 | 3 | 4) =>
  random
    .shuffle(deepcopy(allCards))
    .slice(0, allCards.length - 12 * (4 - numPlayers));

const allCards: HerbCard[] = (normalHerbCardKindTypes.flatMap((kind) =>
  range(9).map(() => ({
    id: random.id(),
    type: "Normal",
    kind,
  }))
) as HerbCard[]).concat(
  specialHerbCardKindTypes.flatMap((kind) =>
    range(4, 1).map((num) => ({
      id: random.id(),
      type: "Special",
      kind,
      num,
    }))
  )
);

export const containerTypes = [
  "LargePot",
  "WoodenPot",
  "SmallPot",
  "GlassJar",
] as const;
export type ContainerType = typeof containerTypes[number];

export type Container = {
  readonly id: string;
  readonly type: ContainerType;
  readonly pot?: {
    readonly cards: HerbCard[];
    readonly score: number;
  };
};

export const setupContainer = (): Container[] =>
  containerTypes.map((type) => ({
    id: random.id(),
    type,
  }));
