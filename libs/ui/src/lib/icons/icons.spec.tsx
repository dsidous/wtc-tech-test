import React from 'react';
import { render } from '@testing-library/react';

import {
  VisibilityIcon,
  VisibilityOffIcon,
  FavoriteIcon,
  FavoriteBorderIcon,
  StarIcon,
  StarBorderIcon,
  StarHalfIcon,
  ExpandMoreIcon,
  ExpandLessIcon,
} from './icons';

describe('Icons', () => {
  it('should render VisibilityOffIcon successfully', () => {
    const { baseElement } = render(<VisibilityOffIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render FavoriteIcon successfully', () => {
    const { baseElement } = render(<FavoriteIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render VisibilityIcon successfully', () => {
    const { baseElement } = render(<VisibilityIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render FavoriteBorder successfully', () => {
    const { baseElement } = render(<FavoriteBorderIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render StarIcon successfully', () => {
    const { baseElement } = render(<StarIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render StarBorderIcon successfully', () => {
    const { baseElement } = render(<StarBorderIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render StarHalfIcon successfully', () => {
    const { baseElement } = render(<StarHalfIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render ExpandMoreIcon successfully', () => {
    const { baseElement } = render(<ExpandMoreIcon />);
    expect(baseElement).toBeTruthy();
  });

  it('should render ExpandLessIcon successfully', () => {
    const { baseElement } = render(<ExpandLessIcon />);
    expect(baseElement).toBeTruthy();
  });
});
