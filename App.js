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
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducers/reducer";


const App = () => {
  const store = createStore(reducer);
  return (
    //  <Main />
    <Provider store={store}>
      <RootStack />

    </Provider>
  )
}

export default App;
