import React from 'react';
import {Grid} from '@material-ui/core';
import styles from "../styles/aboutStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const About = (props) => {
  const {classes} = props
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <h1 className={classes.about}>About <span className={classes.me}>Me</span></h1>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <p className={classes.tell}>Let me tell you a few things...</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <div  >
              <img className={classes.picture} src={"https://res.cloudinary.com/dcwpgksxc/image/upload/v1537271212/me.jpg"} alt="recipe thumbnail"/>
          </div>
        </Grid>
       <Grid item xs>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p className={classes.bio}>Bio</p>
          </Grid>
          <Grid item xs={12}>
            <Paper>
            <Typography>
              <p className={classes.info}>I'm a Software developer with Above 
                Two(2) years of experience in web and software development. I am
                also a Quality Assurance Specialist(Software Tester).I am a 
                self-taught developer. I've been investing an insane amount 
                of hours in self-development, ever ready to learn, build, ship, 
                and improve top class software solutions using world-class tools.
                I have a strong passion for technology, especially software. 
                I'm also a good team player with excellent communication 
                skills. I'm enthusiastic about using technology to solve 
                real-world problems and I'm ever ready to be involved in 
                building the next big thing. 
              </p>
            </Typography>
            </Paper>
          </Grid>
        </Grid>
       </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
         <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className={classes.ware}>Software <span className={classes.dev}>Development</span></h1>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.soft}>I collaborate with clients and peers to transform their ideas 
              into products and their passion into businesses with good user experiences.
            </p>
          </Grid>
         </Grid>
        </Grid>
        <Grid item xs>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <h1 className={classes.ware}>Quality <span className={classes.dev}>Assurance</span>(Tester)</h1>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.soft}>Design and execute tests, Find issues and provide suggestions
               for test builds. Troubleshoot with employees and end-users issues. Gather suggestions 
               from end-users.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h1 className={classes.ware}>Skills/<span className={classes.dev}>Tools</span></h1>
            </Grid>
            <Grid item xs={12}>
             <Grid container spacing={3}>
              <Grid item  className={classes.soft}>
                  <ol>NodeJs</ol>
                  <ol>React</ol>
                  <ol>Javascript</ol>
                  <ol>Graphql</ol>
                  <ol>CSS</ol>
                  <ol>HTML</ol>
                  
                
              </Grid>
              <Grid item xs  className={classes.soft}>
                  <ol>UAT Testing</ol>
                  <ol>Smoke Testing</ol>
                  <ol>Documentation</ol>
                  <ol>ADB</ol>
                  <ol>Traffic Testing</ol>
                  <ol>Testing</ol>
              </Grid>
             </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    
  );
};

export default withStyles(styles)(About);