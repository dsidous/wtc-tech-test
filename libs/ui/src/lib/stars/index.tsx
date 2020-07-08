import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { evaluate } from 'mathjs';

import {
  StarIcon,
  StarBorderIcon,
  StarHalfIcon,
} from '@mono-nx-test-with-nextjs/ui';

type Rating = {
  Source: string;
  Value: string;
};

interface RatingsProps {
  Ratings: Rating[];
}

const useStyles = makeStyles({
  label: {
    fontWeight: 'bold',
  },
});

const getRate = (Ratings) => {
  let sum = 0;

  Ratings.forEach((rating) => {
    switch (rating.Source) {
      case 'Internet Movie Database' || 'Metacritic':
        sum += evaluate(rating.Value) * 100.0;
        break;
      case 'Rotten Tomatoes':
        sum += parseFloat(rating.Value);
        break;
      default:
        return null;
    }
  });

  return (sum / Ratings.length / 20).toFixed(1);
};

export const Stars: React.FC<RatingsProps> = ({ Ratings }) => {
  const classes = useStyles();
  const rating = parseFloat(getRate(Ratings));

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<StarIcon key={i} />);
      } else if (i - rating > 0 && i - rating < 1) {
        stars.push(<StarHalfIcon key={i} />);
      } else {
        stars.push(<StarBorderIcon key={i} />);
      }
    }

    return stars;
  };

  return (
    <>
      {renderStars()}
      <span className={classes.label}>{`(${rating})`}</span>
    </>
  );
};
