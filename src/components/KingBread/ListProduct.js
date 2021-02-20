import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, ScrollView } from "react-native";
import AppStyle from "../../theme";
import { useSelector, useDispatch } from "react-redux";

const ListProduct = (props) => {
    const dispatch = useDispatch();
    const UP = (choosediem) => {
        if (id === choosediem.id) {
            choosediem.quantity += 1
        }
    }
    const DOWN = (choosediem) => {
        if (id === choosediem.id) {
            if(quantity>0){
                choosediem.quantity -= 1

            }
        }
    }
    const { name, avatar, price, quantity, id } = props.myListProduct
    return (
        <View style={{ backgroundColor: '#272738', marginTop: 10, flexDirection: 'row', borderRadius: 8, width: '100%', flex: 1, alignItems: 'center' }}>
            <Image
                style={{ width: 82, height: 82, marginLeft: 10, marginVertical: 10 }}
                source={{ uri: 'http://175.41.184.177:6063/image/' + avatar }}
            />
            <View style={{ marginTop: 10, marginVertical: 10, marginLeft: 10 }}>
                <Text style={{ fontSize: 15, color: '#FFFFFF', fontWeight: '400', width: '80%' }}>{name}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: '500' }}>{price}.000 đ</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 70 }}>
                        <TouchableOpacity onPress={() => DOWN(props.myListProduct)}>
                            <Image
                                style={{ width: 32, height: 32 }}
                                source={require('../../img/vinh9.png')}
                            />
                        </TouchableOpacity >
                        <Text style={AppStyle.StyleVoucherCGV.text6}>{quantity}</Text>
                        <TouchableOpacity onPress={() => UP(props.myListProduct)}>
                            <Image
                                style={{ width: 32, height: 32 }}
                                source={require('../../img/vinh3.png')}
                            />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>


    )
}
export default ListProduct;