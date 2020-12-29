import { LostCities } from "./game";
import { Player } from "./player";
import invariant from "tiny-invariant";
import { Card } from "./card";
import deepcopy from "deepcopy";
import { maxBy } from "@game/utils";

export const getTurnPlayer = (game: LostCities): Player => {
  const turnPlayer = game.players.find((p) => p.id === game.turnPlayerId);
  invariant(turnPlayer, "Cannot find turnPlayer in players.");
  return turnPlayer;
};

export type PlayableCard = Card & {
  __type: "PlayableCard";
};

export const isPlayableCard = (
  game: LostCities,
  card: Card
): PlayableCard | undefined => {
  return getPlayableCards(game).find((c) => c.id === card.id);
};

export const getPlayableCards = (game: LostCities): PlayableCard[] => {
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

export const getNextTurnPlayer = (game: LostCities): Player => {
  const index = game.players.findIndex((p) => p.id === game.turnPlayerId);
  invariant(index !== -1, "Cannot find index of turnPlayer in players.");
  const nextIndex = (index + 1) % game.players.length;
  const nextPlayer = game.players[nextIndex];
  invariant(nextPlayer, "Invalid index of next turnPlayer.");
  return nextPlayer;
};

export type PlayerScore = {
  player: Player;
  score: number;
};

export const getScore = (
  game: LostCities
): readonly [PlayerScore, PlayerScore] => {
  return game.players.map((player) => {
    let score = 0;

    for (const [, cards] of Object.entries(player.playingArea)) {
      if (cards.length === 0) continue;

      let multiplier = 1;
      let sum = -20; // Start with Expedition Cost
      if (cards.length >= 8) sum += 20; // 8+ Card Bonus

      for (const card of cards) {
        if (card.type === "wager") {
          multiplier += 1;
        } else {
          sum += card.number;
        }
      }

      score += sum * multiplier;
    }

    return {
      player: deepcopy(player),
      score,
    } as PlayerScore;
  }) as [PlayerScore, PlayerScore];
};

export const isFinished = (
  game: LostCities
):
  | { finished: false }
  | { finished: true; draw: true; score: number }
  | {
      finished: true;
      draw: false;
      winner: PlayerScore;
      loser: PlayerScore;
    } => {
  if (game.deck.length !== 0) return { finished: false };

  const [playerA, playerB] = getScore(game);
  if (playerA.score === playerB.score)
    return { finished: true, draw: true, score: playerA.score };

  return {
    finished: true,
    draw: false,
    winner: maxBy([playerA, playerB], (ps) => ps.score),
    loser: maxBy([playerA, playerB], (ps) => -ps.score),
  };
};
