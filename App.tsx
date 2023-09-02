import React from 'react';
import Home from './src/Screens/Home';
import {StatusBar} from 'react-native';
import RootNavigation from './src/Navigation';

const App = () => {
  return (
    <>
      <StatusBar
        animated={true}
        // backgroundColor="#fff"
        barStyle="light-content"
      />
      <RootNavigation />
    </>
  );
};

export default App;
