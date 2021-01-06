import { PlayerBase } from "@game/framework";
import { Container, HerbCard, setupContainer } from "./components";
import { range } from "@game/utils/lib/src";
import { random } from "./random";

export type Player = PlayerBase & {
  readonly privateGarden: HerbCard[];
  readonly containers: Container[];
};

export const setupPlayers = (numPlayers: number): Player[] =>
  range(numPlayers).map(() => ({
    id: random.id(),
    isBot: false,
    privateGarden: [],
    containers: setupContainer(),
  }));
