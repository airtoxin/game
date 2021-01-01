import { engineOptions } from "./game";
import { Engine } from "@game/framework";

describe("engine", () => {
  it("test", async () => {
    jest.setTimeout(10 * 1000);
    const engine = new Engine(engineOptions);

    let count = 0;
    engine
      .subscribe((state, ctx, validMoves, lastCommand) => {
        count += 1;
        if (count === 1) {
          expect(lastCommand).toMatchInlineSnapshot(`
            Object {
              "type": "@@framework@@init@@",
            }
          `);
          expect(state).toMatchInlineSnapshot(`
            Object {
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
                  "direction": "north-west",
                  "id": "IbyxJk7QjlCUiJoCo34rx",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "zmQfXHogz7s-4UAn_3lVd",
                  "num": 1,
                },
                Object {
                  "direction": "south-west",
                  "id": "B2Q3Lg1F0qm5pa1-iiqRk",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "1AA7yC0Ir6LeK3MHU48pT",
                  "num": 3,
                },
                Object {
                  "direction": "south",
                  "id": "s2Aw7KuKy-bwn09yMhGR7",
                  "num": 2,
                },
                Object {
                  "direction": "west",
                  "id": "qRFpG_EBaLXosIayJTiu-",
                  "num": 3,
                },
                Object {
                  "direction": "north-east",
                  "id": "DvwzJkRGehfdcqeV0HqbN",
                  "num": 3,
                },
                Object {
                  "direction": "west",
                  "id": "TsePwPRkJ6tTm1EW3wimp",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "yYR0zm4YDXHgv-FGc9HMX",
                  "num": 2,
                },
                Object {
                  "direction": "south",
                  "id": "Z_Y4OJdDts-_efJq_9S1n",
                  "num": 1,
                },
                Object {
                  "direction": "south-west",
                  "id": "gvJsXN7SSxd_F4Fg-5s25",
                  "num": 1,
                },
                Object {
                  "direction": "south-east",
                  "id": "6aawUpl9C4mPjOZaWg8RX",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "EfXLHQs6MxJRvF2iNyfPT",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "g4sItjieWvi_QUJ7NwjMX",
                  "num": 3,
                },
              ],
              "discardPile": Array [],
              "numMarkers": 52,
              "players": Array [
                Object {
                  "color": "red",
                  "hand": Array [
                    Object {
                      "direction": "south-east",
                      "id": "Ps6KpCWciBEROKlAh6ab5",
                      "num": 2,
                    },
                    Object {
                      "direction": "south",
                      "id": "qg9BHJkpArPHP56gZrf6_",
                      "num": 3,
                    },
                    Object {
                      "direction": "west",
                      "id": "zkwR561ksTNNyBYF3iRjW",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "GMbjoVd6jd5A0MPR-IAia",
                      "num": 1,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "pM6JUcIwqrC6pXsNbhtOT",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "red",
                      "id": "pIBGU_qMVbmiyEuFbzmjp",
                    },
                    Object {
                      "color": "red",
                      "id": "koqJ34nfdFlafURvb43Ob",
                    },
                    Object {
                      "color": "red",
                      "id": "Fu_3pQylMXiNE8M60nw0T",
                    },
                    Object {
                      "color": "red",
                      "id": "9HwCM_qIKC_Z8F-WdhanD",
                    },
                  ],
                  "id": "aSEX2yyJfuQpDuCtFgGGX",
                  "isBot": false,
                },
                Object {
                  "color": "white",
                  "hand": Array [
                    Object {
                      "direction": "east",
                      "id": "d7Ur8_ywqITgYdhhSrj3q",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "KX9wR_QlskdSvC05LXtH5",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-east",
                      "id": "3PgUEbewFFjhn4BSu1fn3",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "eJx9FI7WZ5bNYrWyPNK3y",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "_hOtQ7FLpx9q2Y99lIq0G",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "white",
                      "id": "JXTuDHbwOiza3JWyvNRgk",
                    },
                    Object {
                      "color": "white",
                      "id": "0EBVteuvTXnQDVB-1i_Mf",
                    },
                    Object {
                      "color": "white",
                      "id": "a8z3f2un115yNazaWVIKy",
                    },
                    Object {
                      "color": "white",
                      "id": "FgAT4UGiMApB1oMzFlwbe",
                    },
                  ],
                  "id": "X0lt0TpNkvKyYYW45C_x_",
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
                    "direction": "south-east",
                    "id": "Ps6KpCWciBEROKlAh6ab5",
                    "num": 2,
                  },
                  Object {
                    "direction": "south",
                    "id": "qg9BHJkpArPHP56gZrf6_",
                    "num": 3,
                  },
                  Object {
                    "direction": "west",
                    "id": "zkwR561ksTNNyBYF3iRjW",
                    "num": 1,
                  },
                  Object {
                    "direction": "north-west",
                    "id": "GMbjoVd6jd5A0MPR-IAia",
                    "num": 1,
                  },
                  Object {
                    "direction": "south-west",
                    "id": "pM6JUcIwqrC6pXsNbhtOT",
                    "num": 2,
                  },
                ],
                "heroCards": Array [
                  Object {
                    "color": "red",
                    "id": "pIBGU_qMVbmiyEuFbzmjp",
                  },
                  Object {
                    "color": "red",
                    "id": "koqJ34nfdFlafURvb43Ob",
                  },
                  Object {
                    "color": "red",
                    "id": "Fu_3pQylMXiNE8M60nw0T",
                  },
                  Object {
                    "color": "red",
                    "id": "9HwCM_qIKC_Z8F-WdhanD",
                  },
                ],
                "id": "aSEX2yyJfuQpDuCtFgGGX",
                "isBot": false,
              },
              "result": null,
            }
          `);
          expect(validMoves).toMatchInlineSnapshot(`
            Array [
              Object {
                "card": Object {
                  "direction": "south-east",
                  "id": "Ps6KpCWciBEROKlAh6ab5",
                  "num": 2,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "south",
                  "id": "qg9BHJkpArPHP56gZrf6_",
                  "num": 3,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "west",
                  "id": "zkwR561ksTNNyBYF3iRjW",
                  "num": 1,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "north-west",
                  "id": "GMbjoVd6jd5A0MPR-IAia",
                  "num": 1,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "south-west",
                  "id": "pM6JUcIwqrC6pXsNbhtOT",
                  "num": 2,
                },
                "type": "move",
                "withHeroCard": false,
              },
            ]
          `);
          engine.command(validMoves[0]!);
        }
        if (count === 2) {
          expect(lastCommand).toMatchInlineSnapshot(`
            Object {
              "card": Object {
                "direction": "south-east",
                "id": "Ps6KpCWciBEROKlAh6ab5",
                "num": 2,
              },
              "type": "move",
              "withHeroCard": false,
            }
          `);
          expect(state).toMatchInlineSnapshot(`
            Object {
              "board": Object {
                "crownPosition": Object {
                  "x": 6,
                  "y": 6,
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
                    Object {
                      "color": "red",
                      "id": "YHpMRXpf-w71CrEGVCLRt",
                    },
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
                  "direction": "north-west",
                  "id": "IbyxJk7QjlCUiJoCo34rx",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "zmQfXHogz7s-4UAn_3lVd",
                  "num": 1,
                },
                Object {
                  "direction": "south-west",
                  "id": "B2Q3Lg1F0qm5pa1-iiqRk",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "1AA7yC0Ir6LeK3MHU48pT",
                  "num": 3,
                },
                Object {
                  "direction": "south",
                  "id": "s2Aw7KuKy-bwn09yMhGR7",
                  "num": 2,
                },
                Object {
                  "direction": "west",
                  "id": "qRFpG_EBaLXosIayJTiu-",
                  "num": 3,
                },
                Object {
                  "direction": "north-east",
                  "id": "DvwzJkRGehfdcqeV0HqbN",
                  "num": 3,
                },
                Object {
                  "direction": "west",
                  "id": "TsePwPRkJ6tTm1EW3wimp",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "yYR0zm4YDXHgv-FGc9HMX",
                  "num": 2,
                },
                Object {
                  "direction": "south",
                  "id": "Z_Y4OJdDts-_efJq_9S1n",
                  "num": 1,
                },
                Object {
                  "direction": "south-west",
                  "id": "gvJsXN7SSxd_F4Fg-5s25",
                  "num": 1,
                },
                Object {
                  "direction": "south-east",
                  "id": "6aawUpl9C4mPjOZaWg8RX",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "EfXLHQs6MxJRvF2iNyfPT",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "g4sItjieWvi_QUJ7NwjMX",
                  "num": 3,
                },
              ],
              "discardPile": Array [
                Object {
                  "direction": "south-east",
                  "id": "Ps6KpCWciBEROKlAh6ab5",
                  "num": 2,
                },
              ],
              "numMarkers": 51,
              "players": Array [
                Object {
                  "color": "red",
                  "hand": Array [
                    Object {
                      "direction": "south",
                      "id": "qg9BHJkpArPHP56gZrf6_",
                      "num": 3,
                    },
                    Object {
                      "direction": "west",
                      "id": "zkwR561ksTNNyBYF3iRjW",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "GMbjoVd6jd5A0MPR-IAia",
                      "num": 1,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "pM6JUcIwqrC6pXsNbhtOT",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "red",
                      "id": "pIBGU_qMVbmiyEuFbzmjp",
                    },
                    Object {
                      "color": "red",
                      "id": "koqJ34nfdFlafURvb43Ob",
                    },
                    Object {
                      "color": "red",
                      "id": "Fu_3pQylMXiNE8M60nw0T",
                    },
                    Object {
                      "color": "red",
                      "id": "9HwCM_qIKC_Z8F-WdhanD",
                    },
                  ],
                  "id": "aSEX2yyJfuQpDuCtFgGGX",
                  "isBot": false,
                },
                Object {
                  "color": "white",
                  "hand": Array [
                    Object {
                      "direction": "east",
                      "id": "d7Ur8_ywqITgYdhhSrj3q",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "KX9wR_QlskdSvC05LXtH5",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-east",
                      "id": "3PgUEbewFFjhn4BSu1fn3",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "eJx9FI7WZ5bNYrWyPNK3y",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "_hOtQ7FLpx9q2Y99lIq0G",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "white",
                      "id": "JXTuDHbwOiza3JWyvNRgk",
                    },
                    Object {
                      "color": "white",
                      "id": "0EBVteuvTXnQDVB-1i_Mf",
                    },
                    Object {
                      "color": "white",
                      "id": "a8z3f2un115yNazaWVIKy",
                    },
                    Object {
                      "color": "white",
                      "id": "FgAT4UGiMApB1oMzFlwbe",
                    },
                  ],
                  "id": "X0lt0TpNkvKyYYW45C_x_",
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
                    "direction": "east",
                    "id": "d7Ur8_ywqITgYdhhSrj3q",
                    "num": 1,
                  },
                  Object {
                    "direction": "north-east",
                    "id": "KX9wR_QlskdSvC05LXtH5",
                    "num": 2,
                  },
                  Object {
                    "direction": "south-east",
                    "id": "3PgUEbewFFjhn4BSu1fn3",
                    "num": 1,
                  },
                  Object {
                    "direction": "north-east",
                    "id": "eJx9FI7WZ5bNYrWyPNK3y",
                    "num": 1,
                  },
                  Object {
                    "direction": "north-west",
                    "id": "_hOtQ7FLpx9q2Y99lIq0G",
                    "num": 2,
                  },
                ],
                "heroCards": Array [
                  Object {
                    "color": "white",
                    "id": "JXTuDHbwOiza3JWyvNRgk",
                  },
                  Object {
                    "color": "white",
                    "id": "0EBVteuvTXnQDVB-1i_Mf",
                  },
                  Object {
                    "color": "white",
                    "id": "a8z3f2un115yNazaWVIKy",
                  },
                  Object {
                    "color": "white",
                    "id": "FgAT4UGiMApB1oMzFlwbe",
                  },
                ],
                "id": "X0lt0TpNkvKyYYW45C_x_",
                "isBot": false,
              },
              "result": null,
            }
          `);
          expect(validMoves).toMatchInlineSnapshot(`
            Array [
              Object {
                "card": Object {
                  "direction": "east",
                  "id": "d7Ur8_ywqITgYdhhSrj3q",
                  "num": 1,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "north-east",
                  "id": "KX9wR_QlskdSvC05LXtH5",
                  "num": 2,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "south-east",
                  "id": "3PgUEbewFFjhn4BSu1fn3",
                  "num": 1,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "north-east",
                  "id": "eJx9FI7WZ5bNYrWyPNK3y",
                  "num": 1,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "north-west",
                  "id": "_hOtQ7FLpx9q2Y99lIq0G",
                  "num": 2,
                },
                "type": "move",
                "withHeroCard": false,
              },
            ]
          `);
          engine.command(validMoves[0]!);
        }
        if (count === 3) {
          expect(lastCommand).toMatchInlineSnapshot(`
            Object {
              "card": Object {
                "direction": "east",
                "id": "d7Ur8_ywqITgYdhhSrj3q",
                "num": 1,
              },
              "type": "move",
              "withHeroCard": false,
            }
          `);
          expect(state).toMatchInlineSnapshot(`
            Object {
              "board": Object {
                "crownPosition": Object {
                  "x": 7,
                  "y": 6,
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
                    Object {
                      "color": "red",
                      "id": "YHpMRXpf-w71CrEGVCLRt",
                    },
                    Object {
                      "color": "white",
                      "id": "nfcAaFATquG7TeRjDHyrH",
                    },
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
                  "direction": "north-west",
                  "id": "IbyxJk7QjlCUiJoCo34rx",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "zmQfXHogz7s-4UAn_3lVd",
                  "num": 1,
                },
                Object {
                  "direction": "south-west",
                  "id": "B2Q3Lg1F0qm5pa1-iiqRk",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "1AA7yC0Ir6LeK3MHU48pT",
                  "num": 3,
                },
                Object {
                  "direction": "south",
                  "id": "s2Aw7KuKy-bwn09yMhGR7",
                  "num": 2,
                },
                Object {
                  "direction": "west",
                  "id": "qRFpG_EBaLXosIayJTiu-",
                  "num": 3,
                },
                Object {
                  "direction": "north-east",
                  "id": "DvwzJkRGehfdcqeV0HqbN",
                  "num": 3,
                },
                Object {
                  "direction": "west",
                  "id": "TsePwPRkJ6tTm1EW3wimp",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "yYR0zm4YDXHgv-FGc9HMX",
                  "num": 2,
                },
                Object {
                  "direction": "south",
                  "id": "Z_Y4OJdDts-_efJq_9S1n",
                  "num": 1,
                },
                Object {
                  "direction": "south-west",
                  "id": "gvJsXN7SSxd_F4Fg-5s25",
                  "num": 1,
                },
                Object {
                  "direction": "south-east",
                  "id": "6aawUpl9C4mPjOZaWg8RX",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "EfXLHQs6MxJRvF2iNyfPT",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "g4sItjieWvi_QUJ7NwjMX",
                  "num": 3,
                },
              ],
              "discardPile": Array [
                Object {
                  "direction": "south-east",
                  "id": "Ps6KpCWciBEROKlAh6ab5",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "d7Ur8_ywqITgYdhhSrj3q",
                  "num": 1,
                },
              ],
              "numMarkers": 50,
              "players": Array [
                Object {
                  "color": "red",
                  "hand": Array [
                    Object {
                      "direction": "south",
                      "id": "qg9BHJkpArPHP56gZrf6_",
                      "num": 3,
                    },
                    Object {
                      "direction": "west",
                      "id": "zkwR561ksTNNyBYF3iRjW",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "GMbjoVd6jd5A0MPR-IAia",
                      "num": 1,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "pM6JUcIwqrC6pXsNbhtOT",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "red",
                      "id": "pIBGU_qMVbmiyEuFbzmjp",
                    },
                    Object {
                      "color": "red",
                      "id": "koqJ34nfdFlafURvb43Ob",
                    },
                    Object {
                      "color": "red",
                      "id": "Fu_3pQylMXiNE8M60nw0T",
                    },
                    Object {
                      "color": "red",
                      "id": "9HwCM_qIKC_Z8F-WdhanD",
                    },
                  ],
                  "id": "aSEX2yyJfuQpDuCtFgGGX",
                  "isBot": false,
                },
                Object {
                  "color": "white",
                  "hand": Array [
                    Object {
                      "direction": "north-east",
                      "id": "KX9wR_QlskdSvC05LXtH5",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-east",
                      "id": "3PgUEbewFFjhn4BSu1fn3",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "eJx9FI7WZ5bNYrWyPNK3y",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "_hOtQ7FLpx9q2Y99lIq0G",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "white",
                      "id": "JXTuDHbwOiza3JWyvNRgk",
                    },
                    Object {
                      "color": "white",
                      "id": "0EBVteuvTXnQDVB-1i_Mf",
                    },
                    Object {
                      "color": "white",
                      "id": "a8z3f2un115yNazaWVIKy",
                    },
                    Object {
                      "color": "white",
                      "id": "FgAT4UGiMApB1oMzFlwbe",
                    },
                  ],
                  "id": "X0lt0TpNkvKyYYW45C_x_",
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
                    "direction": "south",
                    "id": "qg9BHJkpArPHP56gZrf6_",
                    "num": 3,
                  },
                  Object {
                    "direction": "west",
                    "id": "zkwR561ksTNNyBYF3iRjW",
                    "num": 1,
                  },
                  Object {
                    "direction": "north-west",
                    "id": "GMbjoVd6jd5A0MPR-IAia",
                    "num": 1,
                  },
                  Object {
                    "direction": "south-west",
                    "id": "pM6JUcIwqrC6pXsNbhtOT",
                    "num": 2,
                  },
                ],
                "heroCards": Array [
                  Object {
                    "color": "red",
                    "id": "pIBGU_qMVbmiyEuFbzmjp",
                  },
                  Object {
                    "color": "red",
                    "id": "koqJ34nfdFlafURvb43Ob",
                  },
                  Object {
                    "color": "red",
                    "id": "Fu_3pQylMXiNE8M60nw0T",
                  },
                  Object {
                    "color": "red",
                    "id": "9HwCM_qIKC_Z8F-WdhanD",
                  },
                ],
                "id": "aSEX2yyJfuQpDuCtFgGGX",
                "isBot": false,
              },
              "result": null,
            }
          `);
          expect(validMoves).toMatchInlineSnapshot(`
            Array [
              Object {
                "type": "draw",
              },
              Object {
                "card": Object {
                  "direction": "north-west",
                  "id": "GMbjoVd6jd5A0MPR-IAia",
                  "num": 1,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "south-west",
                  "id": "pM6JUcIwqrC6pXsNbhtOT",
                  "num": 2,
                },
                "type": "move",
                "withHeroCard": false,
              },
            ]
          `);
          engine.command(validMoves[0]!);
        }
        if (count === 4) {
          expect(lastCommand).toMatchInlineSnapshot(`
            Object {
              "type": "draw",
            }
          `);
          expect(state).toMatchInlineSnapshot(`
            Object {
              "board": Object {
                "crownPosition": Object {
                  "x": 7,
                  "y": 6,
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
                    Object {
                      "color": "red",
                      "id": "YHpMRXpf-w71CrEGVCLRt",
                    },
                    Object {
                      "color": "white",
                      "id": "nfcAaFATquG7TeRjDHyrH",
                    },
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
                  "direction": "north-west",
                  "id": "IbyxJk7QjlCUiJoCo34rx",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "zmQfXHogz7s-4UAn_3lVd",
                  "num": 1,
                },
                Object {
                  "direction": "south-west",
                  "id": "B2Q3Lg1F0qm5pa1-iiqRk",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "1AA7yC0Ir6LeK3MHU48pT",
                  "num": 3,
                },
                Object {
                  "direction": "south",
                  "id": "s2Aw7KuKy-bwn09yMhGR7",
                  "num": 2,
                },
                Object {
                  "direction": "west",
                  "id": "qRFpG_EBaLXosIayJTiu-",
                  "num": 3,
                },
                Object {
                  "direction": "north-east",
                  "id": "DvwzJkRGehfdcqeV0HqbN",
                  "num": 3,
                },
                Object {
                  "direction": "west",
                  "id": "TsePwPRkJ6tTm1EW3wimp",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "yYR0zm4YDXHgv-FGc9HMX",
                  "num": 2,
                },
                Object {
                  "direction": "south",
                  "id": "Z_Y4OJdDts-_efJq_9S1n",
                  "num": 1,
                },
                Object {
                  "direction": "south-west",
                  "id": "gvJsXN7SSxd_F4Fg-5s25",
                  "num": 1,
                },
                Object {
                  "direction": "south-east",
                  "id": "6aawUpl9C4mPjOZaWg8RX",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "EfXLHQs6MxJRvF2iNyfPT",
                  "num": 2,
                },
              ],
              "discardPile": Array [
                Object {
                  "direction": "south-east",
                  "id": "Ps6KpCWciBEROKlAh6ab5",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "d7Ur8_ywqITgYdhhSrj3q",
                  "num": 1,
                },
              ],
              "numMarkers": 50,
              "players": Array [
                Object {
                  "color": "red",
                  "hand": Array [
                    Object {
                      "direction": "south",
                      "id": "qg9BHJkpArPHP56gZrf6_",
                      "num": 3,
                    },
                    Object {
                      "direction": "west",
                      "id": "zkwR561ksTNNyBYF3iRjW",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "GMbjoVd6jd5A0MPR-IAia",
                      "num": 1,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "pM6JUcIwqrC6pXsNbhtOT",
                      "num": 2,
                    },
                    Object {
                      "direction": "east",
                      "id": "g4sItjieWvi_QUJ7NwjMX",
                      "num": 3,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "red",
                      "id": "pIBGU_qMVbmiyEuFbzmjp",
                    },
                    Object {
                      "color": "red",
                      "id": "koqJ34nfdFlafURvb43Ob",
                    },
                    Object {
                      "color": "red",
                      "id": "Fu_3pQylMXiNE8M60nw0T",
                    },
                    Object {
                      "color": "red",
                      "id": "9HwCM_qIKC_Z8F-WdhanD",
                    },
                  ],
                  "id": "aSEX2yyJfuQpDuCtFgGGX",
                  "isBot": false,
                },
                Object {
                  "color": "white",
                  "hand": Array [
                    Object {
                      "direction": "north-east",
                      "id": "KX9wR_QlskdSvC05LXtH5",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-east",
                      "id": "3PgUEbewFFjhn4BSu1fn3",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "eJx9FI7WZ5bNYrWyPNK3y",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "_hOtQ7FLpx9q2Y99lIq0G",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "white",
                      "id": "JXTuDHbwOiza3JWyvNRgk",
                    },
                    Object {
                      "color": "white",
                      "id": "0EBVteuvTXnQDVB-1i_Mf",
                    },
                    Object {
                      "color": "white",
                      "id": "a8z3f2un115yNazaWVIKy",
                    },
                    Object {
                      "color": "white",
                      "id": "FgAT4UGiMApB1oMzFlwbe",
                    },
                  ],
                  "id": "X0lt0TpNkvKyYYW45C_x_",
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
                    "direction": "north-east",
                    "id": "KX9wR_QlskdSvC05LXtH5",
                    "num": 2,
                  },
                  Object {
                    "direction": "south-east",
                    "id": "3PgUEbewFFjhn4BSu1fn3",
                    "num": 1,
                  },
                  Object {
                    "direction": "north-east",
                    "id": "eJx9FI7WZ5bNYrWyPNK3y",
                    "num": 1,
                  },
                  Object {
                    "direction": "north-west",
                    "id": "_hOtQ7FLpx9q2Y99lIq0G",
                    "num": 2,
                  },
                ],
                "heroCards": Array [
                  Object {
                    "color": "white",
                    "id": "JXTuDHbwOiza3JWyvNRgk",
                  },
                  Object {
                    "color": "white",
                    "id": "0EBVteuvTXnQDVB-1i_Mf",
                  },
                  Object {
                    "color": "white",
                    "id": "a8z3f2un115yNazaWVIKy",
                  },
                  Object {
                    "color": "white",
                    "id": "FgAT4UGiMApB1oMzFlwbe",
                  },
                ],
                "id": "X0lt0TpNkvKyYYW45C_x_",
                "isBot": false,
              },
              "result": null,
            }
          `);
          expect(validMoves).toMatchInlineSnapshot(`
            Array [
              Object {
                "type": "draw",
              },
              Object {
                "card": Object {
                  "direction": "south-east",
                  "id": "3PgUEbewFFjhn4BSu1fn3",
                  "num": 1,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "north-east",
                  "id": "eJx9FI7WZ5bNYrWyPNK3y",
                  "num": 1,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "north-west",
                  "id": "_hOtQ7FLpx9q2Y99lIq0G",
                  "num": 2,
                },
                "type": "move",
                "withHeroCard": false,
              },
            ]
          `);
          engine.command(validMoves[0]!);
        }
        if (count === 5) {
          expect(lastCommand).toMatchInlineSnapshot(`
            Object {
              "type": "draw",
            }
          `);
          expect(state).toMatchInlineSnapshot(`
            Object {
              "board": Object {
                "crownPosition": Object {
                  "x": 7,
                  "y": 6,
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
                    Object {
                      "color": "red",
                      "id": "YHpMRXpf-w71CrEGVCLRt",
                    },
                    Object {
                      "color": "white",
                      "id": "nfcAaFATquG7TeRjDHyrH",
                    },
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
                  "direction": "north-west",
                  "id": "IbyxJk7QjlCUiJoCo34rx",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "zmQfXHogz7s-4UAn_3lVd",
                  "num": 1,
                },
                Object {
                  "direction": "south-west",
                  "id": "B2Q3Lg1F0qm5pa1-iiqRk",
                  "num": 3,
                },
                Object {
                  "direction": "north",
                  "id": "1AA7yC0Ir6LeK3MHU48pT",
                  "num": 3,
                },
                Object {
                  "direction": "south",
                  "id": "s2Aw7KuKy-bwn09yMhGR7",
                  "num": 2,
                },
                Object {
                  "direction": "west",
                  "id": "qRFpG_EBaLXosIayJTiu-",
                  "num": 3,
                },
                Object {
                  "direction": "north-east",
                  "id": "DvwzJkRGehfdcqeV0HqbN",
                  "num": 3,
                },
                Object {
                  "direction": "west",
                  "id": "TsePwPRkJ6tTm1EW3wimp",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "yYR0zm4YDXHgv-FGc9HMX",
                  "num": 2,
                },
                Object {
                  "direction": "south",
                  "id": "Z_Y4OJdDts-_efJq_9S1n",
                  "num": 1,
                },
                Object {
                  "direction": "south-west",
                  "id": "gvJsXN7SSxd_F4Fg-5s25",
                  "num": 1,
                },
                Object {
                  "direction": "south-east",
                  "id": "6aawUpl9C4mPjOZaWg8RX",
                  "num": 3,
                },
              ],
              "discardPile": Array [
                Object {
                  "direction": "south-east",
                  "id": "Ps6KpCWciBEROKlAh6ab5",
                  "num": 2,
                },
                Object {
                  "direction": "east",
                  "id": "d7Ur8_ywqITgYdhhSrj3q",
                  "num": 1,
                },
              ],
              "numMarkers": 50,
              "players": Array [
                Object {
                  "color": "red",
                  "hand": Array [
                    Object {
                      "direction": "south",
                      "id": "qg9BHJkpArPHP56gZrf6_",
                      "num": 3,
                    },
                    Object {
                      "direction": "west",
                      "id": "zkwR561ksTNNyBYF3iRjW",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "GMbjoVd6jd5A0MPR-IAia",
                      "num": 1,
                    },
                    Object {
                      "direction": "south-west",
                      "id": "pM6JUcIwqrC6pXsNbhtOT",
                      "num": 2,
                    },
                    Object {
                      "direction": "east",
                      "id": "g4sItjieWvi_QUJ7NwjMX",
                      "num": 3,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "red",
                      "id": "pIBGU_qMVbmiyEuFbzmjp",
                    },
                    Object {
                      "color": "red",
                      "id": "koqJ34nfdFlafURvb43Ob",
                    },
                    Object {
                      "color": "red",
                      "id": "Fu_3pQylMXiNE8M60nw0T",
                    },
                    Object {
                      "color": "red",
                      "id": "9HwCM_qIKC_Z8F-WdhanD",
                    },
                  ],
                  "id": "aSEX2yyJfuQpDuCtFgGGX",
                  "isBot": false,
                },
                Object {
                  "color": "white",
                  "hand": Array [
                    Object {
                      "direction": "north-east",
                      "id": "KX9wR_QlskdSvC05LXtH5",
                      "num": 2,
                    },
                    Object {
                      "direction": "south-east",
                      "id": "3PgUEbewFFjhn4BSu1fn3",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-east",
                      "id": "eJx9FI7WZ5bNYrWyPNK3y",
                      "num": 1,
                    },
                    Object {
                      "direction": "north-west",
                      "id": "_hOtQ7FLpx9q2Y99lIq0G",
                      "num": 2,
                    },
                    Object {
                      "direction": "north",
                      "id": "EfXLHQs6MxJRvF2iNyfPT",
                      "num": 2,
                    },
                  ],
                  "heroCards": Array [
                    Object {
                      "color": "white",
                      "id": "JXTuDHbwOiza3JWyvNRgk",
                    },
                    Object {
                      "color": "white",
                      "id": "0EBVteuvTXnQDVB-1i_Mf",
                    },
                    Object {
                      "color": "white",
                      "id": "a8z3f2un115yNazaWVIKy",
                    },
                    Object {
                      "color": "white",
                      "id": "FgAT4UGiMApB1oMzFlwbe",
                    },
                  ],
                  "id": "X0lt0TpNkvKyYYW45C_x_",
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
                    "direction": "south",
                    "id": "qg9BHJkpArPHP56gZrf6_",
                    "num": 3,
                  },
                  Object {
                    "direction": "west",
                    "id": "zkwR561ksTNNyBYF3iRjW",
                    "num": 1,
                  },
                  Object {
                    "direction": "north-west",
                    "id": "GMbjoVd6jd5A0MPR-IAia",
                    "num": 1,
                  },
                  Object {
                    "direction": "south-west",
                    "id": "pM6JUcIwqrC6pXsNbhtOT",
                    "num": 2,
                  },
                  Object {
                    "direction": "east",
                    "id": "g4sItjieWvi_QUJ7NwjMX",
                    "num": 3,
                  },
                ],
                "heroCards": Array [
                  Object {
                    "color": "red",
                    "id": "pIBGU_qMVbmiyEuFbzmjp",
                  },
                  Object {
                    "color": "red",
                    "id": "koqJ34nfdFlafURvb43Ob",
                  },
                  Object {
                    "color": "red",
                    "id": "Fu_3pQylMXiNE8M60nw0T",
                  },
                  Object {
                    "color": "red",
                    "id": "9HwCM_qIKC_Z8F-WdhanD",
                  },
                ],
                "id": "aSEX2yyJfuQpDuCtFgGGX",
                "isBot": false,
              },
              "result": null,
            }
          `);
          expect(validMoves).toMatchInlineSnapshot(`
            Array [
              Object {
                "card": Object {
                  "direction": "north-west",
                  "id": "GMbjoVd6jd5A0MPR-IAia",
                  "num": 1,
                },
                "type": "move",
                "withHeroCard": false,
              },
              Object {
                "card": Object {
                  "direction": "south-west",
                  "id": "pM6JUcIwqrC6pXsNbhtOT",
                  "num": 2,
                },
                "type": "move",
                "withHeroCard": false,
              },
            ]
          `);
          engine.command(validMoves[0]!);
        }
      })
      .start();

    expect.assertions(20);
  });
});
