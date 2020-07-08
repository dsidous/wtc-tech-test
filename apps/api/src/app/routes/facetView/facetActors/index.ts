import { getNumberOf, sortAlphabetically } from '../utils';
import { transformMapIntoArrayOfInfo } from '@mono-nx-test-with-nextjs/api/utils';

const facetActors = (mapOfActors) => {
  const arrayOfActors = transformMapIntoArrayOfInfo(mapOfActors);

  return {
    actors: {
      label: 'Actors',
      filters: {
        movies: {
          label: 'Number of movies done',
          values: sortAlphabetically(
            getNumberOf(arrayOfActors, (info) => info.movies.length)
          ),
        },
      },
    },
  };
};

export default facetActors;
