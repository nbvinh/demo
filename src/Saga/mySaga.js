// takeEvery() : thực thi và trả lại kết quả của mọi actions được gọi.
// takeLastest() : có nghĩa là nếu chúng ta thực hiện một loạt các actions, nó sẽ chỉ thực thi và trả lại kết quả của của actions cuối cùng.
// take() : tạm dừng cho đến khi nhận được action.
// put() : dispatch một action.
// call(): gọi function. Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết.
// race() : chạy nhiều effect đồng thời, sau đó hủy tất cả nếu một trong số đó kết thúc.
import { call, put, takeEvery, takeLatest , all} from 'redux-saga/effects';
import axios from "axios";
function* GetCategory() {
    let dulieuTheLoai;
    yield axios.get('http://175.41.184.177:6061/category').then(function (res) {
        dulieuTheLoai = res.data.data;
    });
    yield put({type: "TheLoai", TheLoai: dulieuTheLoai});
}

function* getCategoryAsyncData() {
    yield takeLatest("CATEGORY_FETCH_REQUESTED", GetCategory);
}

export default function* rootSaga(){
    yield all([getCategoryAsyncData()]);
}