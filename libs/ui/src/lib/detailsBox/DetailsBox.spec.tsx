import React from 'react';
import { render } from '@testing-library/react';

import DetailsBox from '.';

describe(' DetailsBox', () => {
  it('should render successfully', () => {
    const { container } = render(
      <DetailsBox summaryDescription={'Content for summary'}>
        Content for pre
      </DetailsBox>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <details>
          <summary>
            Content for summary
          </summary>
          <pre>
            Content for pre
          </pre>
        </details>
      </div>
    `);
  });
});
