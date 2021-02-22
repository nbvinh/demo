import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, ScrollView } from "react-native";
import AppStyle from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react/cjs/react.development';

const ListProduct = (props) => {
    const dispatch = useDispatch();
    const filterStatus = useSelector(state => state.filterStatus)
    const UP = (choosediem) => {
        if (filterStatus === 'BANHMI') dispatch({ type: 'UPITEMPRODUCTBANHMI', id: choosediem.id })
        if (filterStatus === 'NUOC') dispatch({ type: 'UPITEMPRODUCTNUOC', id: choosediem.id })
        if (filterStatus === 'COMBO') {
            dispatch({ type: 'UPITEMPRODUCTCOMBO', id: choosediem.id })
        }

        dispatch({ type: 'PRICEITEMPRODUCTBANHMI', id: choosediem.id })
    }
    const DOWN = (choosediem) => {
        if (amount > 0) {
            if (filterStatus === 'BANHMI') dispatch({ type: 'DOWNITEMPRODUCTBANHMI', id: choosediem.id })
            if (filterStatus === 'NUOC') dispatch({ type: 'DOWNITEMPRODUCTNUOC', id: choosediem.id })
            if (filterStatus === 'COMBO') dispatch({ type: 'DOWNITEMPRODUCTCOMBO', id: choosediem.id })
            dispatch({ type: 'PRICEITEMPRODUCTBANHMI', id: choosediem.id })
        }
    }
    const checkKingBread = useSelector(state => state.checkKingBread)
    const UPCHECK = (choosediem) => {
        dispatch({ type: 'CHECKKINGBREAD' })
        if (filterStatus === 'COMBO') dispatch({ type: 'CHECKCOMBO' })
        if (filterStatus === 'NUOC') dispatch({ type: 'CHECKNUOC' })
        if (filterStatus === 'BANHMI') dispatch({ type: 'CHECKBANHMI' })
    }
    const UpAfter = (choosediem) => {
        if (filterStatus === 'COMBO') {
            dispatch({ type: 'OPENUPCOMBO', id: choosediem.id })
        }
        if (filterStatus === 'NUOC') {
            dispatch({ type: 'OPENUPNUOC', id: choosediem.id })
        }
        if (filterStatus === 'BANHMI') {
            dispatch({ type: 'OPENUPBANHMI', id: choosediem.id })
        }
    }
    const { name, avatar, price, quantity, id, tongleprice, amount, OpenUP } = props.myListProduct
    return (
        <TouchableOpacity onPress={() => UPCHECK()}>

            <View style={{ backgroundColor: '#272738', marginTop: 10, flexDirection: 'row', borderRadius: 8, width: '100%', flex: 1, alignItems: 'center' }}>
                <Image
                    style={{ width: 82, height: 82, marginLeft: 10, marginVertical: 10 }}
                    source={{ uri: 'http://175.41.184.177:6063/image/' + avatar }}
                />
                <View style={{ marginTop: 10, marginVertical: 10, marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: '#FFFFFF', fontWeight: '400', width: '80%' }}>{name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: '500' }}>{price}.000 đ</Text>
                        {checkKingBread ?
                            null
                            :
                            OpenUP ?
                                <View style={{ flexDirection: 'row', marginLeft: 70 }}>
                                    <TouchableOpacity onPress={() => DOWN(props.myListProduct)}>
                                        <Image
                                            style={{ width: 32, height: 32 }}
                                            source={require('../../img/vinh9.png')}
                                        />
                                    </TouchableOpacity >
                                    <Text style={AppStyle.StyleVoucherCGV.text6}>{amount}</Text>
                                    <TouchableOpacity onPress={() => UP(props.myListProduct)}>
                                        <Image
                                            style={{ width: 32, height: 32 }}
                                            source={require('../../img/vinh3.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={{ flexDirection: 'row', marginLeft: 70 }}>
                                    <TouchableOpacity onPress={() => UpAfter(props.myListProduct)}>
                                        <Image
                                            style={{ width: 32, height: 32 }}
                                            source={require('../../img/vinh3.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>


    )
}
export default ListProduct;