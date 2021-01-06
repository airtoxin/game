import { EngineOptions, GameStateBase } from "@game/framework";
import { Player, setupPlayers } from "./player";
import { GameCommand, GameCommandType, move } from "./commands";
import { HerbCard, setupCards } from "./components";
import { getValidMoves, isFinished } from "./queries";

export type GameState = GameStateBase<Player> & {
  readonly deck: HerbCard[];
  readonly communityGarden: HerbCard[];
};

export type GameResult = { rank: Player[] };

export const engineOptions: EngineOptions<
  Player,
  GameState,
  GameCommandType,
  GameCommand,
  GameResult
> = {
  setup() {
    const numPlayers = 3;
    return {
      deck: setupCards(numPlayers),
      players: setupPlayers(numPlayers),
      communityGarden: [],
    };
  },
  move,
  getValidMoves,
  isFinished,
};
