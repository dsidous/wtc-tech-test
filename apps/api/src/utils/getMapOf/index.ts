import { filterEmptyString } from '../filterEmptyString';
import {
  MOVIES_TITLES,
  MOVIES_IDS,
  NOT_APPLICABLE,
} from '@mono-nx-test-with-nextjs/api/constants';
import { Shows, ListOfShows, Type } from '@mono-nx-test-with-nextjs/api/assets';

const filterAwardsForOldObj = (award, obj) =>
  award !== NOT_APPLICABLE ? [...obj.awards, award] : obj.awards;

const filterAwardsForNewObj = (award) =>
  award !== NOT_APPLICABLE ? [award] : [];

type PersonMovieHistory = {
  title: string;
  type: Type;
};

export type PersonShowHistory = {
  movies: PersonMovieHistory[];
  awards: string[];
};
export type MapOfArtistsTuple = [string, PersonShowHistory];
export type MapOfArtistsHistory = Map<string, PersonShowHistory>;

/**
 * It creates the directors' map
 * @param {JSON} data - List of movies from json file
 * @returns {Map<string,string>} - Map of directors
 */
const getDirectorsMap = (data: ListOfShows): MapOfArtistsHistory => {
  const mapOfDirectors: MapOfArtistsHistory = new Map();

  data.forEach((movie) => {
    const { Title, Awards, Director, Type } = movie;
    const listOfDirectors = Director.split(',')
      .map((str) => str.trim())
      .filter((directorName) => filterEmptyString(directorName));

    listOfDirectors.forEach((directorName) => {
      const directorNameLowerCase = directorName.toLowerCase();
      const director = mapOfDirectors.get(directorNameLowerCase);
      const newMovie = { title: Title, type: Type };
      if (director) {
        mapOfDirectors.set(directorNameLowerCase, {
          movies: [...director.movies, newMovie],
          awards: filterAwardsForOldObj(Awards, director),
        });
      } else {
        mapOfDirectors.set(directorNameLowerCase, {
          movies: [newMovie],
          awards: filterAwardsForNewObj(Awards),
        });
      }
    });
  });

  return mapOfDirectors;
};

/**
 * It creates the actors' map
 * @param {JSON} data - List of movies from json file
 * @returns {Map<string,string>} - Map of actors
 */
const getActorsMap = (data: ListOfShows): MapOfArtistsHistory => {
  const mapOfActors: MapOfArtistsHistory = new Map();
  data.forEach((movie) => {
    const { Actors, Title, Awards, Type } = movie;
    const listOfActors = Actors.split(',').map((str) => str.trim());
    listOfActors.forEach((actorName) => {
      const actorNameLowerCase = actorName.toLowerCase();
      const actor = mapOfActors.get(actorNameLowerCase);
      const newMovie = { title: Title, type: Type };
      if (actor) {
        mapOfActors.set(actorNameLowerCase, {
          movies: [...actor.movies, newMovie],
          awards: filterAwardsForOldObj(Awards, actor),
        });
      } else {
        mapOfActors.set(actorNameLowerCase, {
          movies: [newMovie],
          awards: filterAwardsForNewObj(Awards),
        });
      }
    });
  });
  return mapOfActors;
};

export type MapOfImdbIds = Map<string, string>;
export type MapOfMoviesTitles = Map<string, Shows>;
export type MapOfMoviesTitlesTuple = [string, Shows];

// This tells typescript that MapOfMovies merges 2 different types and
// only these 2 are allowed
export type MapOfMovies = Map<typeof MOVIES_TITLES, MapOfMoviesTitles> &
  Map<typeof MOVIES_IDS, MapOfImdbIds>;

/**
 * It creates the movies' map
 * @param {JSON} data - List of movies from json file
 * @returns {MapOfMovies} - Map of movies
 */
const getMoviesMap = (data: ListOfShows): MapOfMovies => {
  const mapOfMovies: MapOfMovies = new Map();
  const moviesTitlesMap: MapOfMoviesTitles = new Map();
  const moviesImdbIDsMap: MapOfImdbIds = new Map();

  data.forEach((movie) => {
    const { Title, imdbID } = movie;
    const titleLowerCase = Title.toLowerCase();
    moviesTitlesMap.set(titleLowerCase, movie);
    moviesImdbIDsMap.set(imdbID, titleLowerCase);
  });

  mapOfMovies.set(MOVIES_TITLES, moviesTitlesMap);
  mapOfMovies.set(MOVIES_IDS, moviesImdbIDsMap);

  return mapOfMovies;
};

export type Maps = {
  mapOfActors: MapOfArtistsHistory;
  mapOfDirectors: MapOfArtistsHistory;
  mapOfMovies: MapOfMovies;
};

/**
 * Maps
 * @typedef {Object} Maps
 * @property {MapOfActors} mapOfActors - Map of actors
 * @property {MapOfDirectors} mapOfDirectors - Map of artists
 * @property {MapOfMovies} mapOfMovies - Map of movies
 */

/**
 * It returns the Maps
 * @param {JSON} data - List of movies from json file
 * @returns {Maps} - Maps of movies, actors and directors
 */
export const getMapOf = (data: ListOfShows): Maps => {
  return {
    mapOfActors: getActorsMap(data),
    mapOfDirectors: getDirectorsMap(data),
    mapOfMovies: getMoviesMap(data),
  };
};

export default getMapOf;
