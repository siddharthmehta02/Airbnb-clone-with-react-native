/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import {

  StyleSheet,

  StatusBar,
} from 'react-native';
// import HomeScreen from './src/screens/Home/index';
import Router from './src/navigations/Router';







const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
