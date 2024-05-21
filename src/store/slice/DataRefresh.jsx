import { createSlice } from "@reduxjs/toolkit";


const DataRefresh = createSlice({
    name: 'reloadApi',
     initialState :false,
    reducers: {
      newValue(state, action) {
      return state==false? state=true:state=false
      },
     
    },
})

export default DataRefresh;
export const {newValue} = DataRefresh.actions