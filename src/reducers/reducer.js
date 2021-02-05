const initState = {
    data: [
        {
            id: 1,
            isChecked: false,
            tongdiem: false,
            text: 'Thanh toán bằng điểm',
            img: 'https://media1.nguoiduatin.vn/thumb_x600x600/media/duong-thi-thu-nga/2018/04/09/mau-tim.jpg',
        },
        {
            id: 2,
            isChecked: false,
            text: 'ATM/ VISA/ MASTER/ JCB hoặc Cửa hàng tiện lợi.',
            img: 'http://theme.hstatic.net/200000051220/1000555598/14/egageneralbadgeelements2img.jpg?v=692',
        },
        {
            id: 3,
            isChecked: false,
            text: ' Ví điển tử MoMo',
            img: 'https://static.mservice.io/img/logo-momo.png'
        },
        {
            id: 4,
            isChecked: false,
            text: 'VNPay',
            img: 'https://downloadlogomienphi.com/sites/default/files/logos/download-logo-vector-vnpayqr-noqr-mien-phi.jpg',
        }
    ],
    arrPromotion: [
        {
            id: 1,
            Promotion: 10000,
            Gia: 300000,
            text1: 'Giảm 10k cho hóa đơn tối thiểu 300k',
            hsd: '30/12/2020',
            dieukien: true,
            img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/4c/61/7e/4c617e02-c308-78c9-b220-58c3474caec0/source/512x512bb.jpg'
        },
        {
            id: 2,
            Promotion: 20000,
            Gia: 500000,
            text1: 'Giảm 20k cho hóa đơn tối thiểu 500k',
            hsd: "30/12/2020",
            dieukien: false,
            img: 'https://www.onlinefabricstore.net/images/product-images/lg/PP1128_1.jpg',
        },
        {
            id: 3,
            Promotion: 20000,
            Gia: 500000,
            text1: 'Giảm 20k cho hóa đơn tối thiểu 500k',
            hsd: '30/12/2020',
            dieukien: false,
            img: 'https://www.onlinefabricstore.net/images/product-images/lg/PP1128_1.jpg',

        },
        {
            id: 4,
            Promotion: 10000,
            Gia: 300000,
            text1: 'Giảm 10k cho hóa đơn tối thiểu 300k',
            hsd: '30/12/2020',
            dieukien: false,
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUtXYUFKLzfAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
        },
    ],
    isShow: false,
    lienket: false,
    priceCGV: 0,
    price: 88000,
    value: 0,
};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHOOSE':
            const arr1 = [...state.arrPromotion]
            arr1.map((e) => {
                if (e.id === action.id) {
                    e.isChoose = true
                }
                else {
                    e.isChoose = false
                }
            })
            return {
                ...state, arrPromotion: arr1
            }

        case 'PRICECGV':
            return { ...state, priceCGV: state.price * state.value }
        case 'UPVALUE':
            return { ...state, value: state.value + 1 }
        case 'DOWNVALUE':
            return { ...state, value: state.value - 1 }
        case 'ISCHECK':
            const temp = [...state.data]
            temp.map((e) => {
                if (e.id === action.id) {
                    e.isChecked = true
                }
                else {
                    e.isChecked = false
                }
            })
            return {
                ...state, data: temp
            }
        case 'ISSHOW':
            return {
                ...state, isShow: true
            }
        case 'TONGDIEM':
            const arr = [...state.data]
            arr.map((e) => {
                if (e.id === 3) {
                    e.tongdiem = true
                }
                else {
                    e.tongdiem = false
                }
            })
            return {
                ...state, data: arr
            }
        case 'LIENKET':
            return { ...state, lienket: true }
        default:
            return state
    }
}
export default reducer;
// import dataReducer from "./data";

// import { combineReducers } from "redux";


// const reducer = combineReducers({
//     data : dataReducer,

// });

// export default reducer;