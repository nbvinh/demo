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
    const value = useSelector(state => state.value)
    const arrPromotion = useSelector(state => state.arrPromotion)
    const priceCGV = useSelector(state => state.priceCGV)
    const choosevoucher = useSelector(state => state.choosevoucher)
    const DataProduct = useSelector(state => state.DataProduct)
    const sum = useSelector(state => state.sum)
    const kingbread = useSelector(state => state.kingbread)
    const ConfirmHistory=()=>{
        dispatch({type:'COMFIRM'})
        navigation.navigate('Tabviewmain')
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
                <Text style={AppStyle.StyleVoucherCGV.text}>Xác nhận thanh toán </Text>
            </View>

            <View style={{ flex: 9 }}>
                <View style={AppStyle.StylePhuongthucthanhtoan.content1}>
                    <ScrollView>
                        {kingbread ?
                            DataProduct && DataProduct.map((item) => {
                                return (
                                    item.OpenUP && (
                                        <View key={item.id.toString()} style={AppStyle.StylePhuongthucthanhtoan.content2}>
                                            <View style={AppStyle.StylePhuongthucthanhtoan.touchable}>
                                                <Image
                                                    style={AppStyle.StylePhuongthucthanhtoan.img4}
                                                    source={{ uri: 'http://175.41.184.177:6063/image/' + item.avatar }}
                                                />
                                                <Text style={AppStyle.StylePhuongthucthanhtoan.text3}>{item.name}</Text>
                                            </View>
                                            <View style={AppStyle.StylePhuongthucthanhtoan.content4}>
                                                <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>Số lượng</Text>
                                                <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>x{item.amount}</Text>
                                            </View>
                                            <View style={AppStyle.StylePhuongthucthanhtoan.content4}>
                                                <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>Khuyến mại</Text>
                                                {choosevoucher ? <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>- 0 đ</Text>
                                                    :
                                                    arrPromotion.map((item, index) => (
                                                        item.isChoose ? item.dieukien ?
                                                        //nếu chọn voucher
                                                            <Text key={index.toString()} style={AppStyle.StylePhuongthucthanhtoan.text4}>- {item.Promotion}.000 đ</Text>
                                                            : <Text key={index.toString()} style={AppStyle.StylePhuongthucthanhtoan.text4}>- 0 đ</Text> : null
                                                    ))}
                                            </View>
                                            <View style={AppStyle.StylePhuongthucthanhtoan.content4}>
                                                <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>Mã giao dịch</Text>
                                                <Text style={[AppStyle.StylePhuongthucthanhtoan.text4, { marginBottom: 15 }]}>DH65741671616</Text>
                                            </View>
                                        </View>
                                    )
                                )
                            })
                            :
                            <View style={AppStyle.StylePhuongthucthanhtoan.content2}>
                                <View style={AppStyle.StylePhuongthucthanhtoan.touchable}>
                                    <Image
                                        style={AppStyle.StylePhuongthucthanhtoan.img4}
                                        source={require('../img/cgv.png')}
                                    />
                                    <Text style={AppStyle.StylePhuongthucthanhtoan.text3}>VoucherCGV Cinema</Text>
                                </View>
                                <View style={AppStyle.StylePhuongthucthanhtoan.content4}>
                                    <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>Số lượng</Text>
                                    <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>x{value}</Text>
                                </View>
                                <View style={AppStyle.StylePhuongthucthanhtoan.content4}>
                                    <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>Khuyến mại</Text>
                                    {choosevoucher ? <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>- 0 đ</Text>
                                        :
                                        arrPromotion.map((item, index) => (
                                            item.isChoose ? item.dieukien ?
                                                <Text key={index.toString()} style={AppStyle.StylePhuongthucthanhtoan.text4}>- {item.Promotion}.000 đ</Text>
                                                : <Text key={index.toString()} style={AppStyle.StylePhuongthucthanhtoan.text4}>- 0 đ</Text> : null
                                        ))}
                                </View>
                                <View style={AppStyle.StylePhuongthucthanhtoan.content4}>
                                    <Text style={AppStyle.StylePhuongthucthanhtoan.text4}>Mã giao dịch</Text>
                                    <Text style={[AppStyle.StylePhuongthucthanhtoan.text4, { marginBottom: 15 }]}>DH65741671616</Text>
                                </View>
                            </View>
                        }

                        <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Phương thức thanh toán</Text>
                        {data.map((item) => {
                            return (
                                item.isChecked && (
                                    <View key={item.id.toString()} style={AppStyle.StylePhuongthucthanhtoan.content5}>
                                        <Image
                                            source={{ uri: item.img }}
                                            style={{ height: 32, width: 32 }}
                                        />
                                        <Text style={AppStyle.StylePhuongthucthanhtoan.text5}>{item.text}</Text>
                                    </View>

                                )
                            )
                        })}
                    </ScrollView>
                </View>
            </View>

            <View style={{ flex: 3, backgroundColor: '#272738', borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingVertical: 10 }}>
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
                    <View style={{ marginHorizontal: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>Điểm thanh toán</Text>
                        <Text style={AppStyle.StylePhuongthucthanhtoan.text1}>- điểm</Text>
                    </View>
                    :
                    null
                }

                <TouchableOpacity
                    style={{ margin: 10, marginTop: 30 }}
                    onPress={()=>ConfirmHistory()}
                >
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