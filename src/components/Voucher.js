import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import App from '../../App';
import AppStyle from "../theme";
import Voucher_Cp from './Voucher_Cp';
const Voucher = ({navigation}) => {
    return (
        
            <View style={AppStyle.Style_Voucher.container}>

                <View style={AppStyle.Style_Voucher.content_top}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, marginLeft: 10 }}>
                        <Image
                            width={10} height={18}
                            source={require('../img/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.Style_Voucher.State}>Khuyến mại</Text>
                    <Text></Text>
                </View>
                <ScrollView>
                    <Voucher_Cp />
                </ScrollView>
            </View>
        
    );
}

export default Voucher;