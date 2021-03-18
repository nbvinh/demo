import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,SafeAreaView, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AppStyle from "../../theme";
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from "react-redux";
// import { CameraScreen } from 'react-native-camera-kit';
import ImagePicker from 'react-native-image-crop-picker';
import { useState } from 'react/cjs/react.development';
const DoiAvatar = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = React.useState(false);
    const _HoTen = useSelector(state => state.hoten)
    const _SDT = useSelector(state => state.SDT)
    const _Email = useSelector(state => state.Email)
    const [HoTen, setHoTen] = useState(_HoTen);
    const [SDT, setSDT] = useState(_SDT );
    const [Email, setEmail] = useState(_Email);
    const toggleModal = () => {
        setModalVisible(true);
    };
    const image = useSelector(state => state.image)
    const result = useSelector(state=>state.abc)
    const dispatch = useDispatch()
    const gotoPickImages = () => {
        setModalVisible(!isModalVisible)
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            dispatch({ type: 'IMAGES', image: image.path })
        });
    }
    const onupdate_info = async () => {
        try {
            if(result != ''){
                if(HoTen == ''){
                    Alert.alert('Thông Báo', 'Họ Tên Không được để rỗng');
                }
                else if(Email == ''){
                    Alert.alert('Thông Báo', 'Email Không được để rỗng');
                }
                else{
                    fetch(`http://175.41.184.177:6061//api/v1.0/customer/update-info`, {
                        email: Email,
                        full_name: HoTen,
                        phone_number: SDT,
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer + ${result}`
                        }
                    })
                        .then((response)=>response.json())
                        .then((json)=>{console.log(json)})
                        dispatch({type:'HOTEN', hoten: HoTen})
                        dispatch({type:'SDT', SDT: SDT})
                        dispatch({type:'Email', Email: Email})
                      
                    navigation.navigate('Tabviewmain');
                }
            }
            else{
                Alert.alert('Thông báo', 'Cập nhật thất bại do bạn chưa đăng nhập!');
            }
            

        } catch (error) {
            Alert.alert('Thông báo', error + '');
        }
    }
  
    const gotoPickImagesCamera = () => {
        setModalVisible(!isModalVisible)
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            dispatch({ type: 'IMAGES', image: image.path })
          });
    }
  
    return (
        <SafeAreaView style={AppStyle.StyleGiaoDich.container}>
            <View style={AppStyle.StyleGiaoDich.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleGiaoDich.header_text}>Thông tin cá nhân</Text>
            </View>
            <View style={{marginHorizontal: 12}}>
            <View style={{ marginTop: 20, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: 84, height: 84, borderRadius: 50, opacity: 0.4, }}
                    source={{
                        uri: image,
                    }}
                />
                <TouchableOpacity style={{ position: 'absolute' }} onPress={() => toggleModal()}>
                    <Image
                        width={18} height={16}
                        source={require('../../img/img_icon_24px/Iconly-Light-Camera.png')}
                    />
                </TouchableOpacity>
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ height: '40%' }} onPress={() => setModalVisible(!isModalVisible)} />
                    <View style={{ height: "20%", borderRadius: 8, justifyContent: 'space-around', backgroundColor: 'black', paddingHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => gotoPickImagesCamera()}>
                            <Text style={{ color: '#ffffff', fontSize: 16 }}>Chụp ảnh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => gotoPickImages()}>
                            <Text style={{ color: '#ffffff', fontSize: 16 }}>Chọn từ ảnh của bạn</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ height: '40%' }} onPress={() => setModalVisible(!isModalVisible)}></TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.body}>
                <View style={styles.block}>
                    <Text style={styles.title}>Họ và Tên <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.parent_input}>
                        <TextInput placeholder='Mời nhập họ và tên của bạn'
                            style={styles.textinput}
                            placeholderTextColor='rgba(255, 255, 255, 0.3)'
                            onChangeText={(value) => setHoTen(value)}
                            value={HoTen}
                        />
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.title}>Số Điện Thoại <Text style={{ color: 'red' }}>*</Text></Text>
                    <View style={styles.parent_input}>
                        <TextInput placeholder='Mời nhập số điện thoại của bạn'
                            style={styles.textinput}
                            placeholderTextColor='rgba(255, 255, 255, 0.3)'
                            keyboardType='numeric'
                            onChangeText={(value) => setSDT(value)}
                            value={SDT}
                        />
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.title}>Email</Text>
                    <View style={styles.parent_input}>
                        <TextInput placeholder='Mời nhập Email của bạn'
                            style={styles.textinput}
                            //    /*  */
                            //    /*  */
                            placeholderTextColor='rgba(255, 255, 255, 0.3)'
                            onChangeText={(value) => setEmail(value)}
                            value={Email}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ height: 48, backgroundColor: '#272738', borderRadius: 8, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 30, justifyContent: 'space-between' }} >
                <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '400' }}>Quản lý thẻ/ tài khoản</Text>
                <Image
                    width={18} height={18}
                    source={require('../../img/img_icon_24px/chevron_right_24px.png')}
                />
            </TouchableOpacity>
                <TouchableOpacity onPress={onupdate_info}>
                    <LinearGradient style={AppStyle.StyleFirst.linear} colors={['#8B3BFF', '#B738FF']}>
                    <Text style={AppStyle.StyleFirst.text}>Lưu</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    body: {
        height: 340,
    },
    header: {
        marginTop: 110,
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
        marginTop: 30
    },
    parent_input: {
        flex: 1,
    },
    textinput: {
        height: 50,
        fontSize: 15,
        backgroundColor: '#272738',
        color: '#FFFFFF',
        borderRadius: 8,
        marginVertical: 10,
        paddingVertical: 10,
        paddingLeft: 20
    },
    block: {
        marginVertical: 22
    },
    button1: {
        color: 'white',
        fontSize: 17
    },
    footer: {
        marginVertical: 75, marginHorizontal: 11
    },
    touchable: {
        borderRadius: 58,

    }
});
export default DoiAvatar;