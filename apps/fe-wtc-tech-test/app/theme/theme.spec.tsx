import { customTheme } from './theme';

describe('Logo', () => {
  it('should render Logo', () => {
    expect(customTheme).toMatchInlineSnapshot(`
      Object {
        "palette": Object {
          "primary": Object {
            "main": "#455a64",
          },
        },
      }
    `);
  });
});
