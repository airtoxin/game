import { GameContext } from "./engine";
import { GameCommand } from "./commands";
import produce from "immer";
import { Player } from "./player";
import invariant from "tiny-invariant";
import { assertUnreachable } from "@game/utils";
import { GameState } from "./game";

export const move = (
  state: GameState,
  command: GameCommand,
  ctx: GameContext<Player>
): GameState =>
  produce(state, (draft) => {
    switch (command.type) {
      case "move": {
        const card = command.card;
        switch (card.direction) {
          case "north": {
            draft.board.crownPosition.y -= card.num;
            break;
          }
          case "north-east": {
            draft.board.crownPosition.y -= card.num;
            draft.board.crownPosition.x += card.num;
            break;
          }
          case "east": {
            draft.board.crownPosition.x += card.num;
            break;
          }
          case "south-east": {
            draft.board.crownPosition.x += card.num;
            draft.board.crownPosition.y += card.num;
            break;
          }
          case "south": {
            draft.board.crownPosition.y += card.num;
            break;
          }
          case "south-west": {
            draft.board.crownPosition.y += card.num;
            draft.board.crownPosition.x -= card.num;
            break;
          }
          case "west": {
            draft.board.crownPosition.x -= card.num;
            break;
          }
          case "north-west": {
            draft.board.crownPosition.x -= card.num;
            draft.board.crownPosition.y -= card.num;
            break;
          }
          default:
            assertUnreachable(card.direction);
        }
        draft.discardPile.push(card);
        break;
      }
      case "moveWithHero": {
        Object.assign(
          draft,
          move(state, { type: "move", card: command.card }, ctx)
        );
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
