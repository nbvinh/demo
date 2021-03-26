import React, { useState } from 'react';
import AppStyle from "../../theme";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScanScreen = ({ navigation }) => {
  const [check, setcheck] = React.useState(false);
  const [e, setE] = React.useState()
  const [opacity, setOpacity] = React.useState(false)
  const diermthaydoi = useSelector(state => state.diem)
  const _storeData = async () => {
    AsyncStorage.setItem(
      'Diem',
      JSON.stringify(diermthaydoi),

      () => {
        AsyncStorage.getItem('Diem', (err, result) => {
          dispatch({ type: 'DIEMUP', diem: result })
        });
      }
    );
  };
  React.useEffect(() => {
    _storeData()
  }, [check])
  async function asyncCall() {
    dispatch({ type: 'UPDIEM', diem: e }),
      navigation.navigate('Tabviewmain')
    setcheck(true)
  }
  const dispatch = useDispatch()
  // const [opacity, setOpacity] = useState(false)
  return (
    <SafeAreaView style={AppStyle.StyleGiaoDich.container}>
      <View style={AppStyle.StyleVoucherCGV.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Image
            width={10} height={18}
            source={require('../../img/back.png')}
          />
        </TouchableOpacity>
        <Text style={AppStyle.StyleVoucherCGV.text}>Mời Bạn Bè</Text>
      </View>
      <View style={{ flex: 11 }}>
        <QRCodeScanner
          showMarker={true}
          onRead={(e) => {
            // setOpacity(true),
            try {
              setOpacity(true)
              setE(JSON.parse(e.data).trans_amount)

              // dispatch({ type: 'UPDIEM', diem: JSON.parse(e.data).trans_amount }),
              // navigation.navigate('Tabviewmain')
            } catch (error) {
              // setOpacity(false)
              Alert.alert("Bạn phải dùng Mã QR của Nhà Cung Cấp");
            }
          }}
          flashMode={RNCamera.Constants.FlashMode.off}
          topContent={
            <Text style={styles.centerText}>
              Mời bạn quét QR trên mã thẻ
                      </Text>

          }

        />

      </View>
      {
        opacity ?
          <TouchableOpacity onPress={() => asyncCall()}>
            <LinearGradient style={[AppStyle.StyleFirst.linear, { marginBottom: 30 }]} colors={['#8B3BFF', '#B738FF']} >
              <Text style={AppStyle.StyleFirst.text}>Hoàn Thành</Text>
            </LinearGradient>
          </TouchableOpacity>
          :
          <View>
            <LinearGradient style={[AppStyle.StyleFirst.linear, { marginBottom: 30, opacity: 0.5 }]} colors={['#8B3BFF', '#B738FF']} >
              <Text style={AppStyle.StyleFirst.text}>Hoàn Thành</Text>
            </LinearGradient>
          </View>
      }
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
export default ScanScreen;