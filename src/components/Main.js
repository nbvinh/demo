import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Alert, Image, FlatList, ActivityIndicator } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import { changedata1 } from "../reducers/action";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Province from "../components/Main/Province"
import DataVoucher from "../components/Main/DuLieuVoucher";
import rootSaga from '../Saga/mySaga';
const Main = ({ navigation, route }) => {
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }
    const theLoai = useSelector(state => state.TheLoai)
    const token = useSelector(state => state.abc)
    const dispatch = useDispatch();
    const [Name, setName] = React.useState(hoten);
    const hoten = useSelector(state => state.hoten)
    const data1 = useSelector(state => state.data1)
    const diem = useSelector(state => state.diem)
    const [diemlocal, setdiemlocal] = useState();
    const province = useSelector(state => state.province)
    const [DuLieuApi, setDuLieuApi] = React.useState([]);
    const [DuLieuVoucher, setDuLieuVoucher] = React.useState([]);
    const [test, setTest] = useState(true)
    const [number, setnumber] = React.useState(1);
    const image = useSelector(state => state.image)
    const [time, setTime] = useState(true)
    const handlerLoadmore = () => {
        setnumber(number + 1);
        callapiVoucher();
    }
    const callapiVoucher = () => {
        axios.get('http://175.41.184.177:6061/voucher?pageNumber=' + number).then(function (res) {
            const dulieuvoucher = res.data.data;
            Object.entries(dulieuvoucher);

            //setDuLieuVoucher([...DuLieuVoucher, ...dulieuvoucher]);
            setDuLieuVoucher(dulieuvoucher);
        }).catch(function (error) {
            console.log(error);
        });
    }
    useEffect(() => {
        AsyncStorage.getItem('token', (err, result) => {
            if (result === null) {
                navigation.navigate('ScreenFirst')
            }
            else {
                dispatch({ type: 'TOKEN', abc: result })
            }
        });
    }, [])
    useEffect(() => {
        _getData()
        GetImg()
        const loadnhe = async () => {

            const result = await axios.get('http://175.41.184.177:6061/category').then(function (res) {
                const dulieu = res.data.data;
                Object.entries(dulieu);
                setDuLieuApi(dulieu);
            }).catch(function (error) {
                console.log(error);
            });
            const result1 = await callapiVoucher();
            const result2 = await fetch('http://175.41.184.177:6061/data-province?offset=2&pageNumber=2&pageSize=2&paged=false&sort.sorted=false&sort.unsorted=false&unpaged=false', {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((jsonn) => { dispatch(changedata1(jsonn.data)) })
                .catch((error) => console.error(error))
            setTime(false)
        }
        loadnhe();
    }, [])
    const modal = () => {
        setTest(false)
        dispatch({ type: 'MODALPROVINCE' })
    }
    const Kingbread = () => {
        dispatch({ type: 'KINGBREAD' })
        dispatch({ type: 'CHECKKINGBREAD' })
        navigation.navigate('KingBread')
    }
    const _getData = async () => {
        try {
            let val = await AsyncStorage.getItem("Diem")
            if (val === null) {
                await AsyncStorage.setItem('Diem', JSON.stringify(diem));
            }
            else {
                console.log('diemmmmm', val)
                dispatch({ type: 'DIEMUP', diem: val })
            }

        } catch (error) {
            console.log('AsyncStorage get data error in List component', error.message)
        }

    };
    const GetImg = async () => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                // We have data!!
                dispatch({ type: 'IMAGES', image: value })
            }
        } catch (error) {
            // Error retrieving data
        }
    }
    const ListDuLieuVoucher = (chooseVoucher) => {
        if (chooseVoucher.id === 11) {
            navigation.navigate('VoucherCGV')
            dispatch({ type: 'KINGBREADFALSE' })
        }
    }
    const checkLogin = () => {
        token === '' ? Alert.alert('Thông Báo', 'Bạn chưa đăng nhập, nên không để thay đổi thông tin được', [

            {
                text: "Đăng Nhập",
                onPress: () => {
                    navigation.navigate('SecondScreen')

                }
            },
            {
                text: "Bỏ qua",

            },
        ],
            { cancelable: false }
        ) :
            navigation.navigate('DoiAvatar');
    }
    return (
        <SafeAreaView style={AppStyle.StyleMain.container}>
            <StatusBar backgroundColor="black" />
            {
                time ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#8B3BFF" />
                    </View>
                    :

                    <ScrollView style={{ paddingHorizontal: 12 }}>

                        <StatusBar barStyle='light-content'></StatusBar>
                        <View style={AppStyle.StyleMain.header}>
                            <View style={AppStyle.StyleMain.header_left}>
                                <TouchableOpacity onPress={checkLogin}>
                                    <Image
                                        style={{ width: 40, height: 40, borderRadius: 50 }}
                                        source={{
                                            uri: image,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text style={AppStyle.StyleMain.css_text}> Hi, {hoten} !</Text>
                            </View>
                            <View style={AppStyle.StyleMain.header_right}>
                                <Image
                                    style={{ width: 32, height: 32, marginLeft: 15 }}
                                    source={require('../img/Iconly-Light-Notification.png')}
                                />
                            </View>
                        </View>
                        <View style={AppStyle.StyleMain.search}>
                            <View style={AppStyle.StyleMain.search_left}>
                                <Image
                                    style={{ width: 20, height: 20, marginLeft: 15 }}
                                    source={require('../img/search_24px.png')}
                                />
                                <TextInput style={{ width: '82%', color: '#fff' }} placeholder='Nhập từ khoá tìm kiếm...' placeholderTextColor='gray' />
                            </View>
                            <View style={AppStyle.StyleMain.search_right}>
                                <TouchableOpacity onPress={() => modal()}>
                                    {test ?
                                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '400' }}> Tỉnh <Image
                                            style={{ width: 14, height: 8 }}
                                            source={require('../img/expand_more_24px.png')}
                                        /></Text>
                                        :
                                        data1.map((item) => {
                                            return (
                                                item.isChooseProvince && (
                                                    <Text key={item.provinceId.toString()} style={{ color: 'white', fontSize: 15, fontWeight: '400' }}> {item.name} <Image
                                                        style={{ width: 14, height: 8 }}
                                                        source={require('../img/expand_more_24px.png')}
                                                    /></Text>
                                                )
                                            )
                                        })
                                    }


                                </TouchableOpacity>
                                <Province setTest={setTest} />
                            </View>
                        </View>
                        <View style={AppStyle.StyleMain.poin_your}>
                            <View style={AppStyle.StyleMain.poin_your_left}>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: '400' }}> Điểm của bạn </Text>

                                <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}> {numberWithCommas(diem)}</Text>
                            </View>
                            <View style={AppStyle.StyleMain.poin_your_right}>
                                <LinearGradient
                                    style={{ width: 27, height: 27, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 15 }}
                                    colors={['#8B3BFF', '#B738FF']}
                                >
                                    <TouchableOpacity onPress={() => { navigation.navigate('GiaoDich') }}>
                                        <Text style={{ color: 'white', fontSize: 22 }}>+</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                                <Text style={{ color: 'white', fontSize: 12 }}> Nạp điểm </Text>
                            </View>
                        </View>
                        <View style={AppStyle.StyleMain.option}>
                            {

                                DuLieuApi.map(item => {
                                    const ChiTietVoucherTheoLoai = () => {
                                        dispatch({ type: 'IDLOAI', id: item.id })
                                        if (item.id === 1) {
                                            navigation.navigate('VoucherNam');
                                        }
                                        if (item.id === 3) {
                                            Kingbread()
                                        }
                                    }
                                    return (
                                        <TouchableOpacity key={item.id.toString()} style={AppStyle.StyleMain.option_item} onPress={ChiTietVoucherTheoLoai}>
                                            <Image
                                                style={{ width: 24, height: 24 }}
                                                source={{ uri: 'http://175.41.184.177:6063/image/' + item.avatar }}
                                            />
                                            <Text style={AppStyle.StyleMain.option_itemtext}>{item.name}</Text>
                                        </TouchableOpacity>
                                    );

                                })
                            }
                        </View>
                        <Image
                            style={{ height: 80, width: "100%", borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                            source={require('../img/Rectangle5.png')}
                        />
                        <DataVoucher DuLieuVoucher={DuLieuVoucher} ListDuLieuVoucher={ListDuLieuVoucher} />
                    </ScrollView>
            }
            {/* </SafeAreaProvider> */}
        </SafeAreaView>
    )
}

export default Main;