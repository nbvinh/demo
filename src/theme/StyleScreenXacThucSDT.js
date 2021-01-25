import {
    StyleSheet
} from 'react-native';

const StyleScreenXacNhanSDT = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingHorizontal: 10
    },
    header:{
        flex: 2
    },
    content:{
        flex: 3,
       
    },
    footer:{
        flex: 3
    },
    tieude:{
        color: 'white',
        fontSize:22,
        
        fontWeight:'bold'
    }, chube:{
        fontSize: 15,
        marginTop: 10,
        color:'rgba(255, 255, 255, 0.5)'
    },linear: {
        borderRadius: 8,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    linearnotactive:{
        borderRadius: 8,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        opacity: 0.3
    },
    text: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '500',
        color: '#FFFFFF'

    },
    inputOTP:{
       height: 50,
       flexDirection: 'row',
       justifyContent:'space-between',
       margin: 20
    },
    input_item_OTP:{
        width: 40,
        height: 40,
        borderRadius: 8,
        borderColor: '#272738', 
        borderWidth: 1,
        color:'white',
        textAlign: 'center'

    },
    textguilaisau:{
        color:'#AD00FF',
        textAlign:'center',
        fontSize: 12,marginVertical: 10
    }
})
export default StyleScreenXacNhanSDT;