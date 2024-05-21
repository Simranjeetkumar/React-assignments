import React from 'react'
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { ErrorMessage, Field } from 'formik';
import { MuiBox } from '../Mui-Component';

const DatePicker = (props) => {
    const{name,label,...rest} = props
  return (
    <MuiBox className='marginForForm widthUser'>
        <MuiBox>
        <label htmlFor={name}>{label}</label>
        </MuiBox>
        <Field name={name}>
            {({form,field})=>{
                const{setFieldValue}= form;
                const{value} = field
          
                return  <DateView id = {name} {...field} {...rest} selected={value} onChange= { val=>setFieldValue(name,val)}/>
            }}

           
        </Field>
        <ErrorMessage name={name} >
                    {(error)=>{
                        return <div className='error_div'>{error}</div>
                    }}
        </ErrorMessage>
      
    </MuiBox>
  )
} 

export default DatePicker
