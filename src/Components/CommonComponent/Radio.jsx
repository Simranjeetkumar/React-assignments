import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { MuiBox, MuiTypography } from '../Mui-Component';

const Radio = (props) => {
    const {name,options,label,...rest} = props;
   
  return (
    <>
    <MuiBox className='marginForForm'>
        <MuiTypography> <label>{label}</label></MuiTypography>
    <div className='signUpBottomBox '>
        <Field  name={name}  {...rest}>
          
            {({field})=>{
                return options.map((option)=>{  
                    return(
                    <React.Fragment key={option.key}>
                        <MuiBox>
                        <input type="radio" id={option.value} {...field}  value={option.value}   checked={field.value === option.value}/>
                        <label htmlFor={option.value} className='mlUser'>{option.key}</label>
                        </MuiBox>
                        </React.Fragment>
                        
                        ) 
                })
            }}
         

        </Field>
        <ErrorMessage name={name} >
                    {(error)=>{
                        return <div className='error_div'>{error}</div>
                    }}
        </ErrorMessage>
      
    </div>
    </MuiBox>
    </>
  )
}

export default Radio
