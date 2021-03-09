
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator , BottomTabBar} from '@react-navigation/bottom-tabs';
import Main from '../../components/Main';
import ThongTin from '../../components/ThongTin/ThongTin';
import TabVoucher from "./tabheaderVoucher";
import Svg, { Path } from 'react-native-svg';
import History_Transform from "../../components/History_Transform";
function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#151515' }}>
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
                    <View key={index} style={{ flex: 1 }}>
                        <View style={isFocused ? { width: 60, height: 40, marginBottom: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderBottomLeftRadius: 80, borderBottomRightRadius: 80 } : { flex: 1 }}>
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={isFocused ? { borderRadius: 30, height: 50, width: 50, backgroundColor: '#8B3BFF', justifyContent: 'center', alignItems: 'center', marginBottom: 20 } : { flex: 1, justifyContent: 'center', alignItems: 'center' }}
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

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: 'black' }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={'black'}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: 'black' }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: 'white'
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: 'black'
                }}
                activeOpacity={1}
                onPress={onPress}
            >
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
        // <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        //     <Tab.Screen name="Home" component={Main} options={{
        //         tabBarLabel: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/cp0/156020181_238028864683564_2135882902622382450_n.png?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=Q9KFO-vaaXsAX_5GpAO&_nc_ht=scontent.fhan3-2.fna&tp=30&oh=29aca531ef47810130001e93bf855e41&oe=60649E73',
        //     }} />
        //     <Tab.Screen name="LichSu" component={History_Transform} options={{ tabBarLabel: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/cp0/156431287_966935967381856_8456692249464874073_n.png?_nc_cat=108&ccb=3&_nc_sid=ae9488&_nc_ohc=QwwEzg5CGZMAX_0GatM&_nc_ht=scontent.fhan4-1.fna&tp=30&oh=3f26663634bc6fbe7e31d03b736c01c4&oe=60678ABF' }} />
        //     <Tab.Screen name="KhamPha" component={TabVoucher} options={{ tabBarLabel: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/cp0/155838145_899710187496482_1333319306094641743_n.png?_nc_cat=108&ccb=3&_nc_sid=ae9488&_nc_ohc=zqVDPpwC7jkAX_-BW2j&_nc_ht=scontent.fhan4-1.fna&tp=30&oh=3c320341257712e371a5bdeb299a5f00&oe=60663DA6' }} />
        //     <Tab.Screen name="Voucher" component={TabVoucher} options={{ tabBarLabel: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/cp0/154230611_2898327017046208_4291993874701701951_n.png?_nc_cat=101&ccb=3&_nc_sid=ae9488&_nc_ohc=EyfDWckxhnwAX-PXkXZ&_nc_ht=scontent.fhan3-3.fna&tp=30&oh=42a9a9464b6cbae1eee8ce7d54657e9e&oe=60654539' }} />
        //     <Tab.Screen name="ThongTin" component={ThongTin} options={{ tabBarLabel: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/cp0/155347529_291010589265755_7659842058770605504_n.png?_nc_cat=106&ccb=3&_nc_sid=ae9488&_nc_ohc=8xljzVQDbCIAX8aBd0K&_nc_ht=scontent.fhan3-3.fna&tp=30&oh=1013457869f3d86dd0426cecf5a1891a&oe=606728FB' }} />
        // </Tab.Navigator>
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
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={{uri :'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/cp0/156020181_238028864683564_2135882902622382450_n.png?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=Q9KFO-vaaXsAX_5GpAO&_nc_ht=scontent.fhan3-2.fna&tp=30&oh=29aca531ef47810130001e93bf855e41&oe=60649E73'}}
                            resizeMode="contain"
                           
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
             <Tab.Screen
                name="LichSu"
                component={History_Transform}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={{uri :'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/cp0/155838145_899710187496482_1333319306094641743_n.png?_nc_cat=108&ccb=3&_nc_sid=ae9488&_nc_ohc=zqVDPpwC7jkAX_-BW2j&_nc_ht=scontent.fhan4-1.fna&tp=30&oh=3c320341257712e371a5bdeb299a5f00&oe=60663DA6'}}
                            resizeMode="contain"
                           
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Voucher"
                component={TabVoucher}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={{uri :'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/cp0/154230611_2898327017046208_4291993874701701951_n.png?_nc_cat=101&ccb=3&_nc_sid=ae9488&_nc_ohc=EyfDWckxhnwAX-PXkXZ&_nc_ht=scontent.fhan3-3.fna&tp=30&oh=42a9a9464b6cbae1eee8ce7d54657e9e&oe=60654539'}}
                            resizeMode="contain"
                           
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ThongTin"
                component={ThongTin}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={{uri :'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/cp0/155347529_291010589265755_7659842058770605504_n.png?_nc_cat=106&ccb=3&_nc_sid=ae9488&_nc_ohc=8xljzVQDbCIAX8aBd0K&_nc_ht=scontent.fhan3-3.fna&tp=30&oh=1013457869f3d86dd0426cecf5a1891a&oe=606728FB'}}
                            resizeMode="contain"
                           
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            /> 

        </Tab.Navigator>
    );
}
