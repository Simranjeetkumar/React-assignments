import React from 'react'
import { MuiPaper } from '../../Mui-Component'
import AddDocumentForm1 from '../../CommonComponent/AddDocumentForm1'

const Form1 = ({initialValues,onSubmit}) => {
  return (
    <>
      <MuiPaper className='formPaper inputFeild ' >
        <AddDocumentForm1 onSubmit = {onSubmit} initialValues = {initialValues}/>

      </MuiPaper>
    </>
  )
}

export default Form1
