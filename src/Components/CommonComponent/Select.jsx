import { Field } from 'formik';
import React from 'react'
import { MuiBox } from '../Mui-Component';

const Select = (props) => {
    const {name,label,options,...rest} = props;
  return (
    <MuiBox className='marginForForm'>
        <label htmlFor={name}>{label}</label>
        <Field as='select' name = {name} id = {name} {...rest}>
            {options.map((option)=>{
                return <option key={option._id} value={option.name}>{option.name}
                </option>

            })}
        </Field>
      
    </MuiBox>
  )
}

export default Select
