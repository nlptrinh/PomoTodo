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
import TaskItem from './TaskItem'


class FlatListTask extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      deletedRowKey: null,
    });
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  refreshFlatList = (deletedKey) => {
    this.setState((prevState) => {
      return {
        deletedRowKey: deletedKey
      };
    });
  }

  static navigationOptions = {
    header: null,
  };

  _onPressAdd() {
    this.refs.addTask.showAddTask();
  }

  render() {
    return (
      <View style={{ flex: 0.8, }}>
        <FlatList style={{ marginTop: wp('5')}}
          data={ListObjectTask}
          renderItem={({ item, index }) => {
            const today = moment().format('MMM Do');
            if (item.scheduleDate === today)
                return (
                  <TaskItem item={item} index={index} parentFlatList={this} navigation={this.props.navigation}>
                  </TaskItem>
                );
          }}
        />
        <TouchableOpacity style={styles.addTask} onPress={() => { this._onPressAdd(); }}>
          <Ionicons name={'ios-add'} size={wp('8')} color={'white'}/>
        </TouchableOpacity>
        <AddTask ref={'addTask'} parentFlatList={this}></AddTask>
      </View>
    )
  }
}

export default AppSwitchNavigator = createAppContainer(createStackNavigator(
  {
    FlatListTask: { screen: FlatListTask },
    PomoClock: {
      screen: PomoClock,
      navigationOptions: {
        headerTitle: 'Cancel',
      }
    },
  },
  {
    initialRouteName: 'FlatListTask',
    defaultNavigationOptions: 
    {
      headerStyle: 
      {
        backgroundColor: 'rgb(3, 28, 63)',
        height: 30,
      },
      headerTintColor: '#fff',
      headerTitleStyle: 
      {
        fontWeight: 'bold',
      },
    }
  },
));

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