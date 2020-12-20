import { Game } from "./game";

describe("game", () => {
  it("setup", () => {
    const game = new Game();

    expect(game.deck.length).toBe(60 - 16);
    expect(game.players[0]?.hands.length).toBe(8);
    expect(game.players[1]?.hands.length).toBe(8);
  });
});
