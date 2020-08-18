import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    container: {
      height: '100%'
    },
    item: {
      // marginTop: '156px',
      // width: '100%',
      // maxWidth: '600px',
    },
    paper: {
      height: 'calc(280px + 200px + 75px)',
      transform: 'translateY(37px)',
      borderRadius: 0
    }
  }
});

export default function InfoText() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" className={classes.container}>
      <Grid item className={classes.item}>
        <Card className={classes.paper}>
          <CardContent>
            <Typography variant="h5">
              Bienvenido
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
