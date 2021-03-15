import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView , SafeAreaView} from 'react-native';
import App from '../../App';
import AppStyle from "../theme";
import Voucher_Cp from './Voucher_Cp';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const Voucher = ({navigation}) => {
    const [DuLieu, setDuLieu] = React.useState([]);
    const id = useSelector(state => state.id);

    console.log(id);
    useEffect(() => {
        axios.get('http://175.41.184.177:6061/category').then(function (res) {
            const dulieu = res.data.data;
            Object.entries(dulieu);
            setDuLieu(dulieu);
        }).catch(function (error) {
            console.log(error);
        });
    }, [])

    return (
            <SafeAreaView style={AppStyle.Style_Voucher.container}>

                <View style={AppStyle.Style_Voucher.content_top}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, marginLeft: 10 }}>
                        <Image
                            width={10} height={18}
                            source={require('../img/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={AppStyle.Style_Voucher.State}>Khuyến Mại</Text>
                    <Text></Text>
                </View>
                <ScrollView>
                    <Voucher_Cp />
                </ScrollView>
            </SafeAreaView>
        
    );
}

export default Voucher;