import { Router } from 'express';
import {
  METASCORE,
  MOVIES_TITLES,
  MOVIES_IDS,
} from '@mono-nx-test-with-nextjs/api/constants';
import * as validate from 'validate.js';
import * as upperFirst from 'lodash.upperfirst';
import {
  Type,
  MOVIE_TYPE,
  SERIES_TYPE,
} from '@mono-nx-test-with-nextjs/api/assets';
import {
  MapOfArtistsHistory,
  MapOfMoviesTitles,
} from '@mono-nx-test-with-nextjs/api/utils';

const router = Router();

export const VALID_MOVIES_TYPES_STRINGS = [MOVIE_TYPE, SERIES_TYPE];

export const LOWER_CASE_TRUE = 'true';
export const LOWER_CASE_FALSE = 'false';
export type LowerCaseBooleanString =
  | typeof LOWER_CASE_TRUE
  | typeof LOWER_CASE_FALSE;
export const VALID_BOOLEAN_STRINGS: LowerCaseBooleanString[] = [
  LOWER_CASE_TRUE,
  LOWER_CASE_FALSE,
];

type Request = {
  query: {
    type: Type[];
    year: string;
    metascore: string;
    actor: string;
    director: string;
    genre: string;
    watched: LowerCaseBooleanString;
    saved: LowerCaseBooleanString;
  };
};

/**
 * It gets the list of either actors or directors movies
 * @param {MapOfArtistsHistory} mapOfPeople - Map of either actors or directors
 * @param {MapOfMoviesTitles} mapOfMovies - Map of movies
 * @param {string} name - Name or either the actor or director
 * @returns {array} -
 */
const getList = (
  mapOfPeople: MapOfArtistsHistory,
  mapOfMovies: MapOfMoviesTitles,
  name: string
) => {
  const person = mapOfPeople.get(name.toLowerCase());
  if (person) {
    const { movies } = person;
    if (movies) {
      return movies.reduce((acc, { title }) => {
        const movie = mapOfMovies.get(title.toLowerCase());
        return [...acc, [title, movie]];
      }, []);
    }
  }

  return [];
};

/**
 * It filters the data based on boolean values
 * @param {array} data - The array of data
 * @param {string} value - The value sent to filter by
 * @param {string} property - The name of the property to filter by
 */
const filterBooleanValue = (data, value: string, property: string) => {
  return data.filter(([, movie]) => {
    const paramValue = upperFirst(value);
    const movieValue = movie[property];
    return (
      movieValue === paramValue ||
      (paramValue === 'False' && movieValue === 'undefined')
    );
  });
};

const updateMovieState = (
  mapOfMovies,
  movieId,
  propertyName: string,
  propertyValue
) => {
  const capitalizedProperty = upperFirst(propertyName);
  const listOfMovies = mapOfMovies.get(MOVIES_TITLES);
  const listOfIds = mapOfMovies.get(MOVIES_IDS);
  const movieTitle = listOfIds.get(movieId);
  const movie = listOfMovies.get(movieTitle);

  if (movie) {
    const updatedMovie = {
      ...movie,
      [capitalizedProperty]: upperFirst(propertyValue),
    };
    listOfMovies.set(movieTitle, updatedMovie);
    return true;
  }

  return false;
};

/**
 * @swagger
 * name: Update Movie's State
 * path:
 *  /api/movies/:id:
 *    put:
 *      summary: Update movie's state for watched and saved
 *      tags: [Update Movie's State]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: movie's imdbID
 *          schema:
 *            type: string
 *            example: tt0083658
 *        - in: query
 *          name: watched
 *          schema:
 *            type: string
 *            enum: [true, false]
 *            example: "true"
 *          description: Whether the user has already seen the movie
 *        - in: query
 *          name: saved
 *          schema:
 *            type: string
 *            enum: [true, false]
 *            example: "false"
 *          description: Whether the user has saved the movie in the watch list
 *      responses:
 *        "200":
 *          description: Movie's updated successfully
 *        "412":
 *          description: Precondition failed
 */
router.put('/:id', (req, res) => {
  const { mapOfMovies } = req['context'].maps;

  const { watched, saved } = req.body;
  const { id: imdbID } = req.params;

  if (
    !validate.isEmpty(saved) &&
    validate({ saved }, { saved: { inclusion: VALID_BOOLEAN_STRINGS } }) == null
  ) {
    return updateMovieState(mapOfMovies, imdbID, 'saved', saved)
      ? res.sendStatus(200)
      : res.sendStatus(412);
  }

  if (
    !validate.isEmpty(watched) &&
    validate({ watched }, { watched: { inclusion: VALID_BOOLEAN_STRINGS } }) ==
      null
  ) {
    return updateMovieState(mapOfMovies, imdbID, 'watched', watched)
      ? res.sendStatus(200)
      : res.sendStatus(412);
  }

  return res.sendStatus(412);
});

