import React, { Component } from 'react';
import { TouchableOpacity, Alert, Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { Container, Header, Content, Card, ListItem, CheckBox, Body } from 'native-base';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import ListObjectTask from './ListObjectTask';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AddTask from './AddTask'
import PomoClock from '../screens/PomoClock';
import moment from 'moment'

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      activeRowKey: null,
    }

  }

  render() {
    
    return (
        <TouchableOpacity
          onPress = {() => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'DELETE TASK',
              'Are you sure you want to delete this task?',
              [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                  text: 'Delete', onPress: () => {
                    ListObjectTask.splice(this.props.index, 1);
                    //Refresh FlatList ! 
                    this.props.parentFlatList.refreshFlatList(deletingRow);
                  }
                },
              ],
              { cancelable: true }
            );
          }}
          style={styles.task}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', paddingLeft: wp('2') }}>
              <CheckBox style={styles.checkbox} checked={this.state.checked} color={this.props.item.priorColor}
                onPress={() => {
                  const deletingRow = this.state.activeRowKey;
                  this.setState({ checked: !this.state.checked });
                  if (this.state.checked != true) {
                    ListObjectTask.splice(this.props.index, 1);
                  }
                  this.props.parentFlatList.refreshFlatList(deletingRow);
                }}
              />

              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: wp('4.5'), marginLeft: wp('6'), marginRight: wp('3') }}>{this.props.item.taskName}</Text>
                <View style={styles.boxFolder}>
                  <Ionicons name={'md-folder'} size={wp('6')} color={this.props.item.folderColor} />
                  <Text style={styles.textBox}>{this.props.item.folderName}</Text>
                </View>
              </View>
              
              <View style={styles.pomo}>
                <TouchableOpacity style={styles.pomo} onPress={() => { this.props.navigation.navigate('PomoClock')}}>
                  <MaterialCommunityIcons name={'play-circle-outline'} size={wp('8')} color={this.props.item.priorColor}/>
                </TouchableOpacity>
                <Text style={{alignItems: 'center'}}>{this.props.item.pomoRound}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  checkbox: {
    width: wp('7'),
    height: wp('7'),
    borderRadius: wp('10'),
    paddingTop: wp('1'),
    paddingLeft: wp('2'),
  },
  task: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 5,
    paddingTop: 5,
  },
  boxFolder: {
    height: wp('10'),
    flex: 1,
    flexDirection: 'row',
    marginLeft: wp('6'),
    marginTop: wp('1'),
  },
  textBox: {
    fontSize: wp('4'),
    paddingLeft: wp('2'),
    paddingTop: wp('1'),
  },
  pomo: {
    alignItems: 'center',
    paddingRight: wp('2')
  },
  addTask: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(227, 35, 58)',
    width: wp('15'),
    height: wp('15'),
    borderRadius: 50,
    backgroundColor: 'rgb(227, 35, 58)',
    position: 'absolute',
    right: wp('5'),
    bottom: wp('5'),
  }
});
