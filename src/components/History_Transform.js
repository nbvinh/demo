
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, ScrollView, Modal } from 'react-native';
import AppStyle from "../theme";
import { Calendar } from 'react-native-calendars'; // 1.5.3
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

import CalendarPicker from 'react-native-calendar-picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const History_Transform = ({ navigation }) => {

    const [isShowCalendar, setIsShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const _onPress = () => {
        setIsShowCalendar(true)
        console.log('da kick');
    }
    const onDatechange = (date) => {
        setSelectedDate(date)
    }
    const date = new Date()
    const startDate = selectedDate ? selectedDate.toString() :'';
    const mindate = moment(startDate).format('DD-MM-YYYY');
    const display = moment(date).format('DD-MM-YYYY');
    const min =startDate?mindate :display.toString();
    const confirm = useSelector(state => state.confirm)
    const choosevoucher = useSelector(state => state.choosevoucher)
    const arrPromotion = useSelector(state => state.arrPromotion)
    const priceCGV = useSelector(state => state.priceCGV)
    const kingbread = useSelector(state => state.kingbread)
    const sum = useSelector(state => state.sum)
    const bills = useSelector(state => state.bills)
    const billsCGV = useSelector(state => state.billsCGV)
    console.log('bill', bills)
    const Cancel =()=>{
        setIsShowCalendar(false);
        setSelectedDate();
    }
    const Done =()=>{
        setIsShowCalendar(false);
        setSelectedDate(startDate)
    }
    // const storeData = async () => {
    //     try {
    //         await AsyncStorage.setItem('@storage_Key', JSON.stringify(bills))
    //         console.log("Save ok")
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // const [test,setTest]= useState()
    // const getData = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('key1')
    //         console.log('fff',jsonValue)
    //         setTest(jsonValue)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // useEffect(()=>{
    //     getData()
    // })
    // console.log(test)
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
                    flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', alignItem: 'center',
                    justifyContent: 'center', marginHorizontal: 10,
                    marginTop: 22
                }}>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <CalendarPicker
                            onDateChange={onDatechange}
                            format="YYYY-MM-DD"
                            todayBackgroundColor="red" selectedDayColor="#7300e6"
                            selectedDayTextColor="#FFFFFF"
                        />


                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', height: 40, paddingHorizontal: 15, borderTopWidth: 1, borderStyle: 'dotted', paddingVertical: 10 }}>
                                <TouchableOpacity onPress={Cancel}>
                                    <Text style={{ color: '#9B9EA3', fontSize: 14, fontWeight: '500' }}>Xóa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={Done}>
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
                    <Text style={AppStyle.Style_History_Tranform.text}>{min}</Text>
                </View>
                <ScrollView style={AppStyle.Style_History_Tranform.content}>
                    {confirm ?
                        <View>
                            {bills.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id.toString()} onPress={() => navigation.navigate('Chitiet_giaodich',
                                        { id: item.id }
                                    )} >
                                        <View style={AppStyle.Style_History_Tranform.item}>
                                            <Text style={AppStyle.Style_History_Tranform.content_text}>Mã giao dịch: DH65741671616 </Text>
                                            <View style={AppStyle.Style_History_Tranform.cost}>
                                                <Text style={AppStyle.Style_History_Tranform.content_cost}>{item.sum}.000 đ</Text>
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
                                )
                            })}
                            {billsCGV.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id.toString()} onPress={() => navigation.navigate('Giao_Dich_Thanh_Cong',
                                        { id: item.id }
                                    )} >
                                        <View style={AppStyle.Style_History_Tranform.item}>
                                            <Text style={AppStyle.Style_History_Tranform.content_text}>Mã giao dịch: DH65741671616 </Text>
                                            <View style={AppStyle.Style_History_Tranform.cost}>
                                                <Text style={AppStyle.Style_History_Tranform.content_cost}>{item.priceCGV}.000 đ</Text>
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
                                )
                            })}
                        </View>
                        :
                        null
                    }

                </ScrollView>
                {/* <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'red' }} onPress={() => storeData()}></TouchableOpacity>
                <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'yellow' }} onPress={() => getData ()}></TouchableOpacity> */}

            </View>
        </View>
    )
}

export default History_Transform;