import React from "react";
import AppStyle from "../../theme";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const LichSuDiem = ({navigation}) =>{
    return(
        <View style={AppStyle.StyleLichSuDiem.container}>
            <View style={AppStyle.StyleLichSuDiem.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 10 }}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleLichSuDiem.header_text}>Lịch Sử Điểm</Text>
                <Image
                        width={10} height={18}
                        source={require('../../img/img_icon_24px/filter_list_24px_rounded.png')}
                    />
            </View>
            <ScrollView>
                {/* bắt đầu 1 boxx */}
                <View style={AppStyle.StyleLichSuDiem.Box}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/img_icon_24px/momo.png')}/>
                    <View style={AppStyle.StyleLichSuDiem.Box_Center}>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Title }> Nạp điểm từ Momo</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Time }> 08/11/20 - 10:45</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Status}><View style={AppStyle.StyleLichSuDiem.Box_Status_True}></View> Thành Công</Text>
                    </View>
                    <Text style={AppStyle.StyleLichSuDiem.Box_Point}>+1000 Điểm</Text>
                </View>
                {/* hết 1 box */}
                {/* bắt đầu 1 boxx */}
                <View style={AppStyle.StyleLichSuDiem.Box}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/img_icon_24px/diem2.png')}/>
                    <View style={AppStyle.StyleLichSuDiem.Box_Center}>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Title }> Thanh toán bằng điểm</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Time }> 08/11/20 - 10:45</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Status}><View style={AppStyle.StyleLichSuDiem.Box_Status_True}></View> Thành Công</Text>
                    </View>
                    <Text style={AppStyle.StyleLichSuDiem.Box_Point}>-400 Điểm</Text>
                </View>
                {/* hết 1 box */}
                {/* bắt đầu 1 boxx */}
                <View style={AppStyle.StyleLichSuDiem.Box}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/img_icon_24px/momo.png')}/>
                    <View style={AppStyle.StyleLichSuDiem.Box_Center}>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Title }> Nạp điểm từ Momo</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Time }> 08/11/20 - 10:45</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Status}><View style={AppStyle.StyleLichSuDiem.Box_Status_False}></View> Thất bại</Text>
                    </View>
                    <Text style={AppStyle.StyleLichSuDiem.Box_Point}>+1000 Điểm</Text>
                </View>
                {/* hết 1 box */}
                {/* bắt đầu 1 boxx */}
                <View style={AppStyle.StyleLichSuDiem.Box}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/img_icon_24px/diem2.png')}/>
                    <View style={AppStyle.StyleLichSuDiem.Box_Center}>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Title }> Thanh toán bằng điểm</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Time }> 08/11/20 - 10:45</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Status}><View style={AppStyle.StyleLichSuDiem.Box_Status_True}></View> Thành Công</Text>
                    </View>
                    <Text style={AppStyle.StyleLichSuDiem.Box_Point}>-68 Điểm</Text>
                </View>
                {/* hết 1 box */}
                {/* bắt đầu 1 boxx */}
                <View style={AppStyle.StyleLichSuDiem.Box}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/img_icon_24px/diem2.png')}/>
                    <View style={AppStyle.StyleLichSuDiem.Box_Center}>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Title }> Thanh toán bằng điểm</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Time }> 08/11/20 - 10:45</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Status}><View style={AppStyle.StyleLichSuDiem.Box_Status_True}></View> Thành Công</Text>
                    </View>
                    <Text style={AppStyle.StyleLichSuDiem.Box_Point}>-50 Điểm</Text>
                </View>
                {/* hết 1 box */}
                {/* bắt đầu 1 boxx */}
                <View style={AppStyle.StyleLichSuDiem.Box}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/img_icon_24px/momo.png')}/>
                    <View style={AppStyle.StyleLichSuDiem.Box_Center}>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Title }> Mua Điểm</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Time }> 08/11/20 - 10:45</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Status}><View style={AppStyle.StyleLichSuDiem.Box_Status_False}></View> Thất Bại</Text>
                    </View>
                    <Text style={AppStyle.StyleLichSuDiem.Box_Point}>+1000 Điểm</Text>
                </View>
                {/* hết 1 box */}
            </ScrollView>
        </View>
    );
}
export default LichSuDiem;