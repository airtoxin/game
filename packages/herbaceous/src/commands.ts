import { Container, HerbCard } from "./components";
import { GameResult, GameState } from "./game";
import { GameContext } from "@game/framework/lib/src";
import { Player } from "./player";
import produce from "immer";
import { assertUnreachable } from "@game/utils/lib/src";
import invariant from "tiny-invariant";
import { getContainerScore } from "./queries";

export type GameCommand = ReturnType<
  typeof potHerbs | typeof drawAndPlay | typeof skip
>;
export type GameCommandType = GameCommand["type"];

export const potHerbs = (cards: HerbCard[], container: Container) => ({
  type: "potHerbs" as const,
  cards,
  container,
});

export const drawAndPlay = () => ({
  type: "drawAndPlay" as const,
});

export const skip = () => ({
  type: "skip" as const,
});

export const move = (
  state: GameState,
  command: GameCommand,
  ctx: GameContext<Player, GameResult>
): GameState =>
  produce(state, (draft) => {
    const draftActivePlayer = draft.players.find(
      (p) => p.id === ctx.activePlayer.id
    );
    invariant(draftActivePlayer, "activePlayer not found.");

    switch (command.type) {
      case "potHerbs": {
        const container = draftActivePlayer.containers.find(
          (c) => c.id === command.container.id
        );
        invariant(container, "[potHerbs] container not found.");
        invariant(!container.pot, "[potHerbs] container already scored.");
        container.pot = {
          cards: command.cards,
          score: getContainerScore(container.type, command.cards),
        };
        break;
      }
      case "drawAndPlay": {
        break;
      }
      case "skip": {
        break;
      }
      default:
        assertUnreachable(command);
    }
  });
