
import React from "react";
import {View, Text} from 'react-native';
import ScreenFirst from '../../components/ScreenFirst';
import 'react-native-gesture-handler';
import SecondScreen from "../../components/SecondScreen";
import {createStackNavigator} from '@react-navigation/stack'
import ScreenXacThucSDT from "../../components/ScreenXacThucSDT";
import Main  from "../../components/Main";
import Profile from '../../components/Profile';
import TabVoucher from "../Tabview/tabheaderVoucher";
import ThongTin from "../../components/ThongTin/ThongTin";
import Tabviewmain from "../Tabview/Tabviewmain";
import LichSuDiem from "../../components/LichSuDiem/LichSuDiem";
import Voucher from "../../components/Voucher";
import GiaoDich from "../../components/GiaoDich/giaodich";
import DoiDiem from "../../components/GiaoDich/DoiDiem";
import MuaDiem from "../../components/GiaoDich/MuaDiem";
import NapDiem from "../../components/GiaoDich/NapDiem";
import DoiAvatar from "../../components/DoiThongTinCaNhan/avatar";
import VoucherCGV from "../../components/VoucherCGV";
import GioHang from "../../components/GioHang";
import ChonVoucher from "../../components/ChonVoucher";
import PhuongThucThanhToan from "../../components/PhuongThucThanhToan";
import { NavigationContainer } from '@react-navigation/native';
import PaymentConfirmation from "../../components/PaymentConfirmation";
import KingBread from "../../components/KingBread";
import Giao_Dich_Chua_Thanh_Toan from "../../components/Giao_Dich_Chua_Thanh_Toan";
import Giao_Dich_Thanh_Cong from "../../components/Giao_Dich_Thanh_Cong";
import Chitiet_giaodich from "../../components/Chitiet_giaodich";
const Root= createStackNavigator();
const RootStack =()=>{
    return(
        <NavigationContainer>

        <Root.Navigator headerMode="none" initialRouteName={Main}>
            <Root.Screen name ="ScreenFirst" component={ScreenFirst} />
            <Root.Screen name ="SecondScreen" component={SecondScreen} />
            <Root.Screen name ="ScreenXacThucSDT" component={ScreenXacThucSDT} />
            <Root.Screen name ="Profile" component={Profile} />
            <Root.Screen name ="Tabviewmain" component={Tabviewmain} />
            <Root.Screen name ="Main" component={Main} />
            <Root.Screen name ="TabVoucher" component={TabVoucher} />
            <Root.Screen name ="ThongTin" component={ThongTin} />
            <Root.Screen name ="LichSuDiem" component={LichSuDiem} />
            <Root.Screen name ="VoucherNam" component={Voucher} />
            <Root.Screen name ="GiaoDich" component={GiaoDich} />
            <Root.Screen name ="DoiDiem" component={DoiDiem} />
            <Root.Screen name ="MuaDiem" component={MuaDiem} />
            <Root.Screen name ="NapDiem" component={NapDiem} />
            <Root.Screen name ="DoiAvatar" component={DoiAvatar} />
            <Root.Screen name="VoucherCGV" component={VoucherCGV} />
            {/* <Root.Screen name="VoucherBanhMi" component={VoucherBanhMi} /> */}
            <Root.Screen name="GioHang" component={GioHang} />
            <Root.Screen name="ChonVoucher" component={ChonVoucher} />
            <Root.Screen name="PhuongThucThanhToan" component={PhuongThucThanhToan} />
            <Root.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
            <Root.Screen name="KingBread" component={KingBread} />
            <Root.Screen name="Giao_Dich_Chua_Thanh_Toan" component={Giao_Dich_Chua_Thanh_Toan} />
            <Root.Screen name="Giao_Dich_Thanh_Cong" component={Giao_Dich_Thanh_Cong} />
            <Root.Screen name="Chitiet_giaodich" component={Chitiet_giaodich} />

        </Root.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;