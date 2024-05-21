import { createSlice } from "@reduxjs/toolkit";


const MenuValue = createSlice({
    name: 'value',
    initialState: {value:'',page:1},
    // initialState:"",
    reducers: {
      saveValue(state, action) {
      //  return state=action.payload
       return {...state,value:action.payload}
      },
      savePage(state,action){
        return {...state,page:action.payload}
      }
      
    },
})

export default MenuValue;
export const {saveValue,savePage} = MenuValue.actions