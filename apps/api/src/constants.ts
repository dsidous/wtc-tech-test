const ROUTE_PREFIX = `/api`;
const ROUTE_MOVIES_PREFIX = `${ROUTE_PREFIX}/movies`;
// Routes
export const MOVIES_ROUTE = ROUTE_MOVIES_PREFIX;
export const MOVIE_BY_NAME_ROUTE = `${ROUTE_MOVIES_PREFIX}/name`;
export const MOVIE_BY_ID_ROUTE = `${ROUTE_MOVIES_PREFIX}/id`;
export const FACETS_ROUTE = `${ROUTE_PREFIX}/facets/`;
export const DIRECTORS_ROUTE = `${ROUTE_PREFIX}/directors/`;
export const ACTORS_ROUTE = `${ROUTE_PREFIX}/actors/`;

export type RangeValue = {
  label: string;
  startValue: number;
  logic: (value: string) => boolean;
};
export type Range = {
  [filterCode: string]: RangeValue;
};

export const MOVIES_TITLES = 'titles';
export const MOVIES_IDS = 'imdbIDs';
export const NOT_APPLICABLE = 'N/A';

export const METASCORE: Range = {
  '0': {
    label: '< 60',
    startValue: 0,
    logic: (value) => Number(value) < 60,
  },
  '1': {
    label: 'Between 60 & 80',
    startValue: 0,
    logic: (value) => Number(value) > 60 && Number(value) < 80,
  },
  '2': {
    label: 'Between 80 & 90',
    startValue: 0,
    logic: (value) => Number(value) > 80 && Number(value) < 90,
  },
  '3': {
    label: '> 90',
    startValue: 0,
    logic: (value) => Number(value) > 90,
  },
  '4': {
    label: NOT_APPLICABLE,
    startValue: 0,
    logic: (value) => String(value) === NOT_APPLICABLE,
  },
};
