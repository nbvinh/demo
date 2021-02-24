import React from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AppStyle from "../../theme";
import Modal from 'react-native-modal';
import { CameraScreen } from 'react-native-camera-kit';
const DoiAvatar = ({navigation}) =>{
    const [isModalVisible, setModalVisible] = React.useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    return(
        <View style={AppStyle.StyleGiaoDich.container}>
            <View style={AppStyle.StyleGiaoDich.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 10 }}>
                        <Image
                            width={10} height={18}
                            source={require('../../img/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.StyleGiaoDich.header_text}>Thông tin cá nhân</Text>
            </View>
            <View style={{height: 80, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={{width: 84, height: 84, borderRadius: 50, opacity: 0.4,}}
                            source={{
                            uri: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/149827309_2185987718215959_615074836695332874_o.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=m6k_81KFp-YAX9E8TVa&_nc_ht=scontent.fhan2-5.fna&oh=4c576ca5b9049d60b03b68737415e725&oe=6051E0A1',
                                }}
                        />
                        <TouchableOpacity style={{position: 'absolute'}} onPress={toggleModal}>
                            <Image
                                width={18} height={16}
                                source={require('../../img/img_icon_24px/Iconly-Light-Camera.png')}
                            />
                        </TouchableOpacity>  
             </View>
             <Modal isVisible={isModalVisible} style={{justifyContent:'center', alignItems:'center'}}>
                <View style={{height: 100, width: '60%',borderRadius: 8, justifyContent: 'space-around', backgroundColor: 'rgba(255, 255, 255, 0.3)', paddingHorizontal: 10}}>
                   <TouchableOpacity>
                       <Text  style={{color: '#ffffff', fontSize: 16}}>Chụp ảnh</Text>
                   </TouchableOpacity>
                   <TouchableOpacity>
                       <Text  style={{color: '#ffffff', fontSize: 16}}>Chọn từ ảnh của bạn</Text>
                   </TouchableOpacity>
                </View>
            </Modal>
             <View style={styles.body}>
                <View style={styles.block}>
                    <Text style={styles.title}>Họ và Tên <Text style={{color: 'red'}}>*</Text></Text>
                    <View style={styles.parent_input}>
                        <TextInput placeholder='Mời nhập họ và tên của bạn'
                         style={styles.textinput} 
                         placeholderTextColor='rgba(255, 255, 255, 0.3)'
                        
                         />
                    </View>
                </View>   
                <View style={styles.block}>
                    <Text style={styles.title}>Số Điện Thoại <Text style={{color: 'red'}}>*</Text></Text>
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
           <View style={{height: 48, backgroundColor:'#272738', borderRadius: 8, padding: 16, flexDirection:'row', alignItems:'center', marginBottom: 30, justifyContent:'space-between'}} >
                <Text style={{color:'#ffffff', fontSize: 16, fontWeight: '400'}}>Quản lý thẻ/ tài khoản</Text>
                <Image
                    width={18} height={18}
                    source={require('../../img/img_icon_24px/chevron_right_24px.png')}
                />
            </View>
            
                    <LinearGradient style={AppStyle.StyleFirst.linear}  colors={['#8B3BFF', '#B738FF']}>
                        <TouchableOpacity onPress={() =>Alert.alert('Thông Báo', 'Cập Nhật Thông Tin Thành Công')}>
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
    body:{
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
    block:{
        marginVertical:22
    },
    button1:{
        color:'white',
        fontSize: 17
    },
    footer:{
        marginVertical:75,marginHorizontal: 11
    },
    touchable:{
        borderRadius:58,
       
    }
});
export default DoiAvatar;