import { createSlice } from "@reduxjs/toolkit";


const SearchData = createSlice({
    name: 'holdSearchData',
     initialState:[],
    reducers: {
      setSearchData(state, action) {
       return state = action.payload
      },
     
    },
    
})

export default SearchData;
export const {setSearchData} = SearchData.actions