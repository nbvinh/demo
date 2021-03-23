import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from "react-native";
import AppStyle from "../../theme";
import { useDispatch, useSelector } from "react-redux";

const DataVoucher = (props) => {
    const DuLieuVoucher = props.DuLieuVoucher
    const ListDuLieuVoucher = props.ListDuLieuVoucher
    return (
        // <FlatList
        //     data={DuLieuVoucher}
        //     renderItem={({ item }) => {
        //         return (
        // <TouchableOpacity key={item.id.toString()} style={AppStyle.StyleMain.DichVu} onPress={() => ListDuLieuVoucher(item)}>
        //     <View style={AppStyle.StyleMain.DichVu_Top}>
        //         <View style={AppStyle.StyleMain.DichVu_Left}>
        //             <Image
        //                 style={{ width: "100%", height: '100%' }} resizeMode='cover'
        //                 source={{ uri: 'http://175.41.184.177:6063/image/' + item.showImage }}
        //             />
        //         </View>
        //         <View style={AppStyle.StyleMain.DichVu_Right}>
        //             <View style={AppStyle.StyleMain.DichVu_RightItem}>
        //                 <Image
        //                     style={{ width: "100%", height: '95%', borderRadius: 8 }}
        //                     source={{ uri: 'http://175.41.184.177:6063/image/' + item.images[0] }}
        //                 />
        //             </View>
        //             <View style={AppStyle.StyleMain.DichVu_RightItem}>
        //                 <Image
        //                     style={{ width: "100%", height: '95%', borderRadius: 8 }}
        //                     source={{ uri: 'http://175.41.184.177:6063/image/' + item.images[1] }}
        //                 />
        //             </View>
        //         </View>
        //     </View>
        //     <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
        //     <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
        //     <View style={AppStyle.StyleMain.DichVu_Bottom}>
        //         <View style={[AppStyle.StyleMain.DichVu_Bottom_Top]}>
        //             <Image
        //                 style={{ width: 36, height: 36, borderRadius: 50 }}
        //                 source={{ uri: 'http://175.41.184.177:6063/image/' + item.shop.avatar }}
        //             />
        //             <View style={{ width: '80%', marginLeft: 10 }}>
        //                 <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}>{item.name} </Text>
        //                 <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> {item.shop.address}</Text>
        //             </View>
        //         </View>
        //         <View style={{ height: 1, borderColor: 'gba(0, 0, 0, 0.3)', borderWidth: 1, borderStyle: 'dashed' }}></View>
        //         <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
        //             <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
        //                 <Text style={{ marginLeft: 5, color: 'white', fontSize: 17, fontWeight: '700' }}>{item.price}.000 đ</Text>
        //                 <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 10 }}>{item.priceSale}.000 đ</Text>
        //             </View>
        //             <View style={AppStyle.StyleMain.DichVu_Bottom_BottomRight}>
        //                 <Text style={{ marginRight: 5, color: 'white', fontSize: 13, fontWeight: '400' }}><Image
        //                     style={{ width: 18, height: 18 }}
        //                     source={require('../../img/Iconly-Light-Location2.png')}
        //                 /> 2,5 km</Text>
        //             </View>
        //         </View>
        //     </View>
        // </TouchableOpacity>
        //         );
        //     }}
        //     keyExtractor={item => item.id.toString()}
        // />
        DuLieuVoucher && DuLieuVoucher.map((item) => {
            return (
                <TouchableOpacity key={item.id.toString()} style={AppStyle.StyleMain.DichVu} onPress={() => ListDuLieuVoucher(item)}>
                    <View style={AppStyle.StyleMain.DichVu_Top}>
                        <View style={AppStyle.StyleMain.DichVu_Left}>
                            <Image
                                style={{ width: "100%", height: '100%' }} resizeMode='cover'
                                source={{ uri: 'http://175.41.184.177:6063/image/' + item.showImage }}
                            />
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_Right}>
                            <View style={AppStyle.StyleMain.DichVu_RightItem}>
                                <Image
                                    style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                    source={{ uri: 'http://175.41.184.177:6063/image/' + item.images[0] }}
                                />
                            </View>
                            <View style={AppStyle.StyleMain.DichVu_RightItem}>
                                <Image
                                    style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                    source={{ uri: 'http://175.41.184.177:6063/image/' + item.images[1] }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                    <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                    <View style={AppStyle.StyleMain.DichVu_Bottom}>
                        <View style={[AppStyle.StyleMain.DichVu_Bottom_Top]}>
                            <Image
                                style={{ width: 36, height: 36, borderRadius: 50 }}
                                source={{ uri: 'http://175.41.184.177:6063/image/' + item.shop.avatar }}
                            />
                            <View style={{ width: '80%', marginLeft: 10 }}>
                                <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}>{item.name} </Text>
                                <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> {item.shop.address}</Text>
                            </View>
                        </View>
                        <View style={{ height: 1, borderColor: 'gba(0, 0, 0, 0.3)', borderWidth: 1, borderStyle: 'dashed' }}></View>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                            <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
                                <Text style={{ marginLeft: 5, color: 'white', fontSize: 17, fontWeight: '700' }}>{item.price}.000 đ</Text>
                                <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 10 }}>{item.priceSale}.000 đ</Text>
                            </View>
                            <View style={AppStyle.StyleMain.DichVu_Bottom_BottomRight}>
                                <Text style={{ marginRight: 5, color: 'white', fontSize: 13, fontWeight: '400' }}><Image
                                    style={{ width: 18, height: 18 }}
                                    source={require('../../img/Iconly-Light-Location2.png')}
                                /> 2,5 km</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
    )
}
export default DataVoucher;