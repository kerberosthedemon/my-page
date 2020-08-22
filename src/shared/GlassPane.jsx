import React from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import backgroundImage from './../img/background.webp'
import useFocusElementOnStart from './../hooks/useFocusOnStart';

const useStyles = makeStyles(theme => {
  return {
    box: {
      // padding: theme.spacing(2)
      position: 'relative',
      /* max-width: 600px; */
      'box-shadow': '0 5px 15px rgba(0,0,0,.5)',
      overflow: 'hidden',
      color: '#000',
      // height: '100%',
      '&::before': {
        content: '" "',
        position: 'absolute',
        top: '-20px',
        left: '-20px',
        right: '-20px',
        bottom: '-20px',
        background: `url(${backgroundImage})`,
        'background-attachment': 'fixed',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        backgroundPosition: 'center',
        filter: 'blur(5px)',
        // 'background-color': '#000000a3',
        // 'background-blend-mode': 'color',
        'background-color': '#000000b0',
        'background-blend-mode': 'multiply',
      }
    },
    section: {
      position: 'relative',
      // height: '200px'
    },

    gridContainer: {
      'justify-content': 'flex-end',
      height: '200px',
      padding: theme.spacing(2),
      alignItems: 'center'
    },
    titleContainer: {
      // alignSelf: 'center'
    },
    title: {
      zIndex: 2,
      // paddingTop: '56px',
      color: 'white',
      position: 'relative',
      margin: '0 0 20px',
      padding: 0,
      fontSize: '1.8rem'
    },

    button: {
      // backgroundColor: '#0063cc',
      color: '#ff1744',
      borderColor: '#ff1744',
    },
  };
});

export default function GlassPane() {
  const ref = useFocusElementOnStart();
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={`${classes.box}`}>
        <Grid container direction="column" spacing={0} className={classes.gridContainer}>
          <Grid item className={classes.titleContainer}>
            <Typography className={classes.title} variant="h5">Nicolas Espindola</Typography>
          </Grid>
          <Grid item>
            <Button disableFocusRipple ref={ref} size="small" variant="outlined" className={classes.button}>Web Developer</Button>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}
