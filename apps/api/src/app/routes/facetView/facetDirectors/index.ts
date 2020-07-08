import { getNumberOf, sortAlphabetically } from '../utils';
import {
  transformMapIntoArrayOfInfo,
  MapOfArtistsHistory,
} from '@mono-nx-test-with-nextjs/api/utils';

type Facet = {
  label: string;
  values: string[];
};

type FacetDirectors = {
  directors: {
    label: 'Directors';
    filters: Facet[];
  };
};

const facetDirectors = (
  mapOfDirectors: MapOfArtistsHistory
): FacetDirectors | {} => {
  const arrayOfDirectors = transformMapIntoArrayOfInfo(mapOfDirectors);
  return {
    directors: {
      label: 'Directors',
      filters: [
        {
          label: 'Number of movies directed',
          values: sortAlphabetically(
            getNumberOf(arrayOfDirectors, (info) => info.movies.length)
          ),
        },
        {
          label: 'Number of awards won',
          values: sortAlphabetically(
            getNumberOf(arrayOfDirectors, (info) => info.awards.length)
          ),
        },
      ],
    },
  };
};

export default facetDirectors;
