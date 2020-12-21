import { Game } from "./game";
import { Card } from "./card";
import invariant from "tiny-invariant";
import deepCopy from "deepcopy";
import { getTurnPlayer } from "./selector";

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

  // TODO: board

  return {
    ...changeTurnPlayer(nextGame),
    players: nextPlayers,
  };
};
