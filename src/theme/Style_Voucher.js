import {
    StyleSheet
} from 'react-native';

const Style_Voucher = StyleSheet.create({
    container: {
        flex:2,
        backgroundColor: 'black',
        flexDirection: 'column'
    },
    content_top:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:80,
        paddingVertical:26
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 40
    },
    State:{
        fontSize:17,
        fontWeight:'500',
        color:'#FFFFFF',
        paddingTop: 10
    },
    Image: {
        left: 8,flex:2.2
      
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    header:{
        backgroundColor:'#272738',
        flex:1,
        marginHorizontal:8,
        marginBottom:20,
      
        borderRadius:8,justifyContent:'space-between'
    },
    right:{
        flex:1.2,marginLeft:6
        
    },
    anh:{
        flexDirection:'row',  paddingTop:8,flex:1
    },
    Image_right:{
        marginBottom:8,marginLeft:8,width:'87%'
    },
    content:{
        marginHorizontal:10,
        flexDirection:'row', paddingTop:1,borderBottomWidth:1,
        borderStyle: 'dotted'    ,paddingBottom:15,
        borderRadius : 1,
    },
    Image1:{
        width:36,
        height:36
    },
    cost:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,marginTop:8,
        paddingBottom:10
        
    },
    cost_left:{
        flexDirection:'row'
    },
    cost_right:{
        flexDirection:'row'
    },
    contentVoucher:{
        fontSize:17,
        fontWeight:'500',
        color:'#FFFFFF',
       
    },
    body_content:{
        marginHorizontal:10
    },
    destination:{
        color:'#9B9EA3',
        fontSize:11,
        fontWeight:'normal'
    },
    cost_main:{
        color:"#FFFFFF",
        fontSize:18,
        fontWeight:'bold'
    },
    costthough:{
        fontSize:15,
        fontWeight:'normal',
        marginHorizontal:10,
        color:'#9B9EA3',
        textDecorationLine:'line-through',
        paddingTop:3
    },Image_anh:{
        width:20,
        height:20,marginRight:4
    },
    pos_left:{
        backgroundColor: 'black', position: 'absolute', width: 67, height: 20, top: 41, borderRadius: 13,
        left: -56
    },
    pos_right:{
        backgroundColor: 'black', position: 'absolute', width: 67, height: 20, top: 41, borderRadius: 13,
        right: -56
    },
    far_away:{
        color:'#FFFFFF',
        fontSize:13,
        fontWeight:'normal'
    }
})
export default Style_Voucher;