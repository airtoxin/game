import { Card, CardColor } from "./card";
import { nanoid } from "nanoid";

export type Player = {
  readonly id: string;
  readonly isBot: boolean;
  readonly playingArea: {
    readonly [Color in CardColor]: readonly Card[];
  };
  readonly hands: readonly Card[];
};

export const setupPlayer = ({
  isBot,
  hands,
}: {
  isBot: boolean;
  hands: readonly Card[];
}): Player => ({
  id: nanoid(),
  isBot,
  playingArea: {
    red: [],
    blue: [],
    green: [],
    yellow: [],
    white: [],
  },
  hands,
});
