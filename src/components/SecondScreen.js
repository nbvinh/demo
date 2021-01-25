import React, { useState } from "react";
import { View, Text, StatusBar } from 'react-native';
import AppStyle from "../theme";
import StyleFirst from "../theme/StyleFirst";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";

const SecondScreen = ({ navigation}) => {
    const [data, setData] = useState({
        phone : '',
    })
    // const handlePhone = (val) => {
    //     if (val.trim().length > 0) {
    //         setData({
    //             ...data,
    //             phone: val,
    //             check_textInPut: true,
    //         });
    //     }
    //     else {
    //         setData({
    //             ...data,
    //             phone: val,
    //             check_textInPut: false,
    //         })
    //     }
    // }
    const handlePhone = (val) => {
        let clonedata = data;
        if (val.trim().length > 0) {
            clonedata.phone = val,
            clonedata.isChecked = true;
        }
        else{
            clonedata.isChecked =false;
        }
        setData({ ...clonedata })
    }
    return (
        <View style={AppStyle.StyleFirst.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={AppStyle.StyleSecond.content}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" color='#FFFFFF' size={22} style={AppStyle.StyleSecond.icon} />
                </TouchableOpacity>

                <View style={{ marginTop: 90 }}>
                    <Text style={AppStyle.StyleSecond.text0}>Đăng Nhập/ Đăng Ký</Text>
                    <Text style={AppStyle.StyleSecond.text1}>Vui lòng nhập số điện thoại để tiếp tục</Text>
                </View>
                <TextInput
                    style={AppStyle.StyleSecond.textinput}
                    placeholder="Nhập số điện thoại"
                    placeholderTextColor="#FFFFFF"
                    keyboardType="number-pad"

                    onChangeText={(val) => handlePhone(val)}
                />
                {data.isChecked ?
                    <LinearGradient
                        style={AppStyle.StyleFirst.linear}
                        colors={['#8B3BFF', '#B738FF']}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate('ScreenXacThucSDT', data)} >
                            <Text style={AppStyle.StyleFirst.text}>Tiếp Tục</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    :

                    <LinearGradient
                        style={AppStyle.StyleFirst.linear}
                        colors={['#B738FF', '#8B3BFF']}
                    >
                        <Text style={AppStyle.StyleSecond.text2}>Tiếp Tục</Text>
                    </LinearGradient>
                }
            </View>

            {/* <View>
                {data.isChecked &&(
                    <Text style={AppStyle.StyleFirst.text}>{data.phone}</Text>
                ) }
                <Text></Text>
            </View> */}
        </View>
    )
}
export default SecondScreen;

