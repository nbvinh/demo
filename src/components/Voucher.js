import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import App from '../../App';
import AppStyle from "../theme";
const Voucher = () => {
    return (
        <ScrollView>
            <View style={AppStyle.Style_Voucher.container}>

                <View style={AppStyle.Style_Voucher.content_top}>
                    <Image
                        style={AppStyle.Style_Voucher.Image}
                        source={require('../img/back.png')}
                    />
                    <Text style={AppStyle.Style_Voucher.State}>Khuyến mại</Text>
                    <Text>

                    </Text>
                </View>
                <View style={AppStyle.Style_Voucher.header}>
                    <View style={AppStyle.Style_Voucher.anh}>
                        <Image
                            style={AppStyle.Style_Voucher.Image}
                            source={require('../img/Rectangle7.png')}
                        />
                        <View style={AppStyle.Style_Voucher.right}>
                            <Image
                                style={AppStyle.Style_Voucher.Image_right}
                                source={require('../img/Rectangle8.png')}
                            />
                            <Image
                                style={AppStyle.Style_Voucher.Image_right}
                                source={require('../img/Rectangle9.png')}
                            />
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.content}>
                        <Image
                            style={AppStyle.Style_Voucher.Image1}
                            source={require('../img/Ellipse4.png')}
                        />
                        <View style={AppStyle.Style_Voucher.body_content}>
                            <Text style={AppStyle.Style_Voucher.contentVoucher}>
                                Voucher Manwash giảm 10%
                                </Text>
                            <Text style={AppStyle.Style_Voucher.destination}>K-Pub tầng 4 Lê Văn Lương</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.cost}>
                        <View style={AppStyle.Style_Voucher.cost_left}  >
                            <Text style={AppStyle.Style_Voucher.cost_main}>280.000d</Text>
                            <Text style={AppStyle.Style_Voucher.costthough}>300.000</Text>
                        </View>
                        <View style={AppStyle.Style_Voucher.cost_right}>
                            <Image
                                style={AppStyle.Style_Voucher.Image_anh}
                                source={require('../img/Location.png')}
                            />
                            <Text>0.5 km</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.pos_left}></View>
                    <View style={AppStyle.Style_Voucher.pos_right} ></View>

                </View>
                <View style={AppStyle.Style_Voucher.header}>
                    <View style={AppStyle.Style_Voucher.anh}>
                        <Image
                            style={AppStyle.Style_Voucher.Image}
                            source={require('../img/11.png')}
                        />
                        <View style={AppStyle.Style_Voucher.right}>
                            <Image
                                style={AppStyle.Style_Voucher.Image_right}
                                source={require('../img/12.png')}
                            />
                            <Image
                                style={AppStyle.Style_Voucher.Image_right}
                                source={require('../img/13.png')}
                            />
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.content}>
                        <Image
                            style={AppStyle.Style_Voucher.Image1}
                            source={require('../img/Ellipse4.png')}
                        />
                        <View style={AppStyle.Style_Voucher.body_content}>
                            <Text style={AppStyle.Style_Voucher.contentVoucher}>
                                Voucher Manwash giảm 10%
                                </Text>
                            <Text style={AppStyle.Style_Voucher.destination}>K-Pub tầng 4 Lê Văn Lương</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.cost}>
                        <View style={AppStyle.Style_Voucher.cost_left}  >
                            <Text style={AppStyle.Style_Voucher.cost_main}>280.000d</Text>
                            <Text style={AppStyle.Style_Voucher.costthough}>300.000</Text>
                        </View>
                        <View style={AppStyle.Style_Voucher.cost_right}>
                            <Image
                                style={AppStyle.Style_Voucher.Image_anh}
                                source={require('../img/Location.png')}
                            />
                            <Text>0.5 km</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.pos_left}></View>
                    <View style={AppStyle.Style_Voucher.pos_right} ></View>
                </View>
                <View style={AppStyle.Style_Voucher.header}>
                    <View style={AppStyle.Style_Voucher.anh}>
                        <Image
                            style={AppStyle.Style_Voucher.Image}
                            source={require('../img/14.png')}
                        />
                        <View style={AppStyle.Style_Voucher.right}>
                            <Image
                                style={AppStyle.Style_Voucher.Image_right}
                                source={require('../img/15.png')}
                            />
                            <Image
                                style={AppStyle.Style_Voucher.Image_right}
                                source={require('../img/16.png')}
                            />
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.content}>
                        <Image
                            style={AppStyle.Style_Voucher.Image1}
                            source={require('../img/Ellipse4.png')}
                        />
                        <View style={AppStyle.Style_Voucher.body_content}>
                            <Text style={AppStyle.Style_Voucher.contentVoucher}>
                                Voucher Manwash giảm 10%
                                </Text>
                            <Text style={AppStyle.Style_Voucher.destination}>K-Pub tầng 4 Lê Văn Lương</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.cost}>
                        <View style={AppStyle.Style_Voucher.cost_left}  >
                            <Text style={AppStyle.Style_Voucher.cost_main}>280.000d</Text>
                            <Text style={AppStyle.Style_Voucher.costthough}>300.000</Text>
                        </View>
                        <View style={AppStyle.Style_Voucher.cost_right}>
                            <Image
                                style={AppStyle.Style_Voucher.Image_anh}
                                source={require('../img/Location.png')}
                            />
                            <Text>0.5 km</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.pos_left}></View>
                    <View style={AppStyle.Style_Voucher.pos_right} ></View>
                </View>
                <View style={AppStyle.Style_Voucher.header}>
                    <View style={AppStyle.Style_Voucher.anh}>
                        <Image
                            style={AppStyle.Style_Voucher.Image}
                            source={require('../img/17.png')}
                        />
                        <View style={AppStyle.Style_Voucher.right}>
                            <Image
                                style={AppStyle.Style_Voucher.Image_right}
                                source={require('../img/18.png')}
                            />
                            <Image
                                style={AppStyle.Style_Voucher.Image_right}
                                source={require('../img/19.png')}
                            />
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.content}>
                        <Image
                            style={AppStyle.Style_Voucher.Image1}
                            source={require('../img/Ellipse4.png')}
                        />
                        <View style={AppStyle.Style_Voucher.body_content}>
                            <Text style={AppStyle.Style_Voucher.contentVoucher}>
                                Voucher Manwah giảm 10%
                                </Text>
                            <Text style={AppStyle.Style_Voucher.destination}>K-Pub tầng 4 Lê Văn Lương</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.cost}>
                        <View style={AppStyle.Style_Voucher.cost_left}  >
                            <Text style={AppStyle.Style_Voucher.cost_main}>280.000d</Text>
                            <Text style={AppStyle.Style_Voucher.costthough}>300.000</Text>
                        </View>
                        <View style={AppStyle.Style_Voucher.cost_right}>
                            <Image
                                style={AppStyle.Style_Voucher.Image_anh}
                                source={require('../img/Location.png')}
                            />
                            <Text>0.5 km</Text>
                        </View>
                    </View>
                    <View style={AppStyle.Style_Voucher.pos_left}></View>
                    <View style={AppStyle.Style_Voucher.pos_right} ></View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Voucher;