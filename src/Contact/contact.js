import React from 'react';
import styles from '../styles/contactStyles';
import {Grid} from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Contact = (props) => {
  const{classes} = props
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography className={classes.typography}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1 className={classes.contact}>Contact <span className={classes.me}>Me</span></h1>
              </Grid>
              <Grid item xs={12}>
                <p className={classes.reach}>You can reach through the following:</p>
              </Grid>
           </Grid>
           <Grid container spacing={3}>
              <Grid item xs={8}>
                <h3 className={classes.email}>Email: <span className={classes.divider}>aniakuchibuike@gmail.com</span></h3>
              </Grid>
              <Grid item xs={8}>
              <h3 className={classes.email}>Phone: <span className={classes.divider}>+2347060848195</span></h3>
              </Grid>
              <Grid item xs={8}>
              <h3 className={classes.email}>Address: <span className={classes.divider}>Lagos</span></h3>
              </Grid>
           </Grid>
        </Typography>
       
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Contact);