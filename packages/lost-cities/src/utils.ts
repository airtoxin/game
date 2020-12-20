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
