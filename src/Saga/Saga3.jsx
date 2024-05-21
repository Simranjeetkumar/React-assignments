import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { patch, post } from '../Service/ApiService'
import { RESET_PASSWORD_SUCCESSFUL} from '../store/Constants'
import { saveToken } from '../store/slice/TokenSlice'
import history from './History/History'
import { MuiBox, MuiTypography } from '../Components/Mui-Component'




// worker Saga: will be fired on USER_FETCH_REQUESTED actions location
function forwardTo(location) {
  history.push(location);

}
function* fetchUser(action) {
  try {
    const txt = '\n click ok to go back login Screen';
    const user = yield patch(`v1/auth/verify-email/${action.id}`,action.payload)
    confirm(user.message+txt)==true?history.push('/login'):null
    console.log('id',user.message)
  } catch (e) {
    console.log(e.message)
  }
}




function* mySaga3() {
  yield takeLatest(RESET_PASSWORD_SUCCESSFUL, fetchUser)
}

export default mySaga3