import { Player, setupPlayers } from "./player";
import { allPowerCards, Board, PowerCard, setupBoard } from "./components";
import { Engine, EngineOptions, GameStateBase } from "@game/framework";
import { execCommand, GameCommand, GameCommandType } from "./commands";
import { random } from "./random";
import { getScore, getValidMoves } from "./queries";

export type GameState = GameStateBase<Player> & {
  readonly numMarkers: number;
  readonly board: Board;
  readonly deck: readonly PowerCard[];
  readonly discardPile: readonly PowerCard[];
};

export type GameResult =
  | { draw: true }
  | { draw: false; winner: Player; loser: Player };

export const engineOptions: EngineOptions<
  Player,
  GameState,
  GameCommandType,
  GameCommand,
  GameResult
> = {
  setup() {
    return setupGameState();
  },
  move: execCommand,
  getValidMoves(state, ctx) {
    return getValidMoves(state, ctx.activePlayer);
  },
  isFinished(state, _ctx) {
    const noMoves = state.players.every((player) => {
      const validMoves = getValidMoves(state, player);
      return validMoves.length === 1 && validMoves[0]?.type === "pass";
    });

    if (noMoves || state.numMarkers === 0) {
      const playerScores = getScore(state);
      if (playerScores[0]!.score === playerScores[1]!.score)
        return { draw: true };
      let winner = playerScores[0]!.player;
      let loser = playerScores[1]!.player;
      if (playerScores[0]!.score < playerScores[1]!.score) {
        [loser, winner] = [winner, loser];
      }
      return { draw: false, winner, loser };
    }

    return null;
  },
};

export const setupGameState = (): GameState => {
  const cards = random.shuffle(allPowerCards);
  const players = setupPlayers([cards.slice(0, 5), cards.slice(5, 10)]);
  return {
    players,
    numMarkers: 52,
    board: setupBoard(),
    deck: cards.slice(10),
    discardPile: [],
  };
};

export const engine = new Engine(engineOptions);
