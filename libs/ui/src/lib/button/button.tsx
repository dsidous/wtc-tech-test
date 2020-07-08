import React from 'react';
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from '@material-ui/core';

export type ButtonProps = MaterialButtonProps;

export const Button = (props: ButtonProps) => (
  <MaterialButton {...props}>{props.children}</MaterialButton>
);

export default Button;
