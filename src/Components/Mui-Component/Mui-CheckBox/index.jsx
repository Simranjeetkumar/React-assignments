import React from 'react'
import Checkbox from '@mui/material/Checkbox';

const MuiCheckBox = (props) => {
    const{...rest} = props;
  return (
    <>
    <Checkbox {...rest}/>
      
    </>
  )
}

export default MuiCheckBox
