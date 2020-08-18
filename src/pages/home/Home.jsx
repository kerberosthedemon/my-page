import React from 'react';
import './home.css';
import { Grid } from '@material-ui/core';
import AvatarGlass from './AvatarGlass/AvatarGlass';
import InfoText from './InfoText/InfoText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    container: {
      height: '100%',
      width: '100%'
    },
    infoText: {
      minWidth: '300.6px',
    }
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="stretch"
      spacing={1}
      className={classes.container}>
      <Grid item>
        <AvatarGlass />
      </Grid>
      <Grid item className={classes.infoText}>
        <InfoText />
      </Grid>
    </Grid >
  );
}
