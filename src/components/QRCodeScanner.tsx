import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  Vibration,
  View,
} from 'react-native';
import {Camera, CameraType} from 'react-native-camera-kit';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

export type TorchModeType = 'on' | 'off';
const QRCodeScanner = () => {
  const [torchMode, setTorchMode] = useState<TorchModeType>('off');
  const [scaned, setScaned] = useState<boolean>(true);
  const [openScanner, setOpenScanner] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    permissionCheck();
  }, []);

  useEffect(() => {
    // 종료후 재시작을 했을때 초기화
    setScaned(true);
  }, []);

  const permissionCheck = () => {
    if (Platform.OS !== 'ios' && Platform.OS !== 'android') return;
    const platformPermissions =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA;
    const requestCameraPermission = async () => {
      try {
        const result = await request(platformPermissions);
        result === RESULTS.GRANTED
          ? setOpenScanner(true)
          : Alert.alert('카메라 권한을 허용해주세요');
      } catch (err) {
        Alert.alert('Camera permission err');
        console.warn(err);
      }
    };
    requestCameraPermission();
  };

  const onBarCodeRead = (event: any) => {
    if (!scaned) return;
    setScaned(false);
    Vibration.vibrate();
    Alert.alert('QR Code', event.nativeEvent.codeStringValue, [
      {text: 'OK', onPress: () => setScaned(true)},
    ]);
  };

  if (!openScanner)
    return (
      <View>
        <Text>카메라 권한을 허용해주세요</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Camera
        style={styles.scanner}
        ref={ref}
        cameraType={CameraType.Back} // Front/Back(default)
        torchMode={torchMode}
        zoomMode
        focusMode
        // Barcode Scanner Props
        scanBarcode
        showFrame={false}
        laserColor="rgba(0, 0, 0, 0)"
        frameColor="rgba(0, 0, 0, 0)"
        surfaceColor="rgba(0, 0, 0, 0)"
        onReadCode={onBarCodeRead}
      />
      <View style={styles.buttonGroup}>
        <Button title="플래시 켜기" onPress={() => setTorchMode('on')} />
        <Button title="플래시 끄기" onPress={() => setTorchMode('off')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  scanner: {flex: 1},
  buttonGroup: {flexDirection: 'row'},
});

export default QRCodeScanner;
