import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import FlatListTask from '../tabs/FlatListTask';

export default class DayScreen extends Component {
  render() {
    return (
      <FlatListTask/>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
	}
});