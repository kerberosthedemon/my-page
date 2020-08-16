import React from 'react';
// import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    height: '100vh',
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 3
  },
}));


export default function Loading({ loaded, children }) {
  const classes = useStyles();
  // const [isLoaded, setIsLoaded] = useState(false);
  // setTimeout(() => { setIsLoaded(true) }, 1000);
  return (
    <React.Fragment>
      <Fade in={!loaded}>
        <div className={classes.root}>
          <LinearProgress />
        </div>
      </Fade>
      {loaded && children}
    </React.Fragment>
  )
}
