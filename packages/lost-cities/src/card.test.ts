import { allCards } from "./card";

describe("allCards", () => {
  it("should be 60 allCards", () => {
    expect(allCards.length).toBe(60);
  });
});
