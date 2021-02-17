import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import AppStyle from "../theme";
import Khuyenmai from "../components/ChonVoucher/Khuyenmai";
import { useSelector, useDispatch } from "react-redux";

const ChonVoucher = ({ navigation }) => {
    const dispatch = useDispatch();
    const arrPromotion = useSelector(state => state.arrPromotion)
    const [ischeck, setIscheck] = useState();
    const [id, setId] = useState();
    const onGetCheck = (value) => {
        setIscheck(value);
    }
    
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
                <ScrollView>
                    <View style={AppStyle.StyleVoucherCGV.address}>
                        <View style={AppStyle.StyleGioHang.address2}>
                            <TextInput
                                style={[AppStyle.StyleGioHang.content1, { paddingLeft: 20 }]}
                                placeholder="Nhập mã khuyến mãi"
                                placeholderTextColor="#3E3E56"
                            />
                            <Image
                                style={AppStyle.StyleChonVoucher.img1}
                                source={require('../img/vinh6.png')}
                            />
                        </View>
                    </View>
                    {arrPromotion.map((item, index) => (
                        <Khuyenmai key={index.toString()} myarrPromotion={item} sendCheck={(value) => onGetCheck(value)}/>
                    ))}
                    <View style={{ height: 200 }}></View>
                </ScrollView>
            </View>
            <View style={{ flex: 1, margin: 15 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
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