import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
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
    const onLienket = () => {
        dispatch({ type: 'LIENKET' })
    }
    const priceCGV = useSelector(state => state.priceCGV)
    return (
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
            <View style={{ flex: 9 }}>
                <View style={AppStyle.StylePhuongthucthanhtoan.content1}>
                    <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Tài khoản đã liên kết</Text>
                    {lienket ?
                        <View style={[AppStyle.StylePhuongthucthanhtoan.content2, {height:48}]}>
                            <TouchableOpacity style={AppStyle.StylePhuongthucthanhtoan.touchable}>
                                <Image
                                    style={AppStyle.StylePhuongthucthanhtoan.img1}
                                    source={require('../img/vinh27.png')}
                                />
                                <Text style={AppStyle.StylePhuongthucthanhtoan.text2}>Master Card</Text>
                                <Image
                                    style={AppStyle.StylePhuongthucthanhtoan.img2}
                                    source={require('../img/vinh5.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    : null
                }
                    <View style={[AppStyle.StylePhuongthucthanhtoan.content2, {height:48}]}>
                        <TouchableOpacity style={AppStyle.StylePhuongthucthanhtoan.touchable} onPress={() => onLienket()}>
                            <Image
                                style={AppStyle.StylePhuongthucthanhtoan.img1}
                                source={require('../img/vinh22.png')}
                            />
                            <Text style={AppStyle.StylePhuongthucthanhtoan.text2}>Thêm liên kết</Text>
                            <Image
                                style={AppStyle.StylePhuongthucthanhtoan.img2}
                                source={require('../img/vinh5.png')}
                            />
                        </TouchableOpacity>
                        {console.log('lk', lienket)}
                    </View>
                    <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Chọn phương thức thanh toán</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <ListBank myData={item} />}
                        keyExtractor={item => item?.id?.toString()}
                    />
                    {lienket ? null
                        :
                        <View style={{ position: 'absolute', top: 145, left: 83 }}>
                            <Text style={{ color: 'red' }}>Điểm của bạn không đủ thực hiện giao dịch</Text>
                            <Text style={{ color: 'red' }}>Số dư hiện tại: 15 điểm</Text>
                        </View>
                    }
                </View>
            </View>
            <View style={{ flex: 3, backgroundColor: '#272738', borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingVertical: 10 }}>
                <View style={{ marginHorizontal: 10, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Tổng thanh toán</Text>
                    <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>{priceCGV} đ</Text>
                </View>
                {data[0].tongdiem ?
                    <View style={{ marginHorizontal: 10, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Điểm thanh toán</Text>
                        <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>- điểm</Text>
                    </View>
                    :
                    null
                }
                {isShow ?
                    <TouchableOpacity style={{ margin: 10, marginTop: 30 }} onPress={()=> navigation.navigate('PaymentConfirmation')} >
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
    )
}
export default PaymentMethods;