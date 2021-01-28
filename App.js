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
import  Main  from "./src/components/Main";
import {NavigationContainer} from '@react-navigation/native'

// import ScreenFirst from './src/components/ScreenFirst'
import ScreenXacThucSDT from "./src/components/ScreenXacThucSDT";
const App = () =>{
  return(
  //  <Main />
    <NavigationContainer>
       <RootStack/>
    </NavigationContainer>
  )
}

export default App;
