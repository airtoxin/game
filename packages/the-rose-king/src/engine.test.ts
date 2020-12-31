import { Engine, EngineOptions } from "./engine";
import { Player, setupPlayers } from "./player";
import { GameState } from "./game";
import { GameCommand, GameCommandType } from "./commands";
import { GameResult } from "./result";
import { allPowerCards, setupBoard } from "./components";
import { move } from "./move";
import { getPlayableCards } from "./queries";
import { random } from "./random";

const engineOptions: EngineOptions<
  Player,
  GameState,
  GameCommandType,
  GameCommand,
  GameResult
> = {
  setup() {
    const cards = random.shuffle(allPowerCards);
    const players = setupPlayers([cards.slice(0, 5), cards.slice(5, 10)]);
    return {
      players,
      activePlayerId: players[0]!.id,
      numMarkers: 52,
      board: setupBoard(),
      deck: cards.slice(10),
      discardPile: [],
    };
  },
  move,
  getValidMoves(state, ctx) {
    const result: GameCommandType[] = [];
    if (ctx.activePlayer.hand.length < 5) result.push("draw");

    for (const playableCard of getPlayableCards(state, ctx.activePlayer)) {
      result.push(playableCard.withHeroCard ? "moveWithHero" : "move");
    }
    if (result.length === 0) result.push("pass");

    // remove duplicates
    return result.filter((t, index, r) => r.indexOf(t) === index);
  },
  isFinished() {
    return { finished: false };
  },
};

describe("engine", () => {
  it("test", async () => {
    jest.setTimeout(10 * 1000);
    const engine = new Engine(engineOptions);

    engine
      .subscribe((state, ctx, validMoves) => {
        console.log(
          "@state",
          JSON.stringify(state, null, 2),
          JSON.stringify(ctx, null, 2),
          JSON.stringify(validMoves, null, 2)
        );
      })
      .start();

    await new Promise((resolve) => setTimeout(resolve, 5000));
  });
});
