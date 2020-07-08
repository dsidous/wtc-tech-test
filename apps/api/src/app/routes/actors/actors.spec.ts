import * as request from 'supertest';
import { app, server } from '../../../main';
import { ACTORS_ROUTE } from '@mono-nx-test-with-nextjs/api/constants';

describe(`get: ${ACTORS_ROUTE}`, () => {
  afterEach(async () => {
    await server.close();
  });

  it('should get the actors list', async () => {
    const res = await request(app).get(ACTORS_ROUTE);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "actors": Object {
          "count": 77,
          "values": Array [
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Oscars. Another 12 wins & 16 nominations.",
                  "Won 1 Oscar. Another 7 wins & 22 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Blade Runner",
                    "type": "movie",
                  },
                  Object {
                    "title": "Indiana Jones and the Last Crusade",
                    "type": "movie",
                  },
                ],
              },
              "name": "harrison ford",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Oscars. Another 12 wins & 16 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Blade Runner",
                    "type": "movie",
                  },
                ],
              },
              "name": "rutger hauer",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Oscars. Another 12 wins & 16 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Blade Runner",
                    "type": "movie",
                  },
                ],
              },
              "name": "sean young",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Oscars. Another 12 wins & 16 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Blade Runner",
                    "type": "movie",
                  },
                ],
              },
              "name": "edward james olmos",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 5 Oscars. Another 54 wins & 104 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Gladiator",
                    "type": "movie",
                  },
                ],
              },
              "name": "russell crowe",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 5 Oscars. Another 54 wins & 104 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Gladiator",
                    "type": "movie",
                  },
                ],
              },
              "name": "joaquin phoenix",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 5 Oscars. Another 54 wins & 104 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Gladiator",
                    "type": "movie",
                  },
                ],
              },
              "name": "connie nielsen",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 5 Oscars. Another 54 wins & 104 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Gladiator",
                    "type": "movie",
                  },
                ],
              },
              "name": "oliver reed",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Oscars. Another 5 wins & 6 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Seven Samurai",
                    "type": "movie",
                  },
                ],
              },
              "name": "toshirô mifune",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Oscars. Another 5 wins & 6 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Seven Samurai",
                    "type": "movie",
                  },
                ],
              },
              "name": "takashi shimura",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Oscars. Another 5 wins & 6 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Seven Samurai",
                    "type": "movie",
                  },
                ],
              },
              "name": "keiko tsushima",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Oscars. Another 5 wins & 6 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Seven Samurai",
                    "type": "movie",
                  },
                ],
              },
              "name": "yukiko shimazaki",
            },
            Object {
              "info": Object {
                "awards": Array [],
                "movies": Array [
                  Object {
                    "title": "Get Serious: Seven Deadly Sins",
                    "type": "series",
                  },
                ],
              },
              "name": "brent butt",
            },
            Object {
              "info": Object {
                "awards": Array [],
                "movies": Array [
                  Object {
                    "title": "Get Serious: Seven Deadly Sins",
                    "type": "series",
                  },
                ],
              },
              "name": "dana gould",
            },
            Object {
              "info": Object {
                "awards": Array [],
                "movies": Array [
                  Object {
                    "title": "Get Serious: Seven Deadly Sins",
                    "type": "series",
                  },
                ],
              },
              "name": "kevin rooney",
            },
            Object {
              "info": Object {
                "awards": Array [],
                "movies": Array [
                  Object {
                    "title": "Get Serious: Seven Deadly Sins",
                    "type": "series",
                  },
                ],
              },
              "name": "eric tunney",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 68 wins & 74 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Pulp Fiction",
                    "type": "movie",
                  },
                ],
              },
              "name": "tim roth",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 68 wins & 74 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Pulp Fiction",
                    "type": "movie",
                  },
                ],
              },
              "name": "amanda plummer",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 68 wins & 74 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Pulp Fiction",
                    "type": "movie",
                  },
                ],
              },
              "name": "laura lovelace",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 68 wins & 74 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Pulp Fiction",
                    "type": "movie",
                  },
                ],
              },
              "name": "john travolta",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 28 wins & 101 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Kill Bill: Vol. 1",
                    "type": "movie",
                  },
                ],
              },
              "name": "uma thurman",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 28 wins & 101 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Kill Bill: Vol. 1",
                    "type": "movie",
                  },
                ],
              },
              "name": "lucy liu",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 28 wins & 101 nominations.",
                  "Nominated for 2 Golden Globes. Another 22 wins & 82 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Kill Bill: Vol. 1",
                    "type": "movie",
                  },
                  Object {
                    "title": "Kill Bill: Vol. 2",
                    "type": "movie",
                  },
                ],
              },
              "name": "vivica a. fox",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 28 wins & 101 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Kill Bill: Vol. 1",
                    "type": "movie",
                  },
                ],
              },
              "name": "daryl hannah",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Golden Globes. Another 22 wins & 82 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Kill Bill: Vol. 2",
                    "type": "movie",
                  },
                ],
              },
              "name": "ambrosia kelley",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Golden Globes. Another 22 wins & 82 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Kill Bill: Vol. 2",
                    "type": "movie",
                  },
                ],
              },
              "name": "michael parks",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Golden Globes. Another 22 wins & 82 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Kill Bill: Vol. 2",
                    "type": "movie",
                  },
                ],
              },
              "name": "james parks",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 5 Oscars. Another 63 wins & 51 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Silence of the Lambs",
                    "type": "movie",
                  },
                ],
              },
              "name": "jodie foster",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 5 Oscars. Another 63 wins & 51 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Silence of the Lambs",
                    "type": "movie",
                  },
                ],
              },
              "name": "lawrence a. bonney",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 5 Oscars. Another 63 wins & 51 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Silence of the Lambs",
                    "type": "movie",
                  },
                ],
              },
              "name": "kasi lemmons",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 5 Oscars. Another 63 wins & 51 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Silence of the Lambs",
                    "type": "movie",
                  },
                ],
              },
              "name": "lawrence t. wrentz",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 2 wins & 9 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Rainmaker",
                    "type": "movie",
                  },
                ],
              },
              "name": "matt damon",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 2 wins & 9 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Rainmaker",
                    "type": "movie",
                  },
                ],
              },
              "name": "danny devito",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 2 wins & 9 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Rainmaker",
                    "type": "movie",
                  },
                ],
              },
              "name": "claire danes",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 2 wins & 9 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Rainmaker",
                    "type": "movie",
                  },
                ],
              },
              "name": "jon voight",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 3 Oscars. Another 26 wins & 30 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Godfather",
                    "type": "movie",
                  },
                ],
              },
              "name": "marlon brando",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 3 Oscars. Another 26 wins & 30 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Godfather",
                    "type": "movie",
                  },
                ],
              },
              "name": "al pacino",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 3 Oscars. Another 26 wins & 30 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Godfather",
                    "type": "movie",
                  },
                ],
              },
              "name": "james caan",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 3 Oscars. Another 26 wins & 30 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Godfather",
                    "type": "movie",
                  },
                ],
              },
              "name": "richard s. castellano",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 28 wins & 68 nominations.",
                  "3 wins & 10 nominations.",
                  "12 wins & 5 nominations.",
                  "Nominated for 1 Oscar. Another 22 wins & 22 nominations.",
                  "8 wins & 19 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Skin I Live In",
                    "type": "movie",
                  },
                  Object {
                    "title": "I'm So Excited!",
                    "type": "movie",
                  },
                  Object {
                    "title": "Law of Desire",
                    "type": "movie",
                  },
                  Object {
                    "title": "Women on the Verge of a Nervous Breakdown",
                    "type": "movie",
                  },
                  Object {
                    "title": "Tie Me Up! Tie Me Down!",
                    "type": "movie",
                  },
                ],
              },
              "name": "antonio banderas",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 28 wins & 68 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Skin I Live In",
                    "type": "movie",
                  },
                ],
              },
              "name": "elena anaya",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 28 wins & 68 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Skin I Live In",
                    "type": "movie",
                  },
                ],
              },
              "name": "marisa paredes",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 28 wins & 68 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Skin I Live In",
                    "type": "movie",
                  },
                ],
              },
              "name": "jan cornet",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Oscar. Another 61 wins & 92 nominations.",
                  "3 wins & 10 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Volver",
                    "type": "movie",
                  },
                  Object {
                    "title": "I'm So Excited!",
                    "type": "movie",
                  },
                ],
              },
              "name": "penélope cruz",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Oscar. Another 61 wins & 92 nominations.",
                  "12 wins & 5 nominations.",
                  "Nominated for 1 Oscar. Another 22 wins & 22 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Volver",
                    "type": "movie",
                  },
                  Object {
                    "title": "Law of Desire",
                    "type": "movie",
                  },
                  Object {
                    "title": "Women on the Verge of a Nervous Breakdown",
                    "type": "movie",
                  },
                ],
              },
              "name": "carmen maura",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Oscar. Another 61 wins & 92 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Volver",
                    "type": "movie",
                  },
                ],
              },
              "name": "lola dueñas",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Oscar. Another 61 wins & 92 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Volver",
                    "type": "movie",
                  },
                ],
              },
              "name": "blanca portillo",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 8 Oscars. Another 12 wins & 12 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Gone with the Wind",
                    "type": "movie",
                  },
                ],
              },
              "name": "thomas mitchell",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 8 Oscars. Another 12 wins & 12 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Gone with the Wind",
                    "type": "movie",
                  },
                ],
              },
              "name": "barbara o'neil",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 8 Oscars. Another 12 wins & 12 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Gone with the Wind",
                    "type": "movie",
                  },
                ],
              },
              "name": "vivien leigh",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 8 Oscars. Another 12 wins & 12 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Gone with the Wind",
                    "type": "movie",
                  },
                ],
              },
              "name": "evelyn keyes",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 14 wins & 15 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Some Like It Hot",
                    "type": "movie",
                  },
                ],
              },
              "name": "marilyn monroe",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 14 wins & 15 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Some Like It Hot",
                    "type": "movie",
                  },
                ],
              },
              "name": "tony curtis",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 14 wins & 15 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Some Like It Hot",
                    "type": "movie",
                  },
                ],
              },
              "name": "jack lemmon",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 14 wins & 15 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Some Like It Hot",
                    "type": "movie",
                  },
                ],
              },
              "name": "george raft",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 7 wins & 22 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Indiana Jones and the Last Crusade",
                    "type": "movie",
                  },
                ],
              },
              "name": "sean connery",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 7 wins & 22 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Indiana Jones and the Last Crusade",
                    "type": "movie",
                  },
                ],
              },
              "name": "denholm elliott",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 7 wins & 22 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Indiana Jones and the Last Crusade",
                    "type": "movie",
                  },
                ],
              },
              "name": "alison doody",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 2 Oscars. Another 97 wins & 159 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Blade Runner 2049",
                    "type": "movie",
                  },
                ],
              },
              "name": "ryan gosling",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 2 Oscars. Another 97 wins & 159 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Blade Runner 2049",
                    "type": "movie",
                  },
                ],
              },
              "name": "dave bautista",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 2 Oscars. Another 97 wins & 159 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Blade Runner 2049",
                    "type": "movie",
                  },
                ],
              },
              "name": "robin wright",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 2 Oscars. Another 97 wins & 159 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Blade Runner 2049",
                    "type": "movie",
                  },
                ],
              },
              "name": "mark arnold",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "6 wins & 10 nominations.",
                  "5 wins & 13 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "50 First Dates",
                    "type": "movie",
                  },
                  Object {
                    "title": "Just Go with It",
                    "type": "movie",
                  },
                ],
              },
              "name": "adam sandler",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "6 wins & 10 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "50 First Dates",
                    "type": "movie",
                  },
                ],
              },
              "name": "drew barrymore",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "6 wins & 10 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "50 First Dates",
                    "type": "movie",
                  },
                ],
              },
              "name": "rob schneider",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "6 wins & 10 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "50 First Dates",
                    "type": "movie",
                  },
                ],
              },
              "name": "sean astin",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "5 wins & 13 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Just Go with It",
                    "type": "movie",
                  },
                ],
              },
              "name": "jennifer aniston",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "5 wins & 13 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Just Go with It",
                    "type": "movie",
                  },
                ],
              },
              "name": "nicole kidman",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "5 wins & 13 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Just Go with It",
                    "type": "movie",
                  },
                ],
              },
              "name": "nick swardson",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "3 wins & 10 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "I'm So Excited!",
                    "type": "movie",
                  },
                ],
              },
              "name": "coté soler",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "3 wins & 10 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "I'm So Excited!",
                    "type": "movie",
                  },
                ],
              },
              "name": "antonio de la torre",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "12 wins & 5 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Law of Desire",
                    "type": "movie",
                  },
                ],
              },
              "name": "eusebio poncela",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "12 wins & 5 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Law of Desire",
                    "type": "movie",
                  },
                ],
              },
              "name": "miguel molina",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Oscar. Another 22 wins & 22 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Women on the Verge of a Nervous Breakdown",
                    "type": "movie",
                  },
                ],
              },
              "name": "julieta serrano",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Oscar. Another 22 wins & 22 nominations.",
                  "8 wins & 19 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Women on the Verge of a Nervous Breakdown",
                    "type": "movie",
                  },
                  Object {
                    "title": "Tie Me Up! Tie Me Down!",
                    "type": "movie",
                  },
                ],
              },
              "name": "maría barranco",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "8 wins & 19 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Tie Me Up! Tie Me Down!",
                    "type": "movie",
                  },
                ],
              },
              "name": "victoria abril",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "8 wins & 19 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Tie Me Up! Tie Me Down!",
                    "type": "movie",
                  },
                ],
              },
              "name": "loles león",
            },
          ],
        },
      }
    `);
  });
});
