import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import ChuaSuDung from "../../components/VoucherCuaToi/ChuaSuDung";
import DaSuDung from "../../components/VoucherCuaToi/DaSuDung";
import AppStyle from "../../theme";
import { useState } from "react/cjs/react.development";
const Tab = createMaterialTopTabNavigator();

const TabVoucher = ({ navigation }) => {
  const [color, setColor] = useState('test')
  console.log(color)
  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 8 }}>
      <View style={{ marginTop: 50, height: 30, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
          <Image
            width={10} height={18}
            source={require('../../img/back.png')}
          />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', width: '85%', color: 'white', fontSize: 17, fontWeight: '500' }}>Voucher của tôi</Text>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#822FFB',
          labelStyle: { fontSize: 15, fontWeight: '400' },
          indicatorStyle: { backgroundColor: '#822FFB' },
          style: { backgroundColor: 'black', marginHorizontal: 12, marginTop: 18, activeBackgroundColor: 'rgba(139, 59, 255, 0.15)', },

        }}>
        <Tab.Screen name="ChuaSuDung" component={ChuaSuDung} options={{ tabBarLabel: 'Chưa sử dụng' }} />
        <Tab.Screen name="DaSuDung" component={DaSuDung} options={{ tabBarLabel: 'Đã sử dụng' }} />
      </Tab.Navigator>
    </View>
  );
}
export default TabVoucher;