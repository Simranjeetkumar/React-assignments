import { createSlice } from "@reduxjs/toolkit";


const initialValues = createSlice({
    name: 'initialValues1',
     initialState :{
        title:"",
        content_type:"",
        company:{name:"",type:0},
        one_line_description:"",
        description:"",
        preparation_date:"",
        expiry_date:"",
        job_number:"",
        content_length:"",
        copyright_notice:"",
        declaration_long:"",
        declaration_short:"",
    },
    reducers: {
      
      setInitialValues(state,action){
      return {...state,
            title:action.payload.title,
            content_type:action.payload.content_type,
            one_line_description:action.payload.one_line_description,
            description:action.payload.description,
            // preparation_date:action.payload.preparation_date,
            // expiry_date:action.payload.expiry_date,
            job_number:action.payload.job_number,
            content_length:action.payload.content_length,
            copyright_notice:action.payload.copyright_notice,
            declaration_long:action.payload.declaration_long,
            declaration_short:action.payload.declaration_short
    }
      }
      
      
    },
})

export default initialValues;
// export const {saveFormData} = ImgDataSlice.actions
export const {setInitialValues} = initialValues.actions