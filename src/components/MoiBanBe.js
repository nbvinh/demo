import React from "react";
import { PermissionsAndroid } from 'react-native';
import AppStyle from "../theme";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, TextInput, Alert, Image, Platform } from "react-native";
import Contacts from 'react-native-contacts';
import { FlatList, ScrollView } from "react-native-gesture-handler";
const MoiBanBe = ({ navigation }) => {
    const [DanhBa, setDanhBa] = React.useState([]);
    const [Tamp, setTamp] = React.useState([]);
    React.useEffect(() => {
        if (Platform.OS == 'ios') {
            Contacts.getAll((err, contacts) => {
                if (err) {
                    throw err
                }
                else {
                    var DanhBaSort = contacts.sort(function (a, b) {
                        var nameA = a.givenName.toUpperCase(); // bỏ qua hoa thường
                        var nameB = b.givenName.toUpperCase(); // bỏ qua hoa thường
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }

                        return 0;
                    });

                    setDanhBa(DanhBaSort);

                }




            })
        }
        else if (Platform.OS == 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: 'Contacts',
                    message: 'This app would like to view your contacts.',
                }
            )
                .then(() => {
                    Contacts.getAll((err, contacts) => {
                        if (err === 'denied') {
                            // error
                            console.log('error', err)
                        }
                        else {
                            setDanhBa(contacts)
                            // console.log('daba',contacts)
                        }
                    })
                })
        }
    })
    const filterItems = (query) => {
        return DanhBa.filter((el) =>
            el.givenName.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }

    return (

        <SafeAreaView style={AppStyle.StyleLichSuDiem.container}>
            <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleVoucherCGV.text}>Mời Bạn Bè</Text>
            </View>
            <View style={{ marginHorizontal: 12, flex: 11 }}>
                <View style={{ marginVertical: 20, backgroundColor: '#272738', borderRadius: 8, height: 40, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity >
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 15 }}
                            source={require('../img/search_24px.png')}
                        />
                    </TouchableOpacity>
                    <TextInput style={{ width: '89%', color: '#fff' }} onChangeText={(val) => setTamp(filterItems(val))} placeholder='Nhập từ khoá tìm kiếm...' placeholderTextColor='gray' />
                </View>
                <Text style={{ color: 'rgba(246, 246, 246, 0.6)', }}> Danh Bạ </Text>
                {
                    Tamp.length == 0 ?
                        <FlatList
                            data={DanhBa}
                            keyExtractor={(item) => item.recordID}
                            renderItem={({ item }) => {
                                return (
                                    <View>

                                        {/* <Text style={{ color: '#949494', fontWeight: 'bold', paddingLeft: 6, fontSize: 14 }}>{item.givenName.charAt(0)}</Text> */}
                                        <View style={{ flexDirection: 'row', height: 60, margin: 5 }}>
                                            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ borderRadius: 50, backgroundColor: '#303051', height: 36, width: 36, justifyContent: 'center', alignItems: 'center' }}>
                                                    {/* <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>{item.givenName.charAt(0)}</Text> */}
                                                </View>
                                            </View>
                                            <View style={{ flex: 8.5, flexDirection: 'row', borderBottomColor: 'rgba(155, 158, 163, 0.5)', borderBottomWidth: 0.5 }}>
                                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                                    <Text style={{ color: 'white', fontSize: 16 }}>{item.givenName + " " + item.familyName}</Text>
                                                    <Text style={{ color: '#9B9EA3', fontSize: 12, }}>Từ Danh Bạ </Text>
                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>

                                                    <TouchableOpacity style={{ width: 54, height: 24, borderRadius: 12, borderColor: '#8B3BFF', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text style={{ color: '#8B3BFF' }}>Mời</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>


                                );
                            }}
                        />


                        :
                        <FlatList
                            data={Tamp}
                            keyExtractor={(item) => item.recordID}
                            renderItem={({ item }) => {
                                return (
                                    <View>

                                        <Text style={{ color: '#949494', fontWeight: 'bold', paddingLeft: 6, fontSize: 14 }}>{item.givenName.charAt(0)}</Text>
                                        <View style={{ flexDirection: 'row', height: 60, margin: 5 }}>
                                            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ borderRadius: 50, backgroundColor: '#303051', height: 36, width: 36, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>{item.givenName.charAt(0)}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 8.5, flexDirection: 'row', borderBottomColor: 'rgba(155, 158, 163, 0.5)', borderBottomWidth: 0.5 }}>
                                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                                    <Text style={{ color: 'white', fontSize: 16 }}>{item.givenName + " " + item.familyName}</Text>
                                                    <Text style={{ color: '#9B9EA3', fontSize: 12, }}>Từ Danh Bạ </Text>
                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>

                                                    <TouchableOpacity style={{ width: 54, height: 24, borderRadius: 12, borderColor: '#8B3BFF', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text style={{ color: '#8B3BFF' }}>Mời</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>


                                );
                            }}
                        />
                }


            </View>
        </SafeAreaView>
    );
}
export default MoiBanBe;