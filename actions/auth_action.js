import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

// AsyncStorage.setItems('fb_token', token);
// AsyncStorage.getItems('fb_token');

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItems('fb_token');

  if (token) {
    //Dispatch  an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
  } else {
    //Start up FB login process
    doFacebookLogin(dispatch);
  }
};


const doFacebookLogin = async dispatch => {
  let {type, token } = await Facebook.logInWithReadPermissionsAsync('531495600573995', {
    permissions: ['public_profile']
  });

  if (type === 'cancel'){
    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }

  await AsyncStorage.setItems('fb_token', token);
  dispatch({ type : FACEBOOK_LOGIN_SUCCESS, payload:token })
};
