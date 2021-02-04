import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image,  FlatList, ScrollView } from "react-native";
// import { FlatList, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AppStyle from "../theme";
import Data from "./VoucherBanhMi/Data";
import MonAn from "./VoucherBanhMi/MonBanhMi";
import Header from "./VoucherBanhMi/Header";
const VoucherBanhMi= ({ navigation }) => {
    const [SoLuong, setSoLuong] = React.useState(0);
    const OnClick = () => setSoLuong(SoLuong + 1);
    return (
        <View style={AppStyle.StyleBanhMi.container}>
           {/* <Header /> */}
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
           <ScrollView>
            {/* hết header */}
            <View style={{ flex: 11, justifyContent: 'center'}}>
                    <View style={{height: 160, width: '100%',justifyContent:'center', marginVertical: 10, alignItems:'center'}}>
                        <Image
                            style={{height: 160, width:'100%', borderRadius: 8}} resizeMode='cover'
                            source={{uri : 'https://blog.beemart.vn/wp-content/uploads/2019/09/cach-lam-banh-mi-thit-de-ban-1-e1569653919220.jpg'}}
                        />
                    </View>
                   <ScrollView horizontal>
                        <Image
                            style={AppStyle.StyleBanhMi.IMG_item} resizeMode='cover'
                            source={{uri : 'https://image.thanhnien.vn/800/uploaded/giangvu/2020_03_24/tamcaubanhmi_dtds.jpg'}}
                        />
                        <Image
                            style={AppStyle.StyleBanhMi.IMG_item} resizeMode='cover'
                            source={{uri : 'https://cdn.daylambanh.edu.vn/wp-content/uploads/2017/07/cach-lam-banh-mi-thit-nuong-600x325.jpg'}}
                        />
                        <Image
                            style={AppStyle.StyleBanhMi.IMG_item} resizeMode='cover'
                            source={{uri : 'https://static.wixstatic.com/media/d96518_a8a02679a0484c6ca37caa0f1fc7387c~mv2.jpg/v1/fill/w_800,h_489,al_c,q_90/d96518_a8a02679a0484c6ca37caa0f1fc7387c~mv2.jpg'}}
                        />
                        <Image
                            style={AppStyle.StyleBanhMi.IMG_item} resizeMode='cover'
                            source={{uri : 'https://image.thanhnien.vn/980/uploaded/giangvu/2020_03_24/banhmichaca_hzfk.jpg'}}
                        />
                   </ScrollView>
                    <View style={{alignItems:'center', marginVertical: 10,}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', height: 12, width: 60}}>
                        <View style={{width: 8, height: 8, borderRadius:50, backgroundColor:'rgba(255, 255, 255, 0.3)'}}></View>
                        <View style={{width: 8, height: 8, borderRadius:50, backgroundColor:'rgba(255, 255, 255, 0.3)'}}></View>
                        <View style={{width: 8, height: 8, borderRadius:50, backgroundColor:'#ffffff'}}></View>
                        <View style={{width: 8, height: 8, borderRadius:50, backgroundColor:'rgba(255, 255, 255, 0.3)'}}></View>
                        <View style={{width: 8, height: 8, borderRadius:50, backgroundColor:'rgba(255, 255, 255, 0.3)'}}></View>
                        
                    </View>
                    </View>
                    <View style={AppStyle.StyleBanhMi.Content}>
                        <Text style={AppStyle.StyleBanhMi.Text_Header}>King Bread - Vua bánh mỳ kẹp</Text>
                        <Text style={AppStyle.StyleBanhMi.DiaChi}>28 Hồ Tùng Mậu, p. Mai Dịch, q. Cầu Giấy, Hà Nội</Text>
                        <View style={AppStyle.StyleBanhMi.Content_Bottom}>
                            <View style={AppStyle.StyleBanhMi.Content_BottomLeft}>
                                <Text style={{color:'#C9C9C9', paddingVertical: 3}}>Mở cửa : <Text style={{color: '#B738FF'}}>7:30</Text></Text>
                                <Text style={{color:'#C9C9C9' ,paddingVertical: 3}}>Đóng cửa : <Text style={{color: '#B738FF'}}>22:00</Text> </Text>
                            </View>
                            <View style={AppStyle.StyleBanhMi.Content_BottomRight}>
                                <TouchableOpacity>
                                    <Image
                                        width={24} height={24}
                                        source={require('../img/call.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        width={24} height={24}
                                        source={require('../img/share.png')}
                                    />
                                </TouchableOpacity>
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
                            <FlatList data={Data}
                                renderItem={({item}) => <MonAn item = {item}/>}
                                keyExtractor={item => item.id}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default VoucherBanhMi;