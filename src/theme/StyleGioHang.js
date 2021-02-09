import { StyleSheet } from "react-native";

const StyleGioHang =StyleSheet.create({
    address1:{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 20 },
    img1:{ width: 52, height: 52, marginRight: 15 },
    text1:{ color: '#B738FF', fontSize: 13, fontWeight: '400' },
    text2:{ color: '#FFFFFF', fontSize: 13, fontWeight: '400', marginLeft: 35, marginTop: 10 },
    address2:{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 10 },
    img2:{ width: 18.5, height: 16.67, marginTop: 10 },
    content1:{ width: 239, height: 40, backgroundColor: '#222222', borderRadius: 28 },
    text3:{ color: '#DCDCDC', fontSize: 13, fontWeight: '400', marginTop: 10, textAlign: 'center' },
    img3:{ width: 6.59, height: 11.17, marginTop: 13, marginLeft: 10,marginBottom:13 },
    footer:{ flex: 4, backgroundColor: '#272738', borderTopLeftRadius: 16, borderTopRightRadius: 16 },
    content2:{ flexDirection: 'row', justifyContent: 'space-between' },
    content3: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 7 },
    content4:{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
    img4:{ width: '100%', borderRadius: 8, height: 48, marginTop: 40 },
    modal1:{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
    content5:{ position: 'absolute', bottom: 0, backgroundColor: 'white', height: '28%', width: '100%', borderTopLeftRadius: 16, borderTopRightRadius: 16 },
    content6:{ flexDirection: 'row', borderBottomWidth: 0.5 },
    text4:{
        fontWeight: '500',
        color: 'black',
        fontSize: 15,
        lineHeight: 26,
        marginLeft: 20, marginTop: 5
    },
    text5:{
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22,
        fontStyle: 'normal',
        marginLeft: 20
    },
    touchable1:{ marginLeft: 40, marginBottom: 25 },
    img5:{ width: 26.67, height: 26.67 },
    text6:{
        marginHorizontal: 10,
        fontSize: 20,
        color: 'black'
    },
    img6:{ width: 26.67, height: 26.67 },
    content7:{
        height: 84,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text7:{
        fontSize: 22,
        color: 'black',
        marginLeft: 20,
        lineHeight: 28,
        fontWeight: '700'
    },
    content8:{
        backgroundColor: 'red',
        height: 16,
        width: 16,
        borderRadius: 10,
        position: 'absolute',
        left: 25,
        top: 23,
        borderWidth: 1,
        borderColor: '#FFFFFF'
    },
})
export default StyleGioHang;