import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import IconCard from './IconCard/IconCard';
import CodeIcon from '@material-ui/icons/Code';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

const useStyles = makeStyles(theme => {
  return {
    container: {
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '300.6px !important',
      },

      maxWidth: '500px'
    },
    item: {
      // marginTop: '156px',
      // width: '100%',
      // maxWidth: '600px',
    },
    textContainer: {
      maxHeight: '200px',
      overflow: 'auto'
    },
    gridContainer: {
      display: 'grid',
      'grid-template-rows': '65px 1fr 2fr 1fr',
      'grid-template-columns': 'repeat(3, 1fr)',
      height: '545px',
      maxWidth: '600px',
      borderRadius: 0,
      // transform: 'translateY(45px)',
      [theme.breakpoints.down('sm')]: {
        width: '300.6px !important',
        transform: 'unset'
      },
    },
    gridTitle: {
      gridColumn: '1/4',
      backgroundColor: theme.palette.secondary.main,
      color: 'white',
      padding: theme.spacing(2),
    },
    gridText: {
      gridColumn: '1/4',
      padding: theme.spacing(2)
    },
    gridPicture: {
      gridColumn: '1/4',
      backgroundImage: 'url(https://64.media.tumblr.com/986413d5cda5910346c40c195392158e/tumblr_po7m5jgtqE1tkjgc4o1_400.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      'background-color': '#d53030',
      'background-blend-mode': 'darken',
    },
    gridIcon: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    gridIcon1: {
      paddingLeft: theme.spacing(2),
    },
    gridIcon2: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    gridIcon3: {
      paddingRight: theme.spacing(2),
    }
  }
});

export default function InfoText() {
  const classes = useStyles();

  return (
    <Card className={classes.gridContainer}>
      <div className={classes.gridTitle}>
        <Typography variant="h5">
          About Me
        </Typography>
      </div>

      <div className={classes.gridText}>
        <Card variant="outlined">
          <CardContent className={classes.textContainer}>
            <Typography variant="body2">
              Hi!<br />
              I'm Nicolas, I do web development and video games.<br />
              This is my personal page where you can find links to my projects and contact information.<br />
              Below are some of my works I've done or I am currently working on:
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.gridPicture}></div>

      <div className={`${classes.gridIcon} ${classes.gridIcon1}`}><IconCard text="Code"><CodeIcon fontSize="large" /></IconCard></div>
      <div className={`${classes.gridIcon} ${classes.gridIcon2}`}><IconCard text="Web"><LanguageOutlinedIcon fontSize="large" /></IconCard></div>
      <div className={`${classes.gridIcon} ${classes.gridIcon3}`}><IconCard text="Games"><SportsEsportsOutlinedIcon fontSize="large" /></IconCard></div>

    </Card>
  )
}
