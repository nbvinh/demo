import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, ScrollView } from "react-native";
import AppStyle from "../../theme";
import { useSelector, useDispatch } from "react-redux";

const SlideImg = () => {
    const imagesbanhmi = useSelector(state => state.imagesbanhmi)
    const [state, setState] = useState(false)
    return (
        <View style={AppStyle.StyleVoucherCGV.silde}>
            <View style={AppStyle.StyleVoucherCGV.silde1}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ width: 128, height: 70 }}
                >
                    {imagesbanhmi && imagesbanhmi.map((item, index) => {
                        return (
                            <Image
                                key={index.toString()}
                                source={{ uri: 'http://175.41.184.177:6063/image/' + item }}
                                style={[AppStyle.StyleVoucherCGV.img2, { resizeMode: 'cover' }]}

                            />
                        )
                    })}
                </ScrollView>
            </View>
            <View style={AppStyle.StyleVoucherCGV.silde2}>
                {
                    imagesbanhmi && imagesbanhmi.map((i, k) => {
                        return (
                            <View key={k} style={k == state ? AppStyle.StyleVoucherCGV.text12 : AppStyle.StyleVoucherCGV.text12}></View>
                        )
                    })
                }
            </View>
        </View>
    )
}
export default SlideImg;