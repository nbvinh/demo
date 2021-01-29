import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
const Main_option_item = (props) =>{
    return(
        <View style={AppStyle.StyleMain.option_item}>
            <Image
                style={{width: 32, height: 32}}
                source={require('../../img/'+props.tenanh+'.png')}
            />
            <Text style={AppStyle.StyleMain.option_itemtext}>{props.text} </Text>
        </View>
    );
}
const Main_option = () =>{
    return(
        <View style={AppStyle.StyleMain.option}>
           <View style={AppStyle.StyleMain.option_top}>
            <TouchableOpacity>
               <Main_option_item tenanh = 'Discount' text = 'Khuyến Mãi'/>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                <Image
                            style={{width: 32, height: 32}}
                            source={require('../../img/douong_32px.png')}
                        />
                    <Text style={AppStyle.StyleMain.option_itemtext}>
                        Đồ Uống
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                <Image
                            style={{width: 38, height: 38}}
                            source={require('../../img/amthuc_32px.png')}
                        />
                    <Text style={AppStyle.StyleMain.option_itemtext}>
                        Ẩm thực
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                <Image
                            style={{width: 38, height: 38}}
                            source={require('../../img/CombinedShape.png')}
                        />
                    <Text style={AppStyle.StyleMain.option_itemtext}>
                        Mua Sắm
                    </Text>
            </TouchableOpacity>
            </View> 
           <View style={AppStyle.StyleMain.option_bottom}>
           <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                <Image
                            style={{width: 35, height: 35}}
                            source={require('../../img/Vector.png')}
                        />
                    <Text style={AppStyle.StyleMain.option_itemtext}>
                        Làm đẹp
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                <Image
                            style={{width: 36, height: 36}}
                            source={require('../../img/giaitri_32px.png')}
                        />
                    <Text style={AppStyle.StyleMain.option_itemtext}>
                        Giải trí
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyle.StyleMain.option_item}>
                <Image
                            style={{width: 38, height: 38}}
                            source={require('../../img/cashack_32px.png')}
                        />
                    <Text style={AppStyle.StyleMain.option_itemtext}>
                       Cashback
                    </Text>
            </TouchableOpacity>
           </View>
           
       </View>
    );
}
export default Main_option;