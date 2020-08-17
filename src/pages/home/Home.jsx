import React from 'react';
import './home.css';
import { Grid } from '@material-ui/core';
import AvatarGlass from './AvatarGlass/AvatarGlass';
import InfoText from './InfoText/InfoText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    container: {
      maxHeight: '800px'
    }
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container alignContent="center" justify="center" spacing={1} className={classes.container}>
      <Grid item>
        <AvatarGlass />
      </Grid>
      <Grid item xs={6}>
        <InfoText />
      </Grid>
    </Grid >
  );
}
