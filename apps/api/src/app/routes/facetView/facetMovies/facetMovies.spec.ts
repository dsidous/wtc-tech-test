import { getMapOf } from '@mono-nx-test-with-nextjs/api/utils';
import data from '@mono-nx-test-with-nextjs/api/assets';
import facetMovies from '.';
const maps = getMapOf(data);
const { mapOfMovies } = maps;

describe('facetView/facetMovies', () => {
  it("should return an empty object if the map doesn't have any movies", () => {
    expect(facetMovies(new Map())).toEqual({});
  });

  it('should return correct object', () => {
    expect(facetMovies(mapOfMovies)).toMatchInlineSnapshot(`
      Object {
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
