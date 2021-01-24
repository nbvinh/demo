/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootStack from "./src/navigators/Screen/RootStack";

import {NavigationContainer} from '@react-navigation/native'

import ScreenFirst from './src/components/ScreenFirst'

const App=()=>{
  return(
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default App;
