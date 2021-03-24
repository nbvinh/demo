
import React from 'react';
import 'react-native-gesture-handler';
import RootStack from "./src/navigators/Screen/RootStack";
import { createStore ,  applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import { Provider } from "react-redux";
import reducer from "./src/reducers/reducer";
import rootSaga from './src/Saga/mySaga';


const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
  return (
    //  <Main />
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}

export default App;
