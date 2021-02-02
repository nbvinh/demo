import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import AppStyle from "../theme";

const Voucher_Cp = ()=>{
    return(
        <View>
        <View style={AppStyle.Style_Voucher.header}>
        <View style={AppStyle.Style_Voucher.anh}>
            <Image
                style={AppStyle.Style_Voucher.Image}
                source={require('../img/nam1.png')}
            />
            <View style={AppStyle.Style_Voucher.right}>
                <Image
                    style={AppStyle.Style_Voucher.Image_right}
                    source={require('../img/nam2.png')}
                />
                <Image
                    style={AppStyle.Style_Voucher.Image_right}
                    source={require('../img/nam3.png')}
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
                <Text style={AppStyle.Style_Voucher.far_away}>0.5 km</Text>
            </View>
        </View>
        <View style={AppStyle.Style_Voucher.pos_left}></View>
        <View style={AppStyle.Style_Voucher.pos_right} ></View>

    </View>
    <View style={AppStyle.Style_Voucher.header}>
        <View style={AppStyle.Style_Voucher.anh}>
            <Image
                style={AppStyle.Style_Voucher.Image}
                source={require('../img/nam4.png')}
            />
            <View style={AppStyle.Style_Voucher.right}>
                <Image
                    style={AppStyle.Style_Voucher.Image_right}
                    source={require('../img/nam5.png')}
                />
                <Image
                    style={AppStyle.Style_Voucher.Image_right}
                    source={require('../img/nam6.png')}
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
                    Voucher Sushi Kei giảm 12%                                </Text>
                <Text style={AppStyle.Style_Voucher.destination}>Ăn Sushi thả ga - Chẳng lo về giá</Text>
            </View>
        </View>
        <View style={AppStyle.Style_Voucher.cost}>
            <View style={AppStyle.Style_Voucher.cost_left}  >
                <Text style={AppStyle.Style_Voucher.cost_main}>265.000d</Text>
                <Text style={AppStyle.Style_Voucher.costthough}>200.000</Text>
            </View>
            <View style={AppStyle.Style_Voucher.cost_right}>
                <Image
                    style={AppStyle.Style_Voucher.Image_anh}
                    source={require('../img/Location.png')}
                />
                <Text style={AppStyle.Style_Voucher.far_away}>0.5 km</Text>
            </View>
        </View>
        <View style={AppStyle.Style_Voucher.pos_left}></View>
        <View style={AppStyle.Style_Voucher.pos_right} ></View>
    </View>
    <View style={AppStyle.Style_Voucher.header}>
        <View style={AppStyle.Style_Voucher.anh}>
            <Image
                style={AppStyle.Style_Voucher.Image}
                source={require('../img/nam7.png')}
            />
            <View style={AppStyle.Style_Voucher.right}>
                <Image
                    style={AppStyle.Style_Voucher.Image_right}
                    source={require('../img/nam8.png')}
                />
                <Image
                    style={AppStyle.Style_Voucher.Image_right}
                    source={require('../img/nam9.png')}
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
                    Voucher Truly Việt giảm 16%                                </Text>
                <Text style={AppStyle.Style_Voucher.destination}>Khám phá ngay ẩm thực Nam Bộ tại Truly Việt</Text>
            </View>
        </View>
        <View style={AppStyle.Style_Voucher.cost}>
            <View style={AppStyle.Style_Voucher.cost_left}  >
                <Text style={AppStyle.Style_Voucher.cost_main}>169.000d</Text>
                <Text style={AppStyle.Style_Voucher.costthough}>300.000</Text>
            </View>
            <View style={AppStyle.Style_Voucher.cost_right}>
                <Image
                    style={AppStyle.Style_Voucher.Image_anh}
                    source={require('../img/Location.png')}
                />
                <Text style={AppStyle.Style_Voucher.far_away}>0.5 km</Text>
            </View>
        </View>
        <View style={AppStyle.Style_Voucher.pos_left}></View>
        <View style={AppStyle.Style_Voucher.pos_right} ></View>
    </View>
    <View style={AppStyle.Style_Voucher.header}>
        <View style={AppStyle.Style_Voucher.anh}>
            <Image
                style={AppStyle.Style_Voucher.Image}
                source={require('../img/nam10.png')}
            />
            <View style={AppStyle.Style_Voucher.right}>
                <Image
                    style={AppStyle.Style_Voucher.Image_right}
                    source={require('../img/nam11.png')}
                />
                <Image
                    style={AppStyle.Style_Voucher.Image_right}
                    source={require('../img/nam12.png')}
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
                <Text style={AppStyle.Style_Voucher.far_away} >0.5 km</Text>
            </View>
        </View>
        <View style={AppStyle.Style_Voucher.pos_left}></View>
        <View style={AppStyle.Style_Voucher.pos_right} ></View>
    </View>
    </View>
    );
}
export default Voucher_Cp;