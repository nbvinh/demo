import React from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import App from '../../App';
import AppStyle from "../theme";
import StepIndicator from 'react-native-step-indicator';
const Chitiet_giaodich = () => {
    const labels = ["Đặt hàng thành công","Đang chuẩn bị hàng","Sẵn sàng để lấy hàng","Đơn hàng đã hoàn thành"];
    const customStyles = {
        stepIndicatorSize: 4,
        currentStepIndicatorSize:45,
        separatorStrokeWidth: 30,
        currentStepStrokeWidth: 6,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 23,
        currentStepIndicatorLabelFontSize: 37,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'
    }

    return (
        <ScrollView>
            <View>

          
        <View style={AppStyle.Style_Chitiet_Giaodich.container}>
            <View style={AppStyle.Style_Chitiet_Giaodich.header}>
                <Image
                    style={AppStyle.Style_Chitiet_Giaodich.Image}
                    source={require('../img/back.png')}
                />
                <Text style={AppStyle.Style_Chitiet_Giaodich.header_title}>Lịch sử giao dịch </Text>
                <Text></Text>
            </View>

            <View style={AppStyle.Style_Chitiet_Giaodich.body}>
                <Text style={AppStyle.Style_Chitiet_Giaodich.title}>Bánh tráng cuốn Vân Béo - Ngụy Như Kon Tum </Text>
                <View style={AppStyle.Style_Chitiet_Giaodich.body_item}>
                    <View style={AppStyle.Style_Chitiet_Giaodich.left}>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>Bánh tráng cuốn nem nướng</Text>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>x1</Text>
                    </View>
                    <View style={AppStyle.Style_Chitiet_Giaodich.right}>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>60.000 đ</Text>
                    </View>
                </View>
                <View style={AppStyle.Style_Chitiet_Giaodich.body_item}>
                    <View style={AppStyle.Style_Chitiet_Giaodich.left}>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>Bánh tráng cuốn bê tái chanh </Text>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>x1</Text>
                    </View>
                    <View style={AppStyle.Style_Chitiet_Giaodich.right}>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>70.000 đ</Text>
                    </View>
                </View>
                <View style={AppStyle.Style_Chitiet_Giaodich.body_item}>
                    <View style={AppStyle.Style_Chitiet_Giaodich.left}>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>Bánh tráng cuốn chả cá thác</Text>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>x1</Text>
                    </View>
                    <View style={AppStyle.Style_Chitiet_Giaodich.right}>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>60.000 đ</Text>
                    </View>
                </View>
                <View style={AppStyle.Style_Chitiet_Giaodich.body_item}>
                    <View style={AppStyle.Style_Chitiet_Giaodich.left}>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>Nem chua rán</Text>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>x1</Text>
                    </View>
                    <View style={AppStyle.Style_Chitiet_Giaodich.right}>
                        <Text style={AppStyle.Style_Chitiet_Giaodich.content}>35.000 đ</Text>
                    </View>
                </View>
                
            </View>

           


            
        </View>
        <View style={AppStyle.Style_Chitiet_Giaodich.bottom}>
                <Text style={AppStyle.Style_Chitiet_Giaodich.status}>Trạng thái đơn hàng </Text>
                <StepIndicator
         customStyles={customStyles}
       direction='vertical'
         labels={labels} style={{flexDirection:'column'}}
    />
            </View>
            </View>
        </ScrollView>
    );
}
export default Chitiet_giaodich;