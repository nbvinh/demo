import React from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
const DoiDiem = ({navigation}) =>{
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
            <View style={AppStyle.StyleGiaoDich.Box_DoiDiem}>
                        <Image
                            width={28} height={28}
                            source={require('../../img/img_icon_24px/partners-claping-hands1.png')}
                        />
                        <Text style={{color:'rgba(255, 255, 255, 0.6)', paddingLeft: 8,flex: 5}}>Chưa có đối tác nào</Text>
                        <TouchableOpacity style={{flex: 1, flexDirection:'row', alignItems:'center'}}>
                            <Text style={{color:'#ffffff', paddingRight: 8}}>Thêm</Text>
                            <Image
                                width={18} height={18}
                                source={require('../../img/img_icon_24px/chevron_right_24px.png')}
                            />
                        </TouchableOpacity>
            </View>
        </View>
    );
}
export default DoiDiem;