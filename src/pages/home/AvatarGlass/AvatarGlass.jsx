import React from 'react'
import './avatarGlass.css'
import { Paper, Button, Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import avatar from './../../../img/nico.png';
import GlassPane from '../../../shared/GlassPane';

const useStyles = makeStyles(theme => {
  return {
    paperContainer: {
      marginTop: 0,
      zIndex: 1,
      display: 'flex',
      height: '280px'
    },
    paper: {
      // height: '200px',
      'border-radius': 0,
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    grid: {
      height: '100%',
      marginTop: '-37px'
    },
    gridItem: {
      minWidth: '300px'
    },
    avatar: {
      // transform: 'translateY(3px) translateX(3px)',
      transform: 'scale(.95)',
      width: '100%',
      height: '100%',
      // 'box-shadow': '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      // 'border-style': 'solid',
      'border-color': '#ff1744',
      'border-width': 'thick',
      'z-index': 10,
      '&::before': {
        content: '" "',
        position: "absolute",
        'z-index': -1,
        top: '5px',
        left: '5px',
        right: '5px',
        bottom: '5px',
        // border: '5px solid blue'
      }
    },
    avatarContainer: {
      alignSelf: 'center',
      height: '150px',
      width: '150px'
    },
    avatarBorder: {
      // background: 'linear-gradient(to top, #ff1744, #ff1744)',
      background: '#808080',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      transform: 'translateY(50%)',
      zIndex: 1,
      'box-shadow': '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      position: 'relative',
    },
    linkButton: {
      borderRadius: 0,
      width: '100%'
    },
    linkButtonContainer: {
      height: '100%',
      alignContent: 'space-evenly'
    },
  }
});

export default function AvatarGlass() {
  const classes = useStyles();
  return (
    <Grid container spacing={0}
      wrap="nowrap"
      justify="center"
      direction="column"
      alignItems="stretch"
      className={classes.grid}>
      <Grid item className={classes.avatarContainer}>
        <div className={classes.avatarBorder}>
          <Avatar className={classes.avatar} src={avatar} />
        </div>
      </Grid>
      <Grid item className={classes.gridItem} >
        <GlassPane />
      </Grid>
      <Grid item className={`${classes.paperContainer}`}>
        <Paper className={classes.paper}>
          <Grid container className={classes.linkButtonContainer} spacing={0}>
            <Grid item xs={12}>
              <Button variant="outlined" className={classes.linkButton} href="mailto:kerberosthedemon@yandex.com">Contact</Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" className={classes.linkButton} href="https://www.linkedin.com/in/nicolas-espindola-69435559/">LinkedIn</Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" className={classes.linkButton} href="https://nicolas-espindola.xyz">Blog</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
