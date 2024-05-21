/* eslint-disable no-unused-vars */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { post } from '../Service/ApiService'
import { USER_FETCH_REQUESTED } from '../store/Constants'
import { saveToken } from '../store/slice/TokenSlice'
import LocalStorageService from '../Service/LocalStorageService'
import history from './History/History'
import { toast } from 'react-toastify'






// worker Saga: will be fired on USER_FETCH_REQUESTED actions location

function* fetchUser(action) {
  try {
    
  //   const user = yield post(`v1/auth/login`,action.payload)
   
  //  if(user.message == 'User logged in successfully.'){

  //    toast(user.message)
  //  }
  //  else{
  //   console.log('user')
  //   toast.error('error', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //     });
  //  }

  //   yield put(saveToken(user.data))
    // localStorage.setItem("adminName",user.data.first_name)
    // localStorage.setItem("role",user.data.role)
    //  LocalStorageService.setToken(user.data.accessToken)
    // localStorage.setItem("adminName",'sanjay')
    localStorage.setItem("role",99)
    // localStorage.setItem("role",2)

     LocalStorageService.setToken('token')
    history.push('/admin/dashboard');

    // console.log(user.data.accessToken)
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}




function* mySaga1() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUser)
}

export default mySaga1