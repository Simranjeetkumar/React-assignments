import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { patch, post } from '../Service/ApiService'
import { ADD_ADMIN_SUCCESSFUL, EDIT_ADMIN_SUCCESSFUL, USER_FETCH_REQUESTED } from '../store/Constants'





// worker Saga: will be fired on USER_FETCH_REQUESTED actions location

function* fetchUser(action) {
  try {
    
    const user = yield patch(`v1/admin/${action.id}`,action.payload)
    alert(user.message)
    console.log('admin add',user)

  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}




function* mySaga5() {
  yield takeLatest(EDIT_ADMIN_SUCCESSFUL, fetchUser)
}

export default mySaga5