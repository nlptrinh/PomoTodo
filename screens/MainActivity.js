import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomNavigation } from 'react-native-paper';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import FolderScreen from './FolderScreen';
import firebase from 'firebase';
import '@firebase/firestore';

export default class MainActivity extends React.Component {
  navigationOptions = {
    title: 'MainActivity',
  };
  
  state = {
    index: 0,
    routes: [
      { key: 'FolderScreen', title: 'Folder', icon: 'folder' },
      { key: 'HomeScreen', title: 'Home', icon: 'home' },
      { key: 'ProfileScreen', title: 'Profile', icon: 'profile' },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    FolderScreen:FolderScreen,
    HomeScreen:HomeScreen,
    ProfileScreen:ProfileScreen,
  });

  render() {
    return (
      <BottomNavigation
      activeColor='rgb(3, 28, 63)'
      barStyle={{backgroundColor: 'white'}} 
      inactiveColor='grey'
      navigationState={this.state}
      onIndexChange={this.handleIndexChange}
      renderScene={this.renderScene}
      />
    );
  }
}
