import Expo, { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import registerForNotifications from './services/push_notifications';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingScreen from './screens/SettingScreen';

const MainNavigator = TabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: TabNavigator({
        map: { screen: MapScreen },
        deck: { screen: DeckScreen },
        review: {
          screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingScreen }
          })
        }
      },{
        tabBarPosition: 'bottom',
        tabBarOptions: {
            labelStyle: { fontSize: 12 },
        }
      })
    }
}, {
  navigationOptions: {
    tabBarVisible: false
  },
  lazy: true
});

class App extends React.Component {
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener((notification) => {
      const { data: { text }, origin} = notification;

      if(origin === 'recieved' && text){
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'OK.' }]
        );
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
    </Provider>
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
