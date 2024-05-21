import React from 'react'
import { ErrorMessage, Field } from 'formik';
import { MuiBox } from '../Mui-Component';


const TextArea = (props) => {
    const{name,label,className,...rest} = props;
  return (
    <MuiBox className='marginForForm'>
        <label htmlFor={name}>{label}</label>
        <Field as='textarea' className={className} name={name} id={name} {...rest}/>
        <ErrorMessage name={name} >
                    {(error)=>{
                        return <div className='error_div'>{error}</div>
                    }}
        </ErrorMessage>

      
    </MuiBox>
  )
}

export default TextArea
