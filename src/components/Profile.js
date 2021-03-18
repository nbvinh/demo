import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView , Image, Alert,KeyboardAvoidingView ,Platform} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { update_info } from "./api";
import { useDispatch, useSelector } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Profile = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const [hoten, setHoten] = useState("");
    const [follow_hoten, setFollow_hoten] = useState(false);
    const SDT = route.params.SDT;
    const result = useSelector(state => state.abc)
    const [Email, setEmail] = useState("");
    const [follow_email, setFollow_email] = useState(false);
    console.log('tocken', result)

    const onupdate_info = async () => {
        try {
            fetch(`http://175.41.184.177:6061//api/v1.0/customer/update-info`, {
                email: Email,
                full_name: hoten,
                phone_number: SDT,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer + ${result}`
                }
            })
                .then((response) => response.json())
                .then((json) => { console.log(json) })
            dispatch({ type: 'HOTEN', hoten: hoten })
            dispatch({ type: 'SDT', SDT: SDT })
            dispatch({ type: 'Email', Email: Email })
            navigation.navigate('Tabviewmain');
        } catch (error) {
            Alert.alert('Thông báo', error + '');
        }
    }
    /*Ho Ten*/
    function onchangText(text) {
        if (text.length == 0) {
            setFollow_hoten(false);
        }
        else {
            setFollow_hoten(true);
        }
        setHoten({ hoten: text })
    }

    //so dien thoai
    function onchangDt(number) {
        if (number.length > 10) {
            setFollow_sdt(true);
        }
        else {
            setFollow_sdt(false);
        }
        setSDT({ SDT: number })
    }

    //email
    function onchangEmail(email) {
        if (email.length == 0) {
            setFollow_email(false);
        }
        else {
            setFollow_email(true);
        }
        setEmail({ Email: email })
    }
    const [check, setCheck] = useState(false)
    const validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            
           
            //   this.setState({ email: text })
            setEmail(text)
            setCheck(false);
            return false;
        }
        else {
            //   this.setState({ email: text })
            setEmail(text)
            setCheck(true)
            console.log("Email is Correct");
        }
    }
    const [checkHoten,setCheckhoten] = useState(false);
    const validateHoten =(text1)=>{
        let reg =/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        if(reg.test(text1)=== false){
            setHoten(text1)
            setCheckhoten(false)
            return false;
            console.log("ho ten not is Correct");

        }else{
            setHoten(text1);
            setCheckhoten(true)
            console.log("ho ten is Correct");

        }
    }
    const _onPress = () => {
       
       
         if(check===false && checkHoten===false){
            Alert.alert("Mời bạn nhập lạp Gmail và Họ Tên")
        } else if(checkHoten ===false){
            Alert.alert('Mời bạn nhập lại họ tên')
        }else  if(check===false ){
              Alert.alert('Mời bạn nhập lại Email')
        }
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <KeyboardAwareScrollView
        style={styles.containerTop}
        
      >
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{  marginLeft: 15 }}>
                <Image
                    width={10} height={18}
                    source={require('../img/back.png')}
                />
            </TouchableOpacity>
            <Text style={styles.header}>Thông Tin Cá Nhân</Text>
            <View style={styles.body}>
                <View style={styles.block}>
                    <Text style={styles.title}>Họ và Tên <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.parent_input}>
                        <TextInput placeholder='Mời nhập họ và tên của bạn'
                            style={styles.textinput}
                            placeholderTextColor='rgba(255, 255, 255, 0.3)'
                            onChangeText={(text1) => validateHoten(text1)}
                            value={hoten}
                            
                        />
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.title}>Số Điện Thoại <Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={styles.parent_input}>
                            <TextInput placeholder='Mời nhập số điện thoại của bạn'
                                style={styles.textinput}
                                placeholderTextColor='rgba(255, 255, 255, 0.3)'
                                keyboardType='numeric'
                                value={SDT}
                                editable={false} selectTextOnFocus={false}
                            />
                        </View>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.title}>Email</Text>
                        <View style={styles.parent_input}>
                            <TextInput placeholder='Mời nhập Email của bạn'
                                style={styles.textinput}
                                placeholderTextColor='rgba(255, 255, 255, 0.3)'
                                // onChangeText={(email) => onchangEmail(email)}
                                onChangeText={(text) => validate(text)}
                                value={Email}
                            />
                        </View>
                    </View>

                </View>
                <View style={styles.footer}>
                    { check &&checkHoten ?
                        <TouchableOpacity>
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                colors={['#8B3BFF', '#B738FF']} style={{ opacity: 1, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                                <TouchableOpacity follow_hoten={follow_hoten}
                                    style={[styles.touchable]} onPress={onupdate_info}>
                                    <Text style={styles.button1}>Hoàn thành</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={_onPress} >
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                colors={['#B738FF', '#8B3BFF']} style={{ opacity: 0.2, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>

                                <Text style={styles.button1}>Hoàn thành</Text>

                            </LinearGradient>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
        </KeyboardAwareScrollView>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    containerTop:{
        backgroundColor: 'black',
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        marginTop: 50,
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginHorizontal: 10
    },
    title: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10
    },
    body: {
        marginHorizontal: 15,
        marginTop:35

    },
    parent_input: {
        flex: 1,
    },
    textinput: {
        borderColor: 'red',
        height: 48,
        backgroundColor: '#272738',
        color: '#FFFFFF',
        borderRadius: 8,
        marginVertical: 10,
        paddingVertical: 10,
        paddingLeft: 20
    },
    block: {
       
    },
    button1: {
        color: 'white',
        fontSize: 17
    },
    footer: {
        marginTop: 75, marginHorizontal: 11
    },
    touchable: {
        borderRadius: 58,

    }
});
export default Profile;