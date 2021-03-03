import React from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
import LinearGradient from 'react-native-linear-gradient';
const NapDiem = ({navigation}) =>{
    const [ma, setma] = React.useState('');
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
            <Text style={AppStyle.StyleGiaoDich.Text_Tieude}>Nhập Mã Gift Card</Text>
            <TextInput onChangeText={(value) => setma(value)} placeholder='Nhập Mã Gift Card'  placeholderTextColor = 'rgba(255, 255, 255, 0.6)' style ={[AppStyle.StyleGiaoDich.Box_DoiDiem, {color: 'white'}]}/>
            <TouchableOpacity style={{position:'absolute', top: 140, right: 30, zIndex: 999999}}>
                <Image
                    width={10} height={18}
                    source={require('../../img/img_icon_24px/scan_24px.png')}
                    />
            </TouchableOpacity>
                <View style={{height: 50}}></View>
            {
                ma === '' ?
                <LinearGradient style={AppStyle.StyleScreenXacNhanSDT.linearnotactive} colors={['#B738FF', '#8B3BFF']} >
                    <Text style={AppStyle.StyleScreenXacNhanSDT.text}>Tiếp Tục</Text>
                </LinearGradient>
                :
                <LinearGradient style={AppStyle.StyleFirst.linear} colors={['#8B3BFF', '#B738FF']} >
                        <TouchableOpacity >
                        <Text style={AppStyle.StyleFirst.text}>Tiếp Tục</Text>
                        </TouchableOpacity>
                    </LinearGradient>
            }
        </View>
    );
}
export default NapDiem;