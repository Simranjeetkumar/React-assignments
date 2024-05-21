import { createSlice } from "@reduxjs/toolkit";


const EditValues = createSlice({
    name: 'id1',
     initialState :{
        first_name:"",
        email: "",
        last_name:""
      },
    reducers: {
      setValues(state, action) {
       return {...state,first_name:action.payload[0],email:action.payload[1],last_name:action.payload[2]}
      },
     
    },
})

export default EditValues;
export const {setValues} = EditValues.actions