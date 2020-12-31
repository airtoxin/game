import MersenneTwister from "mersenne-twister";
import { range } from "./Array";

export class Random {
  private rng: MersenneTwister;
  constructor(private seed = Date.now()) {
    this.rng = new MersenneTwister(seed);
  }

  // [0,1]
  random(): number {
    return this.rng.random_incl();
  }

  // [0, 4294967295]
  randomInt(): number {
    return this.rng.random_int();
  }

  // [min, max]
  rangeInt(min: number, max: number): number {
    return min + (this.rng.random_int() % (max + 1 - min));
  }

  shuffle<T extends any>(array: readonly T[]): T[] {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const r = this.rangeInt(0, i);
      const tmp = arr[i];
      // @ts-expect-error
      arr[i] = arr[r];
      // @ts-expect-error
      arr[r] = tmp;
    }
    return arr;
  }

  private _idstr =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
  id(): string {
    return range(21)
      .map(() => this._idstr[this.rangeInt(0, this._idstr.length - 1)])
      .join("");
  }
}
