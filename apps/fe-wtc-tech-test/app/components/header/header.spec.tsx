import React from 'react';
import { render } from '@testing-library/react';

import Header from '.';

describe(' Header', () => {
  it('should render successfully', () => {
    const { container } = render(<Header />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <header
          class="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary MuiPaper-elevation4"
        >
          <div
            class="MuiToolbar-root makeStyles-root-1 MuiToolbar-regular MuiToolbar-gutters"
          >
            <img
              alt="testflix logo"
              height="130px"
              src="/assets/logo/testflix_logo.png"
            />
          </div>
        </header>
      </div>
    `);
  });
});
