import { allPowerCards } from "./components";

describe("allPowerCards", () => {
  it("should return all unique 24 cards", () => {
    expect(allPowerCards.length).toBe(24);
  });
});
