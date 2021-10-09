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
              <p className={classes.info}> 
              I’ve been a QA (manual and automation) for over
4 years, recently focused on detecting defects on applications and making sure end result meets
the business and user requirements.
I am currently working as a Quality Assurance/Test Engineer with the development team at
Parkway Project Limited, where we build and maintain various products running on the
platform. I’ve been able to learn how to automate both mobile and web applications using
clean test scripts, and interact with other team members like developers, designers, product
managers, etc. I am currently leading in the testing of a multi-delivery products that aimed to
provides simple, intuitive, end-to-end corporate, retail and transaction banking solutions. I’ve also picked
up interest in penetration testing using burp suite as its usage has been growing in recent
times. At Opera, I was the lead local software tester for Nigeria, I locally test various Opera products
like Opera Mini and Opera News. When I am not working, I can be found watching sci-fi movies
and series or on my PlayStation.
With my determination, passion for software development, and the ability to adapt to new
languages, and environments, I believe I will be a good fit as a Quality Assurance/Test Engineer.
Having used JavaScript (Node.js, React, Graphql), Postman (automation and manual), Jmeter
and test automation tools like Selenium, Cypress and Appium for about 4+ years.


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
                  <ol>Git</ol>
                  
                
              </Grid>
              <Grid item xs  className={classes.soft}>
                  <ol>Manuel Testing</ol>
                  <ol>Automation Testing</ol>
                  <ol>Appium</ol>
                  <ol>Selenium</ol>
                  <ol>Cypress</ol>
                  <ol>Postman</ol>
                  <ol>Jmeter</ol>
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