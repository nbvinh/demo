import React from "react";
import { PermissionsAndroid } from 'react-native';
import AppStyle from "../theme";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar,SafeAreaView, TextInput, Alert, Image, Platform } from "react-native";
import Contacts from 'react-native-contacts';
const MoiBanBe = ({navigation}) =>{
    const [DanhBa, setDanhBa] = React.useState([]);
    React.useEffect(() =>{
        if(Platform.OS == 'ios'){

            Contacts.getAll().then(contacts => {
                setDanhBa(contacts);
                console.log(contacts);
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
                
                {//val.phoneNumbers[0].number
                    DanhBa.map((val)=>{
                        return(
                            <View style={{flexDirection:'row', height: 60, marginVertical: 5, borderBottomColor:'rgba(155, 158, 163, 0.5)', borderBottomWidth: 1}}> 
                                <View style={{flex: 1, justifyContent:'center'}}>
                                    <Text style={{color: 'white', fontSize: 16}}>{val.givenName + " " + val.familyName}</Text>
                                    <Text style={{color:'#9B9EA3', fontSize: 12,}}>Từ Danh Bạ</Text>
                                </View>
                                <View style={{flex: 1, justifyContent:'center', alignItems:'flex-end'}}>
                                
                                    <TouchableOpacity style={{width: 54, height: 24, borderRadius: 12, borderColor:'#8B3BFF', borderWidth: 1, justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{color:'#8B3BFF'}}>Mời</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                        );

                    })
                }
            </View>
        </SafeAreaView>
    );
}
export default MoiBanBe;