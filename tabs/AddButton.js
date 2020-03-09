import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddModal from './AddTask';

export default class AddButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.task} onPress={() => {this.props.navigation.navigate('AddModal')}}>
        <Ionicons name={'ios-add'} size={wp('7')} color={'white'}/>
      </TouchableOpacity>
    );
  }
}

// export default AppSwitchNavigator = createAppContainer(createStackNavigator({
//   AddButton:{screen:AddButton},
//   AddModal:{screen:AddModal},
// }));

const styles = StyleSheet.create({
  task: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(227, 35, 58)',
    width: wp('15'),
    height: wp('15'),
    borderRadius: 50,
    backgroundColor: 'rgb(227, 35, 58)', 
    position: 'absolute',
    right: wp('7'),
    bottom: wp('18'),
  },
});