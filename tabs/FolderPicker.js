import React, { Component } from 'react';
import { Text,View, } from 'react-native';
import PickerBox from 'react-native-picker-box';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import ListFolder from './FolderItem';
import ListTask from './ListObjectTask';

export default class FolderPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'CS300', value: 'CS300' },
        { label: 'Coder school', value: 'Coder School' },
        { label: 'NLP', value: 'NLP' },
        { label: 'Misc', value: 'Misc' },
      ],
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: -9,
            borderWidth: 1,
            borderColor: '#ffffff',
            marginLeft: 140,
            borderRadius: 8,
          }}>
          <Ionicons
            style={{ paddingLeft: 5, paddingRight: 5 }}
            name={'md-folder'}
            size={26}
            color={'rgb(46, 194, 240)'}
            onPress={() => {
              this.myref.openPicker()
              }}
          />
          <Text
            style={{
              color: '#ffffff',
              fontSize: 15,
              paddingRight: 5,
              marginTop: 4,
            }}
            onPress={() => {
              this.myref.openPicker()
              }}>
            {this.props.data.folderName}
          </Text>
        </View>
        <PickerBox
          ref={ref => (this.myref = ref)}
          data={this.state.data}
          onValueChange={(value) => this.props.data.newFolderName(value)}
          selectedValue={this.props.data.folderName}
          maxHeight={230}
          prevTextColor={'red'}
          separatorColor={'rgb(3, 28, 63)'}
        />
      </View>
    );
  }
}