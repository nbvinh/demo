import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import AppStyle from "../theme";
import StepIndicator from 'react-native-step-indicator';
import LinearGradient from "react-native-linear-gradient";

const Chitiet_giaodich = ({navigation}) => {
    const labels = ["Đặt hàng thành công", "Đang chuẩn bị hàng", "Sẵn sàng lấy hàng", "Lấy hàng hoàn thành"];
    const customStyles = {
        stepIndicatorSize: 5,
        currentStepIndicatorSize: 10,
        separatorStrokeWidth: 1,
        currentStepStrokeWidth: 6,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 4,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 118,
        currentStepIndicatorLabelFontSize: 356,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 17,
        currentStepLabelColor: '#fe7013',
        labelAlign: 'center'

    }
    return (

        <View style={{ ...AppStyle.Style_Chitiet_giaodich.container, flex: 1 }}>
            <View style={AppStyle.Style_Chitiet_giaodich.content_top}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18} style={{left:14}}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.Style_Chitiet_giaodich.State}>Chi tiết giao dịch</Text>
                <Text></Text>
            </View>
            <ScrollView style={{ flex: 1, marginBottom: 100, paddingHorizontal: 20, backgroundColor: 'black', }} >
                <View style={{ ...AppStyle.Style_Chitiet_giaodich.content }}>
                    <View style={AppStyle.Style_Chitiet_giaodich.item}>
                        <View style={AppStyle.Style_Chitiet_giaodich.box}>
                            <View>
                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>Bánh Tráng cuốn nem nướng</Text>
                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>x 1</Text>
                            </View>
                            <Text style={AppStyle.Style_Chitiet_giaodich.text}>60.000 đ</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Chitiet_giaodich.item}>
                        <View style={AppStyle.Style_Chitiet_giaodich.box}>
                            <View>
                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>Bánh Tráng cuốn nem nướng</Text>
                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>x 1</Text>
                            </View>
                            <Text style={AppStyle.Style_Chitiet_giaodich.text}>60.000 đ</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Chitiet_giaodich.item}>
                        <View style={AppStyle.Style_Chitiet_giaodich.box}>
                            <View>
                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>Bánh Tráng cuốn nem nướng</Text>
                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>x 1</Text>
                            </View>
                            <Text style={AppStyle.Style_Chitiet_giaodich.text}>60.000 đ</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Chitiet_giaodich.item}>
                        <View style={AppStyle.Style_Chitiet_giaodich.box}>
                            <View>
                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>Bánh Tráng cuốn nem nướng</Text>
                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>x 1</Text>
                            </View>
                            <Text style={AppStyle.Style_Chitiet_giaodich.text}>60.000 đ</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Chitiet_giaodich.item}>
                        <View style={AppStyle.Style_Chitiet_giaodich.box}>
                            <View>
                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>Bánh Tráng cuốn nem nướng</Text>
                                <Text style={AppStyle.Style_Chitiet_giaodich.text}>x 1</Text>
                            </View>
                            <Text style={AppStyle.Style_Chitiet_giaodich.text}>60.000 đ</Text>
                        </View>
                    </View>

                </View>

                <Text style={{ color: "white", fontSize: 15, fontWeight: 'bold', marginTop: 17 }}>Trạng thái đơn hàng </Text>
                <View style={{ marginTop: 17, backgroundColor: '#272738', height: '25%', paddingHorizontal: 9, borderRadius: 8, padding: 10 }}>
                    <StepIndicator
                        customStyles={customStyles}
                        direction='vertical'
                        labels={labels}
                        style={{ paddingLeft: 150, height: '40%' }}
                    />
                </View>
                <Text style={{ color: "white", fontSize: 15, fontWeight: 'bold', marginTop: 17 }}>Thông tin đơn hàng </Text>
                <View style={{ backgroundColor: '#272738', marginTop: 20, paddingBottom: 30, paddingTop: 28, marginBottom: 210, borderRadius: 8, paddingHorizontal: 9 }}>
                    <View style={AppStyle.Style_Chitiet_giaodich.transform}>
                        <Text style={AppStyle.Style_Chitiet_giaodich.code}>Mã giao dịch</Text>
                        <Text style={AppStyle.Style_Chitiet_giaodich.code_2}>DH65741671616</Text>
                    </View>
                    <View style={AppStyle.Style_Chitiet_giaodich.transform}>
                        <Text style={AppStyle.Style_Chitiet_giaodich.code}>Thời gian</Text>
                        <Text style={AppStyle.Style_Chitiet_giaodich.code_2}>12/11/2020 - 08:45</Text>
                    </View>
                    <View style={AppStyle.Style_Chitiet_giaodich.transform}>
                        <Text style={AppStyle.Style_Chitiet_giaodich.code}>Phương thức thanh toán</Text>
                        <Text style={AppStyle.Style_Chitiet_giaodich.code_2}>VNPay</Text>
                    </View>
                    <View style={AppStyle.Style_Chitiet_giaodich.transform}>
                        <Text style={AppStyle.Style_Chitiet_giaodich.code}>Phương thức giao hàng</Text>
                        <Text style={AppStyle.Style_Chitiet_giaodich.code_2}>Nhận tại cửa hàng</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={{ backgroundColor: '#272738', position: 'absolute', bottom: 0, width: '100%', height: 200 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 12,paddingHorizontal:13, }}>
                    <Text style={AppStyle.Style_Chitiet_giaodich.text} >Tổng Thanh toán</Text>
                    <Text style={AppStyle.Style_Chitiet_giaodich.text}>250.000 đ</Text>
                </View>
                {/* <LinearGradient  
               colors={['#8B3BFF','#B738FF']} style={{opacity:1, height: 48, justifyContent:'center', alignItems: 'center',   borderRadius:8}}>
                   <TouchableOpacity>
                    <Text>Thanh toán</Text>
                </TouchableOpacity>
               </LinearGradient> */}

                {/* <TouchableOpacity>
                    <Text>Hủy</Text>
                </TouchableOpacity> */}
                 <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    colors={['#8B3BFF', '#B738FF']} style={{ opacity: 1, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginHorizontal: 13,marginVertical:6 }}>
                    <TouchableOpacity>
                        <Text style={AppStyle.Style_Chitiet_giaodich.pay} > Thanh Toán </Text>
                    </TouchableOpacity>
                </LinearGradient >

                <TouchableOpacity style={AppStyle.Style_Chitiet_giaodich.touchable}>
                    <Text style={AppStyle.Style_Chitiet_giaodich.status_item} >Hủy đơn hàng </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Chitiet_giaodich;