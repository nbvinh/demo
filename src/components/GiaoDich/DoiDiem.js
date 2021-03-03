import React from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
const DoiDiem = ({navigation}) =>{
    const dispatch = useDispatch();
    const diem = useSelector(state => state.diem)
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }
    const submit = () =>{
        diem > 0 ? Alert.alert('Thông Báo ', 'Bạn đã đổi ' + numberWithCommas(diem)  + ' điểm và nhận được ' + numberWithCommas(diem * 100) + 'VNĐ') :Alert.alert('Thông Báo ', 'Điểm của bạn bằng 0 nên không thao tác đổi được')
        dispatch({type:  'Reset_Diem'});
        navigation.navigate('Tabviewmain');
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
                    <Text style={AppStyle.StyleGiaoDich.header_text}>Đổi Điểm</Text>
            </View>
            <Text style={AppStyle.StyleGiaoDich.Text_Tieude}>Chọn đối tác</Text>
            {/* <View style={AppStyle.StyleGiaoDich.Box_DoiDiem}>
                        <Image
                            width={28} height={28}
                            source={require('../../img/img_icon_24px/partners-claping-hands1.png')}
                        />
                        <Text style={{color:'rgba(255, 255, 255, 0.6)', paddingLeft: 8,flex: 5}}>Chưa có đối tác nào</Text>
                        <TouchableOpacity style={{flex: 1.5, flexDirection:'row', alignItems:'center'}}>
                            <Text style={{color:'#ffffff', paddingRight: 8}}>Thêm</Text>
                            <Image
                                width={18} height={18}
                                source={require('../../img/img_icon_24px/chevron_right_24px.png')}
                            />
                        </TouchableOpacity>
            </View> */}
            <View style={AppStyle.StyleGiaoDich.Box_DoiDiem}>
                        <Image
                            width={28} height={28}
                            source={require('../../img/doitac.png')}
                        />
                        <Text style={{color:'#ffffff', paddingLeft: 8,flex: 5, fontSize: 15}}>IBG Loyalty</Text>
                        <View style={{flex: 1.5}}></View>
            </View>
            <TouchableOpacity style={{height: 48, flexDirection: 'row', justifyContent:'space-between',borderStyle:'dashed' ,marginVertical: 10, borderColor:'#272738', borderRadius: 8, borderWidth: 2, alignItems:'center', paddingHorizontal: 8}}>
                       <View style={{flex: 1, paddingLeft: 17}}>
                        <Image
                                width={28} height={28}
                                source={require('../../img/add_24px.png')}
                            />
                        </View>
                        <Text style={{color:'#ffffff', paddingLeft: 8,flex: 2, fontSize: 15}}>Thêm đối tác</Text>
                        
            </TouchableOpacity>
            <Text style={AppStyle.StyleGiaoDich.Text_Tieude}>Chọn điểm quy đổi</Text>
            <View style={AppStyle.StyleGiaoDich.Table_QuyDoi}>
                <View style={AppStyle.StyleGiaoDich.Hang_QuyDoi}>
                    <View style={AppStyle.StyleGiaoDich.Hang_QuyDoi_Left}>
                        <Text style={AppStyle.StyleGiaoDich.Tieude_QuyDoi}>Điểm quy đổi</Text>
                    </View>
                    <View style={AppStyle.StyleGiaoDich.Hang_QuyDoi_Right}>
                        <Text style={AppStyle.StyleGiaoDich.So_QuyDoi}> {numberWithCommas(diem)}</Text>
                        <Text style={AppStyle.StyleGiaoDich.Tieude_QuyDoi}> Điểm </Text>
                    </View>
                </View>
                <View style={{height: 0.3, borderColor: 'gba(0, 0, 0, 0.5)',borderWidth: 1,borderStyle:'dashed'}}></View>
                <View style={AppStyle.StyleGiaoDich.Hang_QuyDoi}>
                    <View style={AppStyle.StyleGiaoDich.Hang_QuyDoi_Left}>
                        <Text style={AppStyle.StyleGiaoDich.Tieude_QuyDoi}>Nhận</Text>
                    </View>
                    <View style={AppStyle.StyleGiaoDich.Hang_QuyDoi_Right}>
                        <Text style={AppStyle.StyleGiaoDich.So_QuyDoi}> {numberWithCommas(diem * 100)}</Text>
                        <Text style={AppStyle.StyleGiaoDich.Tieude_QuyDoi}> VNĐ </Text>
                    </View>
                </View>
            </View>
            <LinearGradient style={[AppStyle.StyleFirst.linear, {marginTop: 46}]} colors={['#8B3BFF', '#B738FF']} >
                        <TouchableOpacity onPress={submit}>
                        <Text style={AppStyle.StyleFirst.text}>Xác Nhận</Text>
                        </TouchableOpacity>
                    </LinearGradient>
        </View>
    );
}
export default DoiDiem;