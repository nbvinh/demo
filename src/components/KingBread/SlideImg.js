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
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/23/0/FNmag_King_Cake-image_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371589311998.jpeg',
    'https://media.foody.vn/res/g28/272135/prof/s650x400/foody-mobile-2-jpg-174-636083195927594210.jpg',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5071873.jpg&q=85',
    'https://images.foody.vn/res/g104/1038968/prof/s576x330/foody-upload-api-foody-mobile-banhmi-200728161441.jpg',
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