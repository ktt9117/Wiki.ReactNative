import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class ListHeader extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>헤더</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
