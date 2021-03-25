import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AppStyle from "../../theme";
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from "react-redux";
// import { CameraScreen } from 'react-native-camera-kit';
import ImagePicker from 'react-native-image-crop-picker';
import { useState } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../Header';
const DoiAvatar = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = React.useState(false);
    const _HoTen = useSelector(state => state.hoten)
    const _SDT = useSelector(state => state.SDT)
    const _Email = useSelector(state => state.Email)
    const [HoTen, setHoTen] = useState(_HoTen);
    const [SDT, setSDT] = useState(_SDT);
    const [Email, setEmail] = useState(_Email);
    const toggleModal = () => {
        setModalVisible(true);
    };
    const image = useSelector(state => state.image)
    const result = useSelector(state => state.abc)
    const [img, setImg] = useState()
    const dispatch = useDispatch()

    const onupdate_info = async () => {
        SaveItem()
        try {
            if (result != '') {
                if (HoTen == '') {
                    Alert.alert('Thông Báo', 'Họ Tên Không được để rỗng');
                }
                else if (Email == '') {
                    Alert.alert('Thông Báo', 'Email Không được để rỗng');
                }
                else {
                    fetch(`http://175.41.184.177:6061//api/v1.0/customer/update-info`, {
                        email: Email,
                        full_name: HoTen,
                        phone_number: SDT,
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer + ${result}`
                        }
                    })
                        .then((response) => response.json())
                        .then((json) => { console.log(json) })
                    dispatch({ type: 'HOTEN', hoten: HoTen })
                    dispatch({ type: 'SDT', SDT: SDT })
                    dispatch({ type: 'Email', Email: Email })
                    Alert.alert('Thông Báo', 'Bạn Có Chắc Là Đổi Thông Tin ? ', [
                        {
                            text: "Có",
                            onPress: () => {
                                navigation.navigate('Tabviewmain');
                                GetImg()
                            }
                        },
                        {
                            text: "Không",
                            onPress: () => console.log("Cancel Pressed"),
                        },
                    ],
                        { cancelable: false });
                }
            }
            else {
                Alert.alert('Thông báo', 'Cập nhật thất bại do bạn chưa đăng nhập!');
            }


        } catch (error) {
            Alert.alert('Thông báo', error + '');
        }
    }
    const GetImg = async () => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                // We have data!!
                console.log(value)
                dispatch({ type: 'IMAGES', image: value })
            }
        } catch (error) {
            // Error retrieving data
        }
    }
    const SaveItem = async () => {
        try {
            await AsyncStorage.setItem(
                'TASKS',
                img
            );
            console.log('saver ok')
        } catch (error) {
            // Error saving data
        }
    }
    const gotoPickImages = async () => {

        await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImg(image.path)
            setModalVisible(!isModalVisible)
        });

    }
    const gotoPickImagesCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImg(image.path)
            setModalVisible(!isModalVisible)
        });
    }
    const GOback =()=>{
        navigation.goBack()
    }
    const item ='Thông tin cá nhân'
    return (
        <SafeAreaView style={AppStyle.StyleGiaoDich.container}>
          <Header press={GOback} item ={item}/>
            <View style={{ marginHorizontal: 12 }}>
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
                            {console.log('img', img)}
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
                                contextMenuHidden={true}
                                editable={false}
                                selectTextOnFocus={false}

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