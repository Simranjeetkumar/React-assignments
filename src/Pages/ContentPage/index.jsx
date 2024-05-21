import React from 'react'
import ContentComponent from '../../Components/Ui-Components/ContentComponent'
import { Outlet } from 'react-router-dom'

const ContentPage = () => {
  return (
    <>
      <ContentComponent component={<Outlet/>} />
    </>
  )
}

export default ContentPage
