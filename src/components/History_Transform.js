import React from 'react';
import { View, Text, Image , TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";

const History_Transform = ({navigation}) => {
    return (
        
        <View style={AppStyle.Style_History_Tranform.container}>
            <View style={AppStyle.Style_History_Tranform.header}>
                {/* <Image
                    style={AppStyle.Style_History_Tranform.Image}
                    source={require('../img/back.png')}
                /> */}
                 <TouchableOpacity onPress={() => navigation.goBack()} style={{  marginLeft: 10 }}>
                        <Image
                            width={10} height={18}
                            source={require('../img/back.png')}
                        />
                    </TouchableOpacity>
                <Text style={AppStyle.Style_History_Tranform.header_title}>Lịch sử giao dịch </Text>
                <Image
                    style={AppStyle.Style_History_Tranform.Image1}
                    source={require('../img/Calendar.png')}
                />
            </View>
            <ScrollView>
            <View style={AppStyle.Style_History_Tranform.calendar}>
                <Text style={AppStyle.Style_History_Tranform.text}>Tháng 11/2020</Text>
            </View>
            <View style={AppStyle.Style_History_Tranform.content}>
                <View style={AppStyle.Style_History_Tranform.item}>
                    <Text style={AppStyle.Style_History_Tranform.content_text}>Mã giao dịch: DH65741671616 </Text>
                    <View style={AppStyle.Style_History_Tranform.cost}>
                        <Text style={AppStyle.Style_History_Tranform.content_cost}>1.500.000 đ</Text>
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

                <View style={AppStyle.Style_History_Tranform.item}>
                    <Text style={AppStyle.Style_History_Tranform.content_text}>Mã giao dịch: DH65741671616 </Text>
                    <View style={AppStyle.Style_History_Tranform.cost}>
                        <Text style={AppStyle.Style_History_Tranform.content_cost}>505.200 đ</Text>
                        <Text></Text>
                        <Image
                            style={AppStyle.Style_History_Tranform.Image_right}
                            source={require('../img/chevron_right.png')}
                        />
                    </View>
                    <View style={AppStyle.Style_History_Tranform.bottom}>
                        <Image
                            style={AppStyle.Style_History_Tranform.ImageStatus}
                            source={require('../img/thatbai.png')}
                        />
                        <Text style={AppStyle.Style_History_Tranform.status}>Thất bại</Text>
                    </View>
                </View>

                <View style={AppStyle.Style_History_Tranform.item}>
                    <Text style={AppStyle.Style_History_Tranform.content_text}>Mã giao dịch: DH65741671616 </Text>
                    <View style={AppStyle.Style_History_Tranform.cost}>
                        <Text style={AppStyle.Style_History_Tranform.content_cost}>440.000 đ</Text>
                        <Text></Text>
                        <Image
                            style={AppStyle.Style_History_Tranform.Image_right}
                            source={require('../img/chevron_right.png')}
                        />
                    </View>
                    <View style={AppStyle.Style_History_Tranform.bottom}>
                        <Image
                            style={AppStyle.Style_History_Tranform.ImageStatus}
                            source={require('../img/chuahoanthanh.png')}
                        />
                        <Text style={AppStyle.Style_History_Tranform.status}>Chưa hoàn thành</Text>
                    </View>
                </View>

                <View style={AppStyle.Style_History_Tranform.item}>
                    <Text style={AppStyle.Style_History_Tranform.content_text}>Mã giao dịch: DH65741671616 </Text>
                    <View style={AppStyle.Style_History_Tranform.cost}>
                        <Text style={AppStyle.Style_History_Tranform.content_cost}>225.000 đ</Text>
                        <Text></Text>
                        <Image
                            style={AppStyle.Style_History_Tranform.Image_right}
                            source={require('../img/chevron_right.png')}
                        />
                    </View>
                    <View style={AppStyle.Style_History_Tranform.bottom}>
                        <Image
                            style={AppStyle.Style_History_Tranform.ImageStatus}
                            source={require('../img/dahuy.png')}
                        />
                        <Text style={AppStyle.Style_History_Tranform.status}>Đã hủy</Text>
                    </View>
                </View>

                <View style={AppStyle.Style_History_Tranform.item}>
                    <Text style={AppStyle.Style_History_Tranform.content_text}>Mã giao dịch: DH65741671616 </Text>
                    <View style={AppStyle.Style_History_Tranform.cost}>
                        <Text style={AppStyle.Style_History_Tranform.content_cost}>225.000 đ</Text>
                        <Text></Text>
                        <Image
                            style={AppStyle.Style_History_Tranform.Image_right}
                            source={require('../img/chevron_right.png')}
                        />
                    </View>
                    <View style={AppStyle.Style_History_Tranform.bottom}>
                        <Image
                            style={AppStyle.Style_History_Tranform.ImageStatus}
                            source={require('../img/dahuy.png')}
                        />
                        <Text style={AppStyle.Style_History_Tranform.status}>Đã hủy</Text>
                    </View>
                </View>
                <View style={AppStyle.Style_History_Tranform.item}>
                    <Text style={AppStyle.Style_History_Tranform.content_text}>Mã giao dịch: DH65741671616 </Text>
                    <View style={AppStyle.Style_History_Tranform.cost}>
                        <Text style={AppStyle.Style_History_Tranform.content_cost}>225.000 đ</Text>
                        <Text></Text>
                        <Image
                            style={AppStyle.Style_History_Tranform.Image_right}
                            source={require('../img/chevron_right.png')}
                        />
                    </View>
                    <View style={AppStyle.Style_History_Tranform.bottom}>
                        <Image
                            style={AppStyle.Style_History_Tranform.ImageStatus}
                            source={require('../img/dahuy.png')}
                        />
                        <Text style={AppStyle.Style_History_Tranform.status}>Đã hủy</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            
        </View>
        
    )
}
export default History_Transform;