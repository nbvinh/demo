import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";
import AppStyle from "../../theme";
import { useDispatch, useSelector } from "react-redux";

const Form = (props) => {
    const show = props.show;
    const setShow = props.setShow;
    const dispatch = useDispatch();
    const value = useSelector(state => state.value)
    const priceCGV = useSelector(state => state.priceCGV)
    const UP = () => {
        dispatch({ type: 'UPVALUE' })
        dispatch ({type:'PRICECGV'})
    }
    const DOWN = () => {
        if (value > 0) {

            dispatch({ type: 'DOWNVALUE' })
            dispatch ({type:'PRICECGV'})
        }
    }
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={show}
        >
            <View style={AppStyle.StyleGioHang.modal1}>
                <TouchableOpacity onPress={() => setShow(!show)} style={{ height: '72%' }}></TouchableOpacity>
                <View style={AppStyle.StyleGioHang.content5}>
                    <View style={{ margin: 10 }}>
                        <View style={AppStyle.StyleGioHang.content6}>
                            <Image
                                source={require('../../img/vinh18.png')}
                            />
                            <View>
                                <Text style={AppStyle.StyleGioHang.text4}>Voucher CGV Cinema</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={AppStyle.StyleGioHang.text5}>88.000 đ </Text>
                                    <Text style={[AppStyle.StyleVoucherCGV.text3, { marginTop: 2 }]}>100.000 đ</Text>
                                    <TouchableOpacity
                                        style={AppStyle.StyleGioHang.touchable1}
                                        onPress={()=> DOWN()}
                                    >
                                        <Image
                                            style={AppStyle.StyleGioHang.img5}
                                            source={require('../../img/vinh19.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={AppStyle.StyleGioHang.text6}>{value}</Text>
                                    <TouchableOpacity onPress={()=> UP()}>
                                        <Image
                                            style={AppStyle.StyleGioHang.img6}
                                            source={require('../../img/vinh3.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={AppStyle.StyleGioHang.content7}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={{
                                        width: 30.04,
                                        height: 22.48,
                                    }}
                                    source={require('../../img/vinh20.png')}
                                />
                                <Text style={AppStyle.StyleGioHang.text7}>{priceCGV}.000 đ</Text>
                            </View>
                            <View style={AppStyle.StyleGioHang.content8}>
                                <Text style={AppStyle.StyleVoucherCGV.text10}>{value}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setShow(!show)}>
                                <Image
                                    style={{ width: 158, height: 44 }}
                                    source={require('../../img/vinh21.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default Form