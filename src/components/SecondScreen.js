import React, { useState } from "react";
import { View, Text, StatusBar, SafeAreaView, Image, Alert } from 'react-native';
import AppStyle from "../theme";
import StyleFirst from "../theme/StyleFirst";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { send_otp } from "./api";
const SecondScreen = ({ navigation }) => {
    const [data, setData] = useState({
    });

    const [tocken, setTocken] = useState('')
    const handlePhone = (val) => {
        let clonedata = data;
        if (val.trim().length > 0) {
            clonedata.phone = val,
                clonedata.isChecked = true;
        }
        else {
            clonedata.isChecked = false;
        }
        setData({ ...clonedata })
    }
    const onsend_otp = async () => {
        try {
            const result = await send_otp({
                "phone_number": data.phone,
            })
            navigation.navigate('ScreenXacThucSDT', { data: data, token: result.data.data.token });
        } catch (error) {
            Alert.alert('Thông báo', error + '');
        }
    }
    return (
        <SafeAreaView style={AppStyle.StyleMain.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={AppStyle.StyleFirst.container}>
                <View style={AppStyle.StyleVoucherCGV.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image
                            width={10} height={18}
                            source={require('../img/back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={AppStyle.StyleSecond.content}>
                    <View>
                        <Text style={AppStyle.StyleSecond.text0}>Đăng Nhập/ Đăng Ký</Text>
                        <Text style={AppStyle.StyleSecond.text1}>Vui lòng nhập số điện thoại để tiếp tục</Text>
                    </View>
                    <TextInput
                        style={AppStyle.StyleSecond.textinput}
                        placeholder="Nhập số điện thoại"
                        placeholderTextColor="rgba(255, 255, 255, 0.3)"
                        keyboardType="number-pad"


                        onChangeText={(val) => handlePhone(val)}
                    />
                    {data.isChecked ?
                        <TouchableOpacity onPress={onsend_otp} >
                            <LinearGradient
                                style={AppStyle.StyleFirst.linear}
                                colors={['#8B3BFF', '#B738FF']}
                            >
                                <Text style={AppStyle.StyleFirst.text}>Tiếp Tục</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        :

                        <LinearGradient
                            style={[AppStyle.StyleFirst.linear, { opacity: 0.5 }]}
                            colors={['#B738FF', '#8B3BFF']}
                        >
                            <Text style={AppStyle.StyleFirst.text}>Tiếp Tục</Text>
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
        </SafeAreaView>
    )
}
export default SecondScreen;

