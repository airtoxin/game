import { Player, setupPlayer } from "./player";
import { Card, allCards, sortCards } from "./card";
import { shuffle } from "./utils";
import { Board, setupBoard } from "./board";

export class Game {
  readonly players: Player[];
  readonly deck: Card[];
  readonly board: Board;

  constructor() {
    const cards = shuffle(allCards);

    this.players = [
      setupPlayer({ isBot: false, hands: sortCards(cards.slice(0, 8)) }),
      setupPlayer({ isBot: true, hands: sortCards(cards.slice(8, 16)) }),
    ];
    this.deck = cards.slice(16);
    this.board = setupBoard();
  }
}
