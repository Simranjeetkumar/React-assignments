import { Typography } from '@mui/material'
import React from 'react'

const MuiTypography = (props) => {
    const {children,...rest} = props
  return (
    <>
    <Typography {...rest}>
        {children}
    </Typography>
      
    </>
  )
}

export default MuiTypography
