import { InfoShow } from '@mono-nx-test-with-nextjs/api/utils';

type FacetValue = {
  label: string;
  count: number;
};

export const getNumberOf = (
  arrayOfElements: InfoShow[],
  callback: (info) => number
): FacetValue[] =>
  arrayOfElements.map(({ name, info }) => {
    return {
      label: name,
      count: callback(info),
    };
  });

export const sortAlphabetically = (arr: FacetValue[]): FacetValue[] =>
  arr.sort((a, b) => a.label.localeCompare(b.label));

export const getPrettifiedValues = (map): FacetValue[] =>
  [...map].map(([key, value]) => ({
    label: key,
    count: value,
  }));
