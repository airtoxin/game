import { LostCities, setupGame } from "./game";
import { Mutable } from "type-fest";
import {
  getPlayableCards,
  getTurnPlayer,
  isFinished,
  isPlayableCard,
} from "./selector";

describe("getTurnPlayer", () => {
  it("should return turnPlayer object", () => {
    const game: Mutable<LostCities> = setupGame();
    game.turnPlayerId = game.players[0]?.id!;

    expect(getTurnPlayer(game)).toBe(game.players[0]);
  });
});

describe("getPlayableCards", () => {
  it("should return PlayableCard in turnPlayer hands", () => {
    const game = setupGame();
    expect(
      getPlayableCards(game).every((c) => c.__type === "PlayableCard")
    ).toBe(true);
  });
});

describe("isPlayableCard", () => {
  it("should return PlayableCard if card is in hands of turnPlayer", () => {
    const game = setupGame();
    const turnPlayer = getTurnPlayer(game);

    expect.assertions(8);
    for (const card of turnPlayer.hands) {
      expect(isPlayableCard(game, card)).toEqual({
        __type: "PlayableCard",
        ...card,
      });
    }
  });
});

describe("isFinished", () => {
  it("should return isFinished false", () => {
    const game = setupGame();
    expect(isFinished(game)).toEqual({ finished: false });
  });
});
