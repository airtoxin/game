import { getNextCrownPosition, PlayableCard } from "./queries";
import { GameResult, GameState } from "./game";
import { GameContext } from "@game/framework";
import { Player } from "./player";
import produce from "immer";
import { random } from "./random";
import invariant from "tiny-invariant";
import { assertUnreachable } from "@game/utils";

export type GameCommand = ReturnType<
  typeof moveCommand | typeof drawCommand | typeof passCommand
>;
export type GameCommandType = GameCommand["type"];

export const moveCommand = (playableCard: PlayableCard) => ({
  type: "move" as const,
  ...playableCard,
});

export const drawCommand = () => ({
  type: "draw" as const,
});

export const passCommand = () => ({
  type: "pass" as const,
});

export const execCommand = (
  state: GameState,
  command: GameCommand,
  ctx: GameContext<Player, GameResult>
): GameState =>
  produce(state, (draft) => {
    switch (command.type) {
      case "move": {
        draft.board.crownPosition = getNextCrownPosition(state, command.card);
        const draftActivePlayer = draft.players.find(
          (p) => p.id === ctx.activePlayer.id
        )!;
        const draftRow = draft.board.grid[draft.board.crownPosition.y]!;
        if (command.withHeroCard) {
          draftRow[draft.board.crownPosition.x]!.color =
            draftActivePlayer.color;
          draftActivePlayer.heroCards.pop();
        } else {
          draft.numMarkers -= 1;
          draftRow[draft.board.crownPosition.x] = {
            id: random.id(),
            color: draftActivePlayer.color,
          };
        }
        draftActivePlayer.hand = draftActivePlayer.hand.filter(
          (c) => c.id !== command.card.id
        );
        draft.discardPile.push(command.card);

        break;
      }
      case "draw": {
        const card = draft.deck.pop();
        invariant(card, "No card in deck.");
        const player = draft.players.find((p) => p.id === ctx.activePlayer.id);
        invariant(player, "No activePlayer in players");
        player.hand.push(card);
        break;
      }
      case "pass":
        break;
      default:
        assertUnreachable(command);
    }
  });
