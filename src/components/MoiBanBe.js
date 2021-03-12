import React from "react";
import { PermissionsAndroid } from 'react-native';
import AppStyle from "../theme";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar,SafeAreaView, TextInput, Alert, Image, Platform } from "react-native";
import Contacts from 'react-native-contacts';
const MoiBanBe = ({navigation}) =>{
    const [DanhBa, setDanhBa] = React.useState({});
    React.useEffect(() =>{
        if(Platform.OS == 'ios'){

            Contacts.getAll().then(contacts => {
                setDanhBa(contacts);
                console.log('IOS : ' + contacts);
            })
        }
        else if(Platform.OS == 'android'){
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                  'title': 'Contacts',
                  'message': 'This app would like to view your contacts.',
                  'buttonPositive': 'Please accept bare mortal'
                }
              )
              .then(Contacts.getAll)
              .then(contacts => {
                setDanhBa(contacts);
                console.log('Android : '+ contacts);
              })
        }
    })
    return(
        <SafeAreaView style={AppStyle.StyleLichSuDiem.container}>
            <View style={AppStyle.StyleLichSuDiem.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 10 }}>
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleLichSuDiem.header_text}>Mời Bạn Bè</Text>
                
            </View>
            <View style={{marginHorizontal: 12, flex: 1}}>
                <View style={{marginVertical: 20, backgroundColor:'#272738', borderRadius: 8, height: 40,  justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                    <Image
                        style={{ width: 20, height: 20, marginLeft: 15 }}
                        source={require('../img/search_24px.png')}
                    />
                    <TextInput style={{ width: '89%', color: '#fff' }} placeholder='Nhập từ khoá tìm kiếm...' placeholderTextColor='gray' />
                </View>
                <Text style={{color: 'rgba(246, 246, 246, 0.6)', }}> Danh Bạ </Text>
                
                {/* {
                    DanhBa.map((val)=>{
                        return(
                            <Text>{val}</Text>
                        );

                    })
                } */}
            </View>
        </SafeAreaView>
    );
}
export default MoiBanBe;