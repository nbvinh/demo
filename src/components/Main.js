import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, FlatList } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import { changedata1 } from "../reducers/action";
import Province from "../components/Main/Province"
const Main = ({ navigation }) => {
    const dispatch = useDispatch();
    const hoten = useSelector(state => state.hoten)
    const data1 = useSelector(state => state.data1)
    const province = useSelector(state => state.province)
    const [test, setTest] = useState(true)
    useEffect(() => {
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
    return (
        <ScrollView style={AppStyle.StyleMain.container}>

            <StatusBar barStyle='light-content'></StatusBar>
            <View style={AppStyle.StyleMain.header}>
                <View style={AppStyle.StyleMain.header_left}>
                    <TouchableOpacity onPress={() => { navigation.navigate('DoiAvatar') }}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 50 }}
                            source={{
                                uri: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/141162747_190481106106245_2204885355751272197_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=EKf625AzIeYAX91-s3-&_nc_ht=scontent.fhan4-1.fna&oh=3df2f2e9c188d6d61703f31bc20e5d82&oe=602FFFA0',
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.StyleMain.css_text}> Hi, {hoten}</Text>
                </View>
                <View style={AppStyle.StyleMain.header_right}>
                    <    Image
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
                    <TextInput style={{ width: '82%' }} placeholder='Nhập từ khoá tìm kiếm...' placeholderTextColor='gray' />
                </View>
                <View style={AppStyle.StyleMain.search_right}>
                    <TouchableOpacity onPress={() => modal()}>
                        {test ?
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '400' }}> Tỉnh <Image
                                style={{ width: 14, height: 8 }}
                                source={require('../img/expand_more_24px.png')}
                            /></Text>
                            :
                            <FlatList
                                data={data1}
                                renderItem={({ item }) => (
                                    item.isChooseProvince && (
                                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '400', marginTop:10 }}> {item.name} <Image
                                            style={{ width: 14, height: 8 }}
                                            source={require('../img/expand_more_24px.png')}
                                        /></Text>
                                    )
                                )}
                                keyExtractor={item => item?.provinceId?.toString()}
                            />
                        }


                    </TouchableOpacity>
                    <Province />
                </View>
            </View>
            <View style={AppStyle.StyleMain.poin_your}>
                <View style={AppStyle.StyleMain.poin_your_left}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '400' }}> Điểm của bạn </Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}> 0</Text>
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
                <View style={AppStyle.StyleMain.option_top}>
                    <TouchableOpacity style={AppStyle.StyleMain.option_item} onPress={() => navigation.navigate('VoucherNam')}>
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={require('../img/Discount.png')}
                        />
                        <Text style={AppStyle.StyleMain.option_itemtext}>
                            Khuyến mại
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={require('../img/douong_32px.png')}
                        />
                        <Text style={AppStyle.StyleMain.option_itemtext}>
                            Đồ Uống
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={require('../img/amthuc_32px.png')}
                        />
                        <Text style={AppStyle.StyleMain.option_itemtext}>
                            Ẩm thực
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={require('../img/CombinedShape.png')}
                        />
                        <Text style={AppStyle.StyleMain.option_itemtext}>
                            Mua Sắm
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={AppStyle.StyleMain.option_bottom}>
                    <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={require('../img/Vector.png')}
                        />
                        <Text style={AppStyle.StyleMain.option_itemtext}>
                            Làm đẹp
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={require('../img/giaitri_32px.png')}
                        />
                        <Text style={AppStyle.StyleMain.option_itemtext}>
                            Giải trí
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={require('../img/cashack_32px.png')}
                        />
                        <Text style={AppStyle.StyleMain.option_itemtext}>
                            Cashback
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                style={{ height: 100, width: "100%", borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                source={require('../img/Rectangle5.png')}
            />
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
            <TouchableOpacity onPress={() => navigation.navigate('KingBread')} style={AppStyle.StyleMain.DichVu}>
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