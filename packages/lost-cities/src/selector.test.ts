import { Game, setupGame } from "./game";
import { Mutable } from "type-fest";
import { getTurnPlayer } from "./selector";

describe("getTurnPlayer", () => {
  it("should return turnPlayer object", () => {
    const game: Mutable<Game> = setupGame();
    game.turnPlayerId = game.players[0]?.id!;

    expect(getTurnPlayer(game)).toBe(game.players[0]);
  });
});
