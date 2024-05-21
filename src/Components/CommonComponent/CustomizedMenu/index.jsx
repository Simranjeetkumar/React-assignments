import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalStorageService from '../../../Service/LocalStorageService';
import { useNavigate } from 'react-router-dom';
import { MuiBox, MuiPaper, MuiTypography } from '../../Mui-Component';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const heading = localStorage.getItem('adminName')
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        className='menuBtn'
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
      
        endIcon={<KeyboardArrowDownIcon className='accountBtn1' />}
      >
      <MuiTypography component='span'  className='menuText'> Welcome {heading} </MuiTypography>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{ LocalStorageService.clearToken();LocalStorageService.logout();navigate('/login'); handleClose()}} disableRipple>
          <EditIcon />
          Logout
        </MenuItem>
       
      </StyledMenu>
    </div>
  );
}
function CustomizedMenus2({icon}) {
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const heading = localStorage.getItem('adminName')
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <MuiBox component='span' className='MenuBox'>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        className='menuBtn'
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      
      >
      {icon}
      </Button>
      {isHovered &&
       <MuiPaper className="details">
        <MuiTypography>Thumbnail Image Rules</MuiTypography>
        <ul>
          <li>Max. Dimension: 640p x 360p</li>
          <li>Min. Dimension: 320p x 180p</li>
          <li>Max. Size: 2 MB</li>
          <li>ile Type: jpg,jpeg,png,webp</li>
          <li>Aspect Ratio: 16:9</li>
        </ul>
        </MuiPaper>}
        <MuiPaper className="details DrawerContent">
        <MuiTypography>Thumbnail Image Rules</MuiTypography>
        
          <MuiTypography>Max. Dimension: 640p x 360p</MuiTypography>
          <MuiTypography>Min. Dimension: 320p x 180p</MuiTypography>
          <MuiTypography>Max. Size: 2 MB</MuiTypography>
          <MuiTypography>ile Type: jpg,jpeg,png,webp</MuiTypography>
          <MuiTypography>Aspect Ratio: 16:9</MuiTypography>
       
        </MuiPaper>
   
     
    </MuiBox>
  );
}
export{CustomizedMenus2}
