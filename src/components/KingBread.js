import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";
import SlideImg from "../components/KingBread/SlideImg";

const KingBread = ({ navigation }) => {
    return (
        <View style={AppStyle.StyleVoucherCGV.container}>
            <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={[AppStyle.StyleVoucherCGV.text, { marginLeft: 130 }]}>King Bread</Text>
            </View>
            <View style={{ flex: 11 }}>
                <ScrollView>
                    <View style={AppStyle.StyleVoucherCGV.img}>
                        <Image
                            style={AppStyle.StyleVoucherCGV.img1}
                            source={require('../img/vinh29.png')}
                        />
                    </View>
                    <SlideImg />
                    <View style={{ margin: 15 }}>
                        <Text style={AppStyle.StyleKingBread.text1}>King Bread - Vua bánh mì kẹp</Text>
                        <View style={AppStyle.StyleKingBread.content2}>
                            <Image
                                style={AppStyle.StyleKingBread.img1}
                                source={require('../img/vinh30.png')}
                            />
                            <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>28 Hồ Tùng Mậu, p. Mai Dịch, q. Cầu Giấy, Hà Nội</Text>
                        </View>
                        <View style={AppStyle.StyleKingBread.content1}>
                            <View >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>Mở cửa: </Text>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#B738FF' }]}>7:30</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>Đóng cửa: </Text>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#B738FF' }]}>22:00</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 50, height: 36, marginRight: 20 }}
                                        source={require('../img/vinh31.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 50, height: 36, marginBottom: 10 }}
                                        source={require('../img/vinh32.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={[AppStyle.StyleKingBread.touchable1, { backgroundColor: '#B738FF' }]}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Combo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[AppStyle.StyleKingBread.touchable1, { backgroundColor: 'rgba(39,39,56,0.75)' }]}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Bánh Mì</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[AppStyle.StyleKingBread.touchable1, { backgroundColor: 'rgba(39,39,56,0.75)' }]}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Đồ Uống</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={AppStyle.StyleKingBread.text1}>Combo</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={AppStyle.StyleVoucherCGV.footer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={AppStyle.StyleVoucherCGV.img3}
                        source={require('../img/vinh8.png')}
                    />
                    <Text style={AppStyle.StyleVoucherCGV.text9}>60.000 đ</Text>
                </View>
                <View style={AppStyle.StyleVoucherCGV.footer1}>
                    <Text style={AppStyle.StyleVoucherCGV.text10}>5</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('GioHang')}>
                    <Image
                        style={AppStyle.StyleVoucherCGV.img4}
                        source={require('../img/vinh0.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default KingBread;