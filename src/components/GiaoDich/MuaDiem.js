import React from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
const MuaDiem = ({navigation}) =>{
    const dispatch = useDispatch();
    const [diem, setDiem] = React.useState(0);
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }
    return(
        <View style={AppStyle.StyleGiaoDich.container}>
                <View style={AppStyle.StyleGiaoDich.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 10 }}>
                        <Image
                            width={10} height={18}
                            source={require('../../img/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.StyleGiaoDich.header_text}>Mua Điểm</Text>
            </View>
            <Text style={AppStyle.StyleGiaoDich.Text_Tieude}>Nhập số cần mua</Text>
            <TextInput  placeholder='0' placeholderTextColor='rgba(255, 255, 255, 0.3)' keyboardType='numeric' style ={[AppStyle.StyleGiaoDich.Box_DoiDiem, {color: 'rgba(255, 255, 255, 0.3)'}]} onChangeText={(value) => setDiem(value)}/>
            <View style={AppStyle.StyleGiaoDich.TongTien}>
                <Text style={AppStyle.StyleGiaoDich.Text_White}>Tổng Tiền</Text>
                <Text style={AppStyle.StyleGiaoDich.Text_White}>{numberWithCommas(diem*100)} VNĐ</Text>
            </View>
            <View style={AppStyle.StyleGiaoDich.PhuongThucThanhToan}>
                <Text style={AppStyle.StyleGiaoDich.Text_White}>Chọn Phương thức thanh toán</Text>
                <View style={AppStyle.StyleGiaoDich.Item_ThanhToan}>
                    <TouchableOpacity style={{marginHorizontal: 8}}>
                        <Image
                                width={16} height={16}
                                source={require('../../img/img_icon_24px/check0.png')} />
                    </TouchableOpacity>
                    <Text style={AppStyle.StyleGiaoDich.Text_ChonThanhToan}>ATM/ VISA/ MASTER/ JCB hoặc Cửa hàng tiện lợi.</Text>
                </View>
                <View style={AppStyle.StyleGiaoDich.Item_ThanhToan}>
                    <TouchableOpacity style={{marginHorizontal: 8}}>
                        <Image
                                width={16} height={16}
                                source={require('../../img/img_icon_24px/check0.png')} />
                    </TouchableOpacity>
                    <Text style={AppStyle.StyleGiaoDich.Text_ChonThanhToan}>Thanh toán bằng Momo</Text>
                </View>
            </View>
                <LinearGradient
                        style={AppStyle.StyleFirst.linear}
                        colors={['#8B3BFF', '#B738FF']} >
                        <TouchableOpacity  onPress={() => {
                            Alert.alert('Thông báo', 'Bạn đã thanh toán thành công!');
                             dispatch({type: 'UPDIEM', diem : diem.diem});
                            navigation.navigate('Tabviewmain');
                        }}>
                        <Text style={AppStyle.StyleFirst.text}>Tiến hành thanh toán</Text>
                        </TouchableOpacity>
                    </LinearGradient>
        </View>
    );
}
export default MuaDiem;