import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, ActivityIndicator, } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import MainActivity from './screens/MainActivity';
import FlatListTask from './tabs/FlatListTask';
import PomoClock from './screens/PomoClock';

import * as firebase from 'firebase';
import firebaseConfig from './Config';

console.disableYellowBox = true;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <MainActivity/>
    );
  } 
}


// export default class App extends React.Component {
//   render() {
//     return (
//       <AppNavigator/>
//     )
//   }
// }

const AppSwitchNavigator = createSwitchNavigator(
  {
  LoginScreen:LoginScreen,
  LoadingScreen:LoadingScreen,
  MainActivity:MainActivity,
  }
);

const AppNavigator = createAppContainer(AppSwitchNavigator);

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ])
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

//AppRegistry.registerComponent('PomoTodo', () => AppNavigator);