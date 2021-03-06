import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, BackHandler } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import AppStyle from "../theme";
import Khuyenmai from "../components/ChonVoucher/Khuyenmai";
import { useSelector, useDispatch } from "react-redux";
import Header from '../components/Header';
const ChonVoucher = ({ navigation }) => {
    const dispatch = useDispatch();
    const arrPromotion = useSelector(state => state.arrPromotion)
    const [ischeck, setIscheck] = useState();
    const [id, setId] = useState();
    const onGetCheck = (value) => {
        setIscheck(value);
    }
    const Goback = () => {
        navigation.goBack()
        dispatch({ type: 'CHOOSEVOUCHERTRUE' })
    }
    const conmfirmvoucher = useSelector(state => state.conmfirmvoucher)
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, [])
    function handleBackButtonClick() {
        navigation.goBack()
        dispatch({ type: 'CHOOSEVOUCHERTRUE' })
        return true;
    }
    const item ='Chọn Voucher'
    return (
        <SafeAreaView style={AppStyle.StyleMain.container}>

            <View style={AppStyle.StyleVoucherCGV.container}>
                 <Header onpress={Goback} item ={item}/>
                <View style={{ flex: 10 }}>
                    <ScrollView>
                        <View style={AppStyle.StyleVoucherCGV.address}>
                            <View style={AppStyle.StyleGioHang.address2}>
                                <TextInput
                                    style={[AppStyle.StyleGioHang.content1, { paddingLeft: 20 }]}
                                    placeholder="Nhập mã khuyến mãi"
                                    placeholderTextColor="#3E3E56"
                                />
                                <Image
                                    style={AppStyle.StyleChonVoucher.img1}
                                    source={require('../img/vinh6.png')}
                                />
                            </View>
                        </View>
                        {arrPromotion.map((item, index) => (
                            <Khuyenmai key={index.toString()} myarrPromotion={item} sendCheck={(value) => onGetCheck(value)} />
                        ))}
                        <View style={{ height: 200 }}></View>
                    </ScrollView>
                </View>
                <View style={{ flex: 1, margin: 15 }}>
                    {conmfirmvoucher ?
                        <TouchableOpacity onPress={() => navigation.navigate('GioHang')}>
                            <Image
                                style={{ width: '100%', height: 48, borderRadius: 8 }}
                                source={require('../img/vinh2.png')}
                            />
                        </TouchableOpacity>
                        :
                        <View >
                            <Image
                                style={{ width: '100%', height: 48, borderRadius: 8 }}
                                source={require('../img/vinh33.png')}
                            />
                        </View>
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ChonVoucher;