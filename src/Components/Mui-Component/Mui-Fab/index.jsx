import React from 'react'
import Fab from '@mui/material/Fab';


const MuiFab = (props) => {
    const{className,children,...rest} = props;
  return (
    <>
      <Fab className={className} {...rest}>
        {children}
      </Fab>
    </>
  )
}

export default MuiFab
