import React, {Component} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
export default class SearchBar extends Component {
  render() {
    return (
      <View style={style.container}>
        <TextInput
          style={{
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            flex: 7,
          }}
        />
        <Button style={{flex: 3}} title={'검색'} />
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
