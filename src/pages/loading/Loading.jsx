import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => { setMounted(true); }, 500);
    }
  }, [loaded]);

  return (
    <React.Fragment>
      <Fade in={!mounted}>
        <div className={classes.container}>
          <LinearProgress />
        </div>
      </Fade>
      {loaded && children}
    </React.Fragment>
  )
}
