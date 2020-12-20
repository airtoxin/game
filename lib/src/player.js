"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPlayer = void 0;
const setupPlayer = ({ isBot, hands, }) => ({
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
exports.setupPlayer = setupPlayer;
