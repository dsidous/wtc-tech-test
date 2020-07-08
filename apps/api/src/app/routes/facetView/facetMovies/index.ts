import { sortAlphabetically, getPrettifiedValues } from '../../facetView/utils';
import {
  METASCORE,
  Range,
  MOVIES_TITLES,
  RangeValue,
} from '@mono-nx-test-with-nextjs/api/constants';
import {
  MapOfMovies,
  transformMapIntoArrayOfInfo,
  InfoShow,
} from '@mono-nx-test-with-nextjs/api/utils';
import { LOWER_CASE_TRUE } from '../../movies';

type RangeValues = (RangeValue & { filterCode: string })[];
type MapRangeFilterCount = Map<string, RangeFilterCount>;

const prettifyRangeValues = (map: MapRangeFilterCount) =>
  [...map].map(([key, { count, filterCode }]) => ({
    label: key,
    count,
    filterCode,
  }));

const setElementInMap = (map: Map<string, number>, elem: string) => {
  const value = map.get(elem);
  if (value) {
    map.set(elem, value + 1);
  } else {
    map.set(elem, 1);
  }
};

const setValuesInMap = (
  arrayOfElements: InfoShow[],
  callback: (value) => string | string[]
) => {
  const map: Map<string, number> = new Map();

  arrayOfElements.forEach((element) => {
    const numberOfElements = callback(element);
    // If the elements are an array, I need to check for all the elements, not just one
    if (Array.isArray(numberOfElements)) {
      numberOfElements.forEach((elem) => {
        setElementInMap(map, elem.trim());
      });
    } else {
      setElementInMap(map, numberOfElements);
    }
  });

  return map;
};

type RangeFilterCount = { count: number; filterCode: string };

const setRangeValuesInMap = (
  arrayOfElements: InfoShow[],
  rangeValues: RangeValues,
  callback: (InfoOfMovie) => string
) => {
  const map: MapRangeFilterCount = new Map();

  // It adds the labels in the map
  rangeValues.forEach(({ label, startValue, filterCode }) => {
    const elem: RangeFilterCount = {
      count: startValue,
      filterCode: filterCode,
    };
    map.set(label, elem);
  });

  arrayOfElements.forEach((element) => {
    const value = callback(element);

    // It adds the element in the correct place
    rangeValues.some((elem) => {
      if (elem.logic(value)) {
        const elemInMap = map.get(elem.label);
        map.set(elem.label, { ...elemInMap, count: elemInMap.count + 1 });
        return true;
      }
      return false;
    });
  });

  return map;
};

/**
 * It returns the correct label based on the value passed.
 * @param {string} value - true|false
 * @returns {string} - YES | NO
 */
const booleanValue = (value: string) =>
  value && String(value).toLowerCase() === LOWER_CASE_TRUE ? 'Yes' : 'No';

/**
 * It builds the facets for the movies available in the data
 * @param {Map} mapOfMovies - Map of the available movies
 * @returns {object} -
 */
const facetMovies = (mapOfMovies: MapOfMovies) => {
  const listOfMovies = mapOfMovies.get(MOVIES_TITLES);
  if (listOfMovies) {
    const arrayOfMovies = transformMapIntoArrayOfInfo(listOfMovies);

    const getRangeValues = (objOfValues: Range): RangeValues =>
      Object.entries(objOfValues).map(([key, values]) => ({
        filterCode: key,
        ...values,
      }));

    const moviesTypes = setValuesInMap(
      arrayOfMovies,
      (element) => element.info.Type
    );
    const moviesYears = setValuesInMap(
      arrayOfMovies,
      (element) => element.info.Year
    );
    const moviesGenre = setValuesInMap(arrayOfMovies, (element) =>
      element.info.Genre.split(',')
    );

    const moviesWatched = setValuesInMap(arrayOfMovies, (element) =>
      booleanValue(element.info.Watched)
    );

    const moviesSaved = setValuesInMap(arrayOfMovies, (element) =>
      booleanValue(element.info.Saved)
    );

    const moviesMetaScore = setRangeValuesInMap(
      arrayOfMovies,
      getRangeValues(METASCORE),
      (element) => element.info.Metascore
    );

    return {
      movies: {
        label: 'Movies',
        filters: {
          type: {
            label: 'Type',
            values: getPrettifiedValues(moviesTypes),
          },
          years: {
            label: 'Years',
            values: sortAlphabetically(getPrettifiedValues(moviesYears)),
          },
          metascore: {
            label: 'Metascore',
            values: prettifyRangeValues(moviesMetaScore),
          },
          genre: {
            label: 'Genre',
            values: sortAlphabetically(getPrettifiedValues(moviesGenre)),
          },
          watched: {
            label: 'Watched',
            values: getPrettifiedValues(moviesWatched),
          },
          saved: {
            label: 'Saved in wishlist',
            values: getPrettifiedValues(moviesSaved),
          },
        },
      },
    };
  }

  return {};
};

export default facetMovies;
