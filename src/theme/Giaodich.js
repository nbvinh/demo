import {
    StyleSheet
} from 'react-native';

const StyleGiaoDich = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 8,
    },
    header:{
         marginVertical: 30, height: 30, flexDirection: 'row'
    },
    header_text:{
        textAlign:'center', width: '85%', color:'white', fontSize: 17, fontWeight: '500'
    },
    Box:{
        backgroundColor: '#272738',
        height: 96,
        borderRadius: 8,
        flexDirection:'row',
        padding: 8,
        marginTop: 8
    },
    Box_Left:{
        flex: 2.5,
        justifyContent:'center',
        alignItems:'center'
    },
    Box_Right:{
        flex: 7.5,
        justifyContent:'space-around'
    },
    Box_Right_TieuDe:{
        color:'#FFFFFF',
        fontSize: 17,
        fontWeight: '500'
    },
    Box_Right_Content:{
        color:'rgba(255, 255, 255, 0.8)',
    },
    Text_Tieude:{
        color:'#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    Box_DoiDiem:{
        marginTop: 10,
        flexDirection:'row',
        alignItems:'center',
        height: 48,
        padding: 16,
        backgroundColor:'#272738',
        borderRadius: 8,
    },
    TongTien:{
        height: 50,
        color: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        marginVertical: 10
    },
    Text_White:{
        color: 'white',
        fontSize: 16,
        fontWeight: '500',

    },
    PhuongThucThanhToan:{
        height: 100,
        marginBottom: 40
    },
    Item_ThanhToan:{flexDirection:'row',  alignItems:'center', marginVertical: 10},
    Text_ChonThanhToan:{
        color:'white',
        paddingLeft: 10,
        fontSize: 15,
    }
    
});
export default StyleGiaoDich;