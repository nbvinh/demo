import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";
import AppStyle from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import ProvinceItem from "./ProvinceItem";

const Province = (props) => {
    const dispatch = useDispatch();
    const data1 = useSelector(state => state.data1)
    const province = useSelector( state=> state.province)
    const setTest = props.setTest
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={province}
        >
            <View style={AppStyle.StyleGioHang.modal1}>
                <TouchableOpacity onPress={() => {
                    setTest(true)
                    dispatch({type:'MODALPROVINCE'})
                }} 
                    style={{ height: '16.5%' }}></TouchableOpacity>
                <View style={{ height: '93.5%' }}>
                    <View style={{ position: 'absolute', top: 20, right: 10, width: 100, backgroundColor: '#272738',borderRadius:8 }}>
                        <FlatList
                            data={data1}
                            maxHeight={200}
                            renderItem={({ item }) => <ProvinceItem myData1={item} />}
                            keyExtractor={item => item?.provinceId?.toString()}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default Province