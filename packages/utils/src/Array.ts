import invariant from "tiny-invariant";

export const maxBy = <T>(
  array: readonly T[],
  valuator: (value: T) => number
): T => {
  let score = Number.MIN_VALUE;
  let result: T | undefined;
  for (const value of array) {
    const tv = valuator(value);
    if (tv >= score) {
      score = tv;
      result = value;
    }
  }

  invariant(result, "Expect non empty array");
  return result!;
};

export const range = (max: number, min: number = 0) =>
  [...Array(max - min)].map((_, i) => i + min);
