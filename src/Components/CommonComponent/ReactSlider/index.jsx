import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MuiArrowBackIosNewIcon, MuiArrowForwardIosIcon, MuiCircleIcon, MuiErrorOutlineOutlinedIcon, MuiReplyIcon, MuiVideocamOutlinedIcon, MuiWifiTetheringOutlinedIcon, MuiZoomOutMapOutlinedIcon } from "../../Mui-Icons";
import ActionAreaCard from "../../Ui-Components/BasicCard";
import img1 from '../../../assets/logo.svg'
import { MuiBox, MuiButton, MuiTypography } from "../../Mui-Component";
import { get } from "../../../Service/ApiService";
import Rating from '@mui/material/Rating';
import Fab from '@mui/material/Fab';
import { useNavigate } from "react-router-dom";

const List = ({shortDescription,jobNumber,day,ratingValue,views})=>{

  return(
    <ul className="CarouselList">
      <li>{shortDescription}</li>
      <li className="cardItems ColorAqua">{jobNumber}</li>
      <li className="ColorAqua">{day}</li>
      <li className="signUpBottomBox activePaper Title">
        MultiMd3d Faculty Rating: <Rating
        name="simple-controlled"
        value={ratingValue}
      />
      </li>
      <li className="formik2Btn">
        <MuiReplyIcon className="mainContainer replyIcon"/> <MuiCircleIcon className="mainContainer replyIcon colorsGolden"/>
        </li>
      <li>Views by HCPs:  {views}</li>
      <li className="ColorAqua needHelp">Pharma Co.</li> 
      <li>
        <MuiButton variant='outlined' className='ColorAqua listBtn'>
          Declaration of involvement
        </MuiButton>
      </li> 
    </ul>
    )
} 


const btn = (
  <MuiButton className='cardBtnBox ColorAqua' variant='outlined'>Suspend from Live</MuiButton>
)
const Expire = (
  <MuiTypography className='ColorRed fontWeight activePaper'><MuiErrorOutlineOutlinedIcon className="pharmaNav formik2BtnMargin"/> Expire</MuiTypography>
)
const Live = (
  <MuiTypography className='ColorAqua fontWeight activePaper'>
    <MuiWifiTetheringOutlinedIcon className="pharmaNav formik2BtnMargin"/> Live
  </MuiTypography>
)
const IconsOnImg= (apiId1)=>{
  const navigate = useNavigate()
  const navFunc = ()=>{
    navigate(`/pharma/view-content/${apiId1.apiId1}`) 
    
  }
   return(
            <>
            <MuiVideocamOutlinedIcon onClick={()=>navFunc(apiId1)}  className='ColorAqua videoIcon'/>
            <MuiZoomOutMapOutlinedIcon onClick={navFunc} className='accountBtn1 zoominIcon'/>
            </>
          )
}
 const ResponsiveSlider = ()=>{
  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const navFunc = (apiId)=>{
    navigate(`/pharma/view-content/${apiId}`) 
    
  }
  
  useEffect(()=>{
    get(`v1/pharma/content`).then((res)=>{
      setData(res.data.contentData)
      // console.log('value',res.data.contentData)
    })
},[])

// const viewContentApi = (id)=>{
//   get(`v1/content-detail${id}`)
// }
const months = {
  0:'January',1:'Feb',2:'March',3:'April',4:'May',5:'June',6:'July',7:'August',8:'Sept',9:'October',10:'November',12:'December'
}

    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow:<MuiArrowForwardIosIcon/>,
      prevArrow:<MuiArrowBackIosNewIcon />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <MuiBox className='needHelp'>
        <MuiTypography variant='h5' className='fontWeight dontMulti3dAccount accountBtn1'>My Company Content </MuiTypography>
        {data.length!=0?   
        <Slider className="SlickSlides" {...settings}>
       

          {data.map((value,index)=>{
            const day = new Date(value.updatedAt)
            const status = value.status == 99?Expire:Live
            return(
              
              <ActionAreaCard navFunc={()=>{navFunc(value._id)}} iconsOnImg={<IconsOnImg apiId1={value._id}/>} apiId={value._id} img={value.images_url.small} feature={status} heading={value.title} className='SlickCards table2Page transformCard 'headingClass='cardHeading marginBottom' cardActionClass='dontMulti3dAccount' BtnComponent={btn} list={<List shortDescription={value.one_line_description} jobNumber= {value.job_number} day={months[day.getMonth()]+" "+ day.getFullYear()} ratingValue={value.rating} views={value.views}/> }/>
             
            )
          })}
          
         
        </Slider>
        : <MuiBox className='fontSize dontMulti3dAccount PaddingForNoContent'>No content </MuiBox>}
      </MuiBox>
    );
  
}
export default ResponsiveSlider
