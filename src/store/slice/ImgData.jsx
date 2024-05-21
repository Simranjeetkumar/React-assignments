import { createSlice } from "@reduxjs/toolkit";


const ImgDataSlice = createSlice({
    name: 'ImgData',
    initialState: {data1:"",data2:"",data3:""},
    reducers: {
      // saveFormData(state,action){
      //   state.push(action.payload)
         
      // }
      setForm1(state,action){
        return {...state,data1:action.payload}
      },
      setForm2(state,action){
        return {...state,data2:action.payload}
      },
      setForm3(state,action){
        return {...state,data3:action.payload}
      }
      
    },
})

export default ImgDataSlice;
// export const {saveFormData} = ImgDataSlice.actions
export const {setForm1,setForm2,setForm3} = ImgDataSlice.actions