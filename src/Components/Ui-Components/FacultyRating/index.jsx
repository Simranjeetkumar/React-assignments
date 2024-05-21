import React, { useState } from 'react'
import { MuiBox, MuiButton, MuiPaper, MuiTypography } from '../../Mui-Component'
import Rating from '@mui/material/Rating';

const FacultyRating = () => {
    const [value, setValue] = useState(0);
  return (
    <MuiPaper  className=' facultyPaper'>
        <MuiBox className='SearchFieldContainer'>
        <MuiTypography component="legend">Facult(Rating)</MuiTypography>
      <Rating
        ame="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </MuiBox>
        <MuiBox className='facultDes'>
        <MuiTypography component="legend">Facult(Review)</MuiTypography>
      <textarea placeholder='Facult Review '  className='facultDes facultDes1 '/>
      
      </MuiBox>
      <MuiBox className='facultyBtn'>
        <MuiButton className='bgForSubmit'>Close</MuiButton>
      </MuiBox>
    </MuiPaper>
  )
}

export default FacultyRating
