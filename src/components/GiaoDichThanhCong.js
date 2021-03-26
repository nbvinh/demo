import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AppStyle from "../theme";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
const GiaoDichThanhCong = ({ navigation, route }) => {
    const id = route.params.id;
    const bills = useSelector(state => state.bills)
    const data = useSelector(state => state.data)
    const billsCGV = useSelector(state => state.billsCGV)

    return (
        <View style={AppStyle.Style_Giao_Dich_TCong.container}>
            <View style={AppStyle.Style_Giao_Dich_TCong.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        style={AppStyle.Style_Giao_Dich_TCong.Image}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.Style_Giao_Dich_TCong.State}>Chi tiết giao dịch</Text>
                <Text></Text>
            </View>
            {bills.map((item) => {
                if (id === item.id) return (
                    <View key={item.id.toString()} style={AppStyle.Style_Giao_Dich_TCong.information}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.title_header}>{item.tilte}</Text>
                        <View style={AppStyle.Style_Giao_Dich_TCong.content}>
                            <View style={AppStyle.Style_Giao_Dich_TCong.item}>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Số Lượng </Text>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.right}> x{item.sumamount} </Text>
                            </View>
                            <View style={AppStyle.Style_Giao_Dich_TCong.item2}>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Khuyến Mại </Text>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.right}> -0 đ </Text>
                            </View>
                            <View style={AppStyle.Style_Giao_Dich_TCong.item1}>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Thanh Toán </Text>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.right}> {item.sum}.000 </Text>
                            </View>

                        </View>
                    </View>
                )
            })}
            {billsCGV.map((item) => {
                if (id === item.id) return (
                    <View key={item.id.toString()} style={AppStyle.Style_Giao_Dich_TCong.information}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.title_header}>{item.tilte}</Text>
                        <View style={AppStyle.Style_Giao_Dich_TCong.content}>
                            <View style={AppStyle.Style_Giao_Dich_TCong.item}>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Số Lượng </Text>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.right}> x{item.value} </Text>
                            </View>
                            <View style={AppStyle.Style_Giao_Dich_TCong.item2}>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Khuyến Mại </Text>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.right}> -0 đ </Text>
                            </View>
                            <View style={AppStyle.Style_Giao_Dich_TCong.item1}>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Thanh Toán </Text>
                                <Text style={AppStyle.Style_Giao_Dich_TCong.right}> {item.priceCGV}.000 </Text>
                            </View>

                        </View>
                    </View>
                )
            })}
            <View style={AppStyle.Style_Giao_Dich_TCong.detail}>

                <View style={AppStyle.Style_Giao_Dich_TCong.content_detail}>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Mã giao dịch </Text>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.right}> DH65741671616 </Text>
                    </View>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item2}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Thời gian </Text>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.right}> -0 đ </Text>
                    </View>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item1}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Phương thức thanh toán</Text>
                        {data.map((item) => {
                            return (
                                item.isChecked && (
                                    <Text key={item.id.toString()} style={AppStyle.Style_Giao_Dich_TCong.right}>{item.text}</Text>

                                )
                            )
                        })}
                    </View>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item1}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Trạng thái</Text>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.right_status}> Thành Công </Text>
                    </View>
                </View>
            </View>

            {/* <View style={AppStyle.Style_Giao_Dich_TCong.button}>
                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    colors={['#8B3BFF', '#B738FF']} style={{ opacity: 1, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginHorizontal: 13 }}>
                    <TouchableOpacity onPåress={() => navigation.navigate('Tabviewmain')}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.pay} > Thanh Toán </Text>
                    </TouchableOpacity>
                </LinearGradient >
            </View> */}
        </View>
    )
}
export default GiaoDichThanhCong;