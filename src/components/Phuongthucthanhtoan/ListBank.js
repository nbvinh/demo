import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../theme";

const ListBank = (props) => {
    const dispatch = useDispatch();
    const { id, isChecked, img, text } = props.myData;
    const data = useSelector(state => state.data);
    const lienket = useSelector(state => state.lienket);
    const onCheck = (choosediem) => {
        dispatch({ type: 'ISCHECK', id: id });
        dispatch({ type: 'ISSHOW' });
        dispatch({ type: 'TONGDIEM' });
        dispatch({ type: 'LIENKET' });
        if (id === 1) {
            choosediem.tongdiem = true
        }
        else {
            choosediem.tongdiem = false
        }
    }
    const stylepoint = lienket ? {color: 'white', fontSize: 15, fontWeight: '400', marginRight: 100} : {color: 'white', fontSize: 15, fontWeight: '400', marginRight: 100, marginBottom: 40}
    // const point =()=>{
    //     if(data)
    // }
    return (
        <View>
            <View style={AppStyle.StylePhuongthucthanhtoan.content3}>
                <TouchableOpacity onPress={() => onCheck(props.myData)}>
                    {isChecked ?
                        <View>
                            <Image source={require('../../img/vinh23.png')}
                                style={{ width: 20, height: 20, marginRight: 10, marginTop: 5 }}
                            />
                            <Image source={require('../../img/vinh24.png')}
                                style={{ width: 12, height: 12, position: 'absolute', top: 9, left: 4 }}
                            />

                        </View>
                        :
                        <Image source={require('../../img/vinh23.png')}
                            style={{ width: 20, height: 20, marginRight: 10, marginTop: 5 }}
                        />
                    }
                </TouchableOpacity>
                <Image
                    style={{ height: 32, width: 32, borderRadius: 5, marginRight: 10 }}
                    source={{ uri: img }}
                />
                <View>
                    <Text style={stylepoint}>{text}</Text>

                </View>
            </View>
        </View>

    )
}
export default ListBank;