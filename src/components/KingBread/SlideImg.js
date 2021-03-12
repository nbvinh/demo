// import React from 'react';
// import { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image, ScrollView } from "react-native";
// import AppStyle from "../../theme";
// import { useSelector, useDispatch } from "react-redux";

// const SlideImg = () => {
//     const imagesbanhmi = useSelector(state => state.imagesbanhmi)
//     const [state, setState] = useState(false)
//     return (
//         <View style={AppStyle.StyleVoucherCGV.silde}>
//             <View style={AppStyle.StyleVoucherCGV.silde1}>
//                 <ScrollView
//                     pagingEnabled
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                     style={{ width: 128, height: 70 }}
//                 >
//                     {imagesbanhmi && imagesbanhmi.map((item, index) => {
//                         return (
//                             <Image
//                                 key={index.toString()}
//                                 source={{ uri: 'http://175.41.184.177:6063/image/' + item }}
//                                 style={[AppStyle.StyleVoucherCGV.img2, { resizeMode: 'cover' }]}

//                             />
//                         )
//                     })}
//                 </ScrollView>
//             </View>
//             <View style={AppStyle.StyleVoucherCGV.silde2}>
//                 {
//                     imagesbanhmi && imagesbanhmi.map((i, k) => {
//                         return (
//                             <View key={k} style={k == state ? AppStyle.StyleVoucherCGV.text12 : AppStyle.StyleVoucherCGV.text12}></View>
//                         )
//                     })
//                 }
//             </View>
//         </View>
//     )
// }
// export default SlideImg;

import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Animated, Image, Dimensions, FlatList } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
import { useSelector, useDispatch } from "react-redux";

const { width, height } = Dimensions.get("screen")
const IMAGE_SIZE = (width - 35) / 3
const SPACING = 2.5
const data = [
    { id: 0, images: 'https://www.brandsvietnam.com/upload/news/480px/2018/15391_CGV.jpg' },
    { id: 1, images: 'https://i.vietgiaitri.com/2020/5/10/cgv-mo-lai-cac-cum-rap-e22-4920532.jpg' },
    { id: 2, images: 'https://cdn.vietnambiz.vn/2020/2/14/ticketview-15816704441281296608294.jpg' },
    { id: 3, images: 'https://bmtcogi.com/wp-content/uploads/2019/10/cgv-bmttong-hop-rap-chieu-phim-hang-dau-tai-buon-ma-thuot-ma-ban-nen-xem-bmtcogi.com-1.jpg' },
    { id: 4, images: 'https://media.ex-cdn.com/EXP/media.taichinhdoanhnghiep.net.vn/files/thanhtan/2020/03/20/a-2116.jpg' },
];
const images1 = [
    'https://www.brandsvietnam.com/upload/news/480px/2018/15391_CGV.jpg',
    'https://i.vietgiaitri.com/2020/5/10/cgv-mo-lai-cac-cum-rap-e22-4920532.jpg',
    'https://cdn.vietnambiz.vn/2020/2/14/ticketview-15816704441281296608294.jpg',
    'https://bmtcogi.com/wp-content/uploads/2019/10/cgv-bmttong-hop-rap-chieu-phim-hang-dau-tai-buon-ma-thuot-ma-ban-nen-xem-bmtcogi.com-1.jpg',
    'https://media.ex-cdn.com/EXP/media.taichinhdoanhnghiep.net.vn/files/thanhtan/2020/03/20/a-2116.jpg'
]
const SlideImg = () => {
    const imagesbanhmi = useSelector(state => state.imagesbanhmi)
    const topRef = React.useRef();
    const thumbref = React.useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollToActiveIndex = (index) => {
        setActiveIndex(index)
        topRef?.current?.scrollToOffset({
            offset: index * width,
            animated: true
        })
        if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 3) {
            thumbref?.current?.scrollToOffset({
                offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2 + IMAGE_SIZE + 35,
                animated: true
            })
        }
        else {
            thumbref?.current?.scrollToOffset({
                offset: 0,
                animated: true
            })
        }
    }
    return (
        <View>
            <View>
                <FlatList
                    ref={topRef}
                    data={imagesbanhmi}
                    keyExtractor={(index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled
                    onMomentumScrollEnd={ev => {
                        scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ width, height: 160, marginVertical: 10 }}>
                                <Image
                                    source={{ uri: 'http://175.41.184.177:6063/image/' + item }}
                                    style={{ height: 160, borderRadius: 8, marginHorizontal: 10 }}
                                />

                            </View>
                        )
                    }}
                />
                <FlatList
                    ref={thumbref}
                    data={imagesbanhmi}
                    keyExtractor={(index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    style={{ height: 80, marginHorizontal: 10 }}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
                                <Image
                                    source={{ uri: 'http://175.41.184.177:6063/image/' + item }}
                                    style={{
                                        width: IMAGE_SIZE,
                                        height: 70,
                                        borderRadius: 8,
                                        marginRight: SPACING,
                                        marginLeft: 2.5,
                                        borderWidth: 2,
                                        borderColor: activeIndex === index ? 'white' : null
                                    }}
                                />

                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <View style={AppStyle.StyleVoucherCGV.silde2}>
                <FlatList
                    data={imagesbanhmi}
                    keyExtractor={(index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                width: 8,
                                height: 8,
                                borderRadius: 8,
                                backgroundColor: activeIndex === index ? 'white' : 'rgba(255, 255, 255, 0.3)',
                                marginRight: 10
                            }}>
                                <Text>{item.text}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
export default SlideImg;