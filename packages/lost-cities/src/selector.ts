import { Game } from "./game";
import { Player } from "./player";
import invariant from "tiny-invariant";

export const getTurnPlayer = (game: Game): Player => {
  const turnPlayer = game.players.find((p) => p.id === game.turnPlayerId);
  invariant(turnPlayer, "Cannot find turnPlayer in players.");
  return turnPlayer;
};
