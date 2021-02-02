import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AppStyle from "../theme";
import SlideImg from "./VoucherCGV/sildeImg";

const VoucherBanhMi= ({ navigation }) => {
    return (
        <View style={AppStyle.StyleBanhMi.container}>
            <View style={AppStyle.StyleBanhMi.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleBanhMi.Text_Header}>King Bread</Text>
                <TouchableOpacity  >
                    <Image
                        width={24} height={24}
                        source={require('../img/search_24px.png')}
                    />
                </TouchableOpacity>
            </View>
            {/* hết header */}

            <View style={{ flex: 11, justifyContent: 'center'}}>
                <ScrollView>
                    <View style={{height: 160, width: '95%', marginVertical:  20,}}>
                        <Image
                            height = {160} width = {359}
                            source={require('../img/banhmito.png')}
                        />
                    </View>
                    <SlideImg />
                    <View style={AppStyle.StyleBanhMi.Content}>
                        <Text style={AppStyle.StyleBanhMi.Text_Header}>King Bread - Vua bánh mỳ kẹp</Text>
                        <Text style={AppStyle.StyleBanhMi.DiaChi}>28 Hồ Tùng Mậu, p. Mai Dịch, q. Cầu Giấy, Hà Nội</Text>
                        <View style={AppStyle.StyleBanhMi.Content_Bottom}>
                            <View style={AppStyle.StyleBanhMi.Content_BottomLeft}>
                                <Text style={{color:'#C9C9C9', paddingVertical: 3}}>Mở cửa :<Text style={{color: '#B738FF'}}>7:30</Text></Text>
                                <Text style={{color:'#C9C9C9' ,paddingVertical: 3}}>Đóng cửa:<Text style={{color: '#B738FF'}}>22:00</Text> </Text>
                            </View>
                            <View style={AppStyle.StyleBanhMi.Content_BottomRight}>
                                
                            </View>
                        </View>
                        <View style={AppStyle.StyleBanhMi.ListButtonMon}>
                            <LinearGradient style={AppStyle.StyleBanhMi.NutChonMon} colors={['#8B3BFF', '#B738FF']}>
                                <TouchableOpacity>
                                    <Text style={AppStyle.StyleBanhMi.TextNutChonMonActive}>Combo</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            <View style={[AppStyle.StyleBanhMi.NutChonMonNotAcTive, AppStyle.StyleBanhMi.NutChonMon]}>
                                <Text style={AppStyle.StyleBanhMi.TextNutChonMonNotActive}>Bánh Mì</Text>
                            </View>
                            <View style={[AppStyle.StyleBanhMi.NutChonMonNotAcTive, AppStyle.StyleBanhMi.NutChonMon]}>
                                <Text style={AppStyle.StyleBanhMi.TextNutChonMonNotActive}>Đồ uống</Text>
                            </View>
                        </View>
                        <View style={AppStyle.StyleBanhMi.ListMon}>
                            <Text style={AppStyle.StyleBanhMi.TenLoai}>Combo</Text>
                            <View style={AppStyle.StyleBanhMi.MonAn}>
                                <Image
                                    height = {82} width = {82} resizeMode='cover'
                                    source={require('../img/BANHMI01.png')}
                                />
                                <View style={AppStyle.StyleBanhMi.MonAn_Content}>
                                    <Text>Bánh mì Pate chả + Cafe sữa đá</Text>
                                    <Text>45.000 đ</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </ScrollView>
            </View>
        </View>
    )
}
export default VoucherBanhMi;