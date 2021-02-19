import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, FlatList } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";
import SlideImg from "../components/KingBread/SlideImg";
import { useSelector, useDispatch } from "react-redux";
const KingBread = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        loadData();
    }, [])
    const loadData = async () => {
        fetch('http://175.41.184.177:6061/shop/1', {
            method: 'GET'
        })

            .then((response) => response.json())
            .then((res) => {
                let temp1 = [res]
                let imagesbanhmi = temp1[0].images
                console.log(imagesbanhmi)
                dispatch({ type: 'IMAGESBANHMI', imagesbanhmi: imagesbanhmi })
                dispatch({ type: 'BanhMiPEWPEW', temp1: temp1 })
            })
            .catch((error) => console.error(error))
    }

    const temp1 = useSelector(state => state.temp1)
    return (
        <View style={AppStyle.StyleVoucherCGV.container}>
            <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                <FlatList
                    data={temp1}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Text style={[AppStyle.StyleVoucherCGV.text, { marginLeft: 120 }]}>{item.name}</Text>
                    )}
                />

            </View>
            <View style={{ flex: 11 }}>
                <ScrollView>
                    <View style={AppStyle.StyleVoucherCGV.img}>
                        <Image
                            style={AppStyle.StyleVoucherCGV.img1}
                            source={require('../img/vinh29.png')}
                        />
                    </View>
                    <SlideImg />
                    <View style={{ margin: 15 }}>
                        <FlatList
                            data={temp1}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <Text style={AppStyle.StyleKingBread.text1}>{item.name} - Vua bánh mì kẹp</Text>
                            )}
                        />
                        <View style={AppStyle.StyleKingBread.content2}>
                            <Image
                                style={AppStyle.StyleKingBread.img1}
                                source={require('../img/vinh30.png')}
                            />
                            <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>28 Hồ Tùng Mậu, p. Mai Dịch, q. Cầu Giấy, Hà Nội</Text>
                        </View>
                        <View style={AppStyle.StyleKingBread.content1}>
                            <View >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>Mở cửa: </Text>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#B738FF' }]}>7:30</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>Đóng cửa: </Text>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#B738FF' }]}>22:00</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 50, height: 36, marginRight: 20 }}
                                        source={require('../img/vinh31.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 50, height: 36, marginBottom: 10 }}
                                        source={require('../img/vinh32.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={[AppStyle.StyleKingBread.touchable1, { backgroundColor: '#B738FF' }]}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Combo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[AppStyle.StyleKingBread.touchable1, { backgroundColor: 'rgba(39,39,56,0.75)' }]}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Bánh Mì</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[AppStyle.StyleKingBread.touchable1, { backgroundColor: 'rgba(39,39,56,0.75)' }]}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Đồ Uống</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={AppStyle.StyleKingBread.text1}>Combo</Text>



                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={AppStyle.StyleVoucherCGV.footer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={AppStyle.StyleVoucherCGV.img3}
                        source={require('../img/vinh8.png')}
                    />
                    <Text style={AppStyle.StyleVoucherCGV.text9}>60.000 đ</Text>
                </View>
                <View style={AppStyle.StyleVoucherCGV.footer1}>
                    <Text style={AppStyle.StyleVoucherCGV.text10}>5</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('GioHang')}>
                    <Image
                        style={AppStyle.StyleVoucherCGV.img4}
                        source={require('../img/vinh0.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default KingBread;