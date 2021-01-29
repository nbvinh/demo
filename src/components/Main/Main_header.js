import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../../theme";
const Main_header = () =>{
    return(
        <View style={AppStyle.StyleMain.header}>
            <View style={AppStyle.StyleMain.header_left}>
                <Image
                    style={{width: 40, height: 40, borderRadius: 50}}
                    source={{
                    uri: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/141162747_190481106106245_2204885355751272197_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=EKf625AzIeYAX91-s3-&_nc_ht=scontent.fhan4-1.fna&oh=3df2f2e9c188d6d61703f31bc20e5d82&oe=602FFFA0',
                        }}
                />
                <Text style={AppStyle.StyleMain.css_text}> Hi, Quy</Text>
            </View>
            <View style={AppStyle.StyleMain.header_right}>
                <Image
                            style={{width: 32, height: 32, marginLeft: 15}}
                            source={require('../../img/Iconly-Light-Notification.png')}
                        />
            </View>
        </View>
    );
}
export default Main_header;