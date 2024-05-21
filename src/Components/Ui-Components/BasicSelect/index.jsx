import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { saveValue } from '../../../store/slice/MenuItem';
import ContentStatus from '../../../ContentDraftConstants';


export default function BasicSelect() {
  const [age, setAge] = React.useState('');
 const dispatch = useDispatch();
 React.useEffect(()=>{
   dispatch(saveValue(age))
   

 },[age])
//  dispatch(saveValue(age))
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log('age',age)

  return (
    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" className='SelectLabel'>
          Filter By Status
          </InputLabel>
        <Select
          className='SelectForm'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          sx={{color:'white'}}
          onChange={handleChange}
        >
          <MenuItem  value="">All</MenuItem>
          <MenuItem  value={1}>Active</MenuItem>
          <MenuItem value={0}>InActive</MenuItem>
         
        
        </Select>
      </FormControl>
    </Box>
  );
}
function BasicSelect2() {
  const [age, setAge] = React.useState('');
 const dispatch = useDispatch();
 React.useEffect(()=>{
   dispatch(saveValue(age))
   

 },[age])
//  dispatch(saveValue(age))
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log('age',age)

  return (
    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" className='SelectLabel'>
          Filter By Status
          </InputLabel>
        <Select
          className='SelectForm'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          sx={{color:'white'}}
          onChange={handleChange}
        >
           {/* DRAFT: 0,
    DRAFT_UPLOADING: 1,
    DRAFT_PROCESSING: 2,
    DRAFT_READY: 3,
    PRELIVE: 4,
    LIVE: 5,
    SUSPEND: 6,
    DRAFT_FAILED: 10,
    EXPIRED: 99 */}
          <MenuItem  value="">All</MenuItem>
          <MenuItem  value={ContentStatus.DRAFT_UPLOADING}>Draft Uploading</MenuItem>
          <MenuItem  value={ContentStatus.DRAFT_PROCESSING}>Draft Processing</MenuItem>
          <MenuItem  value={ContentStatus. DRAFT_READY}>Draft Ready</MenuItem>
          <MenuItem  value={ContentStatus.PRELIVE}>Pre Live</MenuItem>
          <MenuItem  value={ContentStatus.LIVE}>Live</MenuItem>
          <MenuItem  value={ContentStatus.SUSPEND}>Suspend</MenuItem>
          <MenuItem  value={ContentStatus.DRAFT_FAILED}>Draft Fail</MenuItem>
          <MenuItem  value={ContentStatus.EXPIRED}>Expire</MenuItem>
          
         
        
        </Select>
      </FormControl>
    </Box>
  );
}

export{BasicSelect2}
