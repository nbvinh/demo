import React from "react";
import {View, Text} from 'react-native';
import ScreenFirst from '../../components/ScreenFirst';
import 'react-native-gesture-handler';
import SecondScreen from "../../components/SecondScreen";
import {createStackNavigator} from '@react-navigation/stack'
import ScreenXacThucSDT from "../../components/ScreenXacThucSDT";
import Main  from "../../components/Main";
import Profile from '../../components/Profile';
import TabVoucher from "../Tabview/tabheaderVoucher";
import ThongTin from "../../components/ThongTin/ThongTin";
import Tabviewmain from "../Tabview/Tabviewmain";
const Root= createStackNavigator();
const RootStack =()=>{
    return(
        <Root.Navigator headerMode="none" initialRouteName={ScreenFirst}>
            <Root.Screen name ="ScreenFirst" component={ScreenFirst} />
            <Root.Screen name ="SecondScreen" component={SecondScreen} />
            <Root.Screen name ="ScreenXacThucSDT" component={ScreenXacThucSDT} />
            <Root.Screen name ="Profile" component={Profile} />
            <Root.Screen name ="Tabviewmain" component={Tabviewmain} />
            <Root.Screen name ="Main" component={Main} />
            <Root.Screen name ="TabVoucher" component={TabVoucher} />
            <Root.Screen name ="ThongTin" component={ThongTin} />
        </Root.Navigator>
    )
}
export default RootStack;