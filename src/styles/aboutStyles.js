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
  about:{
    marginLeft:50,
    marginTop: 100,
    paddingBottom:0,
    marginBottom:0,
    fontWeight:'bold',
    fontSize:60,
    color:'#e4e9f2',
  },
  me:{
    color:'#79912a',
  },
  tell:{
    color:'#e4e9f2',
    marginTop:0,
    marginLeft:50,
    fontSize:20,
  },
  bio:{
    marginTop:0,
    marginBottom:0,
    marginLeft:70,
    color:'#79912a',
    fontSize:40,
  },
  info:{
    backgroundColor: "#060b14",
    fontSize:30,
    color:'#e4e9f2',
  },
  picture:{
    borderRadius:"50%",
    marginTop:100,
    marginBottom:0,
    marginLeft:70,
    height:600,
    weight:400
  },
  ware:{
    color:'#e4e9f2',
    marginBottom:0
  },
 dev:{
  color:'#79912a',
 },
 soft:{
  color:'#e4e9f2',
  marginTop:0
 }
 
})

export default  styles;