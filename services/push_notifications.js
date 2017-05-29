import { Permissions, Notifictions } from 'expo';

expo default async () => {
  let previousToken = await AsyncStorage.getItem('pushtoken');

  if (previousToken) {
    return;
  } else {
      let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

      if (status !== 'granted') {
        return;
      }

      Notifications.getExponentPushTOkenAsync();
  }
};
