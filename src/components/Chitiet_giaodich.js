import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import AppStyle from "../theme";
import StepIndicator from 'react-native-step-indicator';
import LinearGradient from "react-native-linear-gradient";
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';

const Chitiet_giaodich = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const labels = ["Đặt hàng thành công", "Đang chuẩn bị hàng", "Sẵn sàng lấy hàng", "Lấy hàng hoàn thành"];
    const customStyles = {
        stepIndicatorSize: 5,
        currentStepIndicatorSize: 10,
        separatorStrokeWidth: 1,
        currentStepStrokeWidth: 6,
        stepStrokeCurrentColor: '#8B3BFF',
        stepStrokeWidth: 4,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#8B3BFF',
        stepIndicatorLabelFontSize: 118,
        currentStepIndicatorLabelFontSize: 356,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#C0C0C0',
        labelSize: 16,
        currentStepLabelColor: '#FFFFFF',
        labelAlign: 'center',



    }
    const bills = useSelector(state => state.bills);
    const confirm = useSelector(state => state.confirm)
    const id = route.params.id;
    const data = useSelector(state => state.data)
    const DataProduct = useSelector(state => state.DataProduct);
    const productafter = useSelector(state => state.productafter)
    console.log('id la', id)
    console.log('producàter', productafter)
    const GOback =()=>{
        navigation.goBack()
    }
    const item ='Chi Tiết Giao Dịch'
    return (

        <SafeAreaView style={{ ...AppStyle.Style_Chitiet_giaodich.container, flex: 1 }}>
            {/* <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleVoucherCGV.text}>Chi Tiết Giao Dịch</Text>
            </View> */}
            <Header onpress={GOback} item ={item}/>
            <View style={{flex:11}}>

                <ScrollView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'black', }} >

                    <View style={{ ...AppStyle.Style_Chitiet_giaodich.content }}>
                        <View style={AppStyle.Style_Chitiet_giaodich.item}>
                            {bills.map((item) => {
                                if (id === item.id) {
                                    dispatch({ type: 'PRODUCTAFTER', productafter: item.product })
                                    return (
                                        < Text key={item.id.toString()} style={AppStyle.Style_Chitiet_giaodich.textone} >{item.tilte}</Text>

                                    )
                                }
                            })}
                            <View >
                                {productafter && productafter.map((item) => {
                                    return (

                                        <View key={item.id.toString()} style={AppStyle.Style_Chitiet_giaodich.box}>
                                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>{item.name}</Text>
                                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>{item.price}.000</Text>
                                            </View>

                                            <Text style={AppStyle.Style_Chitiet_giaodich.amount}>x{item.amount}</Text>

                                        </View>
                                    )
                                })}

                            </View>
                        </View>
                    </View>

                    <Text style={{ color: "white", fontSize: 15, fontWeight: 'bold', marginTop: 17 }}>Trạng thái đơn hàng </Text>
                    <View style={{ marginTop: 17, backgroundColor: '#272738', height: '25%', paddingHorizontal: 9, borderRadius: 8, padding: 10 }}>
                        <StepIndicator
                            customStyles={customStyles}
                            direction='vertical'
                            labels={labels}
                            style={{ paddingLeft: 150, height: '40%' }} stepCount={4}
                        />
                    </View>
                    <Text style={{ color: "white", fontSize: 15, fontWeight: 'bold', marginTop: 17 }}>Thông tin đơn hàng </Text>
                    <View style={{ backgroundColor: '#272738', marginTop: 20, padding: 20, marginBottom: 210, borderRadius: 8, paddingHorizontal: 9 }}>
                        <View style={AppStyle.Style_Chitiet_giaodich.transform}>
                            <Text style={AppStyle.Style_Chitiet_giaodich.code}>Mã giao dịch</Text>
                            <Text style={AppStyle.Style_Chitiet_giaodich.code_2}>DH65741671616</Text>
                        </View>
                        <View style={AppStyle.Style_Chitiet_giaodich.transform}>
                            <Text style={AppStyle.Style_Chitiet_giaodich.code}>Thời gian</Text>
                            <Text style={AppStyle.Style_Chitiet_giaodich.code_2}>12/11/2020 - 08:45</Text>
                        </View>
                        <View style={{ ...AppStyle.Style_Chitiet_giaodich.transform }}>
                            <Text style={AppStyle.Style_Chitiet_giaodich.code}>Phương thức thanh toán</Text>
                            {/* <Text style={AppStyle.Style_Chitiet_giaodich.code_2}>VNPay</Text> */}
                            {data.map((item) => {
                                return (
                                    item.isChecked && (
                                        <Text key={item.id.toString()} style={AppStyle.Style_Chitiet_giaodich.code_2}>{item.text}</Text>

                                    )
                                )
                            })}
                        </View>
                        <View style={AppStyle.Style_Chitiet_giaodich.transform}>
                            <Text style={AppStyle.Style_Chitiet_giaodich.code}>Phương thức giao hàng</Text>
                            <Text style={AppStyle.Style_Chitiet_giaodich.code_2}>Nhận tại cửa hàng</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView >

    )
}

export default Chitiet_giaodich;