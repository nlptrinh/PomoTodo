import React, { useState, useEffect } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const formatNumber = number => `0${number}`.slice(-2);
const pomoRound = 20;//25*60;
const breakRound = 10;//5*60;

const getRemaining = (time) => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

function Clock() {

  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);

  toggle = () => {
    setIsActive(!isActive);
    setIsBreak(!isBreak);
  }

  reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
      if (remainingSecs == pomoRound) {
        setRemainingSecs(0);
        setIsActive(false);
        setIsBreak(true);
      }
    } 
    else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    if (isBreak) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
      if (remainingSecs == breakRound) {
        setRemainingSecs(0);
        setIsActive(true);
        setIsBreak(false);
      }
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  if (isActive) {
    return (
      <View style={styles.container}>
        <Text style={styles.breakText}>Working</Text>
        <View style={styles.clock}>
          <ProgressCircle
            percent={(remainingSecs / pomoRound) * 100}
            radius={wp('35')}
            borderWidth={wp('2')}
            color='rgb(227, 35, 58)'
            shadowColor='#999'
            bgColor='#fff'
          >
            <StatusBar barStyle="light-content" />
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
          </ProgressCircle>
        </View>
      </View>
    )
  } else if (isBreak) {
    return (
      <View style={styles.container}>
        <Text style={styles.breakText}>Break</Text>
        <View style={styles.clock}>
          <ProgressCircle
            percent={(remainingSecs / breakRound) * 100}
            radius={wp('35')}
            borderWidth={wp('2')}
            color='rgb(227, 35, 58)'
            shadowColor='#999'
            bgColor='#fff'
          >
            <StatusBar barStyle="light-content" />
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
          </ProgressCircle>
        </View>
        
        <TouchableOpacity onPress={this.toggle} style={styles.button}>
          <Text style={styles.buttonText}>{ 'Skip break time' }</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default class PomoClock extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Clock/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  clock: {
    alignItems: 'center',
    marginTop: wp('5')
  },
  time: {
    fontSize: wp('18'),
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(3, 28, 63)',
    alignItems: 'center',
  },
  button: {
    marginTop: wp('10'),
    borderRadius: wp('3'),
    width: screen.width / 2,
    padding: wp('4'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(35, 220, 76)',
  },
  buttonText: {
    fontSize: wp('6'),
    color: '#ffffff'
  },
  timerText: {
    color: '#000',
    fontSize: wp('18'),
  },
  breakText: {
    fontSize: wp('13'),
    alignItems: 'center',
    color: '#ffffff',
    marginTop: wp('4'),
  },
});