import React, { Component } from 'react';
import { TouchableOpacity, View, TextInput, Dimensions, Platform, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modalbox';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import ListFolder from './FolderItem';
import ListTask from './ListObjectTask';
import FolderPicker from './FolderPicker';
import DatePicker from './DatePicker';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      taskName: '',
      folderName: 'Misc',
      pomoRound: '',
      folderColor: 'rgb(34, 135, 56)',
      priorColor: 'grey',
      data: [
        { label: 'CS300', value: 'CS300' },
        { label: 'Coder school', value: 'Coder School' },
        { label: 'NLP', value: 'NLP' },
        { label: 'Misc', value: 'Misc' },
      ],
      isVisible: false,
      scheduleDate: moment().format('MMM Do'),
      dateTrans: moment().format('dddd') 
    };

  }

  callbackFolderName = (folderData) => {
    this.setState({ folderName: folderData })
  }

  callbackDate = (dateData) => {
    this.setState({ scheduleDate: dateData })
  }

  callbackDateTrans = (dateData) => {
    this.setState({ dateTrans: dateData })
  }

  showAddTask = () => {
    this.refs.myModal.open();
  };

  generateKey = (numberOfCharacters) => {
    return require('random-string')({ length: numberOfCharacters });
  }

  render() {
    return (
      <Modal ref={'myModal'} style={styles.model} position="center" backdrop={true}>

        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({ taskName: text })}
          autoFocus={true}
          placeholder="Input Task Name"
          placeholderTextColor="rgb(203, 203, 203)"
        />

        <FolderPicker data={{ folderName: this.state.folderName, newFolderName: this.callbackFolderName.bind(this) }} />
        <DatePicker data={{ scheduleDate: this.state.scheduleDate, newScheduleDate: this.callbackDate.bind(this), 
                            dateTrans: this.state.dateTrans, newDateTrans: this.callbackDateTrans.bind(this) }} />

        <View
          style={{ flexDirection: 'row', marginBottom: 30, marginLeft: 25 }}>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => this.setState({ priorColor: 'red' })}
          >
            <Ionicons
              style={styles.priority}
              name={'ios-flag'}
              size={26}
              color={'red'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => this.setState({ priorColor: 'yellow' })}
          >
            <Ionicons
              style={styles.priority}
              name={'ios-flag'}
              size={26}
              color={'yellow'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => this.setState({ priorColor: 'blue' })}
          >
            <Ionicons
              style={styles.priority}
              name={'ios-flag'}
              size={26}
              color={'blue'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => this.setState({ priorColor: 'grey' })}
          >
            <Ionicons
              style={styles.priority}
              name={'ios-flag'}
              size={26}
              color={'gray'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 125 }}
            onPress={() => {
              let color;
              if (this.state.taskName.length == 0) {
                alert("You must enter task's name");
                return;
              }
              if (this.state.folderName == 'CS300') {
                color = 'rgb(191, 81, 154)';
              } else if (this.state.folderName == 'Coder school') {
                color = 'rgb(214, 34, 34)';
              } else if (this.state.folderName == 'NLP') {
                color = 'rgb(34, 135, 56)';
              } else if (this.state.folderName == 'Misc') {
                color = 'rgb(255, 153, 0)';
              }
              const newKey = this.generateKey(8);
              const newTask = {
                key: newKey,
                taskName: this.state.taskName,
                folderName: this.state.folderName,
                pomoRound: '0',
                folderColor: color,
                priorColor: this.state.priorColor,
                scheduleDate: this.state.scheduleDate,
                dateTrans: this.state.dateTrans
              };
              ListTask.push(newTask);
              this.props.parentFlatList.refreshFlatList(newKey);
              this.refs.myModal.close();
            }}>
            <Text style={{ fontSize: 15, color: '#ffffff', fontWeight: '700'}}>DONE</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  model: {
    justifyContent: 'center',
    borderTopLeftRadius: Platform.OS === 'ios' ? 30 : 0,
    borderTopRightRadius: Platform.OS === 'ios' ? 30 : 0,
    backgroundColor: 'rgb(3, 28, 63)',
    shadowRadius: 20,
    width: screen.width,
    height: 160,
    marginTop: -5
  },
  inputText: {
    height: 50,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 26,
    color: 'rgb(203, 203, 203)',
  },
  priority: {
    paddingLeft: 5,
    paddingRight: 5,
  }
})