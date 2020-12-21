import { Player, setupPlayer } from "./player";
import { allCards, Card, sortCards } from "./card";
import { shuffle } from "./utils";
import { Board, setupBoard } from "./board";

export type Game = {
  readonly players: Player[];
  readonly turnPlayerId: string;
  readonly deck: Card[];
  readonly board: Board;
};

export const setupGame = (): Game => {
  const cards = shuffle(allCards);

  const players = [
    setupPlayer({ isBot: false, hands: sortCards(cards.slice(0, 8)) }),
    setupPlayer({ isBot: true, hands: sortCards(cards.slice(8, 16)) }),
  ];
  const turnPlayer = shuffle(players)[0]!;
  const deck = cards.slice(16);
  const board = setupBoard();

  return {
    players,
    turnPlayerId: turnPlayer.id,
    deck,
    board,
  };
};
