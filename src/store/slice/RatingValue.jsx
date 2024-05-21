import { createSlice } from "@reduxjs/toolkit";


const RatingValue = createSlice({
    name: 'RatingValue',
    initialState: { value:0},
    reducers: {
      setRatingValue(state, action) {
       return {...state,value:action.payload}
      },
      
      
    },
})

export default RatingValue;
export const {setRatingValue} = RatingValue.actions