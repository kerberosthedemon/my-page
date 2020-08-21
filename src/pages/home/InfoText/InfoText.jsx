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
      transform: 'translateY(36px)',
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
      backgroundImage: 'url(https://safebooru.org//images/3050/6b7b67fe97714483c544bbf4bd6cd9d90875ba54.jpg?3176055)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    gridIcon: {
      gridColumn: '1fr',
      alignSelf: 'center',
      justifySelf: 'center'
    },
    gridIcon1: {
      paddingLeft: theme.spacing(2),
    },
    gridIcon2: {
      paddingLeft: theme.spacing(2),
    },
    gridIcon3: {
      paddingLeft: theme.spacing(2),
    }
  }
});

export default function InfoText() {
  const classes = useStyles();

  return (
    <Card className={classes.gridContainer}>
      <div className={classes.gridTitle}>
        <Typography variant="h5">
          Bienvenido
        </Typography>
      </div>

      <div className={classes.gridText}>
        <Card variant="outlined">
          <CardContent className={classes.textContainer}>
            <Typography variant="body2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eveniet non officia cupiditate rerum explicabo.<br />
                    Magnam quam doloremque eos obcaecati blanditiis saepe ducimus rerum quas, maiores voluptates non dolores possimus?
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.gridPicture}></div>

      <div className={`${classes.gridIcon} ${classes.icon1}`}><IconCard text="Code"><CodeIcon fontSize="large" /></IconCard></div>
      <div className={`${classes.gridIcon} ${classes.icon2}`}><IconCard text="Web"><LanguageOutlinedIcon fontSize="large" /></IconCard></div>
      <div className={`${classes.gridIcon} ${classes.icon3}`}><IconCard text="Games"><SportsEsportsOutlinedIcon fontSize="large" /></IconCard></div>

    </Card>
  )
}
