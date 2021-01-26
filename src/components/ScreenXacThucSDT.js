import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar, Alert , Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStyle from "../theme";
import ReactCodeInput from 'react-verification-code-input';
import { TextInput } from 'react-native-gesture-handler';
import { set, Value } from 'react-native-reanimated';
const ScreenXacThucSDT = ( {navigation, route}) => {
    const [MaPin1, setMaPin1] = React.useState('');
  
    const SDT= route.params.data.phone;
    //const data = route.params.data2;
    const [TimeDown, setTimeDown] = React.useState(59);
    React.useEffect(() => {
        const Time = setInterval(()=>{
            setTimeDown(TimeDown-1);
            if(TimeDown == 0){
                // Alert.alert("Thông báo", "Đã gửi lại mã OTP, Mời bạn check tin nhắn");
                setTimeDown(60);
            }
        }, 1000);
        return () => {
            clearInterval(Time);
        }
    })
    return (
        <View style={AppStyle.StyleScreenXacNhanSDT.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={AppStyle.StyleScreenXacNhanSDT.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 50, marginLeft: 10}}>
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={AppStyle.StyleScreenXacNhanSDT.content}>
                <Text style={AppStyle.StyleScreenXacNhanSDT.tieude }> Xác thực số điện thoại</Text>
                <Text style={AppStyle.StyleScreenXacNhanSDT.chube }>Vui lòng nhập mã OTP vừa được gửi vào số điện thoại {SDT} </Text>
                {/* {data.isChecked &&(
                    <Text style={AppStyle.StyleFirst.text}>{data.phone}</Text>
                ) } */}
                <View style={AppStyle.StyleScreenXacNhanSDT.inputOTP}>
                    <TextInput maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType = 'numeric' onChangeText={(val) => setMaPin1(val) } value={MaPin1}/>
                    <TextInput maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType = 'numeric'/>
                    <TextInput maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType = 'numeric'/>
                    <TextInput maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType = 'numeric'/>
                    <TextInput maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType = 'numeric'/>
                    <TextInput maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType = 'numeric'/>
                </View>
                <Text style={AppStyle.StyleScreenXacNhanSDT.textguilaisau}> Gửi laị sau 00:{TimeDown}</Text>
                {
                MaPin1 != '' 
                ? <LinearGradient
                style={AppStyle.StyleScreenXacNhanSDT.linear}

                colors={['#8B3BFF', '#B738FF']}
            >
                <TouchableOpacity onPress={() =>{ navigation.navigate('Profile', {SDT:SDT})}}>
                <Text style={AppStyle.StyleScreenXacNhanSDT.text}>Tiếp tục</Text>
                </TouchableOpacity>
            </LinearGradient>
            :
            <LinearGradient
                style={AppStyle.StyleScreenXacNhanSDT.linearnotactive}

                colors={['#B738FF', '#8B3BFF']}
            >
                <Text style={AppStyle.StyleScreenXacNhanSDT.text}>Tiếp tục</Text>
            </LinearGradient>

                }
                
            </View>
            <View style={AppStyle.StyleScreenXacNhanSDT.footer}>
        
            </View>
            
            {/* <ReactCodeInput /> */}
        </View>
    )
}
export default ScreenXacThucSDT ;


