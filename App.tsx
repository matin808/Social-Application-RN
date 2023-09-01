import React from 'react';
import Home from './src/Screens/Home';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        animated={true}
        // backgroundColor="#fff"
        barStyle="light-content"
      />
      <Home />
    </>
  );
};

export default App;
