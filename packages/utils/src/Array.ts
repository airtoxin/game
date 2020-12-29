import invariant from "tiny-invariant";

export const shuffle = <T, Arr extends readonly T[]>(array: Arr): Arr => {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    // @ts-expect-error
    arr[i] = arr[r];
    // @ts-expect-error
    arr[r] = tmp;
  }
  return arr as any;
};

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
