import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import App from '../../App';
import AppStyle from "../theme";
import LinearGradient from "react-native-linear-gradient";

const Giao_Dich_Thanh_Cong = ({navigation}) => {
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
            <View style={AppStyle.Style_Giao_Dich_TCong.information}>
                <Text style={AppStyle.Style_Giao_Dich_TCong.title_header}>Voucher CGV Cinema</Text>
                <View style={AppStyle.Style_Giao_Dich_TCong.content}>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Số Lượng </Text>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.right}> x5 </Text>
                    </View>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item2}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Khuyến Mại </Text>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.right}> -0 đ </Text>
                    </View>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item1}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Thanh Toán </Text>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.right}> 1.500.000 </Text>
                    </View>

                </View>
            </View>
            <View style={AppStyle.Style_Giao_Dich_TCong.detail}>

                <View style={AppStyle.Style_Giao_Dich_TCong.content_detail}>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Mã giao dịch </Text>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.right}> x5 </Text>
                    </View>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item2}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Thời gian </Text>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.right}> -0 đ </Text>
                    </View>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item1}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Phương thức thanh toán</Text>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.right}> 1.500.000 </Text>
                    </View>
                    <View style={AppStyle.Style_Giao_Dich_TCong.item1}>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.left}>Trạng thái</Text>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.right_status}> Chưa thanh toán </Text>
                    </View>
                </View>
            </View>

            <View style={AppStyle.Style_Giao_Dich_TCong.button}>
                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    colors={['#8B3BFF', '#B738FF']} style={{ opacity: 1, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginHorizontal: 13 }}>
                    <TouchableOpacity>
                        <Text style={AppStyle.Style_Giao_Dich_TCong.pay} > Thanh Toán </Text>
                    </TouchableOpacity>
                </LinearGradient >

                <TouchableOpacity style={AppStyle.Style_Giao_Dich_TCong.touchable}>
                    <Text style={AppStyle.Style_Giao_Dich_TCong.status_item} >Hủy đơn hàng </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Giao_Dich_Thanh_Cong;