import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import Header from '../Header'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const MuaDiem = ({ navigation }) => {
    const dispatch = useDispatch();
    const [diem, setDiem] = React.useState(0);
    const [check, setcheck] = React.useState(false);
    const [check2, setcheck2] = React.useState(false);
    const [check3, setcheck3] = React.useState(false);
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }
    const _storeData = async () => {
        AsyncStorage.setItem(
            'Diem',
            JSON.stringify(diermthaydoi),
            () => {
                AsyncStorage.getItem('Diem', (err, result) => {
                    dispatch({ type: 'DIEMUP', diem: result })
                });
            }
        );
    };
    useEffect(() => {
        _storeData()
    }, [check3])
    async function asyncCall() {
        dispatch({ type: 'UPDIEM', diem: diem })
        navigation.navigate('Tabviewmain');
        setcheck3(true)
    }
    const onSubmitThanhToan = () => {
        {
            if (check === false && check2 === false) {
                Alert.alert('Thông báo', 'Bạn chưa chọn phương thức thanh toán!');
            }
            else if (diem < 0) {
                Alert.alert('Thông báo', 'Bạn nhập sai định dạng rồi. Điểm phải lớn hơn 0!');
            }
            else if (diem == 0) {
                Alert.alert('Thông báo', 'Bạn chưa nhập số điểm cần mua !');
            }
            else {
                asyncCall()
            }

        }
    }
    const GOback =()=>{
        navigation.goBack()
    }
    const item ='Mua Điểm'
    const diermthaydoi = useSelector(state => state.diem)
    return (
        <KeyboardAwareScrollView
        style={{ backgroundColor: 'black',
        flex: 1,}}

    >
        <SafeAreaView style={AppStyle.StyleGiaoDich.container}>


            {/* <View style={AppStyle.StyleVoucherCGV.header}>
                <TouchableOpacity onPress={() => } >
                    <Image
                        width={10} height={18}
                        source={require('../../img/back.png')}
                    />
                </TouchableOpacity>
                <Text style={AppStyle.StyleVoucherCGV.text}>Mua Điểm</Text>
            </View> */}
              <Header onpress={GOback} item ={item}/>
            <View style={{ marginHorizontal: 8, flex: 11 }}>
                <Text style={AppStyle.StyleGiaoDich.Text_Tieude}>Nhập số cần mua</Text>
                <TextInput placeholder='0' placeholderTextColor='rgba(255, 255, 255, 0.3)' keyboardType='numeric' style={[AppStyle.StyleGiaoDich.Box_DoiDiem, { color: 'white' }]} onChangeText={(value) => setDiem(parseInt(value))} />
                <View style={AppStyle.StyleGiaoDich.TongTien}>
                    <Text style={AppStyle.StyleGiaoDich.Text_White}>Tổng Tiền</Text>
                    <Text style={AppStyle.StyleGiaoDich.Text_White}>{diem > 0 ? numberWithCommas(diem * 100) : 0} VNĐ</Text>
                </View>
                <View style={AppStyle.StyleGiaoDich.PhuongThucThanhToan}>
                    <Text style={AppStyle.StyleGiaoDich.Text_White}>Chọn Phương thức thanh toán</Text>
                    <View style={AppStyle.StyleGiaoDich.Item_ThanhToan}>
                        <TouchableOpacity style={{ marginHorizontal: 8 }} onPress={() => {
                            setcheck(true);
                            setcheck2(false);
                        }}>
                            {
                                check === false ? <Image
                                    width={16} height={16}
                                    source={require('../../img/img_icon_24px/check0.png')} /> : <View><Image
                                        width={16} height={16}
                                        source={require('../../img/img_icon_24px/check0.png')} />
                                    <Image source={require('../../img/img_icon_24px/check1.png')}
                                        style={{ width: 12, height: 12, position: 'absolute', top: 2, left: 2 }}
                                    /></View>
                            }

                        </TouchableOpacity>
                        <Text style={AppStyle.StyleGiaoDich.Text_ChonThanhToan}>ATM/ VISA/ MASTER/ JCB hoặc Cửa hàng tiện lợi.</Text>
                    </View>
                    <View style={AppStyle.StyleGiaoDich.Item_ThanhToan}>
                        <TouchableOpacity style={{ marginHorizontal: 8 }} onPress={() => {
                            setcheck2(true);
                            setcheck(false);
                        }}>
                            {
                                check2 === false ? <Image
                                    width={16} height={16}
                                    source={require('../../img/img_icon_24px/check0.png')} /> : <View><Image
                                        width={16} height={16}
                                        source={require('../../img/img_icon_24px/check0.png')} />
                                    <Image source={require('../../img/img_icon_24px/check1.png')}
                                        style={{ width: 12, height: 12, position: 'absolute', top: 2, left: 2 }}
                                    /></View>
                            }
                        </TouchableOpacity>
                        <Text style={AppStyle.StyleGiaoDich.Text_ChonThanhToan}>Thanh toán bằng Momo</Text>
                    </View>
                </View>
                {
                    (check === false && check2 === false) || diem === 0 ?
                        <LinearGradient style={AppStyle.StyleScreenXacNhanSDT.linearnotactive} colors={['#B738FF', '#8B3BFF']} >
                            <Text style={AppStyle.StyleScreenXacNhanSDT.text}>Tiến hành thanh toán</Text>
                        </LinearGradient>
                        :
                        <TouchableOpacity onPress={onSubmitThanhToan}>
                            <LinearGradient style={AppStyle.StyleFirst.linear} colors={['#8B3BFF', '#B738FF']} >
                                <Text style={AppStyle.StyleFirst.text}>Tiến hành thanh toán</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                }
            </View>
        </SafeAreaView>
        </KeyboardAwareScrollView>
    );
}
export default MuaDiem;