import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import AppStyle from "../../theme";
import { useSelector, useDispatch } from "react-redux";
const Khuyenmai = (props) => {
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false)

    const onchoose = () => {
        dispatch({ type: 'CHOOSE', id: id })
        dispatch({ type: 'CONFIRMVOUCHER' })
        if (dieukien === true) {
            Alert.alert(
                "Title",
                "Bạn đủ điều kiện để sử dụng voucher này",
                [
                    {
                        text: 'OK',
                        onPress: () => setCheck(true)
                    }
                ]
            )
        }
        else {
            Alert.alert(
                "Title",
                "Bạn không đủ điều kiện để sử dụng voucher này",
                [
                    {
                        text: 'OK',
                        onPress: () => setCheck(false)
                    }
                ]
            )
        }
        props.sendCheck(check);
    }
    const { id, img, text1, hsd, dieukien, isChoose } = props.myarrPromotion;
    return (
        <View style={[AppStyle.StyleVoucherCGV.address, { marginTop: 20 }]}>
            <TouchableOpacity onPress={() => onchoose(props.myarrPromotion)}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
                    <Image
                        style={AppStyle.StyleChonVoucher.img2}
                        source={{ uri: img }}
                    />
                    <View style={AppStyle.StyleChonVoucher.content1}>
                        <Text style={AppStyle.StyleChonVoucher.text1}>{text1}</Text>
                        <Text style={AppStyle.StyleChonVoucher.text3}>HSD:{hsd}</Text>
                    </View>
                    <View style={AppStyle.StyleChonVoucher.content2}>
                        {dieukien ?
                            <Image
                                style={AppStyle.StyleChonVoucher.img3}
                                source={require('../../img/vinh4.png')}
                            />
                            : null
                        }
                        <Text style={AppStyle.StyleChonVoucher.text4}>Điều kiện</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}
export default Khuyenmai;