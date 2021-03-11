import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
import LinearGradient from 'react-native-linear-gradient';
const ChuaSuDung = () => {
    return (

        <ScrollView style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 12 }}>
            <TouchableOpacity style={AppStyle.StyleMain.DichVu} >
                                        <View style={AppStyle.StyleMain.DichVu_Top}>
                                            <View style={AppStyle.StyleMain.DichVu_Left}>
                                            <Image
                                                    style={{ width: "100%", height: '100%' }}
                                                    source={require('../../img/Rectangle07.png')}
                                                />
                                            </View>
                                            <View style={AppStyle.StyleMain.DichVu_Right}>
                                                <View style={AppStyle.StyleMain.DichVu_RightItem}>
                                                <Image
                                                        style={{ width: "100%", height: '95%' ,  borderRadius: 8}}
                                                        source={require('../../img/Rectangle08.png')}
                                                    />
                                                </View>
                                                <View style={AppStyle.StyleMain.DichVu_RightItem}>
                                                <Image
                                                            style={{ width: "100%", height: '95%' , borderRadius: 8}}
                                                            source={require('../../img/Rectangle09.png')}
                                                        />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                                        <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                                        <View style={AppStyle.StyleMain.DichVu_Bottom}>
                                            <View style={[AppStyle.StyleMain.DichVu_Bottom_Top]}>
                                                    <Image
                                                    style={{ width: 36, height: 36 }}
                                                    source={require('../../img/cgv.png')}
                                                />
                                                <View style={{ width: '80%', marginLeft: 10 }}>
                                                    <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}>Voucher Manwah giảm 10% </Text>
                                                    <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}>K-Pub - Tầng 4 Lê Văn Lương</Text>
                                                </View>
                                            </View>
                                            <View style={{ height: 1, borderColor: 'gba(0, 0, 0, 0.3)', borderWidth: 1, borderStyle: 'dashed' }}></View>
                                            <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                                                <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
                                                    <Text style={{ marginLeft: 5, color: 'white', fontSize: 17, fontWeight: '700' }}>600.000 đ</Text>
                                                    <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 10 }}>700.000 đ</Text>
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
            {/* Khối vẫn còn hạn sử dụng */}
            <TouchableOpacity style={[AppStyle.StyleMain.DichVu, { height: 230 }]}>
                <View style={AppStyle.StyleMain.DichVu_Top}>
                    <View style={AppStyle.StyleMain.DichVu_Left}>
                        <Image
                            style={{ width: "100%", height: '100%' }}
                            source={require('../../img/Rectangle07.png')}
                        />
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Right}>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../../img/Rectangle08.png')}
                            />
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../../img/Rectangle09.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                <View style={AppStyle.StyleMain.DichVu_Bottom}>
                    <View style={[AppStyle.StyleMain.DichVu_Bottom_Top, { marginBottom: 18 }]}>
                        <Image
                            style={{ width: 36, height: 36 }}
                            source={require('../../img/cgv.png')}
                        />
                        <View style={{ width: '80%', marginLeft: 10 }}>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}> Voucher Manwah giảm 10%</Text>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> K-Pub - Tầng 4 Lê Văn Lương</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, borderColor: 'gba(0, 0, 0, 0.3)', borderWidth: 1, borderStyle: 'dashed' }}></View>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
                            <Text style={{ marginLeft: 10, color: 'white', fontSize: 17, fontWeight: '700' }}>280.000 đ</Text>
                            <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 10 }}>300.000 đ</Text>
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomRight}>
                            <Text style={{ marginRight: 5, color: 'white', fontSize: 13, fontWeight: '400' }}><Image
                                style={{ width: 18, height: 18 }}
                                source={require('../../img/Iconly-Light-Location2.png')}
                            /> 2,5 km</Text>
                        </View>
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>Hạn dùng : 30/12/2020</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {/* Bắt dau View het han su dung */}
            <View style={{ position: 'relative' }}>
                <TouchableOpacity style={[AppStyle.StyleMain.DichVu, { opacity: 0.5, height: 230 }]}>
                    <View style={AppStyle.StyleMain.DichVu_Top}>
                        <View style={AppStyle.StyleMain.DichVu_Left}>
                            <Image
                                style={{ width: "100%", height: '100%' }}
                                source={require('../../img/07.png')}
                            />
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_Right}>
                            <View style={AppStyle.StyleMain.DichVu_RightItem}>
                                <Image
                                    style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                    source={require('../../img/7.1.png')}
                                />
                            </View>
                            <View style={AppStyle.StyleMain.DichVu_RightItem}>
                                <Image
                                    style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                    source={require('../../img/7.2.png')}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                    <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                    <View style={AppStyle.StyleMain.DichVu_Bottom}>
                        <View style={[AppStyle.StyleMain.DichVu_Bottom_Top, { marginBottom: 18 }]}>
                            <Image
                                style={{ width: 36, height: 36 }}
                                source={require('../../img/7.png')}
                            />
                            <View style={{ width: '80%', marginLeft: 10 }}>
                                <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}>Voucher Truly Việt giảm 16%</Text>
                                <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> Khám phá ngay ẩm thực Nam Bộ tại Truly Việt</Text>
                            </View>
                        </View>
                        <View style={{ height: 0.5, borderColor: 'gba(0, 0, 0, 0.3)', borderWidth: 1, borderStyle: 'dashed' }}></View>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                            <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
                                <Text style={{ marginLeft: 10, color: 'white', fontSize: 17, fontWeight: '700' }}>169.000 đ</Text>
                                <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 10 }}>200.000 đ</Text>
                            </View>
                            <View style={AppStyle.StyleMain.DichVu_Bottom_BottomRight}>
                                <Text style={{ marginRight: 5, color: 'white', fontSize: 13, fontWeight: '400' }}><Image
                                    style={{ width: 18, height: 18 }}
                                    source={require('../../img/Iconly-Light-Location2.png')}
                                /> 2,5 km</Text>
                            </View>
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>Hạn dùng : 30/12/2020</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Image style={{ width: 110, height: 60, position: 'absolute', left: 12, bottom: 2, zIndex: 99 }} source={require('../../img/Dahethan.png')} />
            </View>

            {/* Khối vẫn còn hạn sử dụng */}
            <TouchableOpacity style={[AppStyle.StyleMain.DichVu, { height: 235 }]}>
                <View style={AppStyle.StyleMain.DichVu_Top}>
                    <View style={AppStyle.StyleMain.DichVu_Left}>
                        <Image
                            style={{ width: "100%", height: '100%' }}
                            source={require('../../img/08.png')}
                        />
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Right}>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../../img/8.1.png')}
                            />
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../../img/8.2.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                <View style={AppStyle.StyleMain.DichVu_Bottom}>
                    <View style={[AppStyle.StyleMain.DichVu_Bottom_Top, { marginBottom: 18 }]}>
                        <Image
                            style={{ width: 36, height: 36 }}
                            source={require('../../img/8.png')}
                        />
                        <View style={{ width: '80%', marginLeft: 10 }}>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}> Voucher Sushi Kei giảm 12% </Text>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> Ăn Sushi thả ga - Chẳng lo về giá</Text>
                        </View>
                    </View>
                    <View style={{ height: 0.4, borderColor: 'gba(0, 0, 0, 0.3)', borderWidth: 1, borderStyle: 'dashed' }}></View>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
                            <Text style={{ marginLeft: 10, color: 'white', fontSize: 17, fontWeight: '700' }}>265.000 đ</Text>
                            <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 10 }}>300.000 đ</Text>
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomRight}>
                            <Text style={{ marginRight: 5, color: 'white', fontSize: 13, fontWeight: '400' }}><Image
                                style={{ width: 18, height: 18 }}
                                source={require('../../img/Iconly-Light-Location2.png')}
                            /> 2,5 km</Text>
                        </View>
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>Hạn dùng : 30/12/2021</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={AppStyle.StyleMain.DichVu}>
                <View style={AppStyle.StyleMain.DichVu_Top}>
                    <View style={AppStyle.StyleMain.DichVu_Left}>
                        <Image
                            style={{ width: "100%", height: '100%' }}
                            source={require('../../img/09.png')}
                        />
                    </View>
                    <View style={AppStyle.StyleMain.DichVu_Right}>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../../img/9.1.png')}
                            />
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_RightItem}>
                            <Image
                                style={{ width: "100%", height: '95%', borderRadius: 8 }}
                                source={require('../../img/9.2.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 30, zIndex: 99 }} />
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 30, zIndex: 99 }} />
                <View style={AppStyle.StyleMain.DichVu_Bottom}>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Top}>
                        <Image
                            style={{ width: 36, height: 36 }}
                            source={require('../../img/9.png')}
                        />
                        <View style={{ width: '80%', marginLeft: 10 }}>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}> Voucher Manwah giảm 10%</Text>
                            <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> K-Pub - Tầng 4 Lê Văn Lương</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, borderColor: 'gba(0, 0, 0, 0.3)', borderWidth: 1, borderStyle: 'dashed' }}></View>
                    <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
                            <Text style={{ marginLeft: 5, color: 'white', fontSize: 17, fontWeight: '700' }}>280.000 đ</Text>
                            <Text style={{ color: '#9B9EA3', fontSize: 15, fontWeight: '400', textDecorationLine: 'line-through', marginLeft: 10 }}>300.000 đ</Text>
                        </View>
                        <View style={AppStyle.StyleMain.DichVu_Bottom_BottomRight}>
                            <Text style={{ marginRight: 5, color: 'white', fontSize: 13, fontWeight: '400' }}><Image
                                style={{ width: 18, height: 18 }}
                                source={require('../../img/Iconly-Light-Location2.png')} /> 3,5 km</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        </ScrollView >
    );
}
export default ChuaSuDung;