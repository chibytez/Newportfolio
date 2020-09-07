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
  placer:{
     display:'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent:'center'
  },
  works:{
    color:'#e4e9f2',
    fontSize:40,
    marginBottom:0,
    marginTop:100
  },
  seperate:{
    color:'#79912a',
  },
  check:{
    color:'#e4e9f2',
    margin:0
  },
  project:{
    color:'#e4e9f2',
    fontSize:40,
    marginBottom:0,
  },
  projects:{
    color:'#e4e9f2',
    marginTop:0,
    marginBottom:0,
    marginLeft:40
  }
  
});

export default styles;