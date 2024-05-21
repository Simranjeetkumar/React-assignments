import { createSlice } from "@reduxjs/toolkit";


const EditImgUrl = createSlice({
    name: 'EditImgUrl',
     initialState :{},
    reducers: {
      setEditImgUrl(state, action) {
      return state = action.payload
      },
     
    },
})

export default EditImgUrl;
export const {setEditImgUrl} = EditImgUrl.actions