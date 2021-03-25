import React, { useState, useEffect } from 'react';
import { BackHandler, View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, StatusBar, TextInput, Alert, Image, FlatList, SafeAreaView, Share } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppStyle from "../theme";
import SlideImg from "../components/KingBread/SlideImg";
import ListProduct from "../components/KingBread/ListProduct";
import { useSelector, useDispatch } from "react-redux";
import Communications from 'react-native-communications';
import Header from '../components/Header';
const KingBread = ({ navigation }) => {
    const dispatch = useDispatch();
    const [time, setTime] = useState(true)
    useEffect(() => {
        loadData();
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, [])
    function handleBackButtonClick() {
        navigation.goBack()
        dispatch({ type: 'KINGBREADFALSE' })
        dispatch({ type: 'FILTERSTATUS' })
        return true;
    }
    const loadData = async () => {
        const load = await fetch('http://175.41.184.177:6061/shop/1', {
            method: 'GET'
        })

            .then((response) => response.json())
            .then((res) => {
                let temp1 = [res]
                let imagesbanhmi = temp1[0].images
                let productcombo = temp1[0].categories[0].products
                let productbanhmi = temp1[0].categories[1].products
                let productnuoc = temp1[0].categories[2].products
                dispatch({ type: 'PRODUCTNUOC', productnuoc: productnuoc })
                dispatch({ type: 'PRODUCTBANHMI', productbanhmi: productbanhmi })
                dispatch({ type: 'PRODUCTCOMBO', productcombo: productcombo })
                dispatch({ type: 'IMAGESBANHMI', imagesbanhmi: imagesbanhmi })
                dispatch({ type: 'BanhMiPEWPEW', temp1: temp1 })
            })
            .catch((error) => console.error(error))
        dispatch({ type: 'SILDEPEWPEW' })
        setTime(false)
    }
    const temp1 = useSelector(state => state.temp1)
    const getstyle = (statusname) => {
        if (statusname == filterStatus) return [AppStyle.StyleKingBread.touchable1, { backgroundColor: '#B738FF' }]
        return [AppStyle.StyleKingBread.touchable1, { backgroundColor: 'rgba(39,39,56,0.75)' }]
    }
    const productcombo = useSelector(state => state.productcombo)
    const filterStatus = useSelector(state => state.filterStatus)
    const getListProduct = () => {
        const productcombo = useSelector(state => state.productcombo)
        const productbanhmi = useSelector(state => state.productbanhmi)
        const productnuoc = useSelector(state => state.productnuoc)
        if (filterStatus === 'BANHMI') return productbanhmi
        if (filterStatus === 'NUOC') return productnuoc
        if (filterStatus === 'COMBO') return productcombo
    }
    let DataProduct = getListProduct();
    dispatch({ type: 'CATEGORIESPRODUCT', DataProduct: DataProduct })
    const sum = DataProduct && DataProduct.reduce((acc, curr) => {
        return (acc + curr.tongleprice)
    }, 0)
    dispatch({ type: 'SUM', sum: sum })
    const sumamount = DataProduct && DataProduct.reduce((accc, currr) => {
        return (accc + currr.amount)
    }, 0)
    dispatch({ type: 'SUMAMOUNT', sumamount: sumamount })
    const checkKingBread = useSelector(state => state.checkKingBread)
    const kingbread = useSelector(state => state.kingbread)
    const GOback = () => {
        navigation.goBack()
        dispatch({ type: 'KINGBREADFALSE' })
        dispatch({ type: 'FILTERSTATUS' })
    }
    const filterbanhmi = () => {
        dispatch({ type: 'FILTERBANHMI' })
        dispatch({ type: 'CHECKBANHMI' })
    }
    const filternuoc = () => {
        dispatch({ type: 'FILTERNUOC' })
        dispatch({ type: 'CHECKNUOC' })
    }
    const filtercombo = () => {
        dispatch({ type: 'FILTERCOMBO' })
        dispatch({ type: 'CHECKCOMBO' })
    }
    const buynow = () => {
        navigation.navigate('GioHang')
    }
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Bánh Mì Pew Pew - Vua Bánh Mì Kẹp || Ngon từ thịt ngọt từ người bán',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <SafeAreaView style={AppStyle.StyleScreenXacNhanSDT.container}>
            {
                time ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#8B3BFF" />
                    </View>
                    :
                    <View style={AppStyle.StyleVoucherCGV.container}>

                        {temp1 && temp1.map((item1) => {
                            const item =item1.name;
                            return (

                                // <View style={AppStyle.StyleVoucherCGV.header}>
                                //     <TouchableOpacity onPress={() => GOback()} >
                                //         <Image
                                //             width={10} height={18}
                                //             source={require('../img/back.png')}
                                //         />
                                //     </TouchableOpacity>
                                //     <Text key={item.id.toString()} style={AppStyle.StyleVoucherCGV.text}>{item.name}</Text>

                                      <Header onpress={GOback} item ={item}/>
                                // </View>

                              
                            )
                        }


                        )}

                        <View style={{ flex: 11 }}>
                            <ScrollView>
                                <SlideImg />
                                <View style={{ margin: 15 }}>
                                    {temp1 && temp1.map((item) => {
                                        return (
                                            <View key={item.id.toString()}>
                                                <Text style={AppStyle.StyleKingBread.text1}>{item.name} - Vua bánh mì kẹp</Text>
                                                <View style={AppStyle.StyleKingBread.content2}>
                                                    <Image
                                                        style={AppStyle.StyleKingBread.img1}
                                                        source={require('../img/vinh30.png')}
                                                    />
                                                    <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>{item.address}</Text>
                                                </View>
                                                <View style={AppStyle.StyleKingBread.content1}>
                                                    <View >
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>Mở cửa: </Text>
                                                            <Text style={[AppStyle.StyleKingBread.text, { color: '#B738FF' }]}>{item.openTime}</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text style={[AppStyle.StyleKingBread.text, { color: '#C9C9C9' }]}>Đóng cửa: </Text>
                                                            <Text style={[AppStyle.StyleKingBread.text, { color: '#B738FF' }]}>{item.closeTime}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity onPress={() => Communications.phonecall(item.phone, true)}>
                                                            <Image
                                                                style={{ width: 50, height: 36, marginRight: 20 }}
                                                                source={require('../img/vinh31.png')}
                                                            />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => onShare()}>
                                                            <Image
                                                                style={{ width: 50, height: 36, marginBottom: 10 }}
                                                                source={require('../img/vinh32.png')}
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })}
                                    <View style={{ margin: 10 }}>
                                        <View style={{ flexDirection: 'row' }}>

                                            <TouchableOpacity
                                                onPress={() => filtercombo()}
                                                style={getstyle('COMBO')}
                                            >
                                                <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Combo</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                onPress={() => filterbanhmi()}
                                                style={getstyle('BANHMI')}
                                            >
                                                <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Bánh Mì</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => filternuoc()}
                                                style={getstyle('NUOC')}>
                                                <Text style={[AppStyle.StyleKingBread.text, { color: '#FFFFFF', textAlign: 'center' }]}>Đồ Uống</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {/* <TouchableOpacity style={{width:20,height:30,backgroundColor:'white'}}
                                onPress={()=>truonganhvinh()}
                            >

                            </TouchableOpacity> */}
                                        {DataProduct && DataProduct.map((item) => <ListProduct key={item.id.toString()} myListProduct={item} />)}
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={AppStyle.StyleVoucherCGV.footer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={AppStyle.StyleVoucherCGV.img3}
                                    source={require('../img/vinh8.png')}
                                />
                                {checkKingBread ?
                                    <Text style={AppStyle.StyleVoucherCGV.text9}>0 đ</Text>
                                    :
                                    <Text style={AppStyle.StyleVoucherCGV.text9}>{sum}.000 đ</Text>
                                }

                            </View>
                            <View style={AppStyle.StyleVoucherCGV.footer1}>
                                {checkKingBread ?
                                    <Text style={AppStyle.StyleVoucherCGV.text10}>0</Text>
                                    :
                                    <Text style={AppStyle.StyleVoucherCGV.text10}>{sumamount}</Text>
                                }
                            </View>
                            <TouchableOpacity onPress={() => buynow()}>
                                <Image
                                    style={AppStyle.StyleVoucherCGV.img4}
                                    source={require('../img/vinh0.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
            }
        </SafeAreaView>
    )
}
export default KingBread;