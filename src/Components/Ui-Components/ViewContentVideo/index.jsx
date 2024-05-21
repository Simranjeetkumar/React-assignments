import * as React from 'react';
import VimeoPlayer from '../../../VideoPractise'
import { useParams } from 'react-router-dom'
import { get } from '../../../Service/ApiService';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { MuiBox, MuiButton, MuiGrid, MuiTypography } from '../../Mui-Component';
import { MuiErrorOutlineOutlinedIcon, MuiPlayArrowIcon, MuiWifiTetheringOutlinedIcon } from '../../Mui-Icons';
import Rating from '@mui/material/Rating';

const BasicRating = ({value})=>{
  return(
    <Rating
    name="simple-controlled"
    value={value}
    
    />
  )
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ViewContentVideo() {
  const [open, setOpen] = React.useState(false);
  const [videoId,setVideoId] = React.useState(null)
  const [imgUrl,setImgUrl] =React.useState("")
  const [data,setData] =React.useState(null)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const {id}  = useParams();
  
    React.useEffect(()=>{
       get(`v1/content-detail/${id}`).then((res)=>{
      console.log('res from id',res.data)
      setData(res.data)
      setVideoId(res.data.vimeo.video)
      setImgUrl(res.data.images_url.small)
     
    })
    },[])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Expire = (
    <MuiTypography className='ColorRed fontWeight activePaper'><MuiErrorOutlineOutlinedIcon className="pharmaNav formik2BtnMargin"/> Expire</MuiTypography>
  )
  const Live = (
    <MuiTypography className='ColorAqua fontWeight activePaper'>
      <MuiWifiTetheringOutlinedIcon className="pharmaNav formik2BtnMargin"/> Live
    </MuiTypography>
  )
  return (
    <>
    {data?  
    
    <MuiGrid container>
      <MuiGrid item xl={6} lg={6}>
        
        {data?
        <MuiBox className='menuText companyDataBox'>
        {data.status == 99?Expire:Live}
        <MuiTypography className='promotionalLabel ColorAqua facultDes'>Promotional - {data.company.title}<MuiTypography component='span' 
        className='declarationInv'>Declaration of Involvement</MuiTypography></MuiTypography>
         <hr className='ColorAqua hr'/>
        <MuiTypography className='singleContentTitle facultDes'>{data.title}</MuiTypography>
        <MuiTypography className='facultDes'>{data.description}</MuiTypography>
        <hr className='ColorAqua hr'/>
        <ul className='ColorAqua prepareDate facultDes'>
          <li>
           Date of Preparation:{months[new Date(data.preparation_date).getMonth()]} {new Date(data.preparation_date).getFullYear()}
          </li>

        </ul>
        <hr className='ColorAqua hr'/>
        <MuiTypography className='facultDes'>MultiM3d Rating: <BasicRating value={data.rating}/></MuiTypography>
        <MuiTypography className='ColorAqua fontWeight facultDes'>Faculty review</MuiTypography>
        <MuiTypography className='facultDes'>
          { data.description}</MuiTypography>

        <MuiButton onClick={handleClickOpen} variant='contained' className='watchNowBtn fontWeight'> <MuiPlayArrowIcon/>Watch Now</MuiButton>
        <MuiButton variant='contained' className='mariginLeft navItem fontWeight prescribeBtn'>Prescribing Information</MuiButton>
        <MuiButton variant='contained' className='mariginLeft navItem ReportingBtn fontWeight'>Ae Reporting</MuiButton>
       
         
       

        </MuiBox>
        :<MuiBox>loading</MuiBox>}
      </MuiGrid>

      <MuiGrid item className='imgGridItem' xl={6} lg={6}>
      <MuiBox>
      <Button variant="outlined" onClick={handleClickOpen}>
        <img src={imgUrl} className='imgGridBtn' alt="" />
      </Button>
      <MuiTypography onClick={handleClickOpen} component='span' className='playIconSpan'>
      <MuiPlayArrowIcon className='accountBtn1 playIcon'/>
      </MuiTypography>
      
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
      
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className=''
            >
              <CloseIcon className='iconBackground crossIcon'  />
            </IconButton>
            
        
        <VimeoPlayer videoId={videoId} handleClose={handleClose} width='1000px' height='auto'/>
      </Dialog>
      
    </MuiBox>
      </MuiGrid>

    </MuiGrid>
    :<MuiBox className='fontSize dontMulti3dAccount PaddingForNoContent'>Loading</MuiBox>

}
    </>
    
  );
}


export default ViewContentVideo
