import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  Header,
  Footer,
  Theme,
} from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  makeStyles,
  Theme as MaterialTheme,
  createStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: MaterialTheme) =>
  createStyles({
    contentContainer: {
      padding: '0 27px',
    },
  })
);

const App = ({ Component, pageProps }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Header />
        <CssBaseline />
        <div className={classes.contentContainer}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
