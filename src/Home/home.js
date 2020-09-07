import React from 'react';
import styles from "../styles/homestyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';

const Home = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Typography>
        <div className={classes.names}>
          <h1 className={classes.firstname}>Chibuike <span className={classes.lastname}> Aniaku</span> </h1> 
          <div className={classes.about}>Software Developer And Quality Assurance Engineer</div>
        </div>
       
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Home);