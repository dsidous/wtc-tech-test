import { getMapOf } from '@mono-nx-test-with-nextjs/api/utils';
import data from '@mono-nx-test-with-nextjs/api/assets';
import facetDirectors from '.';
const maps = getMapOf(data);
const { mapOfDirectors } = maps;

describe('facetView/facetDirectors', () => {
  it("should return an empty array in values if the map doesn't have any directors", () => {
    expect(facetDirectors(new Map())).toMatchInlineSnapshot(`
      Object {
        "directors": Object {
          "filters": Array [
            Object {
              "label": "Number of movies directed",
              "values": Array [],
            },
            Object {
              "label": "Number of awards won",
              "values": Array [],
            },
          ],
          "label": "Directors",
        },
      }
    `);
  });

  it('should return correct object', () => {
    expect(facetDirectors(mapOfDirectors)).toMatchInlineSnapshot(`
      Object {
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
      }
    `);
  });
});
