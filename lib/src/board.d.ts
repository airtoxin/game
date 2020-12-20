import { Card, CardColor } from "./card";
export declare type Board = {
    readonly [Color in CardColor]: {
        readonly deck: readonly Card[];
        readonly discardPile: readonly Card[];
    };
};
