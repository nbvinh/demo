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
            Promotion: 10,
            Gia: 300000,
            text1: 'Giảm 10k cho hóa đơn tối thiểu 300k',
            hsd: '30/12/2020',
            img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/4c/61/7e/4c617e02-c308-78c9-b220-58c3474caec0/source/512x512bb.jpg'
        },
        {
            id: 2,
            Promotion: 20,
            Gia: 500000,
            text1: 'Giảm 20k cho hóa đơn tối thiểu 500k',
            hsd: "30/12/2020",
            img: 'https://www.onlinefabricstore.net/images/product-images/lg/PP1128_1.jpg',
        },
        {
            id: 3,
            Promotion: 20,
            Gia: 500000,
            text1: 'Giảm 20k cho hóa đơn tối thiểu 500k',
            hsd: '30/12/2020',
            img: 'https://www.onlinefabricstore.net/images/product-images/lg/PP1128_1.jpg',

        },
        {
            id: 4,
            Promotion: 10,
            Gia: 300000,
            text1: 'Giảm 10k cho hóa đơn tối thiểu 300k',
            hsd: '30/12/2020',
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUtXYUFKLzfAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
        },
    ],
    abc: '',
    isShow: false,
    lienket: false,
    priceCGV: 0,
    price: 88,
    value: 0,
    diem: 1000,
    choosevoucher: true,
    province: false,
    ShowpaymentCGV: false,
    filterStatus: '',
    checkKingBread: true,
    kingbread: false,
    confirm: false,
    history_point: [],
    bills: [],
    billsCGV: [],
    image: 'https://s120-ava-talk.zadn.vn/1/c/1/5/36/120/7782ef664d5ed9e76e23b4d91ec9baad.jpg',
    product : [],
    productafter: []
};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'PRODUCTAFTER' :
            return{ ...state, productafter: action.productafter}
        case 'ADDPRODUCT':
            let newproduct =[...state.product]
            newproduct.push({id: action.id , name: action.name , price : action.price, amount: action.amount})
            return {...state,product: newproduct}
        case 'IMAGES':
            return { ...state, image: action.image }
        case 'COMFIRM':
            return { ...state, confirm: true }
        case 'SUMGIOHANG':
            const sumarr = [...state.arrPromotion]
            sumarr.map((e) => {
                if (e.id == 1) e.dieukien = true
                else e.dieukien = false
            })
            return {
                ...state, arrPromotion: sumarr
            }
        case 'KINGBREAD':
            return { ...state, kingbread: true }
        case 'KINGBREADFALSE':
            return { ...state, kingbread: false }
        case 'CHECKKINGBREAD':
            return { ...state, checkKingBread: false }
        case 'CHECKCOMBO':
            let tongcheck = [...state.productcombo]
            tongcheck.map((item) => {
                if (item.id > 0) {
                    item.tongleprice = 0
                    item.amount = 0
                }
            })
            return { ...state, productcombo: tongcheck }
        case 'CHECKNUOC':
            let tongcheck1 = [...state.productnuoc]
            tongcheck1.map((item) => {
                if (item.id > 0) {
                    item.tongleprice = 0
                    item.amount = 0
                }
            })
            return { ...state, productnuoc: tongcheck1 }
        case 'CHECKBANHMI':
            let tongcheck2 = [...state.productbanhmi]
            tongcheck2.map((item) => {
                if (item.id > 0) {
                    item.tongleprice = 0
                    item.amount = 0
                }
            })
            return { ...state, productbanhmi: tongcheck2 }
        case 'OPENUPCOMBO':
            let openUp = [...state.productcombo]
            let openUpitem = openUp.find((comboitem) => comboitem.id == action.id)
            if (openUpitem) {
                openUpitem.OpenUP = true
            }
            return { ...state, productcombo: openUp }
        case 'OPENUPNUOC':
            let openUp1 = [...state.productnuoc]
            let openUpitem1 = openUp1.find((comboitem) => comboitem.id == action.id)
            if (openUpitem1) {
                openUpitem1.OpenUP = true
            }
            return { ...state, productnuoc: openUp1 }
        case 'OPENUPBANHMI':
            let openUp2 = [...state.productbanhmi]
            let openUpitem2 = openUp2.find((comboitem) => comboitem.id == action.id)
            if (openUpitem2) {
                openUpitem2.OpenUP = true
            }
            return { ...state, productbanhmi: openUp2 }
        case 'PRICEITEMPRODUCTBANHMI':
            let PriceState = [...state.DataProduct]
            PriceState.find((item) => {
                if (item.id == action.id) {
                    item.tongleprice = item.price * item.amount
                }
            })
            return { ...state, DataProduct: PriceState }
        case 'UPITEMPRODUCTCOMBO':
            let newStateUP1 = [...state.productcombo]
            let newItem1 = newStateUP1.find((item) => {
                return item.id == action.id
            })
            newItem1.amount++
            return { ...state, productcombo: newStateUP1 }
        case 'UPITEMPRODUCTNUOC':
            let newStateUP2 = [...state.productnuoc]
            let newItem2 = newStateUP2.find((item) => {
                return item.id == action.id
            })
            newItem2.amount++
            return { ...state, productnuoc: newStateUP2 }
        case 'UPITEMPRODUCTBANHMI':
            let newStateUP3 = [...state.productbanhmi]
            let newItem3 = newStateUP3.find((item) => {
                return item.id == action.id
            })
            newItem3.amount++
            return { ...state, productbanhmi: newStateUP3 }
        case 'DOWNITEMPRODUCTCOMBO':
            let newState0 = [...state.productcombo]
            newState0.find((item) => {
                if (item.id == action.id) {
                    item.amount--
                }
            })
            return { ...state, productcombo: newState0 }
        case 'DOWNITEMPRODUCTBANHMI':
            let newState2 = [...state.productbanhmi]
            newState2.find((item) => {
                if (item.id == action.id) {
                    item.amount--
                }
            })
            return { ...state, productbanhmi: newState2 }
        case 'DOWNITEMPRODUCTNUOC':
            let newState1 = [...state.productnuoc]
            newState1.find((item) => {
                if (item.id == action.id) {
                    item.amount--
                }
            })
            return { ...state, productnuoc: newState1 }
        case 'ADDBILL':
            let newBills = [...state.bills]
            newBills.push({ id: action.id, sum: action.sum, tilte: 'Bánh Mì Pew Pew', sumamount: action.sumamount, product: action.product })
            return { ...state, bills: newBills,product:[] }
        case 'ADDBILLCGV':
            let newBillsCGV = [...state.billsCGV]
            newBillsCGV.push({ id: action.id, priceCGV: action.priceCGV, value: action.value, tilte: 'Voucher CGV Cinema' })
            return { ...state, billsCGV: newBillsCGV }
        case 'FILTERSTATUS':
            return { ...state, filterStatus: "" }
        case 'FILTERCOMBO':
            return { ...state, filterStatus: "COMBO" }
        case 'FILTERNUOC':
            return { ...state, filterStatus: "NUOC" }
        case 'FILTERBANHMI':
            return { ...state, filterStatus: "BANHMI" }
        case 'PRODUCTBANHMI':
            return { ...state, productbanhmi: action.productbanhmi }
        case 'PRODUCTNUOC':
            return { ...state, productnuoc: action.productnuoc }
        case 'PRODUCTCOMBO':
            return { ...state, productcombo: action.productcombo }
        case 'SUM':
            return { ...state, sum: action.sum }
        case 'SUMAMOUNT':
            return { ...state, sumamount: action.sumamount }
        case 'CATEGORIESPRODUCT':
            return { ...state, DataProduct: action.DataProduct }
        case 'IMAGESBANHMI':
            return { ...state, imagesbanhmi: action.imagesbanhmi }
        case 'BanhMiPEWPEW':
            return { ...state, temp1: action.temp1 }
        case 'HOTEN':
            return { ...state, hoten: action.hoten }
        case 'TOCKEN':
            return { ...state, abc: action.abc }
        case 'SHOWPAYMENTCGV':
            return { ...state, ShowpaymentCGV: true }
        case 'ADDDATA1':
            return { ...state, data1: action.data1 }
        case 'CHOOSEDATA1':
            const arr2 = [...state.data1]
            arr2.map((e) => {
                if (e.provinceId === action.provinceId) {
                    e.isChooseProvince = true
                }
                else {
                    e.isChooseProvince = false
                }
            })
            return {
                ...state, data1: arr2
            }
        case 'MODALPROVINCE':
            return { ...state, province: !state.province }
        case 'CONFIRMVOUCHER':
            return { ...state, conmfirmvoucher: true }
        case 'CHOOSEVOUCHER':
            return { ...state, choosevoucher: false }
        case 'CHOOSEVOUCHERTRUE':
            return { ...state, choosevoucher: true }
        case 'ADD':
            return { ...state, hoten: action.hoten }
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
        case 'CATEGORY':
            return { ...state, phanloai: action.phanloai }
        case 'DATA_VOUCHER':
            return { ...state, voucher: action.voucher }
        case 'IDLOAI':
            return { ...state, id: action.id }
        case 'UPDIEM':
            return { ...state, diem: parseInt(state.diem) + parseInt(action.diem) }
        case 'SDT':
            return { ...state, SDT: action.SDT }
        case 'Email':
            return { ...state, Email: action.Email }
        case 'Reset_Diem': {
            return { ...state, diem: 0 }
        }
        case 'HISTORY_POINT': {
            let arr_point = [...state.history_point]
            arr_point.push({ point: action.point + '', phuongthuc: action.phuongthuc, time: action.tỉme })
            return { ...state, history_point: arr_point }
        }
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