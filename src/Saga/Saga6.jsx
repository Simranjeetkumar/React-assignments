import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { patch, post } from '../Service/ApiService'
import { CREATE_PASSWORD_SUCCESSFUL} from '../store/Constants'
import history from './History/History'





// worker Saga: will be fired on USER_FETCH_REQUESTED actions location

function* fetchUser(action) {
  try {
    const txt = '\n click ok to go back login Screen';
    const user = yield patch(`v1/auth/verify-email/${action.id}`,action.payload)
    confirm(user.message+txt)==true?history.push('/login'):null
    console.log('admin add',user)

  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}




function* mySaga6() {
  yield takeLatest(CREATE_PASSWORD_SUCCESSFUL, fetchUser)
}

export default mySaga6