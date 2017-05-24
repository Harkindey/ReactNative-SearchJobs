import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Main = TabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen }
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
     backgroundColor: '#fff',
     justifyContent: 'center'
  }
};

Expo.registerRootComponent(App);
