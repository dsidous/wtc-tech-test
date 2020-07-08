import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Button, Facets, QueryProvider } from '@mono-nx-test-with-nextjs/ui';

import Results from '../app/components/results';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      marginTop: 80,

      '& aside': {
        marginRight: 20,
      },
    },
    result: {
      display: 'grid',
      gridGap: 80,
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gridAutoRows: 'max-content',
      width: '100%',
    },
    filters: {
      backgroundColor: '#455A64',
      borderRadius: 20,
      padding: 20,
      width: 232,
    },
    button: {
      backgroundColor: '#fff',
      borderRadius: 10,
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'capitalize',
      height: 38,
      width: '100%',
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <QueryProvider>
      <main className={classes.root}>
        <aside>
          <div className={classes.filters}>
            <Button className={classes.button}>Reset filters</Button>
            <Facets />
          </div>
        </aside>
        <section className={classes.result}>
          <Results />
        </section>
      </main>
    </QueryProvider>
  );
};

export default Home;
