import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
const Main_Search = () =>{
    return(
        <View style={AppStyle.StyleMain.search}>
           <View style={AppStyle.StyleMain.search_left}>
                    <Image
                            style={{width: 20, height: 20, marginLeft: 15}}
                            source={require('../../img/search_24px.png')}
                        />
                    <TextInput style={{width: '82%'}} placeholder='Nhập từ khoá tìm kiếm...' placeholderTextColor='gray'/>
           </View>
           <View style={AppStyle.StyleMain.search_right}>
                <Text style={{color: 'white', fontSize: 15, fontWeight: '400'}}> Hà Nội <Image
                            style={{width: 14, height: 8}}
                            source={require('../../img/expand_more_24px.png')}
                        /></Text>
           </View>
       </View>
    );
}
export default Main_Search;