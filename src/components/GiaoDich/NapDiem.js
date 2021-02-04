import React from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
import LinearGradient from 'react-native-linear-gradient';
const NapDiem = ({navigation}) =>{
    return(
        <View style={AppStyle.StyleGiaoDich.container}>
                <View style={AppStyle.StyleGiaoDich.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 10 }}>
                        <Image
                            width={10} height={18}
                            source={require('../../img/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.StyleGiaoDich.header_text}>Nạp Điểm</Text>
            </View>
            <Text style={AppStyle.StyleGiaoDich.Text_Tieude}>Thông tin Gift Card</Text>
            <TextInput  placeholder='Thông tin Gift Card'  placeholderTextColor = 'rgba(255, 255, 255, 0.6)' style ={[AppStyle.StyleGiaoDich.Box_DoiDiem, {color: 'rgba(255, 255, 255, 0.3)'}]}/>
            <Image
                 width={10} height={18} style={{position:'absolute', top: 140, right: 30, zIndex: 999999}}
                source={require('../../img/img_icon_24px/scan_24px.png')}
                />
                <View style={{height: 50}}></View>
            <LinearGradient
                        style={AppStyle.StyleFirst.linear}
                        colors={['#8B3BFF', '#B738FF']}
                    >
                        <TouchableOpacity >
                        <Text style={AppStyle.StyleFirst.text}>Tiếp Tục</Text>
                        </TouchableOpacity>
                    </LinearGradient>
        </View>
    );
}
export default NapDiem;