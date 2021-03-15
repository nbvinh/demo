import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Animated, Image, Dimensions, FlatList } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";

const { width, height } = Dimensions.get("screen")
const IMAGE_SIZE = (width - 35) / 3
const SPACING = 2.5
const data = [
    { id: 0, images: 'https://www.brandsvietnam.com/upload/news/480px/2018/15391_CGV.jpg', text: '' },
    { id: 1, images: 'https://i.vietgiaitri.com/2020/5/10/cgv-mo-lai-cac-cum-rap-e22-4920532.jpg', text: '' },
    { id: 2, images: 'https://cdn.vietnambiz.vn/2020/2/14/ticketview-15816704441281296608294.jpg', text: '' },
    { id: 3, images: 'https://bmtcogi.com/wp-content/uploads/2019/10/cgv-bmttong-hop-rap-chieu-phim-hang-dau-tai-buon-ma-thuot-ma-ban-nen-xem-bmtcogi.com-1.jpg', text: '' },
    { id: 4, images: 'https://media.ex-cdn.com/EXP/media.taichinhdoanhnghiep.net.vn/files/thanhtan/2020/03/20/a-2116.jpg', text: '' },
];
const SlideImg = () => {
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
                offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2 + IMAGE_SIZE +35,
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
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
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
                                    source={{ uri: item.images }}
                                    style={{ height: 160, borderRadius: 8, marginHorizontal: 10 }}
                                />

                            </View>
                        )
                    }}
                />
                <FlatList
                    ref={thumbref}
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    style={{ height: 80, marginHorizontal: 10 }}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
                                <Image
                                    source={{ uri: item.images }}
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
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                width: 8,
                                height: 8,
                                borderRadius:8,
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