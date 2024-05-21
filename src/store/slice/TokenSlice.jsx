import { createSlice } from "@reduxjs/toolkit";


const TokenSlice = createSlice({
    name: 'Token',
    initialState: {data:""},
    reducers: {
      saveToken(state, action) {
        // LocalStorageService.setToken(action.payload)
       return {...state,data:action.payload,token:action.payload.accessToken}
      },
      
    },
})

export default TokenSlice;
export const {saveToken} = TokenSlice.actions