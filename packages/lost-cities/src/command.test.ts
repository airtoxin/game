import { Mutable } from "type-fest";
import { Game, setupGame } from "./game";
import { draw, play } from "./command";
import deepcopy from "deepcopy";
import { isPlayableCard } from "./selector";
import { Player, setupPlayer } from "./player";
import { allCards, Card } from "./card";
import { setupBoard } from "./board";

const createDefaultContext = () => {
  const cards = deepcopy(allCards);
  const playerACard = cards[0]!;
  const playerBCard = cards[1]!;
  const deckCards = [cards[2]!, cards[3]!];
  const playerA: Mutable<Player> = setupPlayer({
    isBot: false,
    hands: [playerACard],
  });
  const playerB: Mutable<Player> = setupPlayer({
    isBot: false,
    hands: [playerBCard],
  });
  const game: Mutable<Game> = {
    players: [playerA, playerB],
    turnPlayerId: playerA.id,
    deck: deckCards,
    board: setupBoard(),
  };

  return {
    cards,
    playerA,
    playerACard,
    playerB,
    playerBCard,
    deckCards,
    game,
  };
};

describe("play", () => {
  it("should play card", () => {
    const game: Mutable<Game> = setupGame();
    game.turnPlayerId = game.players[0]?.id!;
    const card = game.players[0]?.hands[3]!;
    expect(play(game, isPlayableCard(game, card)!)).toMatchObject({
      players: [
        {
          ...deepcopy(game.players[0]),
          hands: [
            game.players[0]?.hands[0],
            game.players[0]?.hands[1],
            game.players[0]?.hands[2],
            // game.players[0]?.hands[3],
            game.players[0]?.hands[4],
            game.players[0]?.hands[5],
            game.players[0]?.hands[6],
            game.players[0]?.hands[7],
          ],
          // プレイしたカードの色に対応するプレイングエリアにカードが追加されていること
          playingArea: {
            ...deepcopy(game.players[0]!.playingArea),
            [card.color]: [card],
          },
        },
        game.players[1],
      ],
      turnPlayerId: game.players[1]?.id,
      deck: game.deck,
      board: {
        red: { discardPile: [] },
        blue: { discardPile: [] },
        green: { discardPile: [] },
        yellow: { discardPile: [] },
        white: { discardPile: [] },
      },
    });
  });
});

describe("draw", () => {
  it("should draw from target deck or discardPile", () => {
    const {
      playerA,
      playerACard,
      playerB,
      game,
      deckCards,
    } = createDefaultContext();

    expect(draw(game, "deck")).toEqual({
      players: [{ ...playerA, hands: [playerACard, deckCards[1]] }, playerB],
      turnPlayerId: playerB.id,
      deck: [deckCards[0]],
      board: game.board,
    });
  });
});
