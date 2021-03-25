import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image,SafeAreaView } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";
import SlideImg from "./VoucherCGV/sildeImg";
import TextFooter from "./VoucherCGV/Text";
import Footer from "./VoucherCGV/Footer";
import { useDispatch, useSelector } from "react-redux";
import Header from './Header'
const VoucherCGV = ({ navigation }) => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.value)
    const priceCGV = useSelector(state => state.priceCGV)
    const ShowpaymentCGV = useSelector(state => state.ShowpaymentCGV)
    const UP = () => {
        dispatch({ type: 'UPVALUE' })
        dispatch({ type: 'PRICECGV' })
        if (value >= 0) {
            dispatch({ type: 'SHOWPAYMENTCGV' })
        }
    }
    const DOWN = () => {
        if (value > 0) {

            dispatch({ type: 'DOWNVALUE' })
            dispatch({ type: 'PRICECGV' })
        }
    }
    const GOback =()=>{
        navigation.goBack()
    }
    const item ='Voucher CGV Cinema'
    return (
        <SafeAreaView style={AppStyle.StyleScreenXacNhanSDT.container}>
            <View style={AppStyle.StyleVoucherCGV.container}>
                {/* <View style={AppStyle.StyleVoucherCGV.header}>
                    <TouchableOpacity onPress={() => } >
                        <Image
                            width={10} height={18}
                            source={require('../img/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.StyleVoucherCGV.text}></Text>
                </View> */}
                 <Header onpress={GOback} item ={item}/>
                <View style={{ flex: 11 }}>
                    <ScrollView>
                        <SlideImg />
                        <View style={AppStyle.StyleVoucherCGV.textcontent}>
                            <Text style={AppStyle.StyleVoucherCGV.text2}>Voucher CGV Cinema</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <Text style={AppStyle.StyleVoucherCGV.text2}>88.000 đ </Text>
                                <Text style={AppStyle.StyleVoucherCGV.text3}>100.000 đ</Text>
                            </View>
                            <Text style={AppStyle.StyleVoucherCGV.text4}>Hết hạn: 25/12/2020</Text>
                        </View>
                        <View style={AppStyle.StyleVoucherCGV.address}>
                            <View style={AppStyle.StyleVoucherCGV.address1}>
                                <Text style={AppStyle.StyleVoucherCGV.text5}>Địa điểm áp dụng </Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <Text style={AppStyle.StyleVoucherCGV.text5}>CGV toàn quốc, xem chi tiết</Text>
                                    <TouchableOpacity>
                                        <Text style={[AppStyle.StyleVoucherCGV.text5, { color: '#B738FF' }]}> tại đây.</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={AppStyle.StyleVoucherCGV.soluong}>
                                <Text style={AppStyle.StyleVoucherCGV.text5}>Số Lượng:</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => DOWN()}>
                                        <Image
                                            style={{ width: 32, height: 32 }}
                                            source={require('../img/vinh9.png')}
                                        />
                                    </TouchableOpacity >
                                    <Text style={AppStyle.StyleVoucherCGV.text6}>{value}</Text>
                                    <TouchableOpacity onPress={() => UP()}>
                                        <Image
                                            style={{ width: 32, height: 32 }}
                                            source={require('../img/vinh3.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TextFooter />
                    </ScrollView>
                </View>
                <View style={AppStyle.StyleVoucherCGV.footer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={AppStyle.StyleVoucherCGV.img3}
                            source={require('../img/vinh8.png')}
                        />
                        <Text style={AppStyle.StyleVoucherCGV.text9}>{priceCGV}.000 đ</Text>
                    </View>
                    <View style={AppStyle.StyleVoucherCGV.footer1}>
                        <Text style={AppStyle.StyleVoucherCGV.text10}>{value}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('GioHang')}>
                        <Image
                            style={AppStyle.StyleVoucherCGV.img4}
                            source={require('../img/vinh0.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/* <Footer /> */}
            </View>
        </SafeAreaView>
    )
}
export default VoucherCGV;