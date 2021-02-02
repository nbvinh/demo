import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";

// const images =[
//     '../../img/vinh11.png',
//     '../../img/vinh12.png',
//     '../../img/vinh13.png'
// ]
const images = [
    'https://khoahocphattrien.vn/Images/Uploaded/Share/2019/03/13/dGhpZW5uaGllbg.jpg',
    'https://baoquocte.vn/stores/news_dataimages/khanhchi/062017/06/07/074726_World-Environment-Day-1.jpg',
    'https://bizweb.dktcdn.net/thumb/grande/100/119/128/files/tranhphongcanh-35.jpg?v=1484234572430',
    'https://thegioitranhsondau.com/upload/sanpham/large/tranh-ve-ngoi-nha-voi-khung-canh-thien-nhien-mua-xuan.jpg',
    // 'https://i.pinimg.com/originals/a8/45/76/a84576a04c1874304735604d9f47d5a4.jpg'
]

const SlideImg = () => {
    const [state , setState] = useState(false) 
    return (
        <View style={AppStyle.StyleVoucherCGV.silde}>
            <View style={AppStyle.StyleVoucherCGV.silde1}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{width:128, height:70}}
                >
                    {images.map((item, index) => (
                        <Image
                            key={index.toString()}
                            source={{ uri: item }}
                            style={[AppStyle.StyleVoucherCGV.img2,{resizeMode:'cover'}]}

                        />
                    ))}
                </ScrollView>
                {/* <Image
                    style={AppStyle.StyleVoucherCGV.img2}
                    source={require('../../img/vinh11.png')}
                />
                <Image
                    style={AppStyle.StyleVoucherCGV.img2}
                    source={require('../../img/vinh12.png')}
                />
                <Image
                    style={AppStyle.StyleVoucherCGV.img2}
                    source={require('../../img/vinh13.png')}
                /> */}
            </View>
            <View style={AppStyle.StyleVoucherCGV.silde2}>
                {
                    images.map((i,k)=>(
                        <View key={k} style={k==state ? AppStyle.StyleVoucherCGV.text12 : AppStyle.StyleVoucherCGV.text12}></View>
                    ))
                }
            </View>
        </View>
    )
}
export default SlideImg;