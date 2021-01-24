import React from "react";
import {View, Text} from 'react-native';
import ScreenFirst from '../../components/ScreenFirst';
import SecondScreen from "../../components/SecondScreen";
import {createStackNavigator} from '@react-navigation/stack'

const Root= createStackNavigator();
const RootStack =()=>{
    return(
        <Root.Navigator headerMode="none">
            <Root.Screen name ="ScreenFirst" component={ScreenFirst} />
            <Root.Screen name ="SecondScreen" component={SecondScreen} />
        </Root.Navigator>
    )
}
export default RootStack;