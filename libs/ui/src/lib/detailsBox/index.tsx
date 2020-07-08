import React, { PropsWithChildren } from 'react';

export interface DetailsBoxProps {
  summaryDescription: string;
}

export const DetailsBox = (props: PropsWithChildren<DetailsBoxProps>) => {
  const { summaryDescription, children } = props;
  return (
    <details>
      <summary>{summaryDescription}</summary>
      <pre>{children}</pre>
    </details>
  );
};

export default DetailsBox;
