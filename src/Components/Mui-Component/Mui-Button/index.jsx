import { Button } from '@mui/material'
import React from 'react'

const MuiButton = (props) => {
    const {children,...rest} = props;
  return (
    <>
    <Button {...rest}>{children}</Button>
      
    </>
  )
}

export default MuiButton
