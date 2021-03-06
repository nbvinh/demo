import {
    StyleSheet
} from 'react-native';

const StyleMain = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        
       
    },
    header:{
        flex: 1.5,
        height: 55,
        flexDirection:'row'
    },
    header_left:{
        flex: 8,
        alignItems:'center',
        flexDirection:'row'
    },
    header_right:{
        flex: 2,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    css_text:{
        fontSize: 20,
        fontWeight:'bold',
        color:'white',
        paddingLeft: 10
    },
    search:{
        flex: 1,
        marginTop: 4,
        height: 50,
        flexDirection: 'row'
    },
    search_left:{
        flex: 7.2,
        backgroundColor:'#272738',
        borderRadius: 8,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    search_right:{
        flex: 2.8,
        alignItems:'center',
        justifyContent: 'center',
    },
    poin_your:{
        flex: 1.7,
        marginTop: 8,
        backgroundColor: 'blue',
        height: 75,
        backgroundColor:'#272738',
        borderRadius: 8,
        flexDirection:'row',
       justifyContent:'space-between',
        padding: 12,
    },
    poin_your_left:{
        flex: 1,
        justifyContent:'space-between'
        
    },
    poin_your_right:{
        flex: 1,
        alignItems:'flex-end',
        justifyContent:'space-between'
    },
    option:{
        flex: 2,
        marginTop: 8,
        backgroundColor: "#272738",
        height: 150,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        padding: 12,
        justifyContent:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap'

    },
    option_item:{
        width: '25%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 18
    },
    option_itemtext:{
        color:'white',
        fontSize: 12,
        paddingTop: 10,
    },
    DichVu : {
        flex: 2,
        backgroundColor: "#272738",
        height: 229,
        marginTop: 8,
        borderRadius: 8,
        padding: 8,
        position: 'relative'
    },
    DichVu_Top:{
        flex: 6,
        flexDirection:'row'

    },
    DichVu_Left:{
        flex: 6.2,
        borderRadius: 8,
        overflow:'hidden'
    },
    DichVu_Right:{
        flex: 3.8,
       
    },
    DichVu_RightItem:{
        flex: 1,
        marginLeft: 5,
       justifyContent:'space-between',
       
    },
    DichVu_Bottom:{
        flex: 4,
        marginTop: 5
    },
    DichVu_Bottom_Top:{
        flex: 1,
        flexDirection:'row',
      
        marginTop: 5,paddingBottom:10
    },
    DichVu_Bottom_Top_TextTieuDe:{
        fontSize: 17,
        fontWeight:'500',
        color:'white'
    },
    DichVu_Bottom_Top_TextDuoi:{
        color:'#9B9EA3',
        fontSize: 12,
    },
    DichVu_Bottom_Bottom:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center'
    },
    DichVu_Bottom_BottomLeft:{
        flex: 1,
        flexDirection:'row'
    },
    DichVu_Bottom_BottomRight:{
        flex: 1,
        alignItems:'flex-end'
    }
    


    
})
export default StyleMain;