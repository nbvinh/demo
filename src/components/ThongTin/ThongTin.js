import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
import LinearGradient from 'react-native-linear-gradient';

// const Item= ({item}) =>{

// }
const ThongTin = ({navigation}) =>{
    return(
        <View style={AppStyle.StyleLichSu.container}>
            <View style={{ marginTop: 50, height: 30, flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 10 }}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={{textAlign:'center', width: '85%', color:'white', fontSize: 17, fontWeight: '500'}}>Thông Tin</Text>
          </View>
            <View style={AppStyle.StyleLichSu.item}>
                <View style={AppStyle.StyleLichSu.item_left}>
                    <Image
                        style={{width: 24, height: 24}}
                        source={require('../../img/img_icon_24px/moibb_24px.png')}/>
                        <Text >Mời bạn bè</Text>
                </View>
                <View style={AppStyle.StyleLichSu.item_right}>

                </View>
            </View>
        </View>
    );
}
export default ThongTin;