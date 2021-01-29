import {
    StyleSheet
} from 'react-native';


const StyleLichSu = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 12
    },
    item:{
        height: 24,
        flexDirection:'row'
    },
    item_left:{
        flex: 8,
        
    },
    item_right:{
        flex: 2,
        justifyContent:'flex-end'
    }
});
export default StyleLichSu;