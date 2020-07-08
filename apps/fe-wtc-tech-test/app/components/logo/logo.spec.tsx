import React from 'react';
import { render } from '@testing-library/react';

import { Logo } from '.';

describe('Logo', () => {
  it('should render Logo', () => {
    const { container } = render(<Logo />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <img
          alt="testflix logo"
          height="130px"
          src="/assets/logo/testflix_logo.png"
        />
      </div>
    `);
  });
});
