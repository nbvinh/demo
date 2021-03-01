import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AppStyle from "../../theme";
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from "react-redux";
// import { CameraScreen } from 'react-native-camera-kit';
import ImagePicker from 'react-native-image-crop-picker';
const DoiAvatar = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(true);
    };
    const image = useSelector(state => state.image)
    const dispatch = useDispatch()
    const gotoPickImages = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            dispatch({ type: 'IMAGES', image: image.path })
        });
    }
    const gotoPickImagesCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }
    return (
        <View style={AppStyle.StyleGiaoDich.container}>
            <View style={AppStyle.StyleGiaoDich.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
                    <Image
                        width={10} height={18}
                        source={require('../../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleGiaoDich.header_text}>Thông tin cá nhân</Text>
            </View>
            <View style={{ height: 80, justifyContent: 'center', alignItems: 'center' }}>
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
                        />
                    </View>
                </View>
            </View>
            <View style={{ height: 48, backgroundColor: '#272738', borderRadius: 8, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 30, justifyContent: 'space-between' }} >
                <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '400' }}>Quản lý thẻ/ tài khoản</Text>
                <Image
                    width={18} height={18}
                    source={require('../../img/img_icon_24px/chevron_right_24px.png')}
                />
            </View>

            <LinearGradient style={AppStyle.StyleFirst.linear} colors={['#8B3BFF', '#B738FF']}>
                <TouchableOpacity onPress={() => Alert.alert('Thông Báo', 'Cập Nhật Thông Tin Thành Công')}>
                    <Text style={AppStyle.StyleFirst.text}>Lưu</Text>
                </TouchableOpacity>
            </LinearGradient>

        </View>
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