import React from 'react';
import { Grid as MaterialGrid, GridProps } from '@material-ui/core';

export const Grid = (props: GridProps) => (
  <MaterialGrid {...props}>{props.children}</MaterialGrid>
);

export default Grid;
