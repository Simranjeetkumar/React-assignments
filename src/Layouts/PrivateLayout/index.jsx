import React from 'react'
import ResponsiveDrawer from '../../Components/CommonComponent/SideDrawer'
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  return (
    <>
    <ResponsiveDrawer content={<Outlet/>}/>
      
    </>
  )
}

export default PrivateLayout
