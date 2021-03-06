import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Main from '../../components/Main';
import ThongTin from '../../components/ThongTin/ThongTin';
import TabVoucher from "./tabheaderVoucher";
import Svg, { Path } from 'react-native-svg';
import History_Transform from "../../components/History_Transform";
import LinearGradient from 'react-native-linear-gradient';
import GiaoDich from '../../components/GiaoDich/giaodich';
const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState.selected
    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: '#151515' }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={'#151515'}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: '#151515' }}></View>
                </View>
                <TouchableOpacity onPress={onPress} >
                    <LinearGradient
                        style={{
                            top: -22.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                        }}
                        colors={['#8B3BFF', '#B738FF']}
                    >
                        {children}
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity style={{ flex: 1, height: 60, backgroundColor: '#151515', justifyContent: 'center', alignItems: 'center' }} activeOpacity={1} onPress={onPress} >
                {children}
            </TouchableOpacity>
        )
    }
}

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
    return (
        <BottomTabBar
            {...props.props}
        />
    )

}

export default function TabViewMain() {
    return (
        <Tab.Navigator
            tabBarOptions={{

                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Main}
                options={{

                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props} children={<Image
                                style={{ height: 24, width: 24, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                                source={require('../../img/img_icon_24px/home_24px.png')}
                            />}
                        />
                    )
                }} home_24px
            />
            <Tab.Screen
                name="LichSu"
                component={History_Transform}
                options={{

                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props} children={<Image
                                style={{ height: 24, width: 24, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                                source={require('../../img/img_icon_24px/lsu_24px.png')}
                            />}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="KhamPha"
                component={GiaoDich}
                options={{

                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props} children={<Image
                                style={{ height: 24, width: 24, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                                source={require('../../img/img_icon_24px/kampha_24px.png')}
                            />}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Voucher"
                component={TabVoucher}
                options={{

                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props} children={<Image
                                style={{ height: 24, width: 24, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                                source={require('../../img/img_icon_24px/voucher_24px.png')}
                            />}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ThongTin"
                component={ThongTin}
                options={{
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props} children={<Image
                                style={{ height: 24, width: 24, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                                source={require('../../img/img_icon_24px/list_24px.png')}
                            />}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    );
}
