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
    'https://www.brandsvietnam.com/upload/news/480px/2018/15391_CGV.jpg',
    'https://i.vietgiaitri.com/2020/5/10/cgv-mo-lai-cac-cum-rap-e22-4920532.jpg',
    'https://lh3.googleusercontent.com/proxy/K2uDggTd7Yu6ZlqnEjMg7xyg5CzKwcTgtEIMB8X2o6CdWVDIlFvM5DHgSAYwksvOj97wsxTBaIywrbkrCgYlY_vYT0b5XEY7Ar7ygHwthBE-Goa2sXZmyBTku_dBA8s',
    'https://bmtcogi.com/wp-content/uploads/2019/10/cgv-bmttong-hop-rap-chieu-phim-hang-dau-tai-buon-ma-thuot-ma-ban-nen-xem-bmtcogi.com-1.jpg',
    'https://media.ex-cdn.com/EXP/media.taichinhdoanhnghiep.net.vn/files/thanhtan/2020/03/20/a-2116.jpg'
]

const SlideImg = () => {
    const [state , setState] = useState(false) 
    return (
        <View style={AppStyle.StyleVoucherCGV.silde}>
            <View style={AppStyle.StyleVoucherCGV.silde1}>
                <ScrollView
                    pagingEnabled ={true}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // style={{width:'100%', height:70}}
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