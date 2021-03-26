import {
    StyleSheet
} from 'react-native';

const StyleGiaoDich = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
      
    },
    header:{
         height: 30, flexDirection: 'row'
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
        margin: 8
    },
    Box_Left:{
        flex: 2.5,
        justifyContent:'center',
        alignItems:'center',
        marginRight: 6
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
        fontWeight: '500',
        marginVertical: 12,
    },
    Box_DoiDiem:{
        marginVertical: 12,
        flexDirection:'row',
        alignItems:'center',
        height: 48,
        padding: 8,
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
        paddingHorizontal: 10,
        marginRight: 5,
        fontSize: 15,
    },
    Tieude_QuyDoi:{
        color:'#ffffff', fontSize: 14, fontWeight:'400', lineHeight: 18
    },
    So_QuyDoi:{
        color:'#ffffff', fontSize: 20, fontWeight:'500', lineHeight: 25
    },
    Table_QuyDoi:{
        height: 166,borderRadius: 8,backgroundColor:'#272738', padding: 16
    },
    Hang_QuyDoi:{
        flex: 1, flexDirection:'row', marginVertical: 8
    },
    Hang_QuyDoi_Left:{
        flex: 0.4,justifyContent:'flex-start'
    },
    Hang_QuyDoi_Right:{
        flex: 0.6, alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between'
    },
    
    
});
export default StyleGiaoDich;