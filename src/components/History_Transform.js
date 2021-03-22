import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, ScrollView, Modal, SafeAreaView } from 'react-native';
import AppStyle from "../theme";
import { Calendar } from 'react-native-calendars'; // 1.5.3
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const History_Transform = ({ navigation }) => {

    const [isShowCalendar, setIsShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const _onPress = () => {
        setIsShowCalendar(true)

    }
    const onDatechange = (date) => {
        setSelectedDate(date)
    }
    const date = new Date()
    const startDate = selectedDate ? selectedDate.toString() : '';
    const mindate = moment(startDate).format('M/YYYY');
    const display = moment(date).format('M/YYYY');
    const min = startDate ? mindate : display.toString();
    const confirm = useSelector(state => state.confirm)
    const choosevoucher = useSelector(state => state.choosevoucher)
    const arrPromotion = useSelector(state => state.arrPromotion)
    const priceCGV = useSelector(state => state.priceCGV)
    const kingbread = useSelector(state => state.kingbread)
    const sum = useSelector(state => state.sum)
    const bills = useSelector(state => state.bills)
    const billsCGV = useSelector(state => state.billsCGV)
    const [opac, setOpac] = useState(0.2)
    const Cancel = () => {
        setIsShowCalendar(false);
        setSelectedDate('');
    }
    const Done = () => {
        setIsShowCalendar(false);
        setSelectedDate(startDate)
    }

    // if min == item.timmer 
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
    //         const jsonValue = await AsyncStorage.getItem('key21')
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
    const customDayHeaderStylesCallback = ({ dayOfWeek, month, year }) => {
        switch (dayOfWeek) { // can also evaluate month, year
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 7:
                return {
                    textStyle: {
                        color: '#D0C9D6'
                    }
                }
            case 6: // Thursday
                return {
                    textStyle: {
                        color: '#FFA26B',
                    }
                };
        }
    }

    const customDatesStylesCallback = date => {
        switch (date.isoWeekday()) {

            case 6: // Sunday
                return {
                    textStyle: {
                        color: '#FFA26B',
                    }
                };
        }
    }
    return (
        <SafeAreaView style={AppStyle.StyleScreenXacNhanSDT.container}>
            <View style={{ flex: 1 }}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isShowCalendar}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: 13, marginTop: 70, backgroundColor: 'rgba(0,0,0,0.2)'

                    }}>
                        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 9 }}>
                            <CalendarPicker
                                onDateChange={onDatechange}
                                visible={isShowCalendar}
                                todayBackgroundColor="#EEDFF2" selectedDayColor="#7300e6"
                                selectedDayTextColor="#FFFFFF"
                                previousTitle='<'
                                nextTitle='>'
                                customDatesStyles='YYYY-MM'
                                todayTextStyle={{
                                    color: '#BE52F2',

                                }}
                                dayLabelsWrapper={{
                                    borderTopWidth: 0,
                                    borderBottomWidth: 1,
                                    borderStyle: 'dashed',
                                    borderRadius: 1,
                                    color: 'green'
                                }}
                                customDatesStyles={customDatesStylesCallback}
                                customDayHeaderStyles={customDayHeaderStylesCallback}
                                weekdays={
                                    [
                                        'Mon',
                                        'Tue',
                                        'Wed',
                                        'Thur',
                                        'Fri',
                                        'Sat',
                                        'Sun'
                                    ]}
                                nextTitleStyle={{ backgroundColor: '#FFFFFF', marginRight: 16, borderRadius: 2, elevation: 5, paddingLeft: 10, paddingRight: 10 }}
                                previousTitleStyle={{ backgroundColor: '#FFFFFF', marginLeft: 16, borderRadius: 2, elevation: 5, paddingLeft: 7, paddingRight: 10 }}
                            />


                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', height: 40, paddingHorizontal: 15, borderTopWidth: 1, borderStyle: 'dashed', paddingVertical: 10, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
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

                <View style={[AppStyle.Style_History_Tranform.container]}>
                    {/* <View style={AppStyle.Style_History_Tranform.header}>
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
                    </View> */}
                    <View style={AppStyle.StyleVoucherCGV.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Image
                                width={10} height={18}
                                source={require('../img/back.png')}
                            />
                        </TouchableOpacity>
                        <Text style={AppStyle.StyleVoucherCGV.text}>Lịch sử giao dịch</Text>
                        <TouchableOpacity onPress={_onPress} style={{ zIndex: 1 }}>
                            <Image
                                style={AppStyle.Style_History_Tranform.Image1}
                                source={require('../img/Calendar.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 11 }}>

                        <ScrollView style={AppStyle.Style_History_Tranform.content}>
                            <Text style={AppStyle.Style_History_Tranform.text}>Tháng {min}</Text>
                            {confirm ?
                                <View>

                                    {bills.map((item) => {
                                        if (item.timmer == min) {
                                            return (
                                                <View key={item.id.toString()}>
                                                    <TouchableOpacity onPress={() => {
                                                        navigation.navigate(
                                                            'Chitiet_giaodich',
                                                            { id: item.id }
                                                        )
                                                        console.log('item', item.id)
                                                    }
                                                    } >
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
                                                                <Text style={AppStyle.Style_History_Tranform.status}>{item.timmer}</Text>

                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        }
                                        // else {
                                        //     return (
                                        //       <View style={{justifyContent:'center',alignItems:'center'}}>
                                        //             <Text style={{ color: 'white',fontSize:18 }}>kINGBREAD chưa có đơn hàng nào </Text>

                                        //       </View>
                                        //     )

                                        // }



                                    })}
                                    {billsCGV.map((item) => {
                                        if (item.timmer == min) {
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

                                                    {/* //mỗi lần addbill vào giỏ hàng thì add thêm thời gian
                                            // reducer của mỗi cái nhận thêm thời gian
                                            /// selected mỉ
                                            //bắt sự kiện selected ngày giờ 
                                            /// if(selected == item.time ){

                                            } */}


                                                </TouchableOpacity>
                                            )

                                        }
                                        // else{
                                        //     return(
                                        //         <View style={{justifyContent:'center',alignItems:'center'}}>
                                        //         <Text style={{ color: 'white',fontSize:18 }}> Voucher chưa có đơn hàng nào </Text>

                                        //   </View>
                                        //     )
                                        // }
                                    })}
                                </View>
                                :
                                <View>
                                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Bạn chưa có giao dịch nào </Text>
                                </View>
                            }

                        </ScrollView>
                    </View>
                    {/* <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'red' }} onPress={() => storeData()}></TouchableOpacity>
                <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'yellow' }} onPress={() => getData ()}></TouchableOpacity> */}

                </View>
            </View>
        </SafeAreaView>
    )
}

export default History_Transform;