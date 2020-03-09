import React, {Component} from 'react';
import { View, StyleSheet, AppRegistry, Text, TouchableOpacity, Image, Button } from 'react-native';
import firebase from 'firebase';
import '@firebase/firestore';
//import * as Google from 'expo-google-sign-in';
import * as Google from 'expo-google-app-auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LoadingScreen from './LoadingScreen';

export default class LoginScreen extends Component {
  db = firebase.firestore();

  constructor(props) {
      super(props)
      this.state = {
       myText: 'Welcome to',
       user: null
    }
  }

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = googleUser => {
    //console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        firebase
        .auth()
        .signInWithCredential(credential)
        .then(function(result) {
          //if (result.additionalUserInfo.isNewUser) {
            console.log(result);
            
            // Write to database
            firebase
            .firestore().collection('UserProfile')
            .doc(result.user.uid.toString())
            .set({
              Name: result.user.displayName,
              Email: result.user.email
            });

            firebase
            .firestore().collection('Task')
            .doc(result.user.uid.toString())
            .collection("Folder")
            //.doc(folderID) //necessary?
            .set({
              FolderName: "Undated",
              FolderColor: "#fff"
            });

            // firebase
            // .firestore().collection('Task')
            // .doc(result.user.uid.toString()).get()
            // .then(function(doc) {
            //   if (doc.exists) {
            //       tmpText = doc.data().Name;
            //       this.setState({myText: tmpText})
            //       console.log("Document data:", doc.data().Name);
            //   } else {
            //       // doc.data() will be undefined in this case
            //       console.log("No such document!");
            //   }
            // }.bind(this))
            // .catch(function(error) {
            //   console.log("Error getting document:", error);
            // });

            this.setState({myText: result.user.displayName});
            //this.props.navigation.navigate('HomeScreen');
          //}
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }.bind(this));
  }

  signInWithGoogleAsync = async() => {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        androidClientId: '745212572291-f0f215utad0flvshd6mpkn855sike70j.apps.googleusercontent.com',
        iosClientId: '745212572291-sip4oiahkrmtpufhsguf74lhfmhl9gbd.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  updateText = () => {
      tmpText = ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign Out" onPress={() => firebase.auth().signOut()}/>
        <View style={styles.boxContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.appTitle}>{this.state.myText}</Text>
            <Text style={styles.appTitle}>PomoTodo</Text>
          </View>
          <TouchableOpacity onPress = {() => this.signInWithGoogleAsync()} style={styles.btnClickContain} activeOpacity={0.5}>
            <View style={styles.btnContainer}>
              <Image source={require('../assets/images/googleLogo.png')} style={styles.googleIcon}/>
              <Text style={styles.googleText}> Sign in with Google</Text>
            </View>
          </TouchableOpacity>    
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgb(3, 28, 63)',
  },
  textContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: 'wrap',
  },
  appTitle: {
    textAlign: "center",
    fontSize: wp("15%"),
    color: '#fff',
  },
  btnContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: 'row',
    width: wp("75%"),
    height: hp("10%"),
    marginTop: hp("12%"),
    borderRadius: 8,
    backgroundColor: "#fcfcfc",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
    width: 0,
    height: 0
    },
    shadowRadius: 8,
    shadowOpacity: 1,
  },
  googleText: {
    fontSize: wp("5%"),
    color: '#000',
    // fontFamily: "Roboto",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000000",
    textAlign: "center", 
   
  },
  googleIcon: {
    width: wp("11%"),
    height: hp("6%"),
    resizeMode: 'stretch',
    
  }
});

AppRegistry.registerComponent('pomotodo', () => App);