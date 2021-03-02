import {
    StyleSheet
} from 'react-native';


const StyleLichSu = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 8
    },
    item:{
        height: 24,
        flexDirection:'row',
        marginVertical: 20
    },
    item_left:{
        flex: 8,
        flexDirection: 'row',
        alignItems:'center',
        marginLeft: 6
    },
    item_right:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center'
    }
});
export default StyleLichSu;