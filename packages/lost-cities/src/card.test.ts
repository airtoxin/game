import { cards } from "./card";

describe("cards", () => {
  it("should be 60 cards", () => {
    expect(cards.length).toBe(60);
  });
});
