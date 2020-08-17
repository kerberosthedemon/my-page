import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    height: '100vh',
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 3,
    display: 'flex',
    'justify-content': 'center', /*centers items on the line (the x-axis by default)*/
    'align-items': 'center' /*centers items on the cross-axis (y by default)*/
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
      <Fade in={!mounted} enter={false} appear={false} unmountOnExit>
        <div className={classes.container}>
          <CircularProgress />
        </div>
      </Fade>
      {loaded && children}
    </React.Fragment>
  )
}
