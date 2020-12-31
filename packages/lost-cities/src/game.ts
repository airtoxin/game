import { Player, setupPlayer } from "./player";
import { allCards, Card, sortCards } from "./card";
import { Board, setupBoard } from "./board";
import { random } from "./random";

export type LostCities = {
  readonly players: Player[];
  readonly turnPlayerId: string;
  readonly deck: Card[];
  readonly board: Board;
};

export const setupGame = (): LostCities => {
  const cards = random.shuffle(allCards);

  const players = [
    setupPlayer({ isBot: false, hands: sortCards(cards.slice(0, 8)) }),
    setupPlayer({ isBot: true, hands: sortCards(cards.slice(8, 16)) }),
  ];
  const turnPlayer = random.shuffle(players)[0]!;
  const deck = cards.slice(16);
  const board = setupBoard();

  return {
    players,
    turnPlayerId: turnPlayer.id,
    deck,
    board,
  };
};
