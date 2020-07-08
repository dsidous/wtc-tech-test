import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import {
  VisibilityIcon,
  VisibilityOffIcon,
  FavoriteIcon,
  FavoriteBorderIcon,
  Stars,
} from '@mono-nx-test-with-nextjs/ui';

const LOWER_CASE_TRUE = 'True';
const LOWER_CASE_FALSE = 'False';
type LowerCaseBooleanString = typeof LOWER_CASE_TRUE | typeof LOWER_CASE_FALSE;

type Rating = {
  Source: string;
  Value: string;
};

export type Movie = {
  imdbID: string;
  Poster: string;
  Ratings: Rating[];
  Title: string;
  Type: string;
  Watched: LowerCaseBooleanString;
  Saved: LowerCaseBooleanString;
};

export type MovieCardProps = {
  movie: Movie;
};

const background = {
  [LOWER_CASE_FALSE]: {
    [LOWER_CASE_FALSE]: '#fff',
    [LOWER_CASE_TRUE]: '#eec907',
  },
  [LOWER_CASE_TRUE]: {
    [LOWER_CASE_FALSE]: '#ed6606',
    [LOWER_CASE_TRUE]: '#049452',
  },
};

const visibility = {
  [LOWER_CASE_TRUE]: <VisibilityIcon />,
  [LOWER_CASE_FALSE]: <VisibilityOffIcon />,
};

const isSaved = {
  [LOWER_CASE_TRUE]: <FavoriteIcon />,
  [LOWER_CASE_FALSE]: <FavoriteBorderIcon />,
};

const useStyles = makeStyles(
  () =>
    createStyles({
      root: (props: { saved: string; watched: string }) => ({
        justifyContent: 'space-between',
        borderRadius: 20,
        boxShadow: '1px 1px 5px #666',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        height: 300,
        width: 200,
        backgroundColor: background[props.saved][props.watched],
      }),
      poster: {
        borderRadius: 10,
        display: 'block',
        height: 221,
        margin: '0 auto',
        width: 150,
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      footer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      },
    }),
  { name: 'movieCard' }
);

export const MovieCard: React.FC<MovieCardProps> = ({
  movie: { imdbID, Title, Poster, Saved, Watched, Ratings },
}) => {
  const [watched, setWatched] = useState(LOWER_CASE_TRUE);
  const [saved, setSaved] = useState(LOWER_CASE_TRUE);
  const classes = useStyles({ saved, watched });

  useEffect(() => {
    setWatched(Watched);
    setSaved(Saved);
  }, [Watched, Saved]);

  const mutation = (data: object) => {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return fetch(`/api/movies/${imdbID}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(data),
    });
  };

  const reverse = (v: string) =>
    v === LOWER_CASE_FALSE ? LOWER_CASE_TRUE : LOWER_CASE_FALSE;

  const watchedClick = async () => {
    const data = {
      watched: (!(watched === LOWER_CASE_FALSE)).toString(),
    };

    await mutation(data);

    setWatched(() => reverse(watched));
  };

  const savedClick = async () => {
    const data = {
      saved: (!(saved === LOWER_CASE_FALSE)).toString(),
    };
    await mutation(data);

    setSaved(() => reverse(saved));
  };

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div onClick={() => watchedClick()}>{visibility[watched]}</div>
        <div onClick={() => savedClick()}>{isSaved[saved]}</div>
      </header>
      <img className={classes.poster} src={Poster} alt={Title} />
      <footer className={classes.footer}>
        <Stars Ratings={Ratings} />
      </footer>
    </div>
  );
};
