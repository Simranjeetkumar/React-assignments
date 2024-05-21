import { createSlice } from "@reduxjs/toolkit";


const PaginationCount = createSlice({
    name: 'PaginationCount',
    initialState: {totalPage:""},
    reducers: {
      setTotalPage(state, action) {
       return {...state,totalPage:action.payload}
      },
      
      
    },
})

export default PaginationCount;
export const {setTotalPage} = PaginationCount.actions