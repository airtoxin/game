"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allCards = exports.CardColors = void 0;
exports.CardColors = ["red", "blue", "green", "yellow", "white"];
const setupCardByColor = (color) => [
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
exports.allCards = exports.CardColors.flatMap((color) => setupCardByColor(color));
