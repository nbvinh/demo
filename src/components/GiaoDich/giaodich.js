import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
import Header from '../Header'
const GiaoDich = ({ navigation }) => {
    const item = 'Giao Dịch';
    const GOback = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={AppStyle.StyleGiaoDich.container}>

            <Header onpress={GOback} item={item} />
            <View style={{ marginHorizontal: 12, flex: 12 }}>
                <TouchableOpacity style={AppStyle.StyleGiaoDich.Box} onPress={() => navigation.navigate('DoiDiem')}>
                    <View style={AppStyle.StyleGiaoDich.Box_Left}>
                        <Image
                            style={{ width: '100%', height: '100%' }} resizeMode='contain'
                            source={require('../../img/333.png')}
                        />
                    </View>
                    <View style={AppStyle.StyleGiaoDich.Box_Right}>
                        <Text style={AppStyle.StyleGiaoDich.Box_Right_TieuDe}>Đổi điểm</Text>
                        <Text style={AppStyle.StyleGiaoDich.Box_Right_Content}>Đổi điểm của đối tác liên kết sang điểm Loyalty</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={AppStyle.StyleGiaoDich.Box} onPress={() => navigation.navigate('MuaDiem')}>
                    <View style={AppStyle.StyleGiaoDich.Box_Left}>
                        <Image
                            style={{ width: '100%', height: '100%' }} resizeMode='contain'
                            source={require('../../img/444.png')}
                        />
                    </View>
                    <View style={AppStyle.StyleGiaoDich.Box_Right}>
                        <Text style={AppStyle.StyleGiaoDich.Box_Right_TieuDe}>Mua điểm</Text>
                        <Text style={AppStyle.StyleGiaoDich.Box_Right_Content} numberOfLines={2}>Mua điểm bằng ATM/ VISA/ MASTER
hoặc cửa hàng tiện lợi.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={AppStyle.StyleGiaoDich.Box} onPress={() => navigation.navigate('NapDiem')}>
                    <View style={AppStyle.StyleGiaoDich.Box_Left}>
                        <Image
                            style={{ width: '100%', height: '100%' }} resizeMode='contain'
                            source={require('../../img/555.png')}
                        />
                    </View>
                    <View style={AppStyle.StyleGiaoDich.Box_Right}>
                        <Text style={AppStyle.StyleGiaoDich.Box_Right_TieuDe}>Nạp điểm</Text>
                        <Text style={AppStyle.StyleGiaoDich.Box_Right_Content}>Nạp điểm vào tài khoản bằng mã
Gift Card.</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default GiaoDich;