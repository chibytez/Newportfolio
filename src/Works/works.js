import React from 'react';
import styles from "../styles/workStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {Grid} from '@material-ui/core';
import Link from '@material-ui/core/Link';

const Works = (props) => {
  const {classes} = props
  return (
    <div className={classes.placer}>
     <Typography>
       <h1 className={classes.works}>My <span className={classes.seperate}>Works</span></h1>
       <p className={classes.check}>Check out some of my projects</p>
     </Typography>
     <Grid container spacing={3}  className={classes.placer}>
        <Grid item xs={12}>
         <h1 className={classes.project}>Backend <span  className={classes.seperate}>Projects</span></h1>
        </Grid>  
        <Grid item xs={12}>
         <Link style={{ textDecoration: 'none' }} href='https://github.com/chibytez/MyWayFarer'>
           <p className={classes.projects}>My WayFarer App</p>
         </Link>
        </Grid>
        <Grid item xs={12}>
         <Link style={{ textDecoration: 'none' }} href='https://github.com/chibytez/My-Banka'>
           <p className={classes.projects}>My Banka App</p>
         </Link>
        </Grid>   
        <Grid item xs={12}>
         <Link style={{ textDecoration: 'none' }} href='https://github.com/chibytez/Fast-Food-Fast'>
           <p className={classes.projects}>Fast Food App</p>
         </Link>
        </Grid> 
     </Grid>
     <Grid container spacing={3}  className={classes.placer}>
        <Grid item xs={12}>
         <h1 className={classes.project}>Frontend <span  className={classes.seperate}>Projects</span></h1>
        </Grid>  
          <Grid item xs={12}>
            <Link style={{ textDecoration: 'none' }} href='https://chibytez.github.io/shopmate/'>
              <p className={classes.projects}>Shopmate</p>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link style={{ textDecoration: 'none' }} href='https://github.com/chibytez/TodoWithCOontext'>
              <p className={classes.projects}>Todo App</p>
            </Link>
          </Grid>      
     </Grid>
     <Grid container spacing={3}  className={classes.placer}>
        <Grid item xs={12}>
         <h1 className={classes.project}>FullStack <span  className={classes.seperate}>Projects</span></h1>
        </Grid>  
          <Grid item xs={12}>
              <Link style={{ textDecoration: 'none' }} href='https://salty-headland-32091.herokuapp.com/'>
                <p className={classes.projects}>My Dairy App</p>
              </Link>
          </Grid>
          <Grid item xs={12}>
              <Link style={{ textDecoration: 'none' }} href='https://github.com/chibytez/nba-app-full/'>
                <p className={classes.projects}>My Nba App</p>
              </Link>
          </Grid>    
     </Grid>
     
    </div>
  );
};

export default withStyles(styles)(Works);