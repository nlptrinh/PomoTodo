import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ListFolder from './FolderItem';
import ListTask from './ListObjectTask';

export default class DatePicker extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  openPicker = () => {
    this.setState({
      isVisible: true,
    });
  };

  handlePicker = date => {
    this.setState({
      isVisible: false,
    });
    this.props.data.newScheduleDate(moment(date).format('MMM Do')) 
    this.props.data.newDateTrans(moment(date).format('dddd')) 
  };

  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            marginLeft: 25,
            marginTop: -25,
            borderWidth: 1,
            borderColor: '#ffffff',
            borderRadius: 8,
          }}>
          <MaterialCommunityIcons
            style={{ paddingLeft: 5, paddingRight: 5 }}
            name={'calendar-multiselect'}
            size={26}
            color={'#ffffff'}
            onPress={() => this.openPicker()}
          />
          <Text
            style={{
              color: '#ffffff',
              fontSize: 15,
              paddingRight: 5,
              marginTop: 4,
            }}
            onPress={() => this.openPicker()}>
            {this.props.data.scheduleDate}
          </Text>
        </View>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          model={'date'}
          datePickerContainerStyleIOS={{
            backgroundColor: 'rgb(3, 28, 63)', 
          }}
          titleIOS={'Schedule'}
          titleStyle={{
            color: '#ffffff',
            fontSize: 18,
          }}
          confirmTextStyle={{
            color: '#ffffff'
          }}
          cancelTextStyle={{
            color: 'rgb(3, 28, 63)'
          }}
        />
      </View>
    );
  }
}