import {
    StyleSheet
} from 'react-native';

const Style_Chitiet_Giaodich = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
       
    },
    header_title:{
        color:'#FFFFFF',
        fontWeight:'500',
        fontSize:17
    },
    Image:{
      marginLeft:8
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30
    },
    body:{
        height:'45%',
        backgroundColor:'#272738', 
        marginHorizontal:16,
        marginVertical:20,
        borderRadius:8,
        flex:1
    },
    title:{
        color:'#FFFFFF',
        fontSize:17,
        fontWeight:'bold',
        paddingLeft:15,
        paddingVertical:15,
       
    },
    body_item:{
        
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        marginBottom:2,
        height:40,
        marginVertical:10
    },
    content:{
        fontSize:15,
        fontWeight:'normal',
        color:'#FFFFFF'
    },
    status:{
        fontSize:14,
        fontWeight:'bold',
        color:'#FFFFFF',
        paddingHorizontal:16,marginBottom:30,marginVertical:20
    },
    bottom:{
        backgroundColor:'black',flex:1
    }


})

export default Style_Chitiet_Giaodich;