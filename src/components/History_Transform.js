
import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, ScrollView, Modal } from 'react-native';
import AppStyle from "../theme";
import { Calendar } from 'react-native-calendars'; // 1.5.3
import { useDispatch, useSelector } from "react-redux";
const History_Transform = ({ navigation }) => {

    const [isShowCalendar, setIsShowCalendar] = useState(false);

    const _onPress = () => {
        setIsShowCalendar(true)
        console.log('da kick');
    }
    const confirm = useSelector(state => state.confirm)
    const choosevoucher = useSelector(state => state.choosevoucher)
    const arrPromotion = useSelector(state => state.arrPromotion)
    const priceCGV = useSelector(state => state.priceCGV)
    const kingbread = useSelector(state => state.kingbread)
    const sum = useSelector(state => state.sum)
    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isShowCalendar}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{
                    flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', alignItem: 'center',
                    justifyContent: 'center', marginHorizontal: 10,
                    marginTop: 22
                }}>
                    <View>
                        <Calendar
                            theme={{
                                textSectionTitleDisabledColor: '#d9e1e8'
                            }}
                        />


                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', height: 40, paddingHorizontal: 15, borderTopWidth: 1, borderStyle: 'dotted', paddingVertical: 10 }}>
                                <TouchableOpacity onPress={() => {
                                    setIsShowCalendar(false)
                                }}>
                                    <Text style={{ color: '#9B9EA3', fontSize: 14, fontWeight: '500' }}>Xóa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ color: '#8B3BFF', fontSize: 14, fontWeight: '500' }}>Áp dụng</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
            {/*<Calendar
            theme={{
            textSectionTitleDisabledColor: '#d9e1e8'
            }}
        
        /> */}
            <View style={AppStyle.Style_History_Tranform.container}>
                <View style={AppStyle.Style_History_Tranform.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image
                            style={AppStyle.Style_History_Tranform.Image}
                            source={require('../img/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.Style_History_Tranform.header_title}>Lịch sử giao dịch </Text>
                    <TouchableOpacity onPress={_onPress} style={{ zIndex: 1 }}>
                        <Image
                            style={AppStyle.Style_History_Tranform.Image1}
                            source={require('../img/Calendar.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={AppStyle.Style_History_Tranform.calendar}>
                    <Text style={AppStyle.Style_History_Tranform.text}>Tháng 11/2020</Text>
                </View>
                <ScrollView style={AppStyle.Style_History_Tranform.content}>
                    {confirm ?
                        <View>

                            <TouchableOpacity onPress={() => navigation.navigate('Giao_Dich_Chua_Thanh_Toan')} >
                                <View style={AppStyle.Style_History_Tranform.item}>
                                    <Text style={AppStyle.Style_History_Tranform.content_text}>Mã giao dịch: DH65741671616 </Text>
                                    <View style={AppStyle.Style_History_Tranform.cost}>
                                        {choosevoucher ? <Text style={AppStyle.Style_History_Tranform.content_cost}>{sum}.000 đ</Text>
                                            :
                                            arrPromotion.map((item, index) => (
                                                item.isChoose ? item.dieukien ?
                                                    <Text key={index.toString()} style={AppStyle.Style_History_Tranform.content_cost}>{sum - item.Promotion}.000 đ</Text>
                                                    : <Text key={index.toString()} style={AppStyle.Style_History_Tranform.content_cost}>{sum}.000 đ</Text> : null
                                            ))}
                                        <Text></Text>

                                        <Image
                                            style={AppStyle.Style_History_Tranform.Image_right}
                                            source={require('../img/chevron_right.png')}
                                        />

                                    </View>
                                    <View style={AppStyle.Style_History_Tranform.bottom}>

                                        <Image
                                            style={AppStyle.Style_History_Tranform.ImageStatus}
                                            source={require('../img/thanhcong.png')}
                                        />

                                        <Text style={AppStyle.Style_History_Tranform.status}>Thành công</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Giao_Dich_Chua_Thanh_Toan')} >
                                <View style={AppStyle.Style_History_Tranform.item}>
                                    <Text style={AppStyle.Style_History_Tranform.content_text}>Mã giao dịch: DH65741671616 </Text>
                                    <View style={AppStyle.Style_History_Tranform.cost}>
                                        {choosevoucher ? <Text style={AppStyle.Style_History_Tranform.content_cost}>{priceCGV}.000 đ</Text>
                                            :
                                            arrPromotion.map((item, index) => (
                                                item.isChoose ? item.dieukien ?
                                                    <Text key={index.toString()} style={AppStyle.Style_History_Tranform.content_cost}>{priceCGV - item.Promotion}.000 đ</Text>
                                                    : <Text key={index.toString()} style={AppStyle.Style_History_Tranform.content_cost}>{priceCGV}.000 đ</Text> : null
                                            ))}
                                        <Text></Text>

                                        <Image
                                            style={AppStyle.Style_History_Tranform.Image_right}
                                            source={require('../img/chevron_right.png')}
                                        />

                                    </View>
                                    <View style={AppStyle.Style_History_Tranform.bottom}>

                                        <Image
                                            style={AppStyle.Style_History_Tranform.ImageStatus}
                                            source={require('../img/thanhcong.png')}
                                        />

                                        <Text style={AppStyle.Style_History_Tranform.status}>Thành công</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }
                </ScrollView>


            </View>
        </View>
    )
}

export default History_Transform;