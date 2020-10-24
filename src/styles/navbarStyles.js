 
const styles = theme =>({
  "@global":{
    root:{
      width: "100%",
      marginBottom:0
    },
    grow:{
      flexGrow: 1
    },
    menuButton:{
      marginLeft:-12,
      marginRight:20
    },
    title:{
      display: "none",
      [theme.breakpoints.up("sm")]:{
        display:"block"
      },
    },
    open_nav: {
      position: "absolute",
      right:0
    }
  
  },
  social:{
    position:'absolute',
    right:20,
  }
  
})

export default  styles;