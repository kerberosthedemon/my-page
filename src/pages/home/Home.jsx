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
    avatarGlass: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    infoText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={1}
        className={classes.container}>
        <Grid item className={classes.avatarGlass}>
          <AvatarGlass />
        </Grid>
        <Grid item className={classes.infoText}>
          <InfoText />
        </Grid>
      </Grid >
      <div id="background"></div>
    </React.Fragment>
  );
}
