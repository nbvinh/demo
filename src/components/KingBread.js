import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, FlatList } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";
import SlideImg from "../components/KingBread/SlideImg";
import ListProduct from "../components/KingBread/ListProduct";
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
                let productcombo = temp1[0].categories[0].products
                let productbanhmi = temp1[0].categories[1].products
                let productnuoc = temp1[0].categories[2].products
                dispatch({ type: 'PRODUCTNUOC', productnuoc: productnuoc })
                dispatch({ type: 'PRODUCTBANHMI', productbanhmi: productbanhmi })
                dispatch({ type: 'PRODUCTCOMBO', productcombo: productcombo })
                dispatch({ type: 'IMAGESBANHMI', imagesbanhmi: imagesbanhmi })
                dispatch({ type: 'BanhMiPEWPEW', temp1: temp1 })
            })
            .catch((error) => console.error(error))
    }

    const temp1 = useSelector(state => state.temp1)
    const categoriesbanhmi = useSelector(state => state.categoriesbanhmi)
    const getstyle = (statusname) => {
        const filterStatus = useSelector(state => state.filterStatus)
        if (statusname == filterStatus) return [AppStyle.StyleKingBread.touchable1, { backgroundColor: '#B738FF' }]
        return [AppStyle.StyleKingBread.touchable1, { backgroundColor: 'rgba(39,39,56,0.75)' }]
    }
    const productcombo = useSelector(state => state.productcombo)
    const getListProduct = () => {
        const filterStatus = useSelector(state => state.filterStatus)
        const productcombo = useSelector(state => state.productcombo)
        const productbanhmi = useSelector(state => state.productbanhmi)
        const productnuoc = useSelector(state => state.productnuoc)
        if (filterStatus === 'BANHMI') return productbanhmi
        if (filterStatus === 'NUOC') return productnuoc
        if (filterStatus === 'COMBO') return productcombo
    }
    let DataProduct = getListProduct();
    dispatch({ type: 'CATEGORIESPRODUCT', DataProduct: DataProduct })
    const sum = DataProduct && DataProduct.reduce((acc, curr) => {
        return (acc + curr.tongleprice)
    }, 0)
    const checkKingBread = useSelector(state => state.checkKingBread)
    return (
        <View style={AppStyle.StyleVoucherCGV.container}>
            <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
                {temp1 && temp1.map((item) => {
                    return (
                        <Text key={item.id.toString()} style={[AppStyle.StyleVoucherCGV.text, { marginLeft: 120 }]}>{item.name}</Text>
                    )
                })}

            </View>
            <View style={{ flex: 11 }}>
                <ScrollView>
                    <View style={AppStyle.StyleVoucherCGV.img}>
                        {temp1 && temp1.map((item) => {
                            return (
                                <Image
                                    key={item.id.toString()}
                                    style={AppStyle.StyleVoucherCGV.img1}
                                    source={{ uri: 'http://175.41.184.177:6063/image/' + item.avatar }}
                                />
                            )
                        })}
                    </View>
                    <SlideImg />
                    <View style={{ margin: 15 }}>
                        {temp1 && temp1.map((item) => {
                            return (
                                <View key={item.id.toString()}>
                                    <Text style={AppStyle.StyleKingBread.text1}>{item.name} - Vua bánh mì kẹp</Text>
                                    <View style={AppStyle.StyleKingBread.content2}>
                                        <Image
                                            style={AppStyle.StyleKingBread.img1}
                                            source={require('../img/vinh30.png')}
                                        />
                                        <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>{item.address}</Text>
                                    </View>
                                    <View style={AppStyle.StyleKingBread.content1}>
                                        <View >
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>Mở cửa: </Text>
                                                <Text style={[AppStyle.StyleKingBread.text, { color: '#B738FF' }]}>{item.openTime}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>Đóng cửa: </Text>
                                                <Text style={[AppStyle.StyleKingBread.text, { color: '#B738FF' }]}>{item.closeTime}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity onPress={() => Alert.alert("PHONE NUMBER BÁNH MÌ PEW PEW", item.phone)}>
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
                                </View>
                            )
                        })}
                        <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity
                                    onPress={() => dispatch({ type: 'FILTERCOMBO' })}
                                    style={getstyle('COMBO')}
                                >
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Combo</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => dispatch({ type: 'FILTERBANHMI' })}
                                    style={getstyle('BANHMI')}
                                >
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Bánh Mì</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => dispatch({ type: 'FILTERNUOC' })}
                                    style={getstyle('NUOC')}>
                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Đồ Uống</Text>
                                </TouchableOpacity>
                            </View>
                            {DataProduct && DataProduct.map((item) => <ListProduct key={item.id.toString()} myListProduct={item} />)}
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
                    {checkKingBread ?
                        <Text style={AppStyle.StyleVoucherCGV.text9}>0 đ</Text>
                        :
                        <Text style={AppStyle.StyleVoucherCGV.text9}>{sum}.000 đ</Text>
                    }

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