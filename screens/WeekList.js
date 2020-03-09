import React from 'react';
import { StyleSheet, Text, Image, Button, View, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TaskItem from '../tabs/TaskItem';
import ListObjectTask from '../tabs/ListObjectTask';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AddTask from '../tabs/AddTask'
import PomoClock from './PomoClock';
import moment from 'moment'


class Monday extends React.Component {
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
      <View style={{ flex: 1, }}>
        <FlatList style={{ marginTop: wp('5')}}
          data={ListObjectTask}
          renderItem={({ item, index }) => {
            const today = moment().format('MMM Do');
            if (item.dateTrans === 'Monday')
                return (
                  <TaskItem item={item} index={index} parentFlatList={this} navigation={this.props.navigation}>
                  </TaskItem>
                );
          }}
        />
        <TouchableOpacity style={styles.addTask} onPress={() => { this._onPressAdd(); }}>
          <Ionicons name={'ios-add'} size={wp('8')} color={'white'}/>
        </TouchableOpacity>
        <AddTask ref={'addTask'} parentFlatList={this} screen={'day'}></AddTask>
      </View>
    )
  }
}

class Tuesday extends React.Component {
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
      <View style={{ flex: 1, }}>
        <FlatList style={{ marginTop: wp('5')}}
          data={ListObjectTask}
          renderItem={({ item, index }) => {
            const today = moment().format('MMM Do');
            if (item.dateTrans === 'Tuesday')
                return (
                  <TaskItem item={item} index={index} parentFlatList={this} navigation={this.props.navigation}>
                  </TaskItem>
                );
          }}
        />
        <TouchableOpacity style={styles.addTask} onPress={() => { this._onPressAdd(); }}>
          <Ionicons name={'ios-add'} size={wp('8')} color={'white'}/>
        </TouchableOpacity>
        <AddTask ref={'addTask'} parentFlatList={this} screen={'day'}></AddTask>
      </View>
    )
  }
}

class Wednesday extends React.Component {
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
      <View style={{ flex: 1, }}>
        <FlatList style={{ marginTop: wp('5')}}
          data={ListObjectTask}
          renderItem={({ item, index }) => {
            const today = moment().format('MMM Do');
            if (item.dateTrans === 'Wednesday')
                return (
                  <TaskItem item={item} index={index} parentFlatList={this} navigation={this.props.navigation}>
                  </TaskItem>
                );
          }}
        />
        <TouchableOpacity style={styles.addTask} onPress={() => { this._onPressAdd(); }}>
          <Ionicons name={'ios-add'} size={wp('8')} color={'white'}/>
        </TouchableOpacity>
        <AddTask ref={'addTask'} parentFlatList={this} screen={'day'}></AddTask>
      </View>
    )
  }
}
class Thursday extends React.Component {
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
      <View style={{ flex: 1, }}>
        <FlatList style={{ marginTop: wp('5')}}
          data={ListObjectTask}
          renderItem={({ item, index }) => {
            const today = moment().format('MMM Do');
            if (item.dateTrans === 'Thursday')
                return (
                  <TaskItem item={item} index={index} parentFlatList={this} navigation={this.props.navigation}>
                  </TaskItem>
                );
          }}
        />
        <TouchableOpacity style={styles.addTask} onPress={() => { this._onPressAdd(); }}>
          <Ionicons name={'ios-add'} size={wp('8')} color={'white'}/>
        </TouchableOpacity>
        <AddTask ref={'addTask'} parentFlatList={this}  screen={'sday'}></AddTask>
      </View>
    )
  }
}

class Friday extends React.Component {
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
      <View style={{ flex: 1, }}>
        <FlatList style={{ marginTop: wp('5')}}
          data={ListObjectTask}
          renderItem={({ item, index }) => {
            const today = moment().format('MMM Do');
            if (item.dateTrans === 'Friday')
                return (
                  <TaskItem item={item} index={index} parentFlatList={this} navigation={this.props.navigation}>
                  </TaskItem>
                );
          }}
        />
        <TouchableOpacity style={styles.addTask} onPress={() => { this._onPressAdd(); }}>
          <Ionicons name={'ios-add'} size={wp('8')} color={'white'}/>
        </TouchableOpacity>
        <AddTask ref={'addTask'} parentFlatList={this} screen={'day'}></AddTask>
      </View>
    )
  }
}

class Saturday extends React.Component {
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
      <View style={{ flex: 1, }}>
        <FlatList style={{ marginTop: wp('5')}}
          data={ListObjectTask}
          renderItem={({ item, index }) => {
            const today = moment().format('MMM Do');
            if (item.dateTrans === 'Saturday')
                return (
                  <TaskItem item={item} index={index} parentFlatList={this} navigation={this.props.navigation}>
                  </TaskItem>
                );
          }}
        />
        <TouchableOpacity style={styles.addTask} onPress={() => { this._onPressAdd(); }}>
          <Ionicons name={'ios-add'} size={wp('8')} color={'white'}/>
        </TouchableOpacity>
        <AddTask ref={'addTask'} parentFlatList={this} screen={'day'}></AddTask>
      </View>
    )
  }
}

class Sunday extends React.Component {
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
      <View style={{ flex: 1, }}>
        <FlatList style={{ marginTop: wp('5')}}
          data={ListObjectTask}
          renderItem={({ item, index }) => {
            const today = moment().format('MMM Do');
            if (item.dateTrans === 'Sunday')
                return (
                  <TaskItem item={item} index={index} parentFlatList={this} navigation={this.props.navigation}>
                  </TaskItem>
                );
          }}
        />
        <TouchableOpacity style={styles.addTask} onPress={() => { this._onPressAdd(); }}>
          <Ionicons name={'ios-add'} size={wp('8')} color={'white'}/>
        </TouchableOpacity>
        <AddTask ref={'addTask'} parentFlatList={this} screen={'day'}></AddTask>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1, 
    margin: 20, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
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

const WeekScreen = createMaterialTopTabNavigator(
  {
    Mo: { screen: Monday },
    Tu: { screen: Tuesday },
    We: { screen: Wednesday },
    Th: { screen: Thursday },
    Fr: { screen: Friday },
    Sa: { screen: Saturday },
    Su: { screen: Sunday },
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#000',
      showIcon: false,
      pressOpacity: 4,
      upperCaseLabel: false,
      indicatorStyle: {
        height: 35,
        width: 35,
        backgroundColor: '#353539',
        borderRadius: 48,
        marginLeft: 8,
      },
      labelStyle:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: -9
      },
      style:{
        backgroundColor: '#fff',
        height: 35,
      },
      tabStyle: {
        justifyContent: 'center',
        alignItem: 'center',
      }
    },
  }
);

  
export default createAppContainer(WeekScreen);
  