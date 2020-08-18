import React from 'react'
import './avatarGlass.css'
import { Typography, Paper, Button, Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import avatar from './../../../img/nico.png';

const useStyles = makeStyles(theme => {
  return {
    box: {
      // padding: theme.spacing(2)
      position: 'relative',
      /* max-width: 600px; */
      'box-shadow': '0 5px 15px rgba(0,0,0,.5)',
      overflow: 'hidden',
      color: '#000',
      height: '100%',
      '&::before': {
        content: '" "',
        position: 'absolute',
        top: '-20px',
        left: '-20px',
        right: '-20px',
        bottom: '-20px',
        background: 'url(https://images.unsplash.com/photo-1485378980564-c9a7bb6287c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80)',
        'background-attachment': 'fixed',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        filter: 'blur(5px)',
      }
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
      'justify-content': 'center',
      'align-content': 'space-around',
      'flex-direction': 'column',
      height: '100vh',
      flexWrap: 'nowrap'
    },
    gridItem: {
      minWidth: '300px'
    },
    gridContainer: {
      'justify-content': 'end',
      height: '100%',
      padding: theme.spacing(2),
      alignItems: 'center'
    },
    avatar: {
      transform: 'translateY(3px) translateX(3px)',
      height: '150px',
      width: '150px',
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
    },
    avatarBorder: {
      // background: 'linear-gradient(to top, #ff1744, #ff1744)',
      background: '#808080',
      width: '156px',
      height: '156px',
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
    section: {
      position: 'relative',
      height: '200px'
    }
  }
});

export default function AvatarGlass() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.grid}>
      <Grid item className={classes.avatarContainer}>
        <div className={classes.avatarBorder}>
          <Avatar className={classes.avatar} src={avatar} />
        </div>
      </Grid>
      <Grid item className={classes.gridItem} >
        <section className={classes.section}>
          <div className={`${classes.box}`}>
            <Grid container direction="column" spacing={0} className={classes.gridContainer}>
              <Grid item className={classes.titleContainer}>
                <Typography className={classes.title} variant="h5">Nicolas Espindola</Typography>
              </Grid>
              <Grid item>
                <Button size="small" variant="outlined" className={classes.button}>Web Developer</Button>
              </Grid>
            </Grid>
          </div>
        </section>
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
