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

export type GameResultBase = {
  readonly finished: boolean;
};

export type GameContext<
  TPlayer extends PlayerBase,
  TGameResult extends GameResultBase
> = {
  readonly activePlayer: TPlayer;
  readonly result: TGameResult;
};
