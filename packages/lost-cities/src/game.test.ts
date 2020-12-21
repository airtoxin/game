import { setupGame } from "./game";

describe("game", () => {
  it("setupGame", () => {
    const game = setupGame();

    expect(game.deck.length).toBe(60 - 16);
    expect(game.players[0]?.hands.length).toBe(8);
    expect(game.players[1]?.hands.length).toBe(8);
  });
});
