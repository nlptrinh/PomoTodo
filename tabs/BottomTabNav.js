import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { Ionicons } from '../node_modules/@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import FolderScreen from '../screens/FolderScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainScreenNavigator = createBottomTabNavigator({
  Folder:FolderScreen,
  Home:HomeScreen,
  Profile:ProfileScreen,
});

export default BottomTabContainer = createSwitchNavigator(MainScreenNavigator)