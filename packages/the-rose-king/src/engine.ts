import { Player, setupPlayers } from "./player";
import { allPowerCards, setupBoard } from "./components";
import { shuffle } from "@game/utils";
import { GameCommand } from "./commands";
import { move } from "./move";
import { GameState } from "./game";

export type PlayerBase = {
  readonly id: string;
  readonly isBot: boolean;
};

export type GameStateBase<TPlayer extends PlayerBase> = {
  readonly players: readonly TPlayer[];
};

export type EngineOptions<
  TPlayer extends PlayerBase,
  TGameState extends {},
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
