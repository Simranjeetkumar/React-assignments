import { createSlice } from "@reduxjs/toolkit";


const ContentSearch = createSlice({
    name: 'ContentSearch',
     initialState :[],
    reducers: {
      SearchData(state, action) {
       return state=action.payload
      },
     
    },
})

export default ContentSearch;
export const {SearchData} = ContentSearch.actions