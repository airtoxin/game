export type PlayerBase = {
  readonly id: string;
  readonly isBot: boolean;
};

export type GameStateBase<TPlayer extends PlayerBase> = {
  readonly players: readonly TPlayer[];
};

export type GameCommandBase<TGameCommandType extends string> = {
  readonly type: TGameCommandType | "@@framework@@init@@";
};

export type GameContext<TPlayer extends PlayerBase, TGameResult> = {
  readonly activePlayer: TPlayer;
  readonly result: null | TGameResult;
};
