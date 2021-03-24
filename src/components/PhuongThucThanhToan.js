import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, SafeAreaView } from "react-native";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import AppStyle from "../theme";
import { useSelector, useDispatch } from "react-redux";
import ListBank from "../components/Phuongthucthanhtoan/ListBank";

const PaymentMethods = ({ navigation }) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data)
    const isShow = useSelector(state => state.isShow)
    const tongdiem = useSelector(state => state.tongdiem)
    const lienket = useSelector(state => state.lienket)
    const arrPromotion = useSelector(state => state.arrPromotion)
    const priceCGV = useSelector(state => state.priceCGV)
    const choosevoucher = useSelector(state => state.choosevoucher)
    const result = useSelector(state => state.abc)
    const onLienket = () => {
        dispatch({ type: 'LIENKET' })
    }
    const DataProduct = useSelector(state => state.DataProduct)
    const sum = useSelector(state => state.sum)
    const kingbread = useSelector(state => state.kingbread)
    return (
        <SafeAreaView style={AppStyle.StyleMain.container}>
            <View style={AppStyle.StyleVoucherCGV.container}>
                <View style={AppStyle.StyleVoucherCGV.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image
                            width={10} height={18}
                            source={require('../img/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.StyleVoucherCGV.text}>Phương thức thanh toán </Text>
                </View>
                <View style={{ flex: 11 }}>
                    <View style={AppStyle.StylePhuongthucthanhtoan.content1}>
                        <ScrollView>

                            <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Tài khoản đã liên kết</Text>
                            {lienket ?
                                <View style={[AppStyle.StylePhuongthucthanhtoan.content2, { height: 48 }]}>
                                    <TouchableOpacity style={AppStyle.StylePhuongthucthanhtoan.touchable}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image
                                                style={AppStyle.StylePhuongthucthanhtoan.img1}
                                                source={require('../img/vinh27.png')}
                                            />
                                            <Text style={AppStyle.StylePhuongthucthanhtoan.text2}>Master Card</Text>
                                        </View>
                                        <Image
                                            style={AppStyle.StylePhuongthucthanhtoan.img2}
                                            source={require('../img/vinh5.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                                : null
                            }
                            <View style={[AppStyle.StylePhuongthucthanhtoan.content2, { height: 48 }]}>
                                <TouchableOpacity style={AppStyle.StylePhuongthucthanhtoan.touchable} onPress={() => onLienket()}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            style={AppStyle.StylePhuongthucthanhtoan.img1}
                                            source={require('../img/vinh22.png')}
                                        />
                                        <Text style={AppStyle.StylePhuongthucthanhtoan.text2}>Thêm liên kết</Text>
                                    </View>
                                    <Image
                                        style={AppStyle.StylePhuongthucthanhtoan.img2}
                                        source={require('../img/vinh5.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Chọn phương thức thanh toán</Text>
                            {data && data.map((item) => <ListBank key={item.id.toString()} myData={item} />)}
                            {lienket ? null
                                :
                                <View style={{ position: 'absolute', top: 145, left: 83 }}>
                                    <Text style={{ color: 'red' }}>Điểm của bạn không đủ giao dịch</Text>
                                    <Text style={{ color: 'red' }}>Số dư hiện tại: 15 điểm</Text>
                                </View>
                            }
                            <View style={{height:300}}/>
                        </ScrollView>
                    </View>
                </View>
                <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#272738', borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingVertical: 10,flex:4 }}>
                    {kingbread ?
                        <View style={{ marginHorizontal: 10, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Tổng thanh toán</Text>
                            {choosevoucher ? <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>{sum}.000 đ</Text>
                                :
                                arrPromotion.map((item, index) => (
                                    item.isChoose ? item.dieukien ?
                                        <Text key={index.toString()} style={AppStyle.StylePhuongthucthanhtoan.text1}>{sum - item.Promotion}.000 đ</Text>
                                        : <Text key={index.toString()} style={AppStyle.StylePhuongthucthanhtoan.text1}>{sum}.000 đ</Text> : null
                                ))}
                        </View>
                        :
                        <View style={{ marginHorizontal: 10, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Tổng thanh toán</Text>
                            {choosevoucher ? <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>{priceCGV}.000 đ</Text>
                                :
                                arrPromotion.map((item, index) => (
                                    item.isChoose ? item.dieukien ?
                                        <Text key={index.toString()} style={AppStyle.StylePhuongthucthanhtoan.text1}>{priceCGV - item.Promotion}.000 đ</Text>
                                        : <Text key={index.toString()} style={AppStyle.StylePhuongthucthanhtoan.text1}>{priceCGV}.000 đ</Text> : null
                                ))}
                        </View>
                    }
                    {data[0].tongdiem ?
                        <View style={{ marginHorizontal: 10, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Điểm thanh toán</Text>
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>- điểm</Text>
                        </View>
                        :
                        null
                    }
                    {isShow ?
                        <TouchableOpacity style={{ margin: 10, marginTop: 30 }} onPress={() => navigation.navigate('PaymentConfirmation')} >
                            <Image
                                style={{ width: '100%', height: 48 }}
                                source={require('../img/vinh26.png')}
                            />
                        </TouchableOpacity>
                        :

                        <TouchableOpacity style={{ margin: 10, marginTop: 30 }}>
                            <Image
                                style={{ width: '100%', height: 48 }}
                                source={require('../img/vinh25.png')}
                            />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}
export default PaymentMethods;