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
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import QRCodeScanner from './src/components/QRCodeScanner';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <QRCodeScanner />
    </View>
  );
};

const styles = StyleSheet.create({container: {flex: 1, borderWidth: 1, borderColor: 'blue'}});

export default App;
