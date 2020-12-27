/* eslint-disable prettier/prettier */
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

  StatusBar,
} from 'react-native';
import Post from './src/components/post/index';
import HomeScreen from './src/screens/Home/index';
import feed from './assets/data/feed.js'
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationScreen from './src/screens/DestinationSearch';


const post1 = feed[0]



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResultsScreen /> */}
        <DestinationScreen/>


      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
