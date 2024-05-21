import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({label,className}) {
  return (
    <FormGroup className={className}>
      <FormControlLabel  required control={<Checkbox className='checkBox1' sx={{ '& .MuiSvgIcon-root': { backgroundColor:` #010E1F`,color:'white'} }}  />} label={label} />
    </FormGroup>
  );
}
