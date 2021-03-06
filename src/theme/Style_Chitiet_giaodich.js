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
       
       marginVertical:12,
       justifyContent:'space-between'
   },
   textone:{
    //    flexDirection:'row',
      
    //    justifyContent:'space-between'
    color:'#FFFFFF',
    fontSize:17,
    fontWeight:'bold',paddingBottom:9
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
   amount:{
    fontSize:12,
    color:'#A9A9AF',
    fontWeight:'normal'
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
       fontWeight:'normal',width:160,textAlign:'right'
   },
  
   pay:{
    color:'#FFFFFF',
    fontWeight:'normal',
    fontSize:17
},
status_item: {
    width: 384,
    height: 48,
    borderStyle: 'solid',
    borderColor: '#8B3BFF',
    borderWidth: 2,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 11
    ,
    borderRadius: 8
},
touchable: {
    marginHorizontal: 13,
    marginVertical: 10
}
  
})
export default Style_Chitiet_giaodich;