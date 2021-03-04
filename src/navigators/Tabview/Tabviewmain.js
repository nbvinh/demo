// import * as React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Main from '../../components/Main';
// import ThongTin from '../../components/ThongTin/ThongTin';
// import TabVoucher from "./tabheaderVoucher";
// import History_Transform from "../../components/History_Transform";
// const Tab = createBottomTabNavigator();
// const TabViewMain = () => {
//     return (
//         <Tab.Navigator tabBarOptions={{
//             style: {
//                 backgroundColor: 'black',
//                 borderTopColor: 'black',
//                 borderWidth: 1, 
//             },
//             activeBackgroundColor:'#8B3BFF',
//             tabStyle:{
//                 height:60,
//             },

//         }}>
//             <Tab.Screen name="Home" component={Main} options={{
//                 tabBarLabel: '',
//                 tabBarIcon: () => <Image width={20} height={18} source={require('../../img/img_icon_24px/home_24px.png')} />}} />
//             <Tab.Screen name="LichSu" component={History_Transform} options={{ tabBarLabel: '', tabBarIcon: () => <Image width={20} height={18} source={require('../../img/img_icon_24px/lsu_24px.png')} /> }} />
//             <Tab.Screen name="KhamPha" component={TabVoucher} options={{ tabBarLabel: '', tabBarIcon: () => <Image width={20} height={18} source={require('../../img/img_icon_24px/voucher_24pxcopy.png')} /> }} />
//             <Tab.Screen name="Voucher" component={TabVoucher} options={{ tabBarLabel: '', tabBarIcon: () => <Image width={20} height={18} source={require('../../img/img_icon_24px/kampha_24px.png')} /> }} />
//             <Tab.Screen name="ThongTin" component={ThongTin} options={{ tabBarLabel: '', tabBarIcon: () => <Image width={20} height={18} source={require('../../img/img_icon_24px/list_24px.png')} /> }} />
//         </Tab.Navigator>
//     );
// }
// export default TabViewMain;

// import React from "react";
// import { StyleSheet, View } from "react-native";
// import Tabbar from "./Tabbar";
// const TabViewMain = () => {
//     return (
//         <View style={styles.container}>
//             <Tabbar />
//         </View>
//     )
// }
// export default TabViewMain;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#eb3345",
//         justifyContent: "flex-end",
//     },
// });

import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../../components/Main';
import ThongTin from '../../components/ThongTin/ThongTin';
import TabVoucher from "./tabheaderVoucher";
import History_Transform from "../../components/History_Transform";
import * as Animatable from 'react-native-animatable';
function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', height: 50, backgroundColor: 'black' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <View key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={isFocused ?{width:60,height:30,marginBottom:20,justifyContent:'center',alignItems:'center',backgroundColor:'#272738',borderBottomLeftRadius:80,borderBottomRightRadius:80}:null}>
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={isFocused ? { borderRadius: 30, height: 50, width: 50, backgroundColor: '#8B3BFF', justifyContent: 'center', alignItems: 'center', marginBottom: 40 } : null}
                            >
                                <Image style={{ height: 20, width: 18 }} source={{ uri: label }} />
                            </TouchableOpacity>

                        </View>
                    </View>
                );
            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function TabViewMain() {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Home" component={Main} options={{
                tabBarLabel: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/cp0/156020181_238028864683564_2135882902622382450_n.png?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=Q9KFO-vaaXsAX_5GpAO&_nc_ht=scontent.fhan3-2.fna&tp=30&oh=29aca531ef47810130001e93bf855e41&oe=60649E73',
            }} />
            <Tab.Screen name="LichSu" component={History_Transform} options={{ tabBarLabel: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/cp0/156431287_966935967381856_8456692249464874073_n.png?_nc_cat=108&ccb=3&_nc_sid=ae9488&_nc_ohc=QwwEzg5CGZMAX_0GatM&_nc_ht=scontent.fhan4-1.fna&tp=30&oh=3f26663634bc6fbe7e31d03b736c01c4&oe=60678ABF' }} />
            <Tab.Screen name="KhamPha" component={TabVoucher} options={{ tabBarLabel: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/cp0/155838145_899710187496482_1333319306094641743_n.png?_nc_cat=108&ccb=3&_nc_sid=ae9488&_nc_ohc=zqVDPpwC7jkAX_-BW2j&_nc_ht=scontent.fhan4-1.fna&tp=30&oh=3c320341257712e371a5bdeb299a5f00&oe=60663DA6' }} />
            <Tab.Screen name="Voucher" component={TabVoucher} options={{ tabBarLabel: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/cp0/154230611_2898327017046208_4291993874701701951_n.png?_nc_cat=101&ccb=3&_nc_sid=ae9488&_nc_ohc=EyfDWckxhnwAX-PXkXZ&_nc_ht=scontent.fhan3-3.fna&tp=30&oh=42a9a9464b6cbae1eee8ce7d54657e9e&oe=60654539' }} />
            <Tab.Screen name="ThongTin" component={ThongTin} options={{ tabBarLabel: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/cp0/155347529_291010589265755_7659842058770605504_n.png?_nc_cat=106&ccb=3&_nc_sid=ae9488&_nc_ohc=8xljzVQDbCIAX8aBd0K&_nc_ht=scontent.fhan3-3.fna&tp=30&oh=1013457869f3d86dd0426cecf5a1891a&oe=606728FB' }} />
        </Tab.Navigator>
    );
}
