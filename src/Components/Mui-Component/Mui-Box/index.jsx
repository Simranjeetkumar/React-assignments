import { Box } from '@mui/material'
import React from 'react'

const MuiBox = (props) => {
    const {children,className,...rest} = props;
  return (
    <>
    <Box className = {className} {...rest}>
        {children}
    </Box>
      
    </>
  )
}

export default MuiBox
