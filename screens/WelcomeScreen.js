import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome To JobApp', color: '#03A9F4'},
  { text: 'Use this to get Jobs', color: '#009688'},
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  render() {
    return (
      <Slides data={SLIDE_DATA}/>
    );
  }
}

export default WelcomeScreen;
