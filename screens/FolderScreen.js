import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import ListFolderItem from '../tabs/FolderItem';
import AddButton from '../tabs/AddButton';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

class FolderItem extends React.Component {
  render() {
    return (
      <TouchableOpacity style={{flexDirection: 'row', marginBottom: 10}}>
        <Ionicons name={'md-folder'} size={wp('8')} color={this.props.item.folderColor}/>
        <Text style={styles.text3}>{this.props.item.folderName}</Text>
      </TouchableOpacity>
    );
  }
}

export default class FolderScreen extends React.Component {
  render() {
    return (
      <View style={styles.task}>
        
        <View style={styles.heading}>
          <Text style={styles.textHeading}>Folders</Text>
        </View>
        
        <View style={styles.defaultPart}> 
          <Text style={styles.text}>Default</Text>
          <TouchableOpacity style={styles.item}>
            <MaterialCommunityIcons name={'calendar-multiselect'} size={wp('8')} color={'rgb(176, 30, 171)'}/>
            <Text style={styles.text2}>Undated</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <MaterialCommunityIcons name={'inbox'} size={wp('8')} color={'rgb(13, 101, 151)'}/>
            <Text style={styles.text2}>Misc</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <MaterialCommunityIcons name={'format-list-checks'} size={wp('8')} color={'teal'}/>
            <Text style={styles.text2}>Completed tasks</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.folderPart}>
          <Text style={styles.text}>Your folders</Text>
            <FlatList 
              data={ListFolderItem}
              renderItem={({item, index}) => {
                return (
                  <FolderItem item={item} index={index}>
                  </FolderItem>
                );
              }}      
            />
            <TouchableOpacity style={styles.item}>
              <MaterialCommunityIcons name={'plus'} size={wp('8')}/>
              <Text style={styles.text2}>Add folder</Text>
            </TouchableOpacity>
        </View>
        
        <AddButton/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  task: {
    flex: 1,
  },
  heading: {
    backgroundColor: 'rgb(3, 28, 63)',
    color: '#000000',
    paddingTop: wp('7'),
    paddingLeft: wp('7'),
    paddingBottom: wp('3'),
    borderBottomLeftRadius: wp('3'),
    borderBottomRightRadius: wp('3'),
  },
  textHeading: {
    color: '#ffffff',
    fontSize: wp('7'),
    fontWeight: '700',
  },
  defaultPart: {
    borderBottomWidth: 1, 
    paddingLeft: wp('6'), 
    borderColor: 'rgba(79, 79, 79, 0.2)', 
    paddingBottom: wp('1'),
    marginTop: wp('1'),
  },
  text: {
    fontSize: wp('6'),
    marginTop: wp('4'),
    fontWeight: 'bold',
    marginBottom: wp('3'),
  }, 
  text2: {
    fontSize: wp('5'),
    paddingTop: wp('1'),
    marginLeft: wp('2'),
  }, 
  item: {
    flexDirection: 'row',
    marginBottom: wp('3'),
  },
  folderPart: {
    paddingLeft: wp('6'), 
    paddingBottom: wp('2'),
  },
  text3: {
    fontSize: wp('5'),
    paddingTop: wp('1'),
    marginLeft: wp('3'),
  }, 
});