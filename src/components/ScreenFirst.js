import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStyle from "../theme";
const A= '';
const ScreenFirst = ({navigation}) => {
    return (
        <View style={AppStyle.StyleFirst.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={AppStyle.StyleFirst.header}>

            </View>
            <View style={AppStyle.StyleFirst.footer}>
                <View style={AppStyle.StyleFirst.content}>
                    <LinearGradient
                        style={AppStyle.StyleFirst.linear}
                        colors={['#8B3BFF', '#B738FF']}
                    >
                        <TouchableOpacity onPress={()=>navigation.navigate('SecondScreen')} >
                        <Text style={AppStyle.StyleFirst.text}>Đăng Nhập</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                        style={AppStyle.StyleFirst.linear}
                        colors={['#8B3BFF', '#B738FF']}
                    >
                        <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
                        <Text style={AppStyle.StyleFirst.text}>Dùng Thử</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}
export default ScreenFirst;
// const styles = StyleSheet.create({
    
// })