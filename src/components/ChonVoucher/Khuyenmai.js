import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import AppStyle from "../../theme";

const Khuyenmai = () => {
    return (
        <ScrollView>
            <View style={AppStyle.StyleVoucherCGV.address}>
                <View style={AppStyle.StyleGioHang.address2}>
                    <TextInput
                        style={[AppStyle.StyleGioHang.content1, { paddingLeft: 20 }]}
                        placeholder="Nhập mã khuyến mãi"
                        placeholderTextColor="#3E3E56"
                    />
                    <Image
                        style={AppStyle.StyleChonVoucher.img1}
                        source={require('../../img/vinh6.png')}
                    />
                </View>
            </View>
            <View style={[AppStyle.StyleVoucherCGV.address, { marginTop: 20, marginLeft: 10 }]}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={AppStyle.StyleChonVoucher.img2}
                        source={require('../../img/vinh14.png')}
                    />
                    <View style={AppStyle.StyleChonVoucher.content1}>
                        <Text style={AppStyle.StyleChonVoucher.text1}>Giảm 10k cho hóa đơn </Text>
                        <Text style={AppStyle.StyleChonVoucher.text2}>tối thiểu 300k</Text>
                        <Text style={AppStyle.StyleChonVoucher.text3}>HSD:30/12/2020</Text>
                    </View>
                    <View style={AppStyle.StyleChonVoucher.content2}>
                        <Image
                            style={AppStyle.StyleChonVoucher.img3}
                            source={require('../../img/vinh4.png')}
                        />
                        <Text style={AppStyle.StyleChonVoucher.text4}>Điều kiện</Text>
                    </View>
                </View>
            </View>
            <View style={[AppStyle.StyleVoucherCGV.address, { marginTop: 20, marginLeft: 10 }]}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={AppStyle.StyleChonVoucher.img2}
                        source={require('../../img/vinh15.png')}
                    />
                    <View style={AppStyle.StyleChonVoucher.content1}>
                        <Text style={AppStyle.StyleChonVoucher.text1}>Giảm 10k cho hóa đơn </Text>
                        <Text style={AppStyle.StyleChonVoucher.text2}>tối thiểu 300k</Text>
                        <Text style={AppStyle.StyleChonVoucher.text3}>HSD:30/12/2020</Text>
                    </View>
                    <View style={AppStyle.StyleChonVoucher.content2}>
                        <Text style={AppStyle.StyleChonVoucher.text5} />
                        <Text style={AppStyle.StyleChonVoucher.text4}>Điều kiện</Text>
                    </View>
                </View>
            </View>
            <View style={[AppStyle.StyleVoucherCGV.address, { marginTop: 20, marginLeft: 10 }]}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={AppStyle.StyleChonVoucher.img2}
                        source={require('../../img/vinh15.png')}
                    />
                    <View style={AppStyle.StyleChonVoucher.content1}>
                        <Text style={AppStyle.StyleChonVoucher.text1}>Giảm 10k cho hóa đơn </Text>
                        <Text style={AppStyle.StyleChonVoucher.text2}>tối thiểu 300k</Text>
                        <Text style={AppStyle.StyleChonVoucher.text3}>HSD:30/12/2020</Text>
                    </View>
                    <View style={AppStyle.StyleChonVoucher.content2}>
                        <Text style={AppStyle.StyleChonVoucher.text5} />
                        <Text style={AppStyle.StyleChonVoucher.text4}>Điều kiện</Text>
                    </View>
                </View>
            </View>
            <View style={[AppStyle.StyleVoucherCGV.address, { marginTop: 20, marginLeft: 10 }]}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={AppStyle.StyleChonVoucher.img2}
                        source={require('../../img/vinh16.png')}
                    />
                    <View style={AppStyle.StyleChonVoucher.content1}>
                        <Text style={AppStyle.StyleChonVoucher.text1}>Giảm 10k cho hóa đơn </Text>
                        <Text style={AppStyle.StyleChonVoucher.text2}>tối thiểu 300k</Text>
                        <Text style={AppStyle.StyleChonVoucher.text3}>Đã hết hạn</Text>
                    </View>
                    <View style={AppStyle.StyleChonVoucher.content2}>
                        <Text style={AppStyle.StyleChonVoucher.text5} />
                        <Text style={AppStyle.StyleChonVoucher.text4}>Điều kiện</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 200 }}></View>
        </ScrollView>
    )
}
export default Khuyenmai;