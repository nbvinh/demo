import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, Alert, Image, Platform } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStyle from "../theme";
import ReactCodeInput from 'react-verification-code-input';
import { TextInput } from 'react-native-gesture-handler';
import { set, Value } from 'react-native-reanimated';
import { confirm_otp } from "./api";
import { useDispatch } from "react-redux";
const ScreenXacThucSDT = ({ navigation, route }) => {
    const [MaPin1, setMaPin1] = React.useState('');
    const [MaPin2, setMaPin2] = React.useState('');
    const [MaPin3, setMaPin3] = React.useState('');
    const [MaPin4, setMaPin4] = React.useState('');
    const [MaPin5, setMaPin5] = React.useState('');
    const [MaPin6, setMaPin6] = React.useState('');
    const dispatch = useDispatch()
    const SDT = route.params.data.phone;
    //const data = route.params.data2;
    const [TimeDown, setTimeDown] = React.useState(59);
    React.useEffect(() => {
        const Time = setInterval(() => {
            setTimeDown(TimeDown - 1);
            if (TimeDown == 0) {
                // Alert.alert("Thông báo", "Đã gửi lại mã OTP, Mời bạn check tin nhắn");
                setTimeDown(60);
            }
        }, 1000);
        return () => {
            clearInterval(Time);
        }
    })
    const onfirm_otp = async () => {
        try {
            const result = await confirm_otp({
                "otp": MaPin1 + "" + MaPin2 + MaPin3 + MaPin4 + MaPin5 + MaPin6 + "",
                "phone_number": SDT,
                "token": route.params.token,
            })
            // .then((response) =>console.log( response.data.data.access_token))
            //     .then((json) => { console.log(json) })
            let abc = result.data.data.access_token;
            dispatch({ type: 'TOCKEN', abc: abc })
            navigation.navigate('Profile', { SDT: SDT });

        } catch (error) {
            Alert.alert('Thông báo', error + '');
        }
    }
    const inputRef = useRef();
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const inputRef5 = useRef();
    return (
        <SafeAreaView style={AppStyle.StyleScreenXacNhanSDT.container}>
            <View style={{ paddingHorizontal: 8, flex: 1 }}>


                <StatusBar backgroundColor='black' barStyle="light-content" />
                <View style={AppStyle.StyleScreenXacNhanSDT.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 5 }}>
                        <Image
                            width={10} height={18}
                            source={require('../img/back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={AppStyle.StyleScreenXacNhanSDT.content}>
                    <Text style={AppStyle.StyleScreenXacNhanSDT.tieude}> Xác thực số điện thoại</Text>
                    <Text style={AppStyle.StyleScreenXacNhanSDT.chube}>Vui lòng nhập mã OTP vừa được gửi vào số điện thoại {SDT} </Text>

                    <View style={AppStyle.StyleScreenXacNhanSDT.inputOTP}>
                        <TextInput ref={inputRef} maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType='numeric'
                            onChangeText={(val) => {
                                setMaPin1(val)
                            }}
                            value={MaPin1}
                            onChange={(e) => {
                                if (e.nativeEvent.text !== '') {
                                    inputRef1.current.focus()
                                }
                            }}
                            onKeyPress ={(e)=>{
                                if(Platform.OS === 'ios'){
                                    if(e.nativeEvent.key !== 'Backspace'){
                                        inputRef1.current.focus();
                                    }
                                }
                            }}
                            autoFocus={true}
                        />
                        <TextInput ref={inputRef1} maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType='numeric' onChangeText={(val) => {
                            setMaPin2(val)
                            if (Platform.OS === 'android') {
                                if (val != '') {
                                    inputRef2.current.focus()
                                }
                            }
                        }}
                            value={MaPin2}
                            onKeyPress={(e) => {
                                if (Platform.OS === 'ios') {
                                    if (e.nativeEvent.key === 'Backspace') {
                                        inputRef.current.focus();
                                    }
                                    else {
                                        inputRef2.current.focus()
                                    }
                                }
                                if (Platform.OS === 'android') {
                                    if (e.nativeEvent.key = 'Backspace') {
                                        inputRef.current.focus();
                                    }
                                    setMaPin1('')

                                }
                            }}
                        />
                        <TextInput ref={inputRef2} maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType='numeric' onChangeText={(val) => {
                            setMaPin3(val)
                            if (Platform.OS === 'android') {
                                if (val != '') {
                                    inputRef3.current.focus()
                                }
                            }
                        }}
                            value={MaPin3}
                            onKeyPress={(e) => {
                                if (Platform.OS === 'ios') {
                                    if (e.nativeEvent.key === 'Backspace') {
                                        inputRef1.current.focus();
                                    }
                                    else {
                                        inputRef3.current.focus()
                                    }
                                }
                                if (Platform.OS === 'android') {
                                    if (e.nativeEvent.key = 'Backspace') {
                                        inputRef1.current.focus();
                                    }
                                    setMaPin2('')

                                }
                            }}
                        />
                        <TextInput ref={inputRef3} maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType='numeric' onChangeText={(val) => {
                            setMaPin4(val)
                            if (Platform.OS === 'android') {
                                if (val != '') {
                                    inputRef4.current.focus()
                                }
                            }
                        }}
                        onKeyPress={(e) => {
                            if (Platform.OS === 'ios') {
                                if (e.nativeEvent.key === 'Backspace') {
                                    inputRef2.current.focus();
                                }
                                else {
                                    inputRef4.current.focus()
                                }
                            }
                            if (Platform.OS === 'android') {
                                if (e.nativeEvent.key = 'Backspace') {
                                    inputRef2.current.focus();
                                }
                                setMaPin3('')

                            }
                        }}
                            value={MaPin4} />
                        <TextInput ref={inputRef4} maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType='numeric' onChangeText={(val) => {
                            setMaPin5(val)
                            if (Platform.OS === 'android') {
                                if (val != '') {
                                    inputRef5.current.focus()
                                }
                            }
                        }}
                        onKeyPress={(e) => {
                            if (Platform.OS === 'ios') {
                                if (e.nativeEvent.key === 'Backspace') {
                                    inputRef3.current.focus();
                                }
                                else {
                                    inputRef5.current.focus()
                                }
                            }
                            if (Platform.OS === 'android') {
                                if (e.nativeEvent.key = 'Backspace') {
                                    inputRef3.current.focus();
                                }
                                setMaPin4('')

                            }
                        }}
                            value={MaPin5} />
                        <TextInput ref={inputRef5} maxLength={1} style={AppStyle.StyleScreenXacNhanSDT.input_item_OTP} keyboardType='numeric' onChangeText={(val) => {
                            setMaPin6(val);
                        }
                        }
                        onKeyPress={(e) => {
                            if (Platform.OS === 'ios') {
                                if (e.nativeEvent.key === 'Backspace') {
                                    inputRef4.current.focus();
                                }
                            }
                            if (Platform.OS === 'android') {
                                if (e.nativeEvent.key = 'Backspace') {
                                    inputRef4.current.focus();
                                }
                                setMaPin5('')

                            }
                        }}
                            value={MaPin6} />
                    </View>
                    <Text style={AppStyle.StyleScreenXacNhanSDT.textguilaisau}> Gửi laị sau 00:{TimeDown}</Text>
                    {
                        MaPin1 != '' && MaPin2 != '' && MaPin3 != '' && MaPin4 != '' && MaPin5 != '' && MaPin6 != ''
                            ? <TouchableOpacity onPress={onfirm_otp}>
                                <LinearGradient
                                    style={AppStyle.StyleScreenXacNhanSDT.linear}

                                    colors={['#8B3BFF', '#B738FF']}
                                >

                                    <Text style={AppStyle.StyleScreenXacNhanSDT.text}>Tiếp tục</Text>
                                </LinearGradient>
                            </TouchableOpacity>
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
            </View>
            {/* <ReactCodeInput /> */}
        </SafeAreaView>
    )
}
export default ScreenXacThucSDT;


