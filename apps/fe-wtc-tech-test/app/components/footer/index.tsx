import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ButtonLink } from '@mono-nx-test-with-nextjs/ui';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.primary.main,
      height: '75px',
    },
    link: {
      color: '#FFF',
    },
  })
);

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <ButtonLink href="/instructions" variant="contained" color="secondary">
        Instructions
      </ButtonLink>
    </footer>
  );
};

export default Footer;
