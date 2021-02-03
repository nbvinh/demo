const initState = {
    data: [
        {
            id: 1,
            isChecked: false,
            tongdiem : false,
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
    isShow: false,
    checkpoint: false
};
const reducer = (state = initState, action) => {
    switch (action.type) {
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
        case 'CHECKPOINT':
            return {
                ...state, checkpoint: true
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
        default:
            return state
    }
}
export default reducer;