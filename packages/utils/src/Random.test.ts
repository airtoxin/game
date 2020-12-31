import { Random } from "./Random";

describe("Random#random", () => {
  it("should return number between 0 to 1", () => {
    const random = new Random();
    for (let i = 0; i < 10000; i++) {
      const value = random.random();
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(1);
    }
  });

  it("should return same random value if seed is same too", () => {
    for (let i = 0; i < 10000; i++) {
      expect(new Random(20443987).random()).toBe(new Random(20443987).random());
    }
  });
});

describe("Random#randomInt", () => {
  it("should return integer value", () => {
    const random = new Random();
    for (let i = 0; i < 10000; i++) {
      expect(random.randomInt()).toBeGreaterThanOrEqual(0);
    }
  });

  it("should return same random value if seed is same too", () => {
    for (let i = 0; i < 10000; i++) {
      expect(new Random(20443987).randomInt()).toBe(
        new Random(20443987).randomInt()
      );
    }
  });
});

describe("Random#rangeInt", () => {
  it("should return integer value ranged in", () => {
    const random = new Random();
    for (let i = 0; i < 10000; i++) {
      const value = random.rangeInt(10, 100);
      expect(value).toBeGreaterThanOrEqual(10);
      expect(value).toBeLessThanOrEqual(100);
    }
  });

  it("should return same random value if seed is same too", () => {
    for (let i = 0; i < 10000; i++) {
      expect(new Random(20443987).rangeInt(20, 50)).toBe(
        new Random(20443987).rangeInt(20, 50)
      );
    }
  });
});

describe("Random#shuffle", () => {
  const array = [248576, 948, 9274, 1982, 240082, 289, 1234];

  it("should return shuffled array", () => {
    const random = new Random();
    for (let i = 0; i < 10000; i++) {
      const shuffled = random.shuffle(array);
      for (const el of array) {
        expect(shuffled.includes(el)).toBe(true);
      }
    }
  });

  it("should return same random value if seed is same too", () => {
    for (let i = 0; i < 10000; i++) {
      expect(new Random(20443987).shuffle(array)).toEqual(
        new Random(20443987).shuffle(array)
      );
    }
  });
});
