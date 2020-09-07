const styles = theme =>({

  "@global": {
    body:{
      backgroundColor: "#060b14",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100%"
    },
  },
  paper:{
    display:'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent:'center',
    backgroundColor: "#060b14",
    marginTop:"10%",
    marginLeft:"30%",
    marginRight:"30%",
    paddingLeft:"10%",
    paddingRight:"10%"
  },
  contact:{
    color:'#e4e9f2',
    fontSize:40,
    marginBottom:0
  },
  me:{
    color:'#79912a',
  },
  email:{
    color:'#e4e9f2'
  },
  divider:{
    color:'#79912a',
  },
  reach:{
    color:'#e4e9f2'
  },
  typography:{
    // paddingLeft:150,
    // paddingRight:150
  }
})

export default styles;