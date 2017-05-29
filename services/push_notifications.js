import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

expo default async () => {
  let previousToken = await AsyncStorage.getItem('pushtoken');

  if (previousToken) {
    return;
  } else {
      let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

      if (status !== 'granted') {
         return;
      }

    let token = await Notifications.getExponentPushTokenAsync();
    await axios.post(PUSH_ENDPOINT, { to=ken: { token }});
    AsyncStorage.setItem('pushtoken', token);
  }
};
