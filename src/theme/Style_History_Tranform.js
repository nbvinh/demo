import {
    StyleSheet
} from 'react-native';

const Style_History_Tranform = StyleSheet.create({
   container:{
       backgroundColor:'black',flex:1
   },
   header:{
       flexDirection:'row',
       justifyContent:'space-between',
       height:90,
       paddingTop:15,
       paddingHorizontal:10,
      
       
   },
   Image1:{
       width:27,height:27
   },
    header_title: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '500'
     },
   text:{
       color:'#C0C0C0',
       paddingHorizontal:10,
       fontSize:15,
       fontWeight:'normal',
       fontStyle:'normal',
       paddingBottom:10
   },
   content:{
       flex:1,
       
   },
   item:{
       backgroundColor:'#272738',
       height:110,
       justifyContent:'space-between',
       paddingHorizontal:16,marginHorizontal:10,
       marginBottom:16,
       borderRadius:8
   },
   content_text:{
       color:'#FFFFFF',
       fontSize:15,
       fontWeight:'normal',
       fontStyle:'normal',
       paddingTop:10
   },
   cost:{
    flexDirection:'row',
    justifyContent:'space-between'
   },
   content_cost:{
    color:'#FFFFFF',
    fontWeight:'bold',
    fontSize:15,paddingTop:8
   },
   Image_right:{
       width:10,height:10,
        marginTop:17,right:9
   },
   bottom:{
       flexDirection:'row',
       marginVertical:12
   },
   ImageStatus:{
   marginTop:4
   },
   status:{
       fontSize:14,
       fontWeight:'normal',
       fontStyle:'normal',
       color:'#A9A9AF',
       paddingLeft:10
   }
   
   
  
})
export default Style_History_Tranform;