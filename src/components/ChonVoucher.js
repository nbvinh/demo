import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import AppStyle from "../theme";
import Khuyenmai from "../components/ChonVoucher/Khuyenmai";


const ChonVoucher = ({ navigation }) => {
    return (
        <View style={AppStyle.StyleVoucherCGV.container}>
            <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 20 }} />
                <Text style={AppStyle.StyleVoucherCGV.text}>Chọn Voucher</Text>
            </View>
            <View style={{ flex: 10 }}>
                <Khuyenmai />
            </View>
            <View style={{ flex: 1, margin: 15 }}>
                <TouchableOpacity>
                    <Image
                        style={{ width: '100%', height: 48, borderRadius: 8 }}
                        source={require('../img/vinh2.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ChonVoucher; 