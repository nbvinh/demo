import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AppStyle from "../../theme";
const MonAn = ({item}) =>{
    return (
            <View style={AppStyle.StyleBanhMi.MonAn}>
                <Image
                    style={{width: 82, height: 82}} resizeMode='cover'
                    source={{uri : item.img}}
                />
                <View style={AppStyle.StyleBanhMi.MonAn_Content}>
                    <Text style={AppStyle.StyleBanhMi.MonAn_ContentText}>{item.Ten}</Text>
                    <Text style={AppStyle.StyleBanhMi.MonAn_ContentText}>{item.Gia.toLocaleString()} đ</Text>
                </View>
                <View style={{justifyContent:'flex-end', alignItems:'flex-end', flex: 1, marginRight:10,}}>
                    <LinearGradient style={AppStyle.StyleBanhMi.NutChonMua} colors={['#8B3BFF', '#B738FF']}>
                        <TouchableOpacity>
                            <Text style={AppStyle.StyleBanhMi.TextNutChonMua}>+</Text>
                         </TouchableOpacity>
                    </LinearGradient>
                </View>
             </View>
    );
}

export default MonAn;