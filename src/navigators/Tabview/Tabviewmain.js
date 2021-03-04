import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../../components/Main';
import ThongTin from '../../components/ThongTin/ThongTin';
import TabVoucher from "./tabheaderVoucher";
import History_Transform from "../../components/History_Transform";
const Tab = createBottomTabNavigator();
const TabViewMain = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            style: {
                backgroundColor: 'black',
                borderTopColor: 'black',
                borderWidth: 1, 
            },
            activeBackgroundColor:'#8B3BFF',
            tabStyle:{
                height:60,
            },

        }}>
            <Tab.Screen name="Home" component={Main} options={{
                tabBarLabel: '',
                tabBarIcon: () => <Image width={20} height={18} source={require('../../img/img_icon_24px/home_24px.png')} />}} />
            <Tab.Screen name="LichSu" component={History_Transform} options={{ tabBarLabel: '', tabBarIcon: () => <Image width={20} height={18} source={require('../../img/img_icon_24px/lsu_24px.png')} /> }} />
            <Tab.Screen name="KhamPha" component={TabVoucher} options={{ tabBarLabel: '', tabBarIcon: () => <Image width={20} height={18} source={require('../../img/img_icon_24px/kampha_24px.png')} /> }} />
            <Tab.Screen name="Voucher" component={TabVoucher} options={{ tabBarLabel: '', tabBarIcon: () => <Image width={20} height={18} source={require('../../img/img_icon_24px/voucher_24pxcopy.png')} /> }} />
            <Tab.Screen name="ThongTin" component={ThongTin} options={{ tabBarLabel: '', tabBarIcon: () => <Image width={20} height={18} source={require('../../img/img_icon_24px/list_24px.png')} /> }} />
        </Tab.Navigator>
    );
}
export default TabViewMain;