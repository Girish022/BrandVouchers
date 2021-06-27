import {  makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container:{
    padding:'20px 0',
  },
  card:{
   height:'100%',
   display:'flex',
   flexDirection:'column'

  },
  cardMedia:{
   paddingTop:'56.25%'
  },
  cardContent:{
   flexGrow:'1'
  }



 
  
}));