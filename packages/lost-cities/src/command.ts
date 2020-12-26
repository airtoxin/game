import { Game } from "./game";
import invariant from "tiny-invariant";
import { getNextTurnPlayer, getTurnPlayer, PlayableCard } from "./selector";
import { CardColor } from "./card";
import produce, { castDraft } from "immer";

export const play = (game: Game, card: PlayableCard): Game =>
  produce(game, (draft) => {
    const turnPlayer = castDraft(getTurnPlayer(draft));
    turnPlayer.hands = turnPlayer.hands.filter((c) => c.id !== card.id);
    turnPlayer.playingArea[card.color].push(card);

    const nextTurnPlayer = castDraft(getNextTurnPlayer(draft));
    draft.turnPlayerId = nextTurnPlayer.id;
  });

export const draw = (game: Game, target: CardColor | "deck"): Game =>
  produce(game, (draft) => {
    if (target === "deck") {
      const card = draft.deck.pop();
      invariant(card, "Deck is empty.");
      castDraft(getTurnPlayer(draft)).hands.push(card);
    } else {
      const card = draft.board[target].discardPile.pop();
      invariant(card, `discardPile of ${target} is empty.`);
      castDraft(getTurnPlayer(draft)).hands.push(card);
    }

    const nextTurnPlayer = castDraft(getNextTurnPlayer(draft));
    draft.turnPlayerId = nextTurnPlayer.id;
  });
