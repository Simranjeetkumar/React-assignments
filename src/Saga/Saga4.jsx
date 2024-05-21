import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { post } from '../Service/ApiService'
import { ADD_ADMIN_SUCCESSFUL, USER_FETCH_REQUESTED } from '../store/Constants'





// worker Saga: will be fired on USER_FETCH_REQUESTED actions location

function* fetchUser(action) {
  try {
    
    const user = yield post(`v1/admin`,action.payload)
    alert(user.message)
    console.log('admin add',user.data.user.is_verified)

  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}




function* mySaga4() {
  yield takeLatest(ADD_ADMIN_SUCCESSFUL, fetchUser)
}

export default mySaga4