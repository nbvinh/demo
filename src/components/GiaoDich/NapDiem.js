import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
import LinearGradient from 'react-native-linear-gradient';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
const NapDiem = ({ navigation }) => {
    const [ma, setma] = React.useState('');
    return (
        <SafeAreaView style={AppStyle.StyleGiaoDich.container}>
            <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleVoucherCGV.text}>Nạp điểm</Text>
            </View>
            <View style={{marginHorizontal: 16}}>
            <Text style={AppStyle.StyleGiaoDich.Text_Tieude}>Nhập Mã Gift Card</Text>
            <TextInput onChangeText={(value) => setma(value)} placeholder='Nhập Mã Gift Card'  placeholderTextColor = 'rgba(255, 255, 255, 0.6)' style ={[AppStyle.StyleGiaoDich.Box_DoiDiem, {color: 'white'}]}/>
            <TouchableOpacity style={{position:'absolute', top: 70, right: 10, zIndex: 999999}} onPress={() => navigation.navigate('ScanScreen')}>
                <Image
                    width={10} height={10}
                    source={require('../../img/img_icon_24px/scan_24px.png')}
                    />
                </TouchableOpacity>
                <View style={{ height: 50 }}></View>
                {
                    ma === '' ?
                        <LinearGradient style={AppStyle.StyleScreenXacNhanSDT.linearnotactive} colors={['#B738FF', '#8B3BFF']} >
                            <Text style={AppStyle.StyleScreenXacNhanSDT.text}>Tiếp Tục</Text>
                        </LinearGradient>
                        :
                        <TouchableOpacity >
                            <LinearGradient style={AppStyle.StyleFirst.linear} colors={['#8B3BFF', '#B738FF']} >
                                <Text style={AppStyle.StyleFirst.text}>Tiếp Tục</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                }
            </View>
        </SafeAreaView>
    );
}
export default NapDiem;