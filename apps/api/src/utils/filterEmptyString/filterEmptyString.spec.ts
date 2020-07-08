import { filterEmptyString } from '.';
import { NOT_APPLICABLE } from '@mono-nx-test-with-nextjs/api/constants';

describe('filter', () => {
  it(`should return true when element is not "${NOT_APPLICABLE}"`, () => {
    expect(filterEmptyString('OK result')).toEqual(true);
  });

  it(`should return false when element is "${NOT_APPLICABLE}"`, () => {
    expect(filterEmptyString(NOT_APPLICABLE)).toEqual(false);
  });

  it(`should filter out all "${NOT_APPLICABLE}"s elements when use with Array.filter`, () => {
    const data = [
      'I am OK',
      'Yes, I am good',
      NOT_APPLICABLE,
      'Yep, keep me',
      NOT_APPLICABLE,
    ];
    expect(data.filter(filterEmptyString)).toEqual(
      expect.not.arrayContaining([NOT_APPLICABLE])
    );
  });
});
