import {
    StyleSheet
} from 'react-native';

const Style_Chitiet_giaodich = StyleSheet.create({
   container:{
       
      width:'100%',
      height:'100%',
      
      backgroundColor:'black',
      position:'relative'
   },
   content_top:{
       flexDirection:'row',
       justifyContent:'space-between'
    ,marginVertical:26
    },
   State:{
       color:'white',
       fontSize:17,
       fontWeight:'bold'
   },
   content:{
      
       paddingHorizontal:13,
       backgroundColor:'#272738',
       borderRadius:8,
       
   },
   item:{
       
       marginVertical:12
   },
   box:{
       flexDirection:'row',
      
       justifyContent:'space-between'
   },
   text:{
       color:'white',
       fontWeight:'normal',
       fontSize:15
   },
   indicator:{
      height:'10%',
       backgroundColor:'green',
       marginTop:80
   },
   detail:{
       backgroundColor:'red',
       
       marginTop:80
   },
   indicator1:{
       backgroundColor:'orange',
       height:'30%'
   },
   transform:{
       flexDirection:'row',
       justifyContent:'space-between',
       paddingVertical:9
   },
   code:{
       color:'#A9A9AF',
       fontSize:15,
       fontWeight:'normal'
   },
   code_2:{
       color:'#FFFFFF',
       fontSize:15,
       fontWeight:'normal'
   }
  
   
  
})
export default Style_Chitiet_giaodich;