import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
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
    paper: {
      height: 'calc(268px + 200px + 75px)',
      // transform: 'translateY(37px)',
      borderRadius: 0
    },
    cardContent: {
      height: '100%'
    },
    textContainer: {
      maxHeight: '200px',
      overflow: 'auto'
    },
    cardHeader: {
      backgroundColor: theme.palette.secondary.main,
      color: 'white'
    }
  }
});

export default function InfoText() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" className={classes.container}>
      <Grid item className={classes.item}>
        <Card className={classes.paper}>
          <CardContent className={classes.cardHeader}>
            <Typography variant="h5">
              Bienvenido
            </Typography>
          </CardContent>
          <CardContent>
            <Grid container spacing={1} direction="row" className={classes.cardContent}>

              <Grid item>
                <Card variant="outlined">
                  <CardContent className={classes.textContainer}>
                    <Typography variant="body2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eveniet non officia cupiditate rerum explicabo.<br />
                      Magnam quam doloremque eos obcaecati blanditiis saepe ducimus rerum quas, maiores voluptates non dolores possimus?
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item container xs={12}>
                <Grid container spacing={1} justify="space-between">
                  <IconCard text="Code"><CodeIcon fontSize="large" /></IconCard>
                  <IconCard text="Web"><LanguageOutlinedIcon fontSize="large" /></IconCard>
                  <IconCard text="Games"><SportsEsportsOutlinedIcon fontSize="large" /></IconCard>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
