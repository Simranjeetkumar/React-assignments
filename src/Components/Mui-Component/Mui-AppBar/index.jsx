import { AppBar } from '@mui/material';
import React from 'react'

const MuiAppBar = (props) => {
    const{children,...rest} = props;
  return (
    <>
    <AppBar {...rest}>
        {children}

    </AppBar>
      
    </>
  )
}

export default MuiAppBar;
