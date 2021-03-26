import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import AppStyle from "../theme";
const Header = ({onpress,item})=>{
    return(
        <View style={AppStyle.StyleVoucherCGV.header}>
        <TouchableOpacity onPress={onpress} >
            <Image
                width={10} height={18}
                source={require('../img/back.png')}
            />
        </TouchableOpacity>
        <Text style={AppStyle.StyleVoucherCGV.text}>{item}</Text>
    </View>
    )
}
export default Header;