/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Linking, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';

// const QrCode = () => {
//   // const onSuccess = async (e: any) => {
//   //   try {
//   //     Linking.openURL(e.data);
//   //   } catch (err) {
//   //     console.error('An error occured', err);
//   //   }
//   // };
//   const devices = useCameraDevices('wide-angle-camera');
//   const device = devices.back;

//   if (device == null)
//     return (
//       <View>
//         <Text>Loading...</Text>
//       </View>
//     );
//   return (
//     <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
//   );
// };

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Test</Text>
      {/* <QrCode /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
