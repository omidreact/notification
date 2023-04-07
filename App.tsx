
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';

function App(){
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Pressable onPress={()=>{
        PushNotification.localNotification({
          /* Android Only Properties */
          channelId: "1234", // (required) channelId, if the channel doesn't exist, notification will not trigger.
          title: "آلارم", // (optional)
          message: "این یک نوتیفیکیشن لوکال است", // (required)
          picture: "https://www.example.tld/picture.jpg", // (optional) Display an picture with the notification, alias of `bigPictureUrl` for Android. default: undefined
          userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)
          playSound: false, // (optional) default: true
          soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
        });
      }}>
        <Text>hi</Text>
      </Pressable>
    </View>
  );
}
export default App;