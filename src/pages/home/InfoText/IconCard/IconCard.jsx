import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

export default function IconCard({ text, children }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container direction="column" alignContent="center" justify="center" alignItems="center">
          <Grid item>{children}</Grid>
          <Grid item><Typography>{text}</Typography></Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
