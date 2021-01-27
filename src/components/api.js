import axios from "axios";
const instance = axios.create({
    baseURL: 'http://175.41.184.177:6061/api/v1.0/customer',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json' 
    },
    timeout: 20000
});

export const send_otp = (sdt) => instance.post('/send-otp', sdt);
// .then((res) => {
//     let KQ = JSON.stringify(res.data.data.token);
//     console.log("KQ Trả về " + KQ)
// });

export const confirm_otp = (tamp) => instance.post('/confirm-otp', tamp);
export const update_info = (tamp,hy) => instance.post('/update-info', tamp,hy);
