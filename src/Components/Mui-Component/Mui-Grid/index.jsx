import { Grid } from '@mui/material'
import React from 'react'

const MuiGrid = (props) => {
    const {className,children,...rest} = props;
  return (
    <>
    <Grid className={className} {...rest}>
        {children}
    </Grid>
      
    </>
  )
}

export default MuiGrid
