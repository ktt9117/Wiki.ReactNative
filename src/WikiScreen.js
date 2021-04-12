import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from './SearchBar';
export default class WikiScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', padding: 16}}>
        <SearchBar />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
