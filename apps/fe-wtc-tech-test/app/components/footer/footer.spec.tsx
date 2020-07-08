import React from 'react';
import { render } from '@testing-library/react';

import { Footer } from '.';

describe('<Footer />', () => {
  it('should render the footer', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer
          class="makeStyles-footer-1"
        >
          <a
            aria-disabled="false"
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary"
            href="/instructions"
            tabindex="0"
          >
            <span
              class="MuiButton-label"
            >
              Instructions
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </a>
        </footer>
      </div>
    `);
  });
});
