import React from "react";
import AppStyle from "../../theme";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
const LichSuDiem = ({navigation}) =>{
    const arr_point = useSelector(state => state.history_point);
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
                
                
                {
                        arr_point.map((val)=>{
                            return(
                                <View style={AppStyle.StyleLichSuDiem.Box}>
                                      {val.phuongthuc == false  ? <Image
                                        width={10} height={18}
                                        source={require('../../img/img_icon_24px/momo.png')}/> :
                                        <Image
                                        width={10} height={10}
                                        source={require('../../img/img_icon_24px/diem2.png')}/>}
                                    <View style={AppStyle.StyleLichSuDiem.Box_Center}>
                                    { val.phuongthuc === false  ? <Text style={AppStyle.StyleLichSuDiem.Box_Center_Title }>Nạp điểm từ Momo </Text> : <Text style={AppStyle.StyleLichSuDiem.Box_Center_Title }> ATM/ VISA/ MASTER/ JCB hoặc Cửa hàng tiện lợi</Text>}
                                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Time }> {val.time}</Text>
                                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Status}><View style={AppStyle.StyleLichSuDiem.Box_Status_True}></View> Thành Công</Text>
                                    </View>
                                    <Text style={AppStyle.StyleLichSuDiem.Box_Point}>{val.point} Điểm</Text>
                                </View>
                            );
                        })}
                    
                {/* <View style={AppStyle.StyleLichSuDiem.Box}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/img_icon_24px/diem2.png')}/>
                    <View style={AppStyle.StyleLichSuDiem.Box_Center}>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Title }> Thanh toán bằng điểm</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Time }> 08/11/20 - 10:45</Text>
                        <Text style={AppStyle.StyleLichSuDiem.Box_Center_Status}><View style={AppStyle.StyleLichSuDiem.Box_Status_True}></View> Thành Công</Text>
                    </View>
                    <Text style={AppStyle.StyleLichSuDiem.Box_Point}>-50 Điểm</Text>
                </View> */}
               
                
            </ScrollView>
        </View>
    );
}
export default LichSuDiem;