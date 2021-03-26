import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, SafeAreaView } from "react-native";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";
import { useSelector, useDispatch } from "react-redux";
import ListBank from "../components/Phuongthucthanhtoan/ListBank";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
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
    const sumamount = useSelector(state => state.sumamount)
    const kingbread = useSelector(state => state.kingbread)
    const ConfirmHistory = () => {
        dispatch({ type: 'COMFIRM' })
        navigation.navigate('Tabviewmain')
        dispatch({ type: 'FILTERSTATUS' })
        kingbread ? submithanler() : submithanlerCGV()
    }
    const bills = useSelector(state => state.bills)
    const [todo, setTodo] = useState([])
    const submithanler = () => {
        setTodo((prevtodo) => {
            let newTodo = [...prevtodo]
            let d = new Date();
            dispatch({ type: 'ADDBILL', id: Math.random().toString(), sum: sum, sumamount: sumamount, product: product, timmer: parseInt(d.getMonth() + 1) + "/" + d.getFullYear() })
            return newTodo
        })
    }
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('@storage_Key', JSON.stringify(bills))
            console.log("Save ok")
        } catch (e) {
            console.log(e)
        }
    }
    const [test, setTest] = useState()
    useEffect(() => {
        storeData()
        console.log(bills)
    }, [bills])
    const billsCGV = useSelector(state => state.billsCGV)
    const [todoCGV, setTodoCGV] = useState([])
    const submithanlerCGV = () => {
        setTodoCGV((prevtodoCGV) => {
            let newTodoCGV = [...prevtodoCGV]
            let d = new Date();
            dispatch({ type: 'ADDBILLCGV', id: Math.random().toString(), priceCGV: priceCGV, value: value, timmer: parseInt(d.getMonth() + 1) + "/" + d.getFullYear() })
            return newTodoCGV
        })
    }
    useEffect(() => {
        console.log(billsCGV)
    }, [billsCGV])
    const product = useSelector(state => state.product)
    const GOback = () => {
        navigation.goBack()
    }
    const item = 'Xác nhận thanh toán'
    return (
        <SafeAreaView style={AppStyle.StyleMain.container}>

            <View style={AppStyle.StyleVoucherCGV.container}>
                <Header onpress={GOback} item ={item}/>
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
                            <View style={{ height: 300 }} />
                        </ScrollView>
                    </View>
                </View>

                <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#272738', borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingVertical: 10 }}>
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
                        onPress={() => ConfirmHistory()}
                    >
                        <Image
                            style={{ width: '100%', height: 48 }}
                            source={require('../img/vinh28.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default PaymentConfirmation;