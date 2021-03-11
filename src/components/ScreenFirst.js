import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStyle from "../theme";

const ScreenFirst = ({ navigation }) => {
    return (
        <View style={AppStyle.StyleFirst.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={AppStyle.StyleFirst.header}>

            </View>
            <View style={AppStyle.StyleFirst.footer}>
                <View style={AppStyle.StyleFirst.content}>
                    <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')} >
                        <LinearGradient
                            style={AppStyle.StyleFirst.linear}
                            colors={['#8B3BFF', '#B738FF']}
                        >

                            <Text style={AppStyle.StyleFirst.text}>Đăng Nhập</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity    style={[AppStyle.StyleFirst.linear, {borderWidth: 2, borderColor:'#8B3BFF'}]} onPress={() => navigation.navigate('Tabviewmain')}>
                        

                            <Text style={[AppStyle.StyleFirst.text, {color:'#8B3BFF'}]}>Dùng Thử</Text>
                       
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}
export default ScreenFirst;