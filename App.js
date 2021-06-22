import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './scr/routes';

const App = () => {
  return(
  <NavigationContainer>
    <StatusBar backgroundColor="#0072BB" barStyle="light-content"/>
    <Routes/>
  </NavigationContainer>
  )
}

export default App;