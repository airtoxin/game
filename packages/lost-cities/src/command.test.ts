import { Mutable } from "type-fest";
import { Game, setupGame } from "./game";
import { play } from "./command";
import deepcopy from "deepcopy";
import { isPlayableCard } from "./selector";

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
