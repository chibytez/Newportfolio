import React,{ useState } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {withStyles} from "@material-ui/core/styles";
import styles from "../styles/navbarStyles";
import Nav from "./SideNav/sideNav"


function Header (props){
  const [showSidebar, setShowSidebar] = useState(false)
  
  const hideNav =() => setShowSidebar(false);
  const {classes} = props;
  return(
    
       <header className={classes.root}>
          <AppBar color="primary" position="absolute" style={{height:"64px",width:"100%", backgroundColor:"#2b2f36"}}>
            <Toolbar>
             <IconButton className={classes.menuButton} color='inherit'>
                <MenuIcon  onClick={()=>setShowSidebar(!showSidebar)} />
              </IconButton>
              <Typography className={classes.title} variant='h6' color='inherit'>
                Welcome 
              </Typography>
              <Nav
                showNav={showSidebar}
                hideNav={()=>hideNav()}
              />
              <div className={classes.social}>
                <GitHubIcon aria-label="github.com" onClick={() => window.open('https://github.com/chibytez')}/>
                <FacebookIcon  aria-label="facebook.com" onClick={() => window.open('https://web.facebook.com/chibytez/')}/>
                <LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/aniaku-chibuike-505311129/')}/>
              </div>
              <div className={classes.grow}/>
            </Toolbar>
          </AppBar>
        </header>
  )
}


export default  (withStyles(styles)(Header));