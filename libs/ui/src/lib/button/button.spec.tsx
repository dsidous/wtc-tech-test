import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

describe(' Button', () => {
  it('should render successfully', () => {
    const { container } = render(<Button>Button content</Button>);
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
            Button content
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
      </div>
    `);
  });
});
