import React from 'react'
import { ErrorMessage, Field } from 'formik';
import { MuiBox } from '../Mui-Component';
import TextField from '@mui/material/TextField';


const Input = (props) => {
    const{name,label,...rest} = props;
  return (
    <>
    <div className='div_container'>
      <Field id={name} name={name} {...rest} />
     
      <ErrorMessage name={name} >
                    {(error)=>{
                        return <MuiBox className='error_div'>{error}</MuiBox>
                    }}
        </ErrorMessage>
      </div>
    </>
  )
}

export default Input
