import React from 'react';
import {
  CircularProgress as MaterialCircularProgress,
  CircularProgressProps,
} from '@material-ui/core';

export const Progress = (props: CircularProgressProps) => (
  <MaterialCircularProgress {...props} />
);

export default Progress;
