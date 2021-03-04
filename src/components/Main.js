import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, FlatList } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import { changedata1 } from "../reducers/action";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Province from "../components/Main/Province"
const Main = ({ navigation }) => {
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }
    const token = useSelector(state=>state.abc)
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
    useEffect(() => {
        _storeData();
        _getData();
        axios.get('http://175.41.184.177:6061/category').then(function (res) {
            const dulieu = res.data.data;
            Object.entries(dulieu);
            setDuLieuApi(dulieu);
            dispatch({ type: 'CATEGORY', phanloai: phanloai.DuLieuApi })
        }).catch(function (error) {
            console.log(error);
        });
        axios.get('http://175.41.184.177:6061/voucher').then(function (res) {
            const dulieuvoucher = res.data.data;
            Object.entries(dulieuvoucher);
            setDuLieuVoucher(dulieuvoucher);
            dispatch({ type: 'DATA_VOUCHER', voucher: voucher.DuLieuVoucher })
        }).catch(function (error) {
            console.log(error);
        });
        fetch('http://175.41.184.177:6061/data-province?offset=2&pageNumber=2&pageSize=2&paged=false&sort.sorted=false&sort.unsorted=false&unpaged=false', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((jsonn) => { dispatch(changedata1(jsonn.data)) })
            .catch((error) => console.error(error))
    }, [diem])
    const modal = () => {
        setTest(false)
        dispatch({ type: 'MODALPROVINCE' })
    }
    const Kingbread = () => {
        dispatch({ type: 'KINGBREAD' })
        dispatch({ type: 'CHECKKINGBREAD' })
        navigation.navigate('KingBread')
    }
    const _storeData = async () => {
        try {
          await AsyncStorage.setItem(
            'Diem',
            JSON.stringify(diem)
          );
        } catch (error) {
          // Error saving data
        }
      };
      const _getData = async () => {
        try {
          await AsyncStorage.getItem("Diem").then(val => {
            console.log(val);
            setdiemlocal(val);

        });
        
        } catch (error) {
          
        }

      };
    const image = useSelector(state => state.image)
    return (
        <ScrollView style={AppStyle.StyleMain.container}>

            <StatusBar barStyle='light-content'></StatusBar>
            <View style={AppStyle.StyleMain.header}>
            {_storeData}
                <View style={AppStyle.StyleMain.header_left}>
                    <TouchableOpacity onPress={() => { navigation.navigate('DoiAvatar') }}>
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
                    <Province />
                </View>
            </View>
            <View style={AppStyle.StyleMain.poin_your}>
                <View style={AppStyle.StyleMain.poin_your_left}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '400' }}> Điểm của bạn </Text>
                    
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}> {diemlocal}</Text>
                </View>
                <View style={AppStyle.StyleMain.poin_your_right}>
                    <LinearGradient
                        style={{ width: 27, height: 27, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 15 }}
                        colors={['#8B3BFF', '#B738FF']}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate('GiaoDich')}>
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
                            if(item.id === 3){
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
            {
                DuLieuVoucher.map(item => {
                    const ListDuLieuVoucher =()=>{
                        if(item.id ===11){
                            navigation.navigate('VoucherCGV')
                            dispatch({type:'KINGBREADFALSE'})
                        }
                    }
                    return (
                        <TouchableOpacity key={item.id.toString()} style={AppStyle.StyleMain.DichVu} onPress={() => ListDuLieuVoucher()}>
                            <View style={AppStyle.StyleMain.DichVu_Top}>
                                <View style={AppStyle.StyleMain.DichVu_Left}>
                                    <Image
                                        style={{ width: "100%", height: '100%' }} resizeMode='cover'
                                        source={{ uri: 'http://175.41.184.177:6063/image/' + item.showImage }}
                                    />
                                </View>
                                <View style={AppStyle.StyleMain.DichVu_Right}>
                                    <View style={AppStyle.StyleMain.DichVu_RightItem}>
                                        <Image
                                            style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                            source={{ uri: 'http://175.41.184.177:6063/image/' + item.images[0] }}
                                        />
                                    </View>
                                    <View style={AppStyle.StyleMain.DichVu_RightItem}>
                                        <Image
                                            style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                            source={{ uri: 'http://175.41.184.177:6063/image/' + item.images[1] }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                            <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                            <View style={AppStyle.StyleMain.DichVu_Bottom}>
                                <View style={[AppStyle.StyleMain.DichVu_Bottom_Top]}>
                                    <Image
                                        style={{ width: 36, height: 36, borderRadius: 50 }}
                                        source={{ uri: 'http://175.41.184.177:6063/image/' + item.shop.avatar }}
                                    />
                                    <View style={{ width: '80%', marginLeft: 10 }}>
                                        <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}>{item.name} </Text>
                                        <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> {item.shop.address}</Text>
                                    </View>
                                </View>
                                <View style={{height: 1, borderColor: 'gba(0, 0, 0, 0.3)',borderWidth: 1,borderStyle:'dashed'}}></View>
                                <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                                    <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
                                        <Text style={{ marginLeft: 5, color: 'white', fontSize: 17, fontWeight: '700' }}>{item.price}.000 đ</Text>
                                        <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 10 }}>{item.priceSale}.000 đ</Text>
                                    </View>
                                    <View style={AppStyle.StyleMain.DichVu_Bottom_BottomRight}>
                                        <Text style={{ marginRight: 5, color: 'white', fontSize: 13, fontWeight: '400' }}><Image
                                            style={{ width: 18, height: 18 }}
                                            source={require('../img/Iconly-Light-Location2.png')}
                                        /> 2,5 km</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default Main;