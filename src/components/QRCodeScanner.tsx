import React, {useRef, useState} from 'react';
import {Alert, Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import {Camera, CameraType} from 'react-native-camera-kit';

export type FlushModeType = 'on' | 'off' | 'auto';
const QRCodeScanner = () => {
  const [flushMode, setFlushMode] = useState<FlushModeType>('auto');
  const ref = useRef(null);
  return (
    <View style={styles.container}>
      <Camera
        style={styles.scanner}
        ref={ref}
        cameraType={CameraType.Back} // Front/Back(default)
        scanBarcode
        showFrame
        laserColor="blue"
        flushMode={flushMode}
        onReadCode={(event: any) =>
          Alert.alert(event.nativeEvent.codeStringValue)
        }
      />
      <View style={styles.buttonGroup}>
        <Button title="플래시 켜기" onPress={() => setFlushMode('on')} />
        <Button title="플래시 끄기" onPress={() => setFlushMode('off')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderWidth: 1,
    borderColor: 'red',
  },
  scanner: {flex: 1},
  buttonGroup: {flexDirection: 'row'},
});
export default QRCodeScanner;
