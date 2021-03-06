import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
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
    const choosevoucher = useSelector(state => state.choosevoucher)
    const Choose = () => {
        dispatch({ type: 'CHOOSEVOUCHER' })
        dispatch({ type: 'SUMGIOHANG' })
        // navigation.navigate('ChonVoucher')
        navigation.reset({
            index: 0,
            routes: [
                {
                    name: 'ChonVoucher',
                },
            ],
        })
    }
    const ShowpaymentCGV = useSelector(state => state.ShowpaymentCGV)
    const DataProduct = useSelector(state => state.DataProduct)
    const sum = useSelector(state => state.sum)
    const kingbread = useSelector(state => state.kingbread)
    const filterStatus = useSelector(state => state.filterStatus)
    const GOback = () => {
        navigation.goBack()
    }
    console.log('show', kingbread)
    return (
        <View style={[AppStyle.StyleVoucherCGV.container]}>
            <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => GOback()} >
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleVoucherCGV.text}>Giỏ Hàng</Text>
            </View>

            <View style={{ flex: 7 }}>
                <ScrollView>
                    {kingbread ?
                        DataProduct && DataProduct.map((item) => {
                            item.OpenUP && (
                                dispatch({ type: 'ADDPRODUCT', id: item.id, name: item.name, price: item.price, amount: item.amount })
                            )
                            return (
                                item.OpenUP && (
                                    <View key={item.id.toString()} style={AppStyle.StyleVoucherCGV.address}>
                                        <View style={AppStyle.StyleGioHang.address1}>
                                            <Image
                                                style={AppStyle.StyleGioHang.img1}
                                                source={{ uri: 'http://175.41.184.177:6063/image/' + item.avatar }}
                                            />
                                            <View>
                                                <Text style={AppStyle.StyleVoucherCGV.text7}>{item.name}</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={AppStyle.StyleVoucherCGV.text2}>{item.price}.000 đ </Text>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                                    <Text style={AppStyle.StyleGioHang.text1} >Thay đổi</Text>
                                                </TouchableOpacity>
                                                <Text style={AppStyle.StyleGioHang.text2}>x{item.amount}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            )
                        })
                        :
                        ShowpaymentCGV ?
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
                                    <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                        <TouchableOpacity onPress={() => setShow(true)}>
                                            <Text style={AppStyle.StyleGioHang.text1} >Thay đổi</Text>
                                        </TouchableOpacity>
                                        <Text style={AppStyle.StyleGioHang.text2}>x{value}</Text>
                                    </View>
                                </View>
                            </View>
                            :
                            null
                    }
                    {/* {
                    }
                    { } */}

                    <View style={AppStyle.StyleVoucherCGV.address}>
                        <View style={AppStyle.StyleGioHang.address2}>
                            <Image
                                style={AppStyle.StyleGioHang.img2}
                                source={require('../img/vinh17.png')}
                            />
                            <View>
                                {choosevoucher ?
                                    <View style={[AppStyle.StyleGioHang.content1, { marginHorizontal: 30 }]}>
                                        <Text style={AppStyle.StyleGioHang.text3}>Bạn vui lòng Chọn Voucher nhé</Text>
                                    </View>
                                    :
                                    arrPromotion.map((item, index) => (

                                        item.isChoose ? item.dieukien ?
                                            <View key={index.toString()} style={[AppStyle.StyleGioHang.content1, { marginHorizontal: 30 }]}>
                                                <Text style={AppStyle.StyleGioHang.text3}>{item.text1}</Text>
                                            </View>
                                            : <View key={index.toString()} style={[AppStyle.StyleGioHang.content1, { marginHorizontal: 30 }]}>
                                                <Text style={AppStyle.StyleGioHang.text3}>Bạn vui lòng Chọn Voucher nhé</Text>
                                            </View> : null
                                    ))
                                }
                            </View>
                            <TouchableOpacity style={{ alignItems: 'flex-end', flex: 1 }} onPress={() => Choose()}>
                                <Image
                                    style={AppStyle.StyleGioHang.img3}
                                    source={require('../img/vinh5.png')}
                                />

                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Form show={show} setShow={setShow} />
            {kingbread ?
                <View style={AppStyle.StyleGioHang.footer}>

                    <View style={{ margin: 15 }}>
                        <View style={AppStyle.StyleGioHang.content2}>
                            <Text style={AppStyle.StyleVoucherCGV.text5}>Tạm tính</Text>
                            <Text style={AppStyle.StyleVoucherCGV.text5}>{sum}.000 đ</Text>
                        </View>
                        <View style={AppStyle.StyleGioHang.content3}>
                            <Text style={AppStyle.StyleVoucherCGV.text8}>Khuyến mãi</Text>

                            {choosevoucher ? <Text style={AppStyle.StyleVoucherCGV.text8}>- 0 đ</Text>
                                :
                                arrPromotion.map((item, index) => (
                                    item.isChoose ? item.dieukien ?
                                        <Text key={index.toString()} style={AppStyle.StyleVoucherCGV.text8}>- {item.Promotion}.000 đ</Text>
                                        : <Text key={index.toString()} style={AppStyle.StyleVoucherCGV.text8}>- 0 đ</Text> : null
                                ))
                            }
                        </View>
                        <View style={AppStyle.StyleGioHang.content4}>
                            <Text style={AppStyle.StyleVoucherCGV.text2}>Tổng thanh toán</Text>
                            {choosevoucher ? <Text style={AppStyle.StyleVoucherCGV.text8}>{sum}.000 đ</Text>
                                :
                                arrPromotion.map((item, index) => (
                                    item.isChoose ? item.dieukien ?
                                        <Text key={index.toString()} style={AppStyle.StyleVoucherCGV.text8}>{sum - item.Promotion}.000 đ</Text>
                                        : <Text key={index.toString()} style={AppStyle.StyleVoucherCGV.text8}>{sum}.000 đ</Text> : null
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
                :
                <View style={AppStyle.StyleGioHang.footer}>

                    <View style={{ margin: 15 }}>
                        <View style={AppStyle.StyleGioHang.content2}>
                            <Text style={AppStyle.StyleVoucherCGV.text5}>Tạm tính</Text>
                            <Text style={AppStyle.StyleVoucherCGV.text5}>{priceCGV}.000 đ</Text>
                        </View>
                        <View style={AppStyle.StyleGioHang.content3}>
                            <Text style={AppStyle.StyleVoucherCGV.text8}>Khuyến mãi</Text>

                            {choosevoucher ? <Text style={AppStyle.StyleVoucherCGV.text8}>- 0 đ</Text>
                                :
                                arrPromotion.map((item, index) => (
                                    item.isChoose ? item.dieukien ?
                                        <Text key={index.toString()} style={AppStyle.StyleVoucherCGV.text8}>- {item.Promotion}.000 đ</Text>
                                        : <Text key={index.toString()} style={AppStyle.StyleVoucherCGV.text8}>- 0 đ</Text> : null
                                ))
                            }
                        </View>
                        <View style={AppStyle.StyleGioHang.content4}>
                            <Text style={AppStyle.StyleVoucherCGV.text2}>Tổng thanh toán</Text>
                            {choosevoucher ? <Text style={AppStyle.StyleVoucherCGV.text8}>{priceCGV}.000 đ</Text>
                                :
                                arrPromotion.map((item, index) => (
                                    item.isChoose ? item.dieukien ?
                                        <Text key={index.toString()} style={AppStyle.StyleVoucherCGV.text8}>{priceCGV - item.Promotion}.000 đ</Text>
                                        : <Text key={index.toString()} style={AppStyle.StyleVoucherCGV.text8}>{priceCGV}.000 đ</Text> : null
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
            }
        </View>

    )
}
export default GioHang;