import { getMapOf } from '@mono-nx-test-with-nextjs/api/utils';
import data from '@mono-nx-test-with-nextjs/api/assets';
import facetActors from '.';
const maps = getMapOf(data);
const { mapOfActors } = maps;

describe('facetView/facetActors', () => {
  it("should return an empty array in values if the map doesn't have any actors", () => {
    expect(facetActors(new Map())).toMatchInlineSnapshot(`
      Object {
        "actors": Object {
          "filters": Object {
            "movies": Object {
              "label": "Number of movies done",
              "values": Array [],
            },
          },
          "label": "Actors",
        },
      }
    `);
  });

  it('should return correct object', () => {
    expect(facetActors(mapOfActors)).toMatchInlineSnapshot(`
      Object {
        "actors": Object {
          "filters": Object {
            "movies": Object {
              "label": "Number of movies done",
              "values": Array [
                Object {
                  "count": 2,
                  "label": "adam sandler",
                },
                Object {
                  "count": 1,
                  "label": "al pacino",
                },
                Object {
                  "count": 1,
                  "label": "alison doody",
                },
                Object {
                  "count": 1,
                  "label": "amanda plummer",
                },
                Object {
                  "count": 1,
                  "label": "ambrosia kelley",
                },
                Object {
                  "count": 5,
                  "label": "antonio banderas",
                },
                Object {
                  "count": 1,
                  "label": "antonio de la torre",
                },
                Object {
                  "count": 1,
                  "label": "barbara o'neil",
                },
                Object {
                  "count": 1,
                  "label": "blanca portillo",
                },
                Object {
                  "count": 1,
                  "label": "brent butt",
                },
                Object {
                  "count": 3,
                  "label": "carmen maura",
                },
                Object {
                  "count": 1,
                  "label": "claire danes",
                },
                Object {
                  "count": 1,
                  "label": "connie nielsen",
                },
                Object {
                  "count": 1,
                  "label": "coté soler",
                },
                Object {
                  "count": 1,
                  "label": "dana gould",
                },
                Object {
                  "count": 1,
                  "label": "danny devito",
                },
                Object {
                  "count": 1,
                  "label": "daryl hannah",
                },
                Object {
                  "count": 1,
                  "label": "dave bautista",
                },
                Object {
                  "count": 1,
                  "label": "denholm elliott",
                },
                Object {
                  "count": 1,
                  "label": "drew barrymore",
                },
                Object {
                  "count": 1,
                  "label": "edward james olmos",
                },
                Object {
                  "count": 1,
                  "label": "elena anaya",
                },
                Object {
                  "count": 1,
                  "label": "eric tunney",
                },
                Object {
                  "count": 1,
                  "label": "eusebio poncela",
                },
                Object {
                  "count": 1,
                  "label": "evelyn keyes",
                },
                Object {
                  "count": 1,
                  "label": "george raft",
                },
                Object {
                  "count": 2,
                  "label": "harrison ford",
                },
                Object {
                  "count": 1,
                  "label": "jack lemmon",
                },
                Object {
                  "count": 1,
                  "label": "james caan",
                },
                Object {
                  "count": 1,
                  "label": "james parks",
                },
                Object {
                  "count": 1,
                  "label": "jan cornet",
                },
                Object {
                  "count": 1,
                  "label": "jennifer aniston",
                },
                Object {
                  "count": 1,
                  "label": "joaquin phoenix",
                },
                Object {
                  "count": 1,
                  "label": "jodie foster",
                },
                Object {
                  "count": 1,
                  "label": "john travolta",
                },
                Object {
                  "count": 1,
                  "label": "jon voight",
                },
                Object {
                  "count": 1,
                  "label": "julieta serrano",
                },
                Object {
                  "count": 1,
                  "label": "kasi lemmons",
                },
                Object {
                  "count": 1,
                  "label": "keiko tsushima",
                },
                Object {
                  "count": 1,
                  "label": "kevin rooney",
                },
                Object {
                  "count": 1,
                  "label": "laura lovelace",
                },
                Object {
                  "count": 1,
                  "label": "lawrence a. bonney",
                },
                Object {
                  "count": 1,
                  "label": "lawrence t. wrentz",
                },
                Object {
                  "count": 1,
                  "label": "lola dueñas",
                },
                Object {
                  "count": 1,
                  "label": "loles león",
                },
                Object {
                  "count": 1,
                  "label": "lucy liu",
                },
                Object {
                  "count": 2,
                  "label": "maría barranco",
                },
                Object {
                  "count": 1,
                  "label": "marilyn monroe",
                },
                Object {
                  "count": 1,
                  "label": "marisa paredes",
                },
                Object {
                  "count": 1,
                  "label": "mark arnold",
                },
                Object {
                  "count": 1,
                  "label": "marlon brando",
                },
                Object {
                  "count": 1,
                  "label": "matt damon",
                },
                Object {
                  "count": 1,
                  "label": "michael parks",
                },
                Object {
                  "count": 1,
                  "label": "miguel molina",
                },
                Object {
                  "count": 1,
                  "label": "nick swardson",
                },
                Object {
                  "count": 1,
                  "label": "nicole kidman",
                },
                Object {
                  "count": 1,
                  "label": "oliver reed",
                },
                Object {
                  "count": 2,
                  "label": "penélope cruz",
                },
                Object {
                  "count": 1,
                  "label": "richard s. castellano",
                },
                Object {
                  "count": 1,
                  "label": "rob schneider",
                },
                Object {
                  "count": 1,
                  "label": "robin wright",
                },
                Object {
                  "count": 1,
                  "label": "russell crowe",
                },
                Object {
                  "count": 1,
                  "label": "rutger hauer",
                },
                Object {
                  "count": 1,
                  "label": "ryan gosling",
                },
                Object {
                  "count": 1,
                  "label": "sean astin",
                },
                Object {
                  "count": 1,
                  "label": "sean connery",
                },
                Object {
                  "count": 1,
                  "label": "sean young",
                },
                Object {
                  "count": 1,
                  "label": "takashi shimura",
                },
                Object {
                  "count": 1,
                  "label": "thomas mitchell",
                },
                Object {
                  "count": 1,
                  "label": "tim roth",
                },
                Object {
                  "count": 1,
                  "label": "tony curtis",
                },
                Object {
                  "count": 1,
                  "label": "toshirô mifune",
                },
                Object {
                  "count": 1,
                  "label": "uma thurman",
                },
                Object {
                  "count": 1,
                  "label": "victoria abril",
                },
                Object {
                  "count": 2,
                  "label": "vivica a. fox",
                },
                Object {
                  "count": 1,
                  "label": "vivien leigh",
                },
                Object {
                  "count": 1,
                  "label": "yukiko shimazaki",
                },
              ],
            },
          },
          "label": "Actors",
        },
      }
    `);
  });
});
