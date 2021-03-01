import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import AppStyle from "../../theme";
const Header = () =>{
    return(
        <View style={AppStyle.StyleBanhMi.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image
                    width={10} height={18}
                    source={require('../../img/back.png')}
                />
            </TouchableOpacity>
            <Text style={AppStyle.StyleBanhMi.Text_Header}>King Bread</Text>
            <TouchableOpacity  >
                <Image
                    width={24} height={24}
                    source={require('../../img/search_24px.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
export default Header;