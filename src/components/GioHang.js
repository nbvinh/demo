import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";
import AppStyle from "../theme";
import Form from "../components/GioHang/Form";
import { useDispatch, useSelector } from "react-redux";
const GioHang = ({ navigation }) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const value = useSelector(state => state.value)
    const arrPromotion = useSelector(state => state.arrPromotion)
    const priceCGV = useSelector(state => state.priceCGV)
    return (
        <View style={[AppStyle.StyleVoucherCGV.container]}>
            <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 20 }} />
                <Text style={AppStyle.StyleVoucherCGV.text}>Giỏ Hàng</Text>
            </View>
            <View style={{ flex: 7 }}>
                <View style={AppStyle.StyleVoucherCGV.address}>
                    <View style={AppStyle.StyleGioHang.address1}>
                        <Image
                            style={AppStyle.StyleGioHang.img1}
                            source={require('../img/vinh7.png')}
                        />
                        <View>
                            <Text style={AppStyle.StyleVoucherCGV.text7}>Voucher CGV Cinema</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={AppStyle.StyleVoucherCGV.text2}>88.000 đ </Text>
                                <Text style={AppStyle.StyleVoucherCGV.text3}>100.000 đ</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 80 }}>
                            <TouchableOpacity onPress={() => setShow(true)}>
                                <Text style={AppStyle.StyleGioHang.text1} >Thay đổi</Text>
                            </TouchableOpacity>
                            <Text style={AppStyle.StyleGioHang.text2}>x{value}</Text>
                        </View>
                    </View>
                </View>
                <View style={AppStyle.StyleVoucherCGV.address}>
                    <View style={AppStyle.StyleGioHang.address2}>
                        <Image
                            style={AppStyle.StyleGioHang.img2}
                            source={require('../img/vinh17.png')}
                        />
                        <TouchableOpacity>
                            {arrPromotion.map((item, index) => (

                                item.isChoose ? item.dieukien ?
                                    <View key={index.toString()} style={[AppStyle.StyleGioHang.content1, { marginHorizontal: 30 }]}>
                                        <Text style={AppStyle.StyleGioHang.text3}>{item.text1}</Text>
                                    </View>
                                    : null : null
                            ))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ChonVoucher')}>
                            <Image
                                style={AppStyle.StyleGioHang.img3}
                                source={require('../img/vinh5.png')}
                            />

                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <Form show={show} setShow={setShow} />
            <View style={AppStyle.StyleGioHang.footer}>

                <View style={{ margin: 15 }}>
                    <View style={AppStyle.StyleGioHang.content2}>
                        <Text style={AppStyle.StyleVoucherCGV.text5}>Tạm tính</Text>
                        <Text style={AppStyle.StyleVoucherCGV.text5}>{priceCGV} đ</Text>
                    </View>
                    <View style={AppStyle.StyleGioHang.content3}>
                        <Text style={AppStyle.StyleVoucherCGV.text8}>Khuyến mãi</Text>
                        {arrPromotion.map((item, index) => (
                            item.isChoose ? item.dieukien ?
                                <Text key={index.toString()} style={AppStyle.StyleVoucherCGV.text8}>- {item.Promotion} đ</Text>
                                : null : null
                        ))}
                    </View>
                    <View style={AppStyle.StyleGioHang.content4}>
                        <Text style={AppStyle.StyleVoucherCGV.text2}>Tổng thanh toán</Text>
                        {arrPromotion.map((item, index) => (
                            item.isChoose ? item.dieukien ?
                                <Text key={index.toString()} style={AppStyle.StyleVoucherCGV.text8}>{priceCGV - item.Promotion} đ</Text>
                                : null : null
                        ))}
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PhuongThucThanhToan')}>
                        <Image
                            style={AppStyle.StyleGioHang.img4}
                            source={require('../img/vinh1.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
export default GioHang;