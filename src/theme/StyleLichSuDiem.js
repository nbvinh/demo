import {
    StyleSheet
} from 'react-native';


const StyleLichSuDiem = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 8
    },
    header:{
          height: 30, flexDirection: 'row'
    },
    header_text:{
        textAlign:'center', width: '85%', color:'white', fontSize: 17, fontWeight: '500'
    },
    Box:{
        marginTop: 8,
        height: 115,
        borderRadius: 8,
        backgroundColor: '#272738',
        flexDirection:'row',
        padding: 16,
        justifyContent:'space-between',
        overflow: 'hidden'
    },
    Box_Center:{
        marginLeft: 12,
        flex: 6,
        justifyContent:'space-between'
    },
    Box_Center_Title :{
        color:'white',
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 22
    },
    Box_Center_Time:{
        color:'#A9A9AF',
    },
    Box_Center_Status:{
        color:'#A9A9AF',
    },
    Box_Status_True :{
        width: 12,
        height: 12,
        backgroundColor:'#32C000',
        borderRadius: 50
    },
    Box_Status_False :{
        width: 12,
        height: 12,
        backgroundColor:'#DD1F1F',
        borderRadius: 50
    },
    Box_Point:{
        color:'white', fontWeight:'500', fontSize: 15, justifyContent:'flex-end'
    }
    
});
export default StyleLichSuDiem;