import { Game } from "./game";
import { Player } from "./player";
import invariant from "tiny-invariant";
import { Card } from "./card";

export const getTurnPlayer = (game: Game): Player => {
  const turnPlayer = game.players.find((p) => p.id === game.turnPlayerId);
  invariant(turnPlayer, "Cannot find turnPlayer in players.");
  return turnPlayer;
};

export type PlayableCard = Card & {
  __type: "PlayableCard";
};

export const isPlayableCard = (
  game: Game,
  card: Card
): PlayableCard | undefined => {
  return getPlayableCards(game).find((c) => c.id === card.id);
};

export const getPlayableCards = (game: Game): PlayableCard[] => {
  const turnPlayer = game.players.find((p) => p.id === game.turnPlayerId);
  invariant(turnPlayer, "Cannot find turnPlayer in players.");

  const playableCards = turnPlayer.hands.filter((card) => {
    if (turnPlayer.playingArea[card.color].length === 0) return true;
    const lastPlayedCard =
      turnPlayer.playingArea[card.color][
        turnPlayer.playingArea[card.color].length - 1
      ];
    invariant(
      lastPlayedCard,
      "Unexpected state: lastPlayedCard must not be undefined."
    );
    if (lastPlayedCard.type === "wager") return true;
    return card.type === "number" && card.number > lastPlayedCard.number;
  });

  return playableCards.map((card) => ({ ...card, __type: "PlayableCard" }));
};

export const getNextTurnPlayer = (game: Game): Player => {
  const index = game.players.findIndex((p) => p.id === game.turnPlayerId);
  invariant(index !== -1, "Cannot find index of turnPlayer in players.");
  const nextIndex = (index + 1) % game.players.length;
  const nextPlayer = game.players[nextIndex];
  invariant(nextPlayer, "Invalid index of next turnPlayer.");
  return nextPlayer;
};
