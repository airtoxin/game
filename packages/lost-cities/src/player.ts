import { Card, CardColor } from "./card";

export type Player = {
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
