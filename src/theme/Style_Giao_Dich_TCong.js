import {
    StyleSheet
} from 'react-native';

const Style_Giao_Dich_TCong = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'black',
        overflow: 'hidden'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 35
    },
    State: {
        fontSize: 17,
        fontWeight: '500',
        color: '#FFFFFF'
    },
    Image: {
        left: 16,

    },
    information: {
        backgroundColor: '#272738',
        height: 168,
        borderRadius: 8, marginHorizontal: 16
    },
    title_header: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 17, paddingHorizontal: 13,
        paddingTop: 16
    },
    content: {
        paddingHorizontal: 13,
        height: 110, justifyContent: 'space-between'
    },
    item: {
        flexDirection: 'row'
    },
    item1: {
        flexDirection: 'row'
    },
    item2: {
        flexDirection: 'row',
    },
    left: {
        flex: 8, color: '#BDBDBD',
        fontSize: 15,
        fontWeight: 'normal'
    },
    right: {
        flex: 5,
        justifyContent: 'flex-end',
        color: '#FFFFFF',
        fontSize: 11, textAlign: 'right'
    },
    detail: {
        backgroundColor: '#272738',
        height: 168,
        borderRadius: 8, marginHorizontal: 16,
        marginTop: 25
    },
    content_detail: {
        paddingHorizontal: 13,
        height: 140, justifyContent: 'space-between',
        paddingTop: 16
    },
    right_status: {
        color: "#8B3BFF",
        textAlign: 'right',
        fontSize: 15,
        fontWeight: 'normal', flex: 5
    },
    button: {
        marginVertical: 56, marginHorizontal: 13
    },
    pay:{
        color:'#FFFFFF',
        fontWeight:'normal',
        fontSize:17
    },
    status_item: {
        width: 359,
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
export default Style_Giao_Dich_TCong;