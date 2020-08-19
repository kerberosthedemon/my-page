import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code'

export default function IconCard() {
  return (
    <Grid item>
      <Card variant="outlined">
        <CardContent>
          <Grid container direction="column" alignContent="center" justify="center" alignItems="center">
            <Grid item><CodeIcon /></Grid>
            <Grid item><Typography>Code</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}
