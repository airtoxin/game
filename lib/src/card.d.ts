export declare type CardColor = typeof CardColors[number];
export declare const CardColors: readonly ["red", "blue", "green", "yellow", "white"];
declare type WagerCard = {
    readonly type: "wager";
    readonly color: CardColor;
};
declare type NumberCard = {
    readonly type: "number";
    readonly color: CardColor;
    readonly number: number;
};
export declare type Card = WagerCard | NumberCard;
export declare const allCards: readonly Card[];
export {};
