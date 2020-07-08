import React from 'react';
import { render } from '@testing-library/react';

import ButtonLink from './ButtonLink';

describe(' Button', () => {
  it('should render an anchor tag with the correct href', () => {
    const { container } = render(
      <ButtonLink href="/instructions">I am a link</ButtonLink>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          aria-disabled="false"
          class="MuiButtonBase-root MuiButton-root MuiButton-text"
          href="/instructions"
          tabindex="0"
        >
          <span
            class="MuiButton-label"
          >
            I am a link
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </a>
      </div>
    `);
  });

  it('should render a normal button when href is not passed', () => {
    const { container } = render(<ButtonLink>I am a normal button</ButtonLink>);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-text"
          tabindex="0"
          type="button"
        >
          <span
            class="MuiButton-label"
          >
            I am a normal button
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
      </div>
    `);
  });
});
