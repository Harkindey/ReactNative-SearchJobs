import { AsyncStorage } from 'react-native';
import {
  FACEBOOK_LOGIN_SUCCESS
} from './types';

// AsyncStorage.setItems('fb_token', token);
// AsyncStorage.getItems('fb_token');

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItems('fb_token');

  if (token) {
    //Dispatch  an action saying FB login is done
  } else {
    //Start up FB login process
  }
}
