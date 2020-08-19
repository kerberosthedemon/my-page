import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import IconCard from './IconCard/IconCard';

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
    }
  }
});

export default function InfoText() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" className={classes.container}>
      <Grid item className={classes.item}>
        <Card className={classes.paper}>
          <Grid container direction="row" className={classes.cardContent}>
            <Grid item>
              <CardContent>
                <Typography variant="h5">
                  Bienvenido
                </Typography>
              </CardContent>
            </Grid>
            <Grid item>
              <CardContent>
                <Card variant="outlined">
                  <CardContent className={classes.textContainer}>
                    <Typography variant="body2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eveniet non officia cupiditate rerum explicabo.<br />
                      Magnam quam doloremque eos obcaecati blanditiis saepe ducimus rerum quas, maiores voluptates non dolores possimus?
                    </Typography>
                    <Typography variant="body2">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eveniet non officia cupiditate rerum explicabo.<br />
                      Magnam quam doloremque eos obcaecati blanditiis saepe ducimus rerum quas, maiores voluptates non dolores possimus?</p>
                    </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Grid>
            <Grid item container xs={12}>
              <CardContent style={{ width: '100%' }} >
                <Grid container spacing={1} justify="space-between">
                  <IconCard />
                  <IconCard />
                  <IconCard />
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}
