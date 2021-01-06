import { GameCommand, skip } from "./commands";
import { GameResult, GameState } from "./game";
import { GameContext } from "@game/framework";
import { Player } from "./player";
import deepcopy from "deepcopy";
import { ContainerType, HerbCard, SpecialHerbCardType } from "./components";
import { assertUnreachable } from "@game/utils/lib/src";

export const getValidMoves = (
  state: GameState,
  ctx: GameContext<Player, GameResult>
): readonly GameCommand[] => {
  if (ctx.activePlayer.containers.every((c) => !!c.pot)) return [skip()];
  return [];
};

export const getContainerScore = (
  containerType: ContainerType,
  cards: HerbCard[]
): number => {
  switch (containerType) {
    case "LargePot": {
      if (cards.length <= 5) return cards.length * 4;
      if (cards.length === 6) return 20;
      return 22;
    }
    case "SmallPot": {
      if (cards.length === 2) return 3;
      if (cards.length === 3) return 4;
      if (cards.length === 4) return 6;
      if (cards.length === 5) return 8;
      if (cards.length === 6) return 12;
      if (cards.length === 7) return 14;
      throw new Error(`[getContainerScore] Unexpected cards.`);
    }
    case "WoodenPot": {
      if (cards.length <= 6) return cards.length * 2;
      if (cards.length === 8) return 14;
      return cards.length * 1.5;
    }
    case "GlassJar": {
      const cardPoint = (cards as SpecialHerbCardType[]).reduce(
        (sum, c) => sum + c.num,
        0
      );
      return cards.length * 3 + cardPoint;
    }
    default:
      assertUnreachable(containerType);
  }
}; // TODO

export const isFinished = (
  state: GameState,
  _ctx: GameContext<Player, GameResult>
): GameResult | null => {
  if (
    state.players.some((player) =>
      player.containers.some((container) => !container.pot)
    )
  )
    return null;

  const rank = deepcopy(state.players) as Player[];
  rank.sort((p) =>
    p.containers.reduce((sum, c) => sum + (c.pot?.score ?? 0), 0)
  );
  return {
    rank,
  };
};
