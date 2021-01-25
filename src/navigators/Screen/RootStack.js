import React from "react";
import {View, Text} from 'react-native';
import ScreenFirst from '../../components/ScreenFirst';
import 'react-native-gesture-handler';
import SecondScreen from "../../components/SecondScreen";
import {createStackNavigator} from '@react-navigation/stack'
import ScreenXacThucSDT from "../../components/ScreenXacThucSDT";
const Root= createStackNavigator();
const RootStack =()=>{
    return(
        <Root.Navigator headerMode="none" initialRouteName={ScreenFirst}>
            
            <Root.Screen name ="ScreenFirst" component={ScreenFirst} />
            <Root.Screen name ="SecondScreen" component={SecondScreen} />
            <Root.Screen name ="ScreenXacThucSDT" component={ScreenXacThucSDT} />
        </Root.Navigator>
    )
}
export default RootStack;