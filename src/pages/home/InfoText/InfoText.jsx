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
      marginTop: '156px',
      width: '100%',
      maxWidth: 'unset',
      minWidth: '300px'
    },
    paper: {
      height: '100%',
      borderRadius: 0
    }
  }
});

export default function InfoText() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" className={classes.container}>
      <Grid item xs={8} className={classes.item}>
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
