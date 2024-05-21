import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { post } from '../Service/ApiService'
import { USER_VERIFY_EMAIL } from '../store/Constants'
import { saveToken } from '../store/slice/TokenSlice'





// worker Saga: will be fired on USER_FETCH_REQUESTED actions location
// function forwardTo(location) {
//   history.push(location);

// }
function* fetchUser(action) {
  try {
    const user = yield post(`v1/auth/forgot-password`,action.payload)
    // yield put(saveToken(user.data.accessToken)),
    // yield call(forwardTo,'/admin/dashboard');
    alert(user. message)
    console.log(user)
  } catch (e) {
   console.log( e.message )
  }
}




function* mySaga2() {
  yield takeLatest(USER_VERIFY_EMAIL, fetchUser)
}

export default mySaga2