import React from 'react'
import Paper from '@mui/material/Paper';

const MuiPaper = (props) => {
    const {...rest} = props;
  return (
    <>
      <Paper {...rest}/>
    </>
  )
}

export default MuiPaper
