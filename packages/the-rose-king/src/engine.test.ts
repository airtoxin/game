import { Engine, EngineOptions } from "./engine";
import { Player, setupPlayers } from "./player";
import { GameState } from "./game";
import { GameCommand, GameCommandType } from "./commands";
import { GameResult } from "./result";
import { allPowerCards, setupBoard } from "./components";
import { move } from "./move";
import { getValidMoves } from "./queries";
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
    return getValidMoves(state, ctx.activePlayer);
  },
  isFinished() {
    return { finished: false };
  },
};

describe("engine", () => {
  it("test", async () => {
    jest.setTimeout(10 * 1000);
    const engine = new Engine(engineOptions);

    let count = 0;
    engine
      .subscribe((state, ctx, validMoves) => {
        count += 1;
        if (count === 1) {
          expect(state).toMatchInlineSnapshot(`
            Object {
              "activePlayerId": "NbhtOTB2Q3Lg1F0qm5pa1",
              "board": Object {
                "crownPosition": Object {
                  "x": 4,
                  "y": 4,
                },
                "grid": Array [
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                ],
              },
              "deck": Array [
                Object {
                  "direction": "north-east",
                  "id": "1AA7yC0Ir6LeK3MHU48pT",
                  "num": 1,
                },
                Object {
                  "direction": "south-east",
                  "id": "d7Ur8_ywqITgYdhhSrj3q",
                  "num": 1,
                },
                Object {
                  "direction": "west",
                  "id": "Z_Y4OJdDts-_efJq_9S1n",
                  "num": 1,
                },
                Object {
                  "direction": "east",
                  "id": "KX9wR_QlskdSvC05LXtH5",
                  "num": 1,
                },
                Object {
                  "direction": "south",
                  "id": "3PgUEbewFFjhn4BSu1fn3",
                  "num": 2,
                },
                Object {
                  "direction": "north-west",
                  "id": "gvJsXN7SSxd_F4Fg-5s25",
                  "num": 2,
                },
              ],
              "discardPile": Array [],
              "numMarkers": 52,
              "players": Array [
                Object {
                  "color": "red",
                  "hand": Array [
                    Object {
                      "direction": "north",
                      "id": "EfXLHQs6MxJRvF2iNyfPT",
                      "num": 2,
                    },
                    Object {
                      "direction": "west",
                      "id": "s2Aw7KuKy-bwn09yMhGR7",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "6aawUpl9C4mPjOZaWg8RX",
                      "num": 2,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "eJx9FI7WZ5bNYrWyPNK3y",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-east",
                      "id": "yYR0zm4YDXHgv-FGc9HMX",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "red",
                      "id": "-iiqRkzkwR561ksTNNyBY",
                    },
                    Object {
                      "color": "red",
                      "id": "F3iRjWTsePwPRkJ6tTm1E",
                    },
                    Object {
                      "color": "red",
                      "id": "W3wimpqRFpG_EBaLXosIa",
                    },
                    Object {
                      "color": "red",
                      "id": "yJTiu-GMbjoVd6jd5A0MP",
                    },
                  ],
                  "id": "NbhtOTB2Q3Lg1F0qm5pa1",
                  "isBot": false,
                },
                Object {
                  "color": "white",
                  "hand": Array [
                    Object {
                      "direction": "south",
                      "id": "g4sItjieWvi_QUJ7NwjMX",
                      "num": 1,
                    },
                    Object {
                      "direction": "east",
                      "id": "DvwzJkRGehfdcqeV0HqbN",
                      "num": 2,
                    },
                    Object {
                      "direction": "north",
                      "id": "zmQfXHogz7s-4UAn_3lVd",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "qg9BHJkpArPHP56gZrf6_",
                      "num": 1,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "Ps6KpCWciBEROKlAh6ab5",
                      "num": 1,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "white",
                      "id": "9lIq0GIbyxJk7QjlCUiJo",
                    },
                    Object {
                      "color": "white",
                      "id": "Co34rxij9capE9pZkV88D",
                    },
                    Object {
                      "color": "white",
                      "id": "TPpcQua-aSEX2yyJfuQpD",
                    },
                    Object {
                      "color": "white",
                      "id": "uCtFgGGXpIBGU_qMVbmiy",
                    },
                  ],
                  "id": "R-IAia_hOtQ7FLpx9q2Y9",
                  "isBot": false,
                },
              ],
            }
          `);
          expect(ctx).toMatchInlineSnapshot(`
            Object {
              "activePlayer": Object {
                "color": "red",
                "hand": Array [
                  Object {
                    "direction": "north",
                    "id": "EfXLHQs6MxJRvF2iNyfPT",
                    "num": 2,
                  },
                  Object {
                    "direction": "west",
                    "id": "s2Aw7KuKy-bwn09yMhGR7",
                    "num": 2,
                  },
                  Object {
                    "direction": "south-west",
                    "id": "6aawUpl9C4mPjOZaWg8RX",
                    "num": 2,
                  },
                  Object {
                    "direction": "north-east",
                    "id": "eJx9FI7WZ5bNYrWyPNK3y",
                    "num": 2,
                  },
                  Object {
                    "direction": "south-east",
                    "id": "yYR0zm4YDXHgv-FGc9HMX",
                    "num": 2,
                  },
                ],
                "heroCards": Array [
                  Object {
                    "color": "red",
                    "id": "-iiqRkzkwR561ksTNNyBY",
                  },
                  Object {
                    "color": "red",
                    "id": "F3iRjWTsePwPRkJ6tTm1E",
                  },
                  Object {
                    "color": "red",
                    "id": "W3wimpqRFpG_EBaLXosIa",
                  },
                  Object {
                    "color": "red",
                    "id": "yJTiu-GMbjoVd6jd5A0MP",
                  },
                ],
                "id": "NbhtOTB2Q3Lg1F0qm5pa1",
                "isBot": false,
              },
              "result": Object {
                "finished": false,
              },
            }
          `);
          expect(validMoves).toMatchInlineSnapshot(`
            Array [
              "move",
            ]
          `);
          engine.command({ type: "move", card: state.players[0]!.hand[0]! });
        }
        if (count === 2) {
          expect(state).toMatchInlineSnapshot(`
            Object {
              "activePlayerId": "NbhtOTB2Q3Lg1F0qm5pa1",
              "board": Object {
                "crownPosition": Object {
                  "x": 4,
                  "y": 2,
                },
                "grid": Array [
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    Object {
                      "color": "red",
                      "id": "EuFbzmjpkoqJ34nfdFlaf",
                    },
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                ],
              },
              "deck": Array [
                Object {
                  "direction": "north-east",
                  "id": "1AA7yC0Ir6LeK3MHU48pT",
                  "num": 1,
                },
                Object {
                  "direction": "south-east",
                  "id": "d7Ur8_ywqITgYdhhSrj3q",
                  "num": 1,
                },
                Object {
                  "direction": "west",
                  "id": "Z_Y4OJdDts-_efJq_9S1n",
                  "num": 1,
                },
                Object {
                  "direction": "east",
                  "id": "KX9wR_QlskdSvC05LXtH5",
                  "num": 1,
                },
                Object {
                  "direction": "south",
                  "id": "3PgUEbewFFjhn4BSu1fn3",
                  "num": 2,
                },
                Object {
                  "direction": "north-west",
                  "id": "gvJsXN7SSxd_F4Fg-5s25",
                  "num": 2,
                },
              ],
              "discardPile": Array [
                Object {
                  "direction": "north",
                  "id": "EfXLHQs6MxJRvF2iNyfPT",
                  "num": 2,
                },
              ],
              "numMarkers": 51,
              "players": Array [
                Object {
                  "color": "red",
                  "hand": Array [
                    Object {
                      "direction": "north",
                      "id": "EfXLHQs6MxJRvF2iNyfPT",
                      "num": 2,
                    },
                    Object {
                      "direction": "west",
                      "id": "s2Aw7KuKy-bwn09yMhGR7",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "6aawUpl9C4mPjOZaWg8RX",
                      "num": 2,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "eJx9FI7WZ5bNYrWyPNK3y",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-east",
                      "id": "yYR0zm4YDXHgv-FGc9HMX",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "red",
                      "id": "-iiqRkzkwR561ksTNNyBY",
                    },
                    Object {
                      "color": "red",
                      "id": "F3iRjWTsePwPRkJ6tTm1E",
                    },
                    Object {
                      "color": "red",
                      "id": "W3wimpqRFpG_EBaLXosIa",
                    },
                    Object {
                      "color": "red",
                      "id": "yJTiu-GMbjoVd6jd5A0MP",
                    },
                  ],
                  "id": "NbhtOTB2Q3Lg1F0qm5pa1",
                  "isBot": false,
                },
                Object {
                  "color": "white",
                  "hand": Array [
                    Object {
                      "direction": "south",
                      "id": "g4sItjieWvi_QUJ7NwjMX",
                      "num": 1,
                    },
                    Object {
                      "direction": "east",
                      "id": "DvwzJkRGehfdcqeV0HqbN",
                      "num": 2,
                    },
                    Object {
                      "direction": "north",
                      "id": "zmQfXHogz7s-4UAn_3lVd",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "qg9BHJkpArPHP56gZrf6_",
                      "num": 1,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "Ps6KpCWciBEROKlAh6ab5",
                      "num": 1,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "white",
                      "id": "9lIq0GIbyxJk7QjlCUiJo",
                    },
                    Object {
                      "color": "white",
                      "id": "Co34rxij9capE9pZkV88D",
                    },
                    Object {
                      "color": "white",
                      "id": "TPpcQua-aSEX2yyJfuQpD",
                    },
                    Object {
                      "color": "white",
                      "id": "uCtFgGGXpIBGU_qMVbmiy",
                    },
                  ],
                  "id": "R-IAia_hOtQ7FLpx9q2Y9",
                  "isBot": false,
                },
              ],
            }
          `);
          expect(ctx).toMatchInlineSnapshot(`
            Object {
              "activePlayer": Object {
                "color": "white",
                "hand": Array [
                  Object {
                    "direction": "south",
                    "id": "g4sItjieWvi_QUJ7NwjMX",
                    "num": 1,
                  },
                  Object {
                    "direction": "east",
                    "id": "DvwzJkRGehfdcqeV0HqbN",
                    "num": 2,
                  },
                  Object {
                    "direction": "north",
                    "id": "zmQfXHogz7s-4UAn_3lVd",
                    "num": 1,
                  },
                  Object {
                    "direction": "north-west",
                    "id": "qg9BHJkpArPHP56gZrf6_",
                    "num": 1,
                  },
                  Object {
                    "direction": "south-west",
                    "id": "Ps6KpCWciBEROKlAh6ab5",
                    "num": 1,
                  },
                ],
                "heroCards": Array [
                  Object {
                    "color": "white",
                    "id": "9lIq0GIbyxJk7QjlCUiJo",
                  },
                  Object {
                    "color": "white",
                    "id": "Co34rxij9capE9pZkV88D",
                  },
                  Object {
                    "color": "white",
                    "id": "TPpcQua-aSEX2yyJfuQpD",
                  },
                  Object {
                    "color": "white",
                    "id": "uCtFgGGXpIBGU_qMVbmiy",
                  },
                ],
                "id": "R-IAia_hOtQ7FLpx9q2Y9",
                "isBot": false,
              },
              "result": Object {
                "finished": false,
              },
            }
          `);
          expect(validMoves).toMatchInlineSnapshot(`
            Array [
              "move",
            ]
          `);
          engine.command({ type: "move", card: state.players[1]!.hand[0]! });
        }
        if (count === 3) {
          expect(state).toMatchInlineSnapshot(`
            Object {
              "activePlayerId": "NbhtOTB2Q3Lg1F0qm5pa1",
              "board": Object {
                "crownPosition": Object {
                  "x": 4,
                  "y": 3,
                },
                "grid": Array [
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    Object {
                      "color": "red",
                      "id": "EuFbzmjpkoqJ34nfdFlaf",
                    },
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    Object {
                      "color": "white",
                      "id": "URvb43ObFu_3pQylMXiNE",
                    },
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                ],
              },
              "deck": Array [
                Object {
                  "direction": "north-east",
                  "id": "1AA7yC0Ir6LeK3MHU48pT",
                  "num": 1,
                },
                Object {
                  "direction": "south-east",
                  "id": "d7Ur8_ywqITgYdhhSrj3q",
                  "num": 1,
                },
                Object {
                  "direction": "west",
                  "id": "Z_Y4OJdDts-_efJq_9S1n",
                  "num": 1,
                },
                Object {
                  "direction": "east",
                  "id": "KX9wR_QlskdSvC05LXtH5",
                  "num": 1,
                },
                Object {
                  "direction": "south",
                  "id": "3PgUEbewFFjhn4BSu1fn3",
                  "num": 2,
                },
                Object {
                  "direction": "north-west",
                  "id": "gvJsXN7SSxd_F4Fg-5s25",
                  "num": 2,
                },
              ],
              "discardPile": Array [
                Object {
                  "direction": "north",
                  "id": "EfXLHQs6MxJRvF2iNyfPT",
                  "num": 2,
                },
                Object {
                  "direction": "south",
                  "id": "g4sItjieWvi_QUJ7NwjMX",
                  "num": 1,
                },
              ],
              "numMarkers": 50,
              "players": Array [
                Object {
                  "color": "red",
                  "hand": Array [
                    Object {
                      "direction": "north",
                      "id": "EfXLHQs6MxJRvF2iNyfPT",
                      "num": 2,
                    },
                    Object {
                      "direction": "west",
                      "id": "s2Aw7KuKy-bwn09yMhGR7",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "6aawUpl9C4mPjOZaWg8RX",
                      "num": 2,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "eJx9FI7WZ5bNYrWyPNK3y",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-east",
                      "id": "yYR0zm4YDXHgv-FGc9HMX",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "red",
                      "id": "-iiqRkzkwR561ksTNNyBY",
                    },
                    Object {
                      "color": "red",
                      "id": "F3iRjWTsePwPRkJ6tTm1E",
                    },
                    Object {
                      "color": "red",
                      "id": "W3wimpqRFpG_EBaLXosIa",
                    },
                    Object {
                      "color": "red",
                      "id": "yJTiu-GMbjoVd6jd5A0MP",
                    },
                  ],
                  "id": "NbhtOTB2Q3Lg1F0qm5pa1",
                  "isBot": false,
                },
                Object {
                  "color": "white",
                  "hand": Array [
                    Object {
                      "direction": "south",
                      "id": "g4sItjieWvi_QUJ7NwjMX",
                      "num": 1,
                    },
                    Object {
                      "direction": "east",
                      "id": "DvwzJkRGehfdcqeV0HqbN",
                      "num": 2,
                    },
                    Object {
                      "direction": "north",
                      "id": "zmQfXHogz7s-4UAn_3lVd",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "qg9BHJkpArPHP56gZrf6_",
                      "num": 1,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "Ps6KpCWciBEROKlAh6ab5",
                      "num": 1,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "white",
                      "id": "9lIq0GIbyxJk7QjlCUiJo",
                    },
                    Object {
                      "color": "white",
                      "id": "Co34rxij9capE9pZkV88D",
                    },
                    Object {
                      "color": "white",
                      "id": "TPpcQua-aSEX2yyJfuQpD",
                    },
                    Object {
                      "color": "white",
                      "id": "uCtFgGGXpIBGU_qMVbmiy",
                    },
                  ],
                  "id": "R-IAia_hOtQ7FLpx9q2Y9",
                  "isBot": false,
                },
              ],
            }
          `);
          expect(ctx).toMatchInlineSnapshot(`
            Object {
              "activePlayer": Object {
                "color": "red",
                "hand": Array [
                  Object {
                    "direction": "north",
                    "id": "EfXLHQs6MxJRvF2iNyfPT",
                    "num": 2,
                  },
                  Object {
                    "direction": "west",
                    "id": "s2Aw7KuKy-bwn09yMhGR7",
                    "num": 2,
                  },
                  Object {
                    "direction": "south-west",
                    "id": "6aawUpl9C4mPjOZaWg8RX",
                    "num": 2,
                  },
                  Object {
                    "direction": "north-east",
                    "id": "eJx9FI7WZ5bNYrWyPNK3y",
                    "num": 2,
                  },
                  Object {
                    "direction": "south-east",
                    "id": "yYR0zm4YDXHgv-FGc9HMX",
                    "num": 2,
                  },
                ],
                "heroCards": Array [
                  Object {
                    "color": "red",
                    "id": "-iiqRkzkwR561ksTNNyBY",
                  },
                  Object {
                    "color": "red",
                    "id": "F3iRjWTsePwPRkJ6tTm1E",
                  },
                  Object {
                    "color": "red",
                    "id": "W3wimpqRFpG_EBaLXosIa",
                  },
                  Object {
                    "color": "red",
                    "id": "yJTiu-GMbjoVd6jd5A0MP",
                  },
                ],
                "id": "NbhtOTB2Q3Lg1F0qm5pa1",
                "isBot": false,
              },
              "result": Object {
                "finished": false,
              },
            }
          `);
          expect(validMoves).toMatchInlineSnapshot(`
            Array [
              "move",
            ]
          `);
          engine.command({ type: "move", card: state.players[0]!.hand[0]! });
        }
        if (count === 4) {
          expect(state).toMatchInlineSnapshot(`
            Object {
              "activePlayerId": "NbhtOTB2Q3Lg1F0qm5pa1",
              "board": Object {
                "crownPosition": Object {
                  "x": 4,
                  "y": 1,
                },
                "grid": Array [
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    Object {
                      "color": "red",
                      "id": "8M60nw0T9HwCM_qIKC_Z8",
                    },
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    Object {
                      "color": "red",
                      "id": "EuFbzmjpkoqJ34nfdFlaf",
                    },
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    Object {
                      "color": "white",
                      "id": "URvb43ObFu_3pQylMXiNE",
                    },
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                ],
              },
              "deck": Array [
                Object {
                  "direction": "north-east",
                  "id": "1AA7yC0Ir6LeK3MHU48pT",
                  "num": 1,
                },
                Object {
                  "direction": "south-east",
                  "id": "d7Ur8_ywqITgYdhhSrj3q",
                  "num": 1,
                },
                Object {
                  "direction": "west",
                  "id": "Z_Y4OJdDts-_efJq_9S1n",
                  "num": 1,
                },
                Object {
                  "direction": "east",
                  "id": "KX9wR_QlskdSvC05LXtH5",
                  "num": 1,
                },
                Object {
                  "direction": "south",
                  "id": "3PgUEbewFFjhn4BSu1fn3",
                  "num": 2,
                },
                Object {
                  "direction": "north-west",
                  "id": "gvJsXN7SSxd_F4Fg-5s25",
                  "num": 2,
                },
              ],
              "discardPile": Array [
                Object {
                  "direction": "north",
                  "id": "EfXLHQs6MxJRvF2iNyfPT",
                  "num": 2,
                },
                Object {
                  "direction": "south",
                  "id": "g4sItjieWvi_QUJ7NwjMX",
                  "num": 1,
                },
                Object {
                  "direction": "north",
                  "id": "EfXLHQs6MxJRvF2iNyfPT",
                  "num": 2,
                },
              ],
              "numMarkers": 49,
              "players": Array [
                Object {
                  "color": "red",
                  "hand": Array [
                    Object {
                      "direction": "north",
                      "id": "EfXLHQs6MxJRvF2iNyfPT",
                      "num": 2,
                    },
                    Object {
                      "direction": "west",
                      "id": "s2Aw7KuKy-bwn09yMhGR7",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "6aawUpl9C4mPjOZaWg8RX",
                      "num": 2,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "eJx9FI7WZ5bNYrWyPNK3y",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-east",
                      "id": "yYR0zm4YDXHgv-FGc9HMX",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "red",
                      "id": "-iiqRkzkwR561ksTNNyBY",
                    },
                    Object {
                      "color": "red",
                      "id": "F3iRjWTsePwPRkJ6tTm1E",
                    },
                    Object {
                      "color": "red",
                      "id": "W3wimpqRFpG_EBaLXosIa",
                    },
                    Object {
                      "color": "red",
                      "id": "yJTiu-GMbjoVd6jd5A0MP",
                    },
                  ],
                  "id": "NbhtOTB2Q3Lg1F0qm5pa1",
                  "isBot": false,
                },
                Object {
                  "color": "white",
                  "hand": Array [
                    Object {
                      "direction": "south",
                      "id": "g4sItjieWvi_QUJ7NwjMX",
                      "num": 1,
                    },
                    Object {
                      "direction": "east",
                      "id": "DvwzJkRGehfdcqeV0HqbN",
                      "num": 2,
                    },
                    Object {
                      "direction": "north",
                      "id": "zmQfXHogz7s-4UAn_3lVd",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "qg9BHJkpArPHP56gZrf6_",
                      "num": 1,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "Ps6KpCWciBEROKlAh6ab5",
                      "num": 1,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "white",
                      "id": "9lIq0GIbyxJk7QjlCUiJo",
                    },
                    Object {
                      "color": "white",
                      "id": "Co34rxij9capE9pZkV88D",
                    },
                    Object {
                      "color": "white",
                      "id": "TPpcQua-aSEX2yyJfuQpD",
                    },
                    Object {
                      "color": "white",
                      "id": "uCtFgGGXpIBGU_qMVbmiy",
                    },
                  ],
                  "id": "R-IAia_hOtQ7FLpx9q2Y9",
                  "isBot": false,
                },
              ],
            }
          `);
          expect(ctx).toMatchInlineSnapshot(`
            Object {
              "activePlayer": Object {
                "color": "white",
                "hand": Array [
                  Object {
                    "direction": "south",
                    "id": "g4sItjieWvi_QUJ7NwjMX",
                    "num": 1,
                  },
                  Object {
                    "direction": "east",
                    "id": "DvwzJkRGehfdcqeV0HqbN",
                    "num": 2,
                  },
                  Object {
                    "direction": "north",
                    "id": "zmQfXHogz7s-4UAn_3lVd",
                    "num": 1,
                  },
                  Object {
                    "direction": "north-west",
                    "id": "qg9BHJkpArPHP56gZrf6_",
                    "num": 1,
                  },
                  Object {
                    "direction": "south-west",
                    "id": "Ps6KpCWciBEROKlAh6ab5",
                    "num": 1,
                  },
                ],
                "heroCards": Array [
                  Object {
                    "color": "white",
                    "id": "9lIq0GIbyxJk7QjlCUiJo",
                  },
                  Object {
                    "color": "white",
                    "id": "Co34rxij9capE9pZkV88D",
                  },
                  Object {
                    "color": "white",
                    "id": "TPpcQua-aSEX2yyJfuQpD",
                  },
                  Object {
                    "color": "white",
                    "id": "uCtFgGGXpIBGU_qMVbmiy",
                  },
                ],
                "id": "R-IAia_hOtQ7FLpx9q2Y9",
                "isBot": false,
              },
              "result": Object {
                "finished": false,
              },
            }
          `);
          expect(validMoves).toMatchInlineSnapshot(`
            Array [
              "move",
            ]
          `);
          engine.command({ type: "move", card: state.players[1]!.hand[0]! });
        }
        if (count === 5) {
          expect(state).toMatchInlineSnapshot(`
            Object {
              "activePlayerId": "NbhtOTB2Q3Lg1F0qm5pa1",
              "board": Object {
                "crownPosition": Object {
                  "x": 4,
                  "y": 2,
                },
                "grid": Array [
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    Object {
                      "color": "red",
                      "id": "8M60nw0T9HwCM_qIKC_Z8",
                    },
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    Object {
                      "color": "white",
                      "id": "F-WdhanDX0lt0TpNkvKyY",
                    },
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    Object {
                      "color": "white",
                      "id": "URvb43ObFu_3pQylMXiNE",
                    },
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                  Array [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                  ],
                ],
              },
              "deck": Array [
                Object {
                  "direction": "north-east",
                  "id": "1AA7yC0Ir6LeK3MHU48pT",
                  "num": 1,
                },
                Object {
                  "direction": "south-east",
                  "id": "d7Ur8_ywqITgYdhhSrj3q",
                  "num": 1,
                },
                Object {
                  "direction": "west",
                  "id": "Z_Y4OJdDts-_efJq_9S1n",
                  "num": 1,
                },
                Object {
                  "direction": "east",
                  "id": "KX9wR_QlskdSvC05LXtH5",
                  "num": 1,
                },
                Object {
                  "direction": "south",
                  "id": "3PgUEbewFFjhn4BSu1fn3",
                  "num": 2,
                },
                Object {
                  "direction": "north-west",
                  "id": "gvJsXN7SSxd_F4Fg-5s25",
                  "num": 2,
                },
              ],
              "discardPile": Array [
                Object {
                  "direction": "north",
                  "id": "EfXLHQs6MxJRvF2iNyfPT",
                  "num": 2,
                },
                Object {
                  "direction": "south",
                  "id": "g4sItjieWvi_QUJ7NwjMX",
                  "num": 1,
                },
                Object {
                  "direction": "north",
                  "id": "EfXLHQs6MxJRvF2iNyfPT",
                  "num": 2,
                },
                Object {
                  "direction": "south",
                  "id": "g4sItjieWvi_QUJ7NwjMX",
                  "num": 1,
                },
              ],
              "numMarkers": 48,
              "players": Array [
                Object {
                  "color": "red",
                  "hand": Array [
                    Object {
                      "direction": "north",
                      "id": "EfXLHQs6MxJRvF2iNyfPT",
                      "num": 2,
                    },
                    Object {
                      "direction": "west",
                      "id": "s2Aw7KuKy-bwn09yMhGR7",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "6aawUpl9C4mPjOZaWg8RX",
                      "num": 2,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "eJx9FI7WZ5bNYrWyPNK3y",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-east",
                      "id": "yYR0zm4YDXHgv-FGc9HMX",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "red",
                      "id": "-iiqRkzkwR561ksTNNyBY",
                    },
                    Object {
                      "color": "red",
                      "id": "F3iRjWTsePwPRkJ6tTm1E",
                    },
                    Object {
                      "color": "red",
                      "id": "W3wimpqRFpG_EBaLXosIa",
                    },
                    Object {
                      "color": "red",
                      "id": "yJTiu-GMbjoVd6jd5A0MP",
                    },
                  ],
                  "id": "NbhtOTB2Q3Lg1F0qm5pa1",
                  "isBot": false,
                },
                Object {
                  "color": "white",
                  "hand": Array [
                    Object {
                      "direction": "south",
                      "id": "g4sItjieWvi_QUJ7NwjMX",
                      "num": 1,
                    },
                    Object {
                      "direction": "east",
                      "id": "DvwzJkRGehfdcqeV0HqbN",
                      "num": 2,
                    },
                    Object {
                      "direction": "north",
                      "id": "zmQfXHogz7s-4UAn_3lVd",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "qg9BHJkpArPHP56gZrf6_",
                      "num": 1,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "Ps6KpCWciBEROKlAh6ab5",
                      "num": 1,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "white",
                      "id": "9lIq0GIbyxJk7QjlCUiJo",
                    },
                    Object {
                      "color": "white",
                      "id": "Co34rxij9capE9pZkV88D",
                    },
                    Object {
                      "color": "white",
                      "id": "TPpcQua-aSEX2yyJfuQpD",
                    },
                    Object {
                      "color": "white",
                      "id": "uCtFgGGXpIBGU_qMVbmiy",
                    },
                  ],
                  "id": "R-IAia_hOtQ7FLpx9q2Y9",
                  "isBot": false,
                },
              ],
            }
          `);
          expect(ctx).toMatchInlineSnapshot(`
            Object {
              "activePlayer": Object {
                "color": "red",
                "hand": Array [
                  Object {
                    "direction": "north",
                    "id": "EfXLHQs6MxJRvF2iNyfPT",
                    "num": 2,
                  },
                  Object {
                    "direction": "west",
                    "id": "s2Aw7KuKy-bwn09yMhGR7",
                    "num": 2,
                  },
                  Object {
                    "direction": "south-west",
                    "id": "6aawUpl9C4mPjOZaWg8RX",
                    "num": 2,
                  },
                  Object {
                    "direction": "north-east",
                    "id": "eJx9FI7WZ5bNYrWyPNK3y",
                    "num": 2,
                  },
                  Object {
                    "direction": "south-east",
                    "id": "yYR0zm4YDXHgv-FGc9HMX",
                    "num": 2,
                  },
                ],
                "heroCards": Array [
                  Object {
                    "color": "red",
                    "id": "-iiqRkzkwR561ksTNNyBY",
                  },
                  Object {
                    "color": "red",
                    "id": "F3iRjWTsePwPRkJ6tTm1E",
                  },
                  Object {
                    "color": "red",
                    "id": "W3wimpqRFpG_EBaLXosIa",
                  },
                  Object {
                    "color": "red",
                    "id": "yJTiu-GMbjoVd6jd5A0MP",
                  },
                ],
                "id": "NbhtOTB2Q3Lg1F0qm5pa1",
                "isBot": false,
              },
              "result": Object {
                "finished": false,
              },
            }
          `);
          expect(validMoves).toMatchInlineSnapshot(`
            Array [
              "move",
            ]
          `);
          engine.command({ type: "move", card: state.players[0]!.hand[0]! });
        }
      })
      .start();

    expect.assertions(15);
  });
});
