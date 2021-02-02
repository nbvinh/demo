import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import AppStyle from "../../theme";

const Footer = ({navigation}) => {
    return (
        <View style={AppStyle.StyleVoucherCGV.footer}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={AppStyle.StyleVoucherCGV.img3}
                    source={require('../../img/vinh8.png')}
                />
                <Text style={AppStyle.StyleVoucherCGV.text9}>440.000 đ</Text>

            </View>
            <View style={AppStyle.StyleVoucherCGV.footer1}>
                <Text style={AppStyle.StyleVoucherCGV.text10}>5</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('GioHang')}>
                <Image

                    style={AppStyle.StyleVoucherCGV.img4}
                    source={require('../../img/vinh0.png')}
                />

            </TouchableOpacity>
        </View>
    )
}
export default Footer;