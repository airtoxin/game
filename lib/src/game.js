"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const player_1 = require("./player");
const card_1 = require("./card");
const utils_1 = require("./utils");
class Game {
    constructor() {
        const cards = utils_1.shuffle(card_1.allCards);
        this.players = [
            player_1.setupPlayer({ isBot: false, hands: cards.slice(0, 8) }),
            player_1.setupPlayer({ isBot: true, hands: cards.slice(8, 16) }),
        ];
        this.deck = cards.slice(16);
    }
}
exports.Game = Game;
