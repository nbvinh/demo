import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AppStyle from '../../theme';
const Main_point = () =>{
    return(
        <View style={AppStyle.StyleMain.poin_your}>
            <View style={AppStyle.StyleMain.poin_your_left}>
                <Text style={{color:'white', fontSize: 15, fontWeight:'400'}}> Điểm của bạn </Text>
                <Text style={{color:'white', fontSize: 18, fontWeight:'600'}}> 0</Text>
           </View>
           <View style={AppStyle.StyleMain.poin_your_right}>
                    <LinearGradient
                       style={{width: 27, height: 27, borderRadius: 8, justifyContent:'center', alignItems:'center', marginRight: 15}}
                        colors={['#8B3BFF', '#B738FF']}
                    >
                        <TouchableOpacity>
                         <Text style={{color:'white', fontSize: 22}}>+</Text>
                        </TouchableOpacity>
                    </LinearGradient>
            <Text  style={{color:'white', fontSize: 12}}> Nạp điểm </Text>
           </View>
       </View>
    );
}
export default Main_point;