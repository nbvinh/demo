import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, FlatList } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import { changedata1 } from "../reducers/action";
import axios from "axios";

import Province from "../components/Main/Province"
const Main = ({ navigation }) => {
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }
    const dispatch = useDispatch();
    const [Name, setName] = React.useState(hoten);
    const hoten = useSelector(state => state.hoten)
    const data1 = useSelector(state => state.data1)
    const diem = useSelector(state => state.diem)
    const province = useSelector(state => state.province)
    const [DuLieuApi, setDuLieuApi] = React.useState([]);
    const [DuLieuVoucher, setDuLieuVoucher] = React.useState([]);
    const [test, setTest] = useState(true)
    useEffect(() => {
        axios.get('http://175.41.184.177:6061/category').then(function (res) {
            const dulieu = res.data.data;
            Object.entries(dulieu);
            setDuLieuApi(dulieu);
            dispatch({type:'CATEGORY', phanloai: phanloai.DuLieuApi})
        }).catch(function (error) {
            console.log(error);
        });
        axios.get('http://175.41.184.177:6061/voucher').then(function (res) {
            const dulieuvoucher = res.data.data;
            Object.entries(dulieuvoucher);
            setDuLieuVoucher(dulieuvoucher);
            dispatch({type:'DATA_VOUCHER', voucher: voucher.DuLieuVoucher})
        }).catch(function (error) {
            console.log(error);
        });
        fetch('http://175.41.184.177:6061/data-province?offset=2&pageNumber=2&pageSize=2&paged=false&sort.sorted=false&sort.unsorted=false&unpaged=false', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((jsonn) => { dispatch(changedata1(jsonn.data)) })
            .catch((error) => console.error(error))
    }, [])
    const modal = () => {
        setTest(false)
        dispatch({ type: 'MODALPROVINCE' })
    }
    const Kingbread =()=>{
        dispatch({type:'KINGBREAD'})
        navigation.navigate('KingBread')
    }
  
    return (
        
        <ScrollView style={AppStyle.StyleMain.container}>
           
            <StatusBar barStyle='light-content'></StatusBar>
            <View style={AppStyle.StyleMain.header}>
                <View style={AppStyle.StyleMain.header_left}>
                    <TouchableOpacity onPress={() => { navigation.navigate('DoiAvatar') }}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 50 }}
                            source={{
                                uri: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/149827309_2185987718215959_615074836695332874_o.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=m6k_81KFp-YAX9E8TVa&_nc_ht=scontent.fhan2-5.fna&oh=4c576ca5b9049d60b03b68737415e725&oe=6051E0A1',
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
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}> {numberWithCommas(diem)}</Text>
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
                                    const ChiTietVoucherTheoLoai = () =>{
                                        navigation.navigate('VoucherNam');
                                        dispatch({type:'IDLOAI', id: item.id})
                                    }
                                    return(
                                    <TouchableOpacity key={item.id.toString()} style={AppStyle.StyleMain.option_item} onPress={ChiTietVoucherTheoLoai}>
                                        <Image
                                            style={{ width: 24, height: 24 }}
                                            source={{uri : 'http://175.41.184.177:6063/image/' + item.avatar}}
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
                   
                     return(
                        <TouchableOpacity key={item.id.toString()} style={AppStyle.StyleMain.DichVu} onPress={() => navigation.navigate('VoucherCGV')}>
                        <View style={AppStyle.StyleMain.DichVu_Top}>
                            <View style={AppStyle.StyleMain.DichVu_Left}>
                                <Image
                                    style={{ width: "100%", height: '100%' }} resizeMode='cover'
                                    source={{uri : 'http://175.41.184.177:6063/image/' + item.showImage}}
                                />
                            </View>
                            <View style={AppStyle.StyleMain.DichVu_Right}>
                                <View style={AppStyle.StyleMain.DichVu_RightItem}>
                                    <Image
                                        style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                        source={{uri : 'http://175.41.184.177:6063/image/' + item.images[0]}}
                                    />
                                </View>
                                <View style={AppStyle.StyleMain.DichVu_RightItem}>
                                    <Image
                                        style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                        source={{uri : 'http://175.41.184.177:6063/image/' + item.images[1]}}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                        <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                        <View style={AppStyle.StyleMain.DichVu_Bottom}>
                            <View style={AppStyle.StyleMain.DichVu_Bottom_Top}>
                                <Image
                                    style={{ width: 36, height: 36, borderRadius: 50}}
                                    source={{uri : 'http://175.41.184.177:6063/image/' + item.shop.avatar}}
                                />
                                <View style={{ width: '80%', marginLeft: 10 }}>
                                    <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}>{item.name} </Text>
                                    <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> {item.shop.address}</Text>
                                </View>
                            </View>
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
            <TouchableOpacity style={AppStyle.StyleMain.DichVu} onPress={() => navigation.navigate('VoucherCGV')}>
                <View style={AppStyle.StyleMain.DichVu_Top}>
                    <View style={AppStyle.StyleMain.DichVu_Left}>
                        <Image
                            style={{ width: "100%", height: '100%' }}
                            source={require('../img/Rectangle7.png')}
                        />
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Right}>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../img/Rectangle8.png')}
                            />
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../img/Rectangle9.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                <View style={AppStyle.StyleMain.DichVu_Bottom}>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Top}>
                        <Image
                            style={{ width: 36, height: 36 }}
                            source={require('../img/cgv.png')}
                        />
                        <View style={{ width: '80%', marginLeft: 10 }}>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}> Voucher CGV Cinema </Text>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> CGV Cinema - Tầng 5 Hà Nội Center Point</Text>
                        </View>
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
                            <Text style={{ marginLeft: 5, color: 'white', fontSize: 17, fontWeight: '700' }}>88.000 đ</Text>
                            <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 10 }}>100.000 đ</Text>
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
            <TouchableOpacity style={AppStyle.StyleMain.DichVu}  >
                <View style={AppStyle.StyleMain.DichVu_Top}>
                    <View style={AppStyle.StyleMain.DichVu_Left}>
                        <Image
                            style={{ width: "100%", height: '100%' }}
                            source={require('../img/Rectangle07.png')}
                        />
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Right}>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../img/Rectangle08.png')}
                            />
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../img/Rectangle09.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                <View style={AppStyle.StyleMain.DichVu_Bottom}>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Top}>
                        <Image
                            style={{ width: 36, height: 36 }}
                            source={require('../img/Ellipse04.png')}
                        />
                        <View style={{ width: '80%', marginLeft: 10 }}>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}> Voucher Manwah giảm 10%</Text>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> K-Pub - Tầng 4 Lê Văn Lương</Text>
                        </View>
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
                            <Text style={{ marginLeft: 5, color: 'white', fontSize: 17, fontWeight: '700' }}>280.000 đ</Text>
                            <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 10 }}>300.000 đ</Text>
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomRight}>
                            <Text style={{ marginRight: 5, color: 'white', fontSize: 13, fontWeight: '400' }}><Image
                                style={{ width: 18, height: 18 }}
                                source={require('../img/Iconly-Light-Location2.png')} /> 0,5 km</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => Kingbread() } style={AppStyle.StyleMain.DichVu}>
                <View style={AppStyle.StyleMain.DichVu_Top}>
                    <View style={AppStyle.StyleMain.DichVu_Left}>
                        <Image
                            style={{ width: "100%", height: '100%' }}
                            source={require('../img/Rectangle007.png')}
                        />
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Right}>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../img/Rectangle008.png')}
                            />
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../img/Rectangle009.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                <View style={AppStyle.StyleMain.DichVu_Bottom}>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Top}>
                        <Image
                            style={{ width: 36, height: 36 }}
                            source={require('../img/Ellipse004.png')}
                        />
                        <View style={{ width: '80%', marginLeft: 10 }}>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}> King Bread</Text>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> 28 Hồ Tùng Mậu, p. Mai Dịch, q. Cầu Giấy, Hà Nội</Text>
                        </View>
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>

                            <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', marginLeft: 10 }}>Hoàn 20% khi đặt món</Text>
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomRight}>
                            <Text style={{ marginRight: 5, color: 'white', fontSize: 13, fontWeight: '400' }}><Image
                                style={{ width: 18, height: 18 }}
                                source={require('../img/Iconly-Light-Location2.png')} /> 3,5 km</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        </ScrollView>
    )
}

export default Main;