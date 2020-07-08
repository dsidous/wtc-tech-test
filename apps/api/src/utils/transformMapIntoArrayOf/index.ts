import { Shows } from '@mono-nx-test-with-nextjs/api/assets';
import {
  MapOfArtistsHistory,
  PersonShowHistory,
  MapOfMoviesTitles,
} from '@mono-nx-test-with-nextjs/api/utils';

export type InfoShow = {
  name: string;
  info: Shows | PersonShowHistory;
};

/**
 * It transforms the map into an array of elements specified by the callback passed as arguments
 * @param map {MapOfMovies | MapOfArtistsHistory} - Map to transform
 * @param callback { Function } - Callback to use to transform the map
 * @returns {Array}
 */
export const transformMapIntoArrayOf = <T, K, V>(
  map: Map<K, V>,
  callback: (element: [K, V]) => T
) => [...map].map((mapElement) => callback(mapElement));

/**
 * It transforms the map into an array of InfoShow elements
 * @param map {MapOfMovies | MapOfArtistsHistory} - Map to transform
 * @param callback { Function } - Callback to use to transform the map's element into InfoShow elements
 * @returns {Array<InfoShow>}
 */
const transformMapIntoArrayOfInfoCallback = ([name, info]: [
  string,
  Shows | PersonShowHistory
]): InfoShow => ({ name, info });

export const transformMapIntoArrayOfInfo = (
  map: MapOfMoviesTitles | MapOfArtistsHistory
): InfoShow[] =>
  transformMapIntoArrayOf(map, transformMapIntoArrayOfInfoCallback);
