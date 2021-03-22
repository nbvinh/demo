import React, { Component } from 'react';
import AppStyle from "../../theme";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const  ScanScreen = ({navigation}) => {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

 
    return (
        <SafeAreaView style={AppStyle.StyleGiaoDich.container}>
            <View style={AppStyle.StyleGiaoDich.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 10 }}>
                        <Image
                            width={10} height={18}
                            source={require('../../img/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.StyleGiaoDich.header_text}>Quét Mã QR</Text>
            </View>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    flashMode={RNCamera.Constants.FlashMode.torch}
                    topContent={
                      <Text style={styles.centerText}>
                       Mời bạn quét QR trên mã thẻ
                      </Text>

                    }
                    
                />
                  <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                        <LinearGradient style={[AppStyle.StyleFirst.linear, {marginBottom: 30, marginHorizontal: 8}]} colors={['#8B3BFF', '#B738FF']} >
                            <Text style={AppStyle.StyleFirst.text}>Hoàn Thành</Text>
                        </LinearGradient>
                    </TouchableOpacity>
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
export default ScanScreen ;