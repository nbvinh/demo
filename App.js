/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import RootStack from "./src/navigators/Screen/RootStack";

import {NavigationContainer} from '@react-navigation/native'

// import ScreenFirst from './src/components/ScreenFirst'
import ScreenXacThucSDT from "./src/components/ScreenXacThucSDT";
const App = () =>{
  return(
   
    <NavigationContainer>
       <RootStack/>
    </NavigationContainer>
  )
}

export default App;
