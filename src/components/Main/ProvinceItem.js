import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../theme";

const ProvinceItem = (props) => {
    const dispatch = useDispatch();
    const province = useSelector( state=> state.province)
    const Chooseprovince =()=>{
        dispatch({type:'MODALPROVINCE'})
        dispatch({type:'CHOOSEDATA1',provinceId:provinceId})
    }
    const { name,provinceId,isChooseProvince } = props.myData1;
    return (
        <View>
            <TouchableOpacity style={{ borderRadius: 8, borderWidth: 0.5, marginBottom: 5, height: 40,borderColor:'#FFFFFF' }} onPress={()=>Chooseprovince()}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: '400', textAlign: 'center' }}>{name}</Text>

            </TouchableOpacity>
        </View>

    )
}
export default ProvinceItem;