/**
 * @swagger
 * name: Movies
 * path:
 *  /api/movies/:
 *    get:
 *      summary: Get list of all movies
 *      tags: [Movies]
 *      parameters:
 *        - in: query
 *          name: type
 *          schema:
 *            type: string
 *            enum: [movie,series]
 *            example: series
 *          description: Type of movie
 *        - in: query
 *          name: year
 *          schema:
 *            type: string
 *            example: 1983
 *          description: year of production
 *        - in: query
 *          name: metascore
 *          schema:
 *            type: string
 *            enum: [0,1,2,3]
 *            example: 0
 *          description: Metascore value
 *        - in: query
 *          name: actor
 *          schema:
 *            type: string
 *            example: Harrison Ford
 *          description: The actor's name
 *        - in: query
 *          name: director
 *          schema:
 *            type: string
 *            example: Ridley Scott
 *          description: The director's name
 *        - in: query
 *          name: genre
 *          schema:
 *            type: string
 *            example: Action
 *          description: The movie's genre
 *        - in: query
 *          name: watched
 *          schema:
 *            type: string
 *            enum: [true,false]
 *            example: true
 *          description: Whether the movie has been already seen by the user
 *        - in: query
 *          name: saved
 *          schema:
 *            type: string
 *            enum: [true,false]
 *            example: false
 *          description: Whether the movie has been added to the wishlist
 *      responses:
 *        "200":
 *          description: Movies schema
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *
 */

router.get('/', (req: Request, res) => {
  const {
    type,
    year,
    metascore,
    actor,
    director,
    genre,
    watched,
    saved,
  } = req.query;
  const { mapOfMovies, mapOfActors, mapOfDirectors } = req['context'].maps;

  const listOfMovies = mapOfMovies.get(MOVIES_TITLES);
  let data = [...listOfMovies];

  if (!validate.isEmpty(actor) || !validate.isEmpty(director)) {
    let listOfMoviesWithActorsAndDirectors = [];

    if (!validate.isEmpty(actor) && validate.isString(actor)) {
      listOfMoviesWithActorsAndDirectors = getList(
        mapOfActors,
        listOfMovies,
        actor
      );
    }

    if (!validate.isEmpty(director) && validate.isString(director)) {
      listOfMoviesWithActorsAndDirectors =
        listOfMoviesWithActorsAndDirectors.length > 0 // if actors have been filtered already
          ? listOfMoviesWithActorsAndDirectors.filter(([, movie]) =>
              movie.Director.includes(director)
            )
          : getList(mapOfDirectors, listOfMovies, director);
    }

    data = [...listOfMoviesWithActorsAndDirectors];
  }

  // Filter by type
  if (
    !validate.isEmpty(type) &&
    validate({ type }, { type: { inclusion: VALID_MOVIES_TYPES_STRINGS } }) ==
      null
  ) {
    data = data.filter(
      ([, movie]) => movie.Type === String(type).trim().toLowerCase()
    );
  }

  // Filter by year
  if (!validate.isEmpty(year) && validate.isString(year)) {
    data = data.filter(([, movie]) => movie.Year === String(year).trim());
  }

  // Filter by metascore
  if (
    !validate.isEmpty(metascore) &&
    validate(
      { metascore },
      { metascore: { inclusion: Object.keys(METASCORE) } }
    ) == null
  ) {
    data = data.filter(([, movie]) =>
      METASCORE[String(metascore)].logic(movie.Metascore)
    );
  }

  // Filter by genre
  if (!validate.isEmpty(genre) && validate.isString(genre)) {
    data = data.filter(([, movie]) =>
      movie.Genre.split(',').find(
        (movieGenre) => String(movieGenre).trim() === String(genre).trim()
      )
    );
  }

  // Filter by watched
  if (
    !validate.isEmpty(watched) &&
    validate({ watched }, { watched: { inclusion: VALID_BOOLEAN_STRINGS } }) ==
      null
  ) {
    data = filterBooleanValue(data, watched, 'Watched');
  }

  // Filter by saved
  if (
    !validate.isEmpty(saved) &&
    validate({ saved }, { saved: { inclusion: VALID_BOOLEAN_STRINGS } }) == null
  ) {
    data = filterBooleanValue(data, saved, 'Saved');
  }

  return res.send(data.map(([, movie]) => movie));
});

/**
 * @swagger
 * name: MovieById
 * path:
 *  /api/movies/id/{imdbID}:
 *    get:
 *      summary: Get specific movie by imdbID
 *      tags: [MovieById]
 *      parameters:
 *      - in: path
 *        name: imdbID
 *        required: true
 *        description: movie's imdbID
 *        schema:
 *          type: string
 *          example: tt0083658
 *      responses:
 *        "200":
 *          description: Movies schema
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *
 */
router.get('/id/:imdbID', (req, res) => {
  const { imdbID } = req.params;
  const { mapOfMovies } = req['context'].maps;

  if (!validate.isEmpty(imdbID) && validate.isString(imdbID)) {
    const listOfMovies = mapOfMovies.get(MOVIES_TITLES);
    const listOfIds = mapOfMovies.get(MOVIES_IDS);
    const movieTitle = listOfIds.get(imdbID);
    const movie = listOfMovies.get(movieTitle);

    if (movie) {
      const data = [[imdbID, movie]];

      return res.send(data.map(([, movie]) => movie));
    }
  }

  return res.send([]);
});

/**
 * @swagger
 * name: MovieByName
 * path:
 *  /api/movies/name/{name}:
 *    get:
 *      summary: Get specific movie by name
 *      tags: [MovieByName]
 *      parameters:
 *      - in: path
 *        name: name
 *        required: true
 *        description: movie's name
 *        schema:
 *          type: string
 *          example: Blade Runner
 *      responses:
 *        "200":
 *          description: Movies schema
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *
 */

router.get('/name/:name', (req, res) => {
  const { name } = req.params;
  const { mapOfMovies } = req['context'].maps;

  const listOfMovies = mapOfMovies.get(MOVIES_TITLES);
  const movieNameLowerCase = name.toLowerCase();
  const movie = listOfMovies.get(movieNameLowerCase);
  if (movie) {
    const data = [[name, movie]];

    return res.send(data.map(([, movie]) => movie));
  }

  return res.send([]);
});

export default router;
