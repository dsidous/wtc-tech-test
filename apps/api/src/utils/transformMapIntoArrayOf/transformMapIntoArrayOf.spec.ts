import { transformMapIntoArrayOf, transformMapIntoArrayOfInfo } from '.';

const map = new Map();
map.set('key1', { name: 'test1' });
map.set('key2', { name: 'test2' });

describe('transformMapIntoArrayOf', () => {
  it('should correctly transform the map using the callback', () => {
    expect(
      transformMapIntoArrayOf(map, ([, { name }]) => ({
        name: name.toUpperCase(),
      }))
    ).toEqual([{ name: 'TEST1' }, { name: 'TEST2' }]);
  });
});

describe('transformMapIntoArrayOfInfo', () => {
  it('should return array with correct format', () => {
    expect(transformMapIntoArrayOfInfo(map)).toEqual([
      { info: { name: 'test1' }, name: 'key1' },
      { info: { name: 'test2' }, name: 'key2' },
    ]);
  });
});
