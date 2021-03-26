import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, TextInput, SafeAreaView, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";

import AsyncStorage from '@react-native-async-storage/async-storage';

// const Data = [
//     {
//         id: '1',
//         icon:"moibb_24px.png",
//         text:'Mời bạn bè',
//     },
//     {
//         id: '2',
//         icon:'moibb_24px',
//         text:'Lịch sử điểm',
//     },
//     {
//         id: '3',
//         icon:'moibb_24px',
//         text:'Chính sách bảo mật',
//     },
//     {
//         id: '4',
//         icon:'moibb_24px',
//         text:'Điều khoản sử dụng',
//     },
//     {
//         id: '5',
//         icon:'moibb_24px',
//         text:'Câu hỏi thường gặp',
//     },
//     {
//         id: '6',
//         icon:'moibb_24px',
//         text:'hỗ trợ',
//     },
//     {
//         id: '7',
//         icon:'moibb_24px',
//         text:'Đăng xuất',
//     },
// ]
// const Item = ({item}) =>{
//     return (
//         <View style={AppStyle.StyleLichSu.item}>
//             <View style={AppStyle.StyleLichSu.item_left}>
//                 <Image
//                     style={{width: 24, height: 24}}
//                     source={require("../../img/img_icon_24px/moibb_24px.png")}/>
//                     <Text style={{color: '#ffffff', marginLeft: 10, fontSize: 15}}>{item.text}</Text>
//             </View>
//             <View style={AppStyle.StyleLichSu.item_right}>
//                 <Image
//                 style={{width: 10, height: 10}}
//                 source={require('../../img/img_icon_24px/chevron_right_24px.png')}/>
//             </View>
//         </View>
//     );
// }
const ThongTin = ({ navigation }) => {
    return (
        <SafeAreaView style={AppStyle.StyleLichSu.container}>
            <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleVoucherCGV.text}>Thông Tin</Text>
            </View>
            {/* <FlatList
                data={Data}
                renderItem={({item}) =><Item item = {item}/>}
                keyExtractor={(item) => item.id}
            /> */}
            <View style={{ marginHorizontal: 12, flex: 11 }}>
                <ScrollView >
                    <TouchableOpacity style={AppStyle.StyleLichSu.item} onPress={() => navigation.navigate('MoiBanBe')}>
                        <View style={AppStyle.StyleLichSu.item_left}>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../../img/img_icon_24px/moibb_24px.png')} />
                            <Text style={{ color: '#ffffff', marginLeft: 10, fontSize: 15 }}>Mời bạn bè</Text>
                        </View>
                        <View style={AppStyle.StyleLichSu.item_right}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={require('../../img/img_icon_24px/chevron_right_24px.png')} />
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={AppStyle.StyleLichSu.item} onPress={() => navigation.navigate('LichSuDiem')}>
                        <View style={AppStyle.StyleLichSu.item_left}>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../../img/img_icon_24px/lichsu_24px.png')} />
                            <Text style={{ color: '#ffffff', marginLeft: 10, fontSize: 15 }}>Lịch Sử điểm</Text>
                        </View>
                        <View style={AppStyle.StyleLichSu.item_right}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={require('../../img/img_icon_24px/chevron_right_24px.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={AppStyle.StyleLichSu.item}>
                        <View style={AppStyle.StyleLichSu.item_left}>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../../img/img_icon_24px/baomat_24px.png')} />
                            <Text style={{ color: '#ffffff', marginLeft: 10, fontSize: 15 }}>Chính sách bảo mật</Text>
                        </View>
                        <View style={AppStyle.StyleLichSu.item_right}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={require('../../img/img_icon_24px/chevron_right_24px.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={AppStyle.StyleLichSu.item}>
                        <View style={AppStyle.StyleLichSu.item_left}>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../../img/img_icon_24px/dieukhoan_24px.png')} />
                            <Text style={{ color: '#ffffff', marginLeft: 10, fontSize: 15 }}>Điều khoản sử dụng</Text>
                        </View>
                        <View style={AppStyle.StyleLichSu.item_right}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={require('../../img/img_icon_24px/chevron_right_24px.png')} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={AppStyle.StyleLichSu.item}>
                        <View style={AppStyle.StyleLichSu.item_left}>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../../img/img_icon_24px/Q&A_24px.png')} />
                            <Text style={{ color: '#ffffff', marginLeft: 10, fontSize: 15 }}>Câu hỏi thường gặp</Text>
                        </View>
                        <View style={AppStyle.StyleLichSu.item_right}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={require('../../img/img_icon_24px/chevron_right_24px.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={AppStyle.StyleLichSu.item}>
                        <View style={AppStyle.StyleLichSu.item_left}>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../../img/img_icon_24px/hotro_24px.png')} />
                            <Text style={{ color: '#ffffff', marginLeft: 10, fontSize: 15 }}>Hỗ Trợ</Text>
                        </View>
                        <View style={AppStyle.StyleLichSu.item_right}>
                            <Image
                                style={{ width: 10, height: 10 }}
                                source={require('../../img/img_icon_24px/chevron_right_24px.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={AppStyle.StyleLichSu.item}>
                        <TouchableOpacity style={AppStyle.StyleLichSu.item_left} onPress={() => navigation.navigate('ScreenFirst')}>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../../img/img_icon_24px/logout_24px.png')} />
                            <TouchableOpacity onPress={() =>  
                            {AsyncStorage.setItem('Token',null); navigation.navigate('ScreenFirst')}
            }><Text style={{ color: '#ffffff', marginLeft: 10, fontSize: 15 }}>Đăng Xuất</Text></TouchableOpacity>
                        </TouchableOpacity>


                    </TouchableOpacity>
                    <View style={{ height: 200 }} />
                </ScrollView>
            </View>
        </SafeAreaView>

    );
}
export default ThongTin;