import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Tab, Tabs, StyleProvider } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WeekScreen from './WeekList'
import DayScreen from './DayList'
import firebase from 'firebase';
import '@firebase/firestore';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Tabs>
          <Tab 
            heading='TODAY'
            tabStyle={{backgroundColor: 'rgb(3, 28, 63)'}}
            textStyle={{color: '#fff', fontSize: 22, fontWeight: 'normal'}}
            activeTabStyle={{backgroundColor: '#ffffff'}}
            activeTextStyle={{color: '#000', fontSize: 25, fontWeight: '700'}}
            >
            <DayScreen/>
          </Tab>
          <Tab 
            heading='WEEK'
            tabStyle={{backgroundColor: 'rgb(3, 28, 63)'}}
            textStyle={{color: '#fff', fontSize: 22, fontWeight: 'normal'}}
            activeTabStyle={{backgroundColor: '#ffffff'}}
            activeTextStyle={{color: '#000', fontSize: 25, fontWeight: '700'}}
            >
            <WeekScreen/>
          </Tab>
        </Tabs>
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(3, 28, 63)',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24.2,
  },
});