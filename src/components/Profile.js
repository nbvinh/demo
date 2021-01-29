import axios from 'axios';
import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity, Image ,Alert} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {update_info  } from "./api";

const Profile = ({route, navigation}) => {
    
    const [hoten,setHoten] =useState("");
    const [follow_hoten,setFollow_hoten] =useState(false);

   
    const SDT = route.params.SDT;
    const result = route.params.abc;
    const [Email,setEmail] = useState("");
    const[follow_email,setFollow_email] = useState(false);

  
    const onupdate_info = async () =>{
        try {
            // const result = await update_info ({
            //     "email": Email,
            //     "full_name": hoten,
            //     "phone_number": SDT +""
            // }, {
                
            // })
            axios.post(`http://175.41.184.177:6061//api/v1.0/customer/update-info`, {
                email: Email,
                full_name:  hoten,
                phone_number: SDT,
            }, { headers: { 'Authorization': `Bearer + ${result}` } })
            
                .then((response) => response.data)
                .then((json) => {
                  console.log(json)
                })
                // console.log(result)
            // console.log("token là :"+ result);
              Alert.alert('Thông báo', 'Bạn đã CẬP nhật thành công');
              navigation.navigate('Tabviewmain');
              
          } catch (error) {
              Alert.alert('Thông báo', error + '');
          }
    }
    //ho ten  
    function onchangText(text) {
         if(text.length  == 0){
            setFollow_hoten(false);
        }
        else{
            setFollow_hoten(true);
        }
        setHoten({hoten:text})
    }

    //so dien thoai
    function onchangDt(number){
        if(number.length > 10){
           setFollow_sdt(true);
       }
       else{
           setFollow_sdt(false);
       }
       setSDT({SDT:number})
   }

   //email
   function onchangEmail(email){
    if(email.length == 0){
       setFollow_email(false);
   }
   else{
       setFollow_email(true);
   }
   setEmail({Email:email})
}
    return ( 
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 50, marginLeft: 15}}>
                    <Image
                        width={10} height={18}
                        source={require('../img/back.png')}
                    />
                </TouchableOpacity>
           <Text style={styles.header}>Thông Tin Cá Nhân</Text>
           <View style={styles.body}>
                <View style={styles.block}>
                    <Text style={styles.title}>Họ và Tên <Text style={{color: 'red'}}>*</Text></Text>
                    <View style={styles.parent_input}>
                        <TextInput placeholder='Mời nhập họ và tên của bạn'
                         style={styles.textinput} 
                         placeholderTextColor='rgba(255, 255, 255, 0.3)'
                         onChangeText={(text)=>onchangText(text)}
                         />
                    </View>
                </View>   
                <View style={styles.block}>
                    <Text style={styles.title}>Số Điện Thoại <Text style={{color: 'red'}}>*</Text></Text>
                    <View style={styles.parent_input}>
                        <TextInput placeholder='Mời nhập số điện thoại của bạn' 
                        style={styles.textinput} 
                        placeholderTextColor='rgba(255, 255, 255, 0.3)'
                         keyboardType='numeric'
                        value={SDT}
                         />
                    </View>
                </View>   
                <View style={styles.block}>
                    <Text style={styles.title}>Email</Text>
                    <View style={styles.parent_input}>
                        <TextInput placeholder='Mời nhập Email của bạn' 
                        style={styles.textinput}
                         placeholderTextColor='rgba(255, 255, 255, 0.3)'
                         onChangeText={(email)=>onchangEmail(email)}

                         />
                    </View>
                </View>     
                          
           </View>
           <View style={styles.footer}>
               {follow_hoten  ?
               <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} 
               colors={['#8B3BFF','#B738FF']} style={{opacity:1, height: 48, justifyContent:'center', alignItems: 'center',   borderRadius:8}}>
                   <TouchableOpacity follow_hoten={follow_hoten}  
                    style={[styles.touchable]} onPress = {onupdate_info}>
                       <Text style={styles.button1}>Hoàn thành</Text>
                   </TouchableOpacity>
               </LinearGradient>
               :
               <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} 
                colors={['#B738FF','#8B3BFF']} style={{opacity:0.2,  height: 48, justifyContent:'center', alignItems: 'center',    borderRadius:8}}>
                   
                        <Text style={styles.button1}>Hoàn thành</Text>
                    
                </LinearGradient>

               }
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        marginTop: 110,
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginHorizontal: 10
    },
    title: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 30
    },
    body: {
        marginHorizontal: 15,
        marginTop: 2

    },
    parent_input: {
        flex: 1,
    },
    textinput: {
        borderColor: 'red',
        height: 48,
        backgroundColor: '#272738',
        color: '#FFFFFF',
        borderRadius: 8,
        marginVertical: 10,
        padding: 18,
    },
    block:{
        marginVertical:22
    },
    button1:{
        color:'white',
        fontSize: 17
    },
    footer:{
        marginVertical:75,marginHorizontal: 11
    },
    touchable:{
        borderRadius:58,
       
    }
});
export default Profile;