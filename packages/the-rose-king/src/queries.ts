import { GameState } from "./game";
import { Player } from "./player";
import { PowerCard } from "./components";
import produce from "immer";
import { drawCommand, GameCommand, moveCommand, passCommand } from "./commands";

export const getValidMoves = (
  state: GameState,
  activePlayer: Player
): readonly GameCommand[] => {
  const result: GameCommand[] = [];
  if (activePlayer.hand.length < 5) result.push(drawCommand());

  for (const playableCard of getPlayableCards(state, activePlayer)) {
    result.push(moveCommand(playableCard));
  }
  if (result.length === 0) result.push(passCommand());

  return result;
};

export const getNextCrownPosition = (
  state: GameState,
  card: PowerCard
): GameState["board"]["crownPosition"] => {
  return produce(state.board.crownPosition, (draft) => {
    if (["north", "north-west", "north-east"].includes(card.direction)) {
      draft.y -= card.num;
    }
    if (["south", "south-west", "south-east"].includes(card.direction)) {
      draft.y += card.num;
    }
    if (["west", "north-west", "south-west"].includes(card.direction)) {
      draft.x -= card.num;
    }
    if (["east", "north-east", "south-east"].includes(card.direction)) {
      draft.x += card.num;
    }
  });
};

export type PlayableCard = {
  readonly card: PowerCard;
  readonly withHeroCard: boolean;
};
export const getPlayableCards = (
  state: GameState,
  activePlayer: Player
): readonly PlayableCard[] => {
  return activePlayer.hand.flatMap((card) => {
    const nextCrownPosition = getNextCrownPosition(state, card);
    const isOutOfGrid =
      nextCrownPosition.x < 0 ||
      nextCrownPosition.x > 8 ||
      nextCrownPosition.y < 0 ||
      nextCrownPosition.y > 8;
    if (isOutOfGrid) return [];

    const cell = state.board.grid[nextCrownPosition.y]?.[nextCrownPosition.x];
    if (cell === undefined) return []; // Invalid range
    if (cell === null) return [{ card, withHeroCard: false as boolean }]; // Empty cell

    // Move with HeroCard if cell is non-empty
    return cell.color !== activePlayer.color &&
      activePlayer.heroCards.length > 0
      ? [{ card, withHeroCard: true as boolean }]
      : [];
  });
};
