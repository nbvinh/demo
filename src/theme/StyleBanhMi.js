import {
    StyleSheet
} from 'react-native';

const StyleBanhMi = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 12,
        
    },
    header:{
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Text_Header:{
        fontSize: 17,
        fontWeight: '500',
        color: 'white'
    },
    Content:{
        height: 200,
        flex: 1
    },
    DiaChi:{
        color:'#9B9EA3',fontSize : 13, paddingVertical: 6
    },
    Content_Bottom:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    Content_BottomLeft:{
        flex: 7
    },
    Content_BottomRight:{
        flex: 3.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center'
    },
    ListButtonMon:{
        flexDirection :'row',
        marginTop:30,
    },
    NutChonMon:{
        marginLeft: 15,
        height: 36, width: 76, justifyContent:'center', alignItems:'center', borderRadius: 8
    },
    TextNutChonMonActive:{
        fontSize: 13, fontWeight:'400', color: '#ffffff'
    },
    TextNutChonMonNotActive:{
        fontSize: 13, fontWeight:'400', color: 'rgba(255, 255, 255, 0.45)'
    },
    NutChonMonNotAcTive:{
        backgroundColor:'rgba(39, 39, 56, 0.75)',

    },
    ListMon:{
        marginTop: 12,
        height: 400
    },
    TenLoai:{
        fontSize:17,
        fontWeight:'500',
        color:'#ffffff'
    },
    MonAn:{
        height: 98,
        padding: 8,
        borderRadius: 8,
        backgroundColor:'#272738',
        flexDirection:'row',
        marginTop: 12,
    },
    MonAn_Content:{
        justifyContent:'space-between',
        padding: 10,
        flex: 2.5
    },
    MonAn_ContentText:{
        color:'white',
        fontSize:15,
        fontWeight:'400'
    },
    NutChonMua:{
        height: 28, width: 28,justifyContent:'center', alignItems:'center', borderRadius: 8
    },
    TextNutChonMua:{
        color:'white',
        fontWeight: '500',
        fontSize:24
    },
    IMG_item :{
        height: 70, width:115, marginHorizontal: 5,borderRadius: 8
    }
    
});
export default StyleBanhMi;