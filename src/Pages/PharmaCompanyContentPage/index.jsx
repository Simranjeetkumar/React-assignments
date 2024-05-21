import React from 'react'
import PharmaContentNavbar from '../../Components/Ui-Components/PharmaContentNavbar'
import ResponsiveSlider from '../../Components/CommonComponent/ReactSlider'
import { MuiBox } from '../../Components/Mui-Component'
import ResponsiveAppBar from '../../Components/Ui-Components/Footer'
import { Outlet } from 'react-router-dom'




const PharmaCompanyContentPage = () => {
  return (
    <>
    <MuiBox className='mainContainer'>
      <PharmaContentNavbar/>
      {/* <ResponsiveSlider/> */}
      <Outlet/>
      <ResponsiveAppBar/>
      </MuiBox>
        
     
    </>
  )
}

export default PharmaCompanyContentPage
