import { Container } from '@mui/material'
import React from 'react'

const MuiContainer = (props) => {
    const {children,...rest} = props;
  return (
    <>
    <Container {...rest}>
        {children}
    </Container>
      
    </>
  )
}

export default MuiContainer
