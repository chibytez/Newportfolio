const styles = theme =>({
  "@global": {
    body:{
      backgroundImage: "url('https://res.cloudinary.com/dcwpgksxc/image/upload/v1599216933/photo-1505238680356-667803448bb6_2.jpg')",
      backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
      height: "100%",
      
      
    },
  },
  root:{
    display:'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent:'center',
  },
  names:{
    marginLeft:50,
    marginTop: 220,
    paddingBottom:0,
    marginBottom:0,
    fontWeight:'bold',
    fontSize: 40
   },
  firstname:{
    color:'#e4e9f2',
    margin:0
  },
  lastname:{
    color:'#79912a'
  },
  about:{
    color:'#e4e9f2',
    fontSize: 25,
    paddingBottom:100
  }
 
})

export default  styles;