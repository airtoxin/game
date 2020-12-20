import { Card, CardColor } from "./card";
export declare type Player = {
    readonly isBot: boolean;
    readonly playingArea: {
        readonly [Color in CardColor]: readonly Card[];
    };
    readonly hands: readonly Card[];
};
export declare const setupPlayer: ({ isBot, hands, }: {
    isBot: boolean;
    hands: readonly Card[];
}) => Player;
