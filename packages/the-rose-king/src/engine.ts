import { Player, PlayerBase, setupPlayers } from "./player";
import { allPowerCards, Board, PowerCard, setupBoard } from "./components";
import { shuffle } from "@game/utils";
import { GameCommand } from "./commands";
import { move } from "./move";

export type GameState = {
  readonly players: readonly Player[];
  readonly numMarkers: number;
  readonly board: Board;
  readonly deck: readonly PowerCard[];
  readonly discardPile: readonly PowerCard[];
};

export type EngineOptions<
  TPlayer extends PlayerBase,
  TGameState extends {
    readonly players: readonly TPlayer[];
  },
  TGameCommand extends { readonly type: string }
> = {
  setup(): TGameState;
  move(
    state: TGameState,
    command: TGameCommand,
    ctx: GameContext<TPlayer>
  ): TGameState;
};

export type GameContext<TPlayer extends PlayerBase> = {
  readonly activePlayer: TPlayer;
};

const engineOptions: EngineOptions<Player, GameState, GameCommand> = {
  setup() {
    const players = setupPlayers();
    return {
      players,
      activePlayerId: players[0]!.id,
      numMarkers: 52,
      board: setupBoard(),
      deck: shuffle(allPowerCards),
      discardPile: [],
    };
  },
  move,
};
