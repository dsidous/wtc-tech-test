import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Logo } from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar
        classes={{
          root: classes.root,
        }}
      >
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
