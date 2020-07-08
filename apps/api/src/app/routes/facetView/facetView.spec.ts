import * as request from 'supertest';
import { app, server } from '../../../main';
import { FACETS_ROUTE } from '@mono-nx-test-with-nextjs/api/constants';

describe(`get: ${FACETS_ROUTE}`, () => {
  afterEach(async () => {
    await server.close();
  });

  it('should get the facets list', async () => {
    const res = await request(app).get(FACETS_ROUTE);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchInlineSnapshot(`
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
        "directors": Object {
          "filters": Array [
            Object {
              "label": "Number of movies directed",
              "values": Array [
                Object {
                  "count": 1,
                  "label": "akira kurosawa",
                },
                Object {
                  "count": 1,
                  "label": "billy wilder",
                },
                Object {
                  "count": 1,
                  "label": "denis villeneuve",
                },
                Object {
                  "count": 1,
                  "label": "dennis dugan",
                },
                Object {
                  "count": 2,
                  "label": "francis ford coppola",
                },
                Object {
                  "count": 1,
                  "label": "george cukor",
                },
                Object {
                  "count": 1,
                  "label": "jonathan demme",
                },
                Object {
                  "count": 6,
                  "label": "pedro almodóvar",
                },
                Object {
                  "count": 1,
                  "label": "peter segal",
                },
                Object {
                  "count": 3,
                  "label": "quentin tarantino",
                },
                Object {
                  "count": 2,
                  "label": "ridley scott",
                },
                Object {
                  "count": 1,
                  "label": "sam wood",
                },
                Object {
                  "count": 1,
                  "label": "steven spielberg",
                },
                Object {
                  "count": 1,
                  "label": "victor fleming",
                },
              ],
            },
            Object {
              "label": "Number of awards won",
              "values": Array [
                Object {
                  "count": 1,
                  "label": "akira kurosawa",
                },
                Object {
                  "count": 1,
                  "label": "billy wilder",
                },
                Object {
                  "count": 1,
                  "label": "denis villeneuve",
                },
                Object {
                  "count": 1,
                  "label": "dennis dugan",
                },
                Object {
                  "count": 2,
                  "label": "francis ford coppola",
                },
                Object {
                  "count": 1,
                  "label": "george cukor",
                },
                Object {
                  "count": 1,
                  "label": "jonathan demme",
                },
                Object {
                  "count": 6,
                  "label": "pedro almodóvar",
                },
                Object {
                  "count": 1,
                  "label": "peter segal",
                },
                Object {
                  "count": 3,
                  "label": "quentin tarantino",
                },
                Object {
                  "count": 2,
                  "label": "ridley scott",
                },
                Object {
                  "count": 1,
                  "label": "sam wood",
                },
                Object {
                  "count": 1,
                  "label": "steven spielberg",
                },
                Object {
                  "count": 1,
                  "label": "victor fleming",
                },
              ],
            },
          ],
          "label": "Directors",
        },
        "movies": Object {
          "filters": Object {
            "genre": Object {
              "label": "Genre",
              "values": Array [
                Object {
                  "count": 7,
                  "label": "Action",
                },
                Object {
                  "count": 3,
                  "label": "Adventure",
                },
                Object {
                  "count": 8,
                  "label": "Comedy",
                },
                Object {
                  "count": 7,
                  "label": "Crime",
                },
                Object {
                  "count": 14,
                  "label": "Drama",
                },
                Object {
                  "count": 1,
                  "label": "History",
                },
                Object {
                  "count": 1,
                  "label": "Horror",
                },
                Object {
                  "count": 1,
                  "label": "Music",
                },
                Object {
                  "count": 1,
                  "label": "Mystery",
                },
                Object {
                  "count": 1,
                  "label": "N/A",
                },
                Object {
                  "count": 5,
                  "label": "Romance",
                },
                Object {
                  "count": 2,
                  "label": "Sci-Fi",
                },
                Object {
                  "count": 8,
                  "label": "Thriller",
                },
                Object {
                  "count": 1,
                  "label": "War",
                },
              ],
            },
            "metascore": Object {
              "label": "Metascore",
              "values": Array [
                Object {
                  "count": 4,
                  "filterCode": "0",
                  "label": "< 60",
                },
                Object {
                  "count": 5,
                  "filterCode": "1",
                  "label": "Between 60 & 80",
                },
                Object {
                  "count": 6,
                  "filterCode": "2",
                  "label": "Between 80 & 90",
                },
                Object {
                  "count": 5,
                  "filterCode": "3",
                  "label": "> 90",
                },
                Object {
                  "count": 2,
                  "filterCode": "4",
                  "label": "N/A",
                },
              ],
            },
            "saved": Object {
              "label": "Saved in wishlist",
              "values": Array [
                Object {
                  "count": 16,
                  "label": "No",
                },
                Object {
                  "count": 6,
                  "label": "Yes",
                },
              ],
            },
            "type": Object {
              "label": "Type",
              "values": Array [
                Object {
                  "count": 21,
                  "label": "movie",
                },
                Object {
                  "count": 1,
                  "label": "series",
                },
              ],
            },
            "watched": Object {
              "label": "Watched",
              "values": Array [
                Object {
                  "count": 11,
                  "label": "Yes",
                },
                Object {
                  "count": 11,
                  "label": "No",
                },
              ],
            },
            "years": Object {
              "label": "Years",
              "values": Array [
                Object {
                  "count": 1,
                  "label": "1939",
                },
                Object {
                  "count": 1,
                  "label": "1954",
                },
                Object {
                  "count": 1,
                  "label": "1959",
                },
                Object {
                  "count": 1,
                  "label": "1972",
                },
                Object {
                  "count": 1,
                  "label": "1982",
                },
                Object {
                  "count": 1,
                  "label": "1987",
                },
                Object {
                  "count": 1,
                  "label": "1988",
                },
                Object {
                  "count": 2,
                  "label": "1989",
                },
                Object {
                  "count": 1,
                  "label": "1991",
                },
                Object {
                  "count": 1,
                  "label": "1994",
                },
                Object {
                  "count": 1,
                  "label": "1995",
                },
                Object {
                  "count": 1,
                  "label": "1997",
                },
                Object {
                  "count": 1,
                  "label": "2000",
                },
                Object {
                  "count": 1,
                  "label": "2003",
                },
                Object {
                  "count": 2,
                  "label": "2004",
                },
                Object {
                  "count": 1,
                  "label": "2006",
                },
                Object {
                  "count": 2,
                  "label": "2011",
                },
                Object {
                  "count": 1,
                  "label": "2013",
                },
                Object {
                  "count": 1,
                  "label": "2017",
                },
              ],
            },
          },
          "label": "Movies",
        },
      }
    `);
  });
});
