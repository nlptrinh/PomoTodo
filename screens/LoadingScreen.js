import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, } from 'react-native';

import firebase from 'firebase';

class LoadingScreen extends Component {
	
	componentDidMount() {
		this.checkIfLoggedIn();
	};
	
	checkIfLoggedIn = () => {
		firebase.auth().onAuthStateChanged(user => {
			if(user) {
				console.log('user exist');
				this.props.navigation.navigate('HomeScreen');
			}
			else {
				this.props.navigation.navigate('LoginScreen');
			}
		});
	};
	
	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large"/>
			</View>
		);
	};
}

export default LoadingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});