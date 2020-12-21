import { Game } from "./game";
import { Card } from "./card";
import invariant from "tiny-invariant";
import deepCopy from "deepcopy";
import { getTurnPlayer } from "./selector";
import { Board } from "./board";

const changeTurnPlayer = (game: Game): Game => {
  const nextGame = deepCopy(game);
  const index = nextGame.players.findIndex(
    (p) => p.id === nextGame.turnPlayerId
  );
  invariant(index !== -1, "Cannot find index of turnPlayer in players.");
  const nextIndex = (index + 1) % nextGame.players.length;
  const nextPlayer = nextGame.players[nextIndex];
  invariant(nextPlayer, "Invalid index of next turnPlayer.");

  return {
    ...nextGame,
    turnPlayerId: nextPlayer.id,
  };
};

export const play = (game: Game, card: Card): Game => {
  const nextGame = deepCopy(game);
  const turnPlayer = getTurnPlayer(nextGame);
  const cardIndex = turnPlayer.hands.findIndex((c) => c.id === card.id);
  invariant(
    cardIndex !== -1,
    "Cannot find playing card in hand of turnPlayer."
  );
  const nextPlayers = nextGame.players.map((p) => {
    if (p.id !== turnPlayer.id) return p;
    return {
      ...p,
      hands: p.hands.filter((c) => c.id !== card.id),
    };
  });

  if (nextGame.board[card.color].deck.length > 0) {
    const lastPlayedCard =
      nextGame.board[card.color].deck[
        nextGame.board[card.color].deck.length - 1
      ];
    invariant(
      lastPlayedCard,
      "Unexpected state: lastPlayedCard must not be undefined"
    );
    if (lastPlayedCard.type === "number") {
      invariant(
        card.type === "number",
        "Playing card type must be number, because last played one is number type."
      );
      invariant(
        lastPlayedCard.number < card.number,
        "Playing card number must be bigger than last played one."
      );
    }
  }

  const nextBoard: Board = {
    ...nextGame.board,
    [card.color]: {
      ...nextGame.board[card.color],
      deck: nextGame.board[card.color].deck.concat([card]),
    },
  };

  return {
    ...changeTurnPlayer(nextGame),
    players: nextPlayers,
    board: nextBoard,
  };
};
