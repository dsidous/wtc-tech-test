import * as request from 'supertest';
import { app, server } from '../../../main';
import { DIRECTORS_ROUTE } from '@mono-nx-test-with-nextjs/api/constants';

describe(`get: ${DIRECTORS_ROUTE}`, () => {
  afterEach(async () => {
    await server.close();
  });

  it('should get the directors list', async () => {
    const res = await request(app).get(DIRECTORS_ROUTE);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "directors": Object {
          "count": 14,
          "values": Array [
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 2 Oscars. Another 12 wins & 16 nominations.",
                  "Won 5 Oscars. Another 54 wins & 104 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Blade Runner",
                    "type": "movie",
                  },
                  Object {
                    "title": "Gladiator",
                    "type": "movie",
                  },
                ],
              },
              "name": "ridley scott",
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
              "name": "akira kurosawa",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Won 1 Oscar. Another 68 wins & 74 nominations.",
                  "Nominated for 1 Golden Globe. Another 28 wins & 101 nominations.",
                  "Nominated for 2 Golden Globes. Another 22 wins & 82 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "Pulp Fiction",
                    "type": "movie",
                  },
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
              "name": "quentin tarantino",
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
              "name": "jonathan demme",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 2 wins & 9 nominations.",
                  "Won 3 Oscars. Another 26 wins & 30 nominations.",
                ],
                "movies": Array [
                  Object {
                    "title": "The Rainmaker",
                    "type": "movie",
                  },
                  Object {
                    "title": "The Godfather",
                    "type": "movie",
                  },
                ],
              },
              "name": "francis ford coppola",
            },
            Object {
              "info": Object {
                "awards": Array [
                  "Nominated for 1 Golden Globe. Another 28 wins & 68 nominations.",
                  "Nominated for 1 Oscar. Another 61 wins & 92 nominations.",
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
                    "title": "Volver",
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
              "name": "pedro almodóvar",
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
              "name": "victor fleming",
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
              "name": "george cukor",
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
              "name": "sam wood",
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
              "name": "billy wilder",
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
              "name": "steven spielberg",
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
              "name": "denis villeneuve",
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
              "name": "peter segal",
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
              "name": "dennis dugan",
            },
          ],
        },
      }
    `);
  });
});
