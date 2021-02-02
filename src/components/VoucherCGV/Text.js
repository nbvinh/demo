import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import AppStyle from "../../theme";

const TextFooter = () => {
    return (
        <View style={AppStyle.StyleVoucherCGV.address}>
            <View style={{ margin: 15 }}>
                <Text style={AppStyle.StyleVoucherCGV.text7}>Thể lệ và điều kiện áp dụng:</Text>
                <Text style={AppStyle.StyleVoucherCGV.text8}>- Voucher đổi vé xem phim được áp dụng cho các rạp 2D (không áp dụng cho chiếu rạp đặc biệt như rạp 4DX, rạp  Gold Class, rạp IMAX, rạp L’amour, Sweetbox,...).</Text>
                <Text style={AppStyle.StyleVoucherCGV.text8}>- Voucher đổi vé xem phim có giá trị sử dụng cho tất cả các ngày trong tuần.</Text>
                <Text style={AppStyle.StyleVoucherCGV.text8}>- Voucher đổi vé xem phim sử dụng cho hình thức mua vé trực tiếp tại quầy, đặt vé trực tuyến trên trang chủ http://www.cgv.vn hoặc ứng dụng điện thoại CGV Cinema.</Text>
                <Text style={AppStyle.StyleVoucherCGV.text8}>- Voucher đổi vé xem phim không được nhượng bán hay quy đổi thành tiền.</Text>
                <Text style={AppStyle.StyleVoucherCGV.text8}>- Voucher đổi vé xem phim không áp dụng đồng thời với các chương trình khuyến mại khác tại rạp.</Text>
                <Text style={AppStyle.StyleVoucherCGV.text8}>- Thời hạn sử dụng: đến hết ngày 25/12/2020.</Text>
                <Text style={AppStyle.StyleVoucherCGV.text8}>- Nổi bật: áp dụng các ngày Lễ, Tết.</Text>

            </View>
        </View>
    )
}
export default TextFooter;