import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import AppStyle from "../theme";
import { useSelector, useDispatch } from "react-redux";
import ListBank from "../components/Phuongthucthanhtoan/ListBank";

const PaymentConfirmation = ({ navigation }) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data)
    const isChecked = useSelector(state => state.isChecked)
    const isShow = useSelector(state => state.isShow)
    const checkpoint = useSelector(state => state.checkpoint)
    const tongdiem = useSelector(state => state.tongdiem)
    const lienket = useSelector(state => state.lienket)
    return (
        <View style={AppStyle.StyleVoucherCGV.container}>
            <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleVoucherCGV.text}>Xác nhận thanh toán </Text>
            </View>
            <View style={{ flex: 9 }}>
                <View style={AppStyle.StylePhuongthucthanhtoan.content1}>
                    <View style={AppStyle.StylePhuongthucthanhtoan.content2}>
                        <View style={AppStyle.StylePhuongthucthanhtoan.touchable}>
                            <Image
                                style={AppStyle.StylePhuongthucthanhtoan.img4}
                                source={require('../img/cgv.png')}
                            />
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text3}>VoucherCGV Cinema</Text>
                        </View>
                        <View style ={AppStyle.StylePhuongthucthanhtoan.content4}>
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>Số lượng</Text>
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>x5</Text>
                        </View>
                        <View style ={AppStyle.StylePhuongthucthanhtoan.content4}>
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>Khuyến mại</Text>
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>-0đ</Text>
                        </View>
                        <View style ={AppStyle.StylePhuongthucthanhtoan.content4}>
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>Mã giao dịch</Text>
                            <Text style={[AppStyle.StylePhuongthucthanhtoan.text4,{marginBottom:15}]}>DH65741671616</Text>
                        </View>
                    </View>
                    <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Phương thức thanh toán</Text>
                    <View style={AppStyle.StylePhuongthucthanhtoan.content5}>
                        <Image 
                            source={{uri:'https://static.mservice.io/img/logo-momo.png'}}
                            style={{height:32, width:32}}
                        />
                        <Text style={AppStyle.StylePhuongthucthanhtoan.text5}>Ví điện tử MoMo</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 3, backgroundColor: '#272738', borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingVertical: 10 }}>
                <View style={{ marginHorizontal: 10, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Tổng thanh toán</Text>
                    <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>400.000 đ</Text>
                </View>
                {data[0].tongdiem ?
                    <View style={{ marginHorizontal: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Điểm thanh toán</Text>
                        <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>-430 điểm</Text>
                    </View>
                    :
                    null
                }

                <TouchableOpacity style={{ margin: 10, marginTop: 30 }}>
                    <Image
                        style={{ width: '100%', height: 48 }}
                        source={require('../img/vinh28.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default PaymentConfirmation;