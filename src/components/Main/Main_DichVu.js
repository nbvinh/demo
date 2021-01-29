// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Alert, Image } from "react-native";
// import { ScrollView } from 'react-native-gesture-handler';
// import AppStyle from "../../theme";
// const Main_DichVu = (imgL, imgR_T, imgR_B, imgCty) =>{
//     return(
//         <View style={AppStyle.StyleMain.DichVu}>
//             <View style={AppStyle.StyleMain.DichVu_Top}>
//                 <View style={AppStyle.StyleMain.DichVu_Left}>
//                     <Image
//                         style={{width:"100%", height:'100%'}}
//                         source={require('../img/' + {imgL} + '.png')}
//                     />
//                 </View>
//                 <View style={AppStyle.StyleMain.DichVu_Right}>
//                     <View style={AppStyle.StyleMain.DichVu_RightItem}>
//                         <Image
//                             style={{width:"100%", height:'95%', borderRadius: 8}}
//                             source={require('../img/' + {imgR_T} + '.png')}
//                         />
//                     </View>
//                     <View style={AppStyle.StyleMain.DichVu_RightItem}>
//                         <Image
//                             style={{width:"100%", height:'95%',  borderRadius: 8}}
//                             source={require('../img/' + {imgR_B} + '.png')}
//                         />
//                     </View>
//                 </View>
//             </View>
//             <View style={{width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', left: -12, bottom: 50, zIndex: 99}}/>
//             <View style={{width: 25, height: 25, borderRadius: 50, backgroundColor: 'black', position: 'absolute', right: -12, bottom: 50, zIndex: 99}}/>
//             <View style={AppStyle.StyleMain.DichVu_Bottom}>
//                 <View style={AppStyle.StyleMain.DichVu_Bottom_Top}>
//                     <Image
//                                 style={{width:36, height: 36}}
//                                 source={require('../img/' + {imgCty} + '.png')}
//                      />
//                      <View style={{width: '80%' , marginLeft: 10}}>
//                                 <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextTieuDe}> Voucher CGV Cinema </Text>
//                                 <Text style={AppStyle.StyleMain.DichVu_Bottom_Top_TextDuoi}> CGV Cinema - Tầng 5 Hà Nội Center Point</Text>
//                      </View>
//                 </View>
//                 <View style={AppStyle.StyleMain.DichVu_Bottom_Bottom}>
//                         <View  style={AppStyle.StyleMain.DichVu_Bottom_BottomLeft}>
//                                 <Text style={{marginLeft: 5,color:'white', fontSize: 17, fontWeight:'700'}}>88.000 đ</Text>
//                                 <Text style={{color:'#9B9EA3', fontSize: 15, fontWeight:'400', textDecorationLine:'line-through', marginLeft: 10}}>100.000 đ</Text>
//                         </View>
//                         <View  style={AppStyle.StyleMain.DichVu_Bottom_BottomRight}>
//                             <Text style={{marginRight: 5,color:'white', fontSize: 13, fontWeight:'400'}}><Image
//                                 style={{width:18, height: 18}}
//                                 source={require('../img/Iconly-Light-Location2.png')}
//                      /> 2,5 km</Text> 
//                         </View>
//                 </View>
//             </View>
//        </View>
//     );
// }
// export default Main_DichVu;