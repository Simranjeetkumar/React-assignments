import React from 'react'
import PrivateLayout from '../../Layouts/PrivateLayout'
import { Navigate, Outlet } from 'react-router-dom'
import LocalStorageService from '../../Service/LocalStorageService'
import PharmaPrivateLayout from '../../Layouts/PharmaPrivateLayout'
import { ADMIN, PHARMA } from '../../UsersRole'

const PharmaPrivateGuard = () => {
  const role= LocalStorageService.getRole();
  return (
    <>
    {LocalStorageService.getAccessToken() && role == PHARMA?<PharmaPrivateLayout>
        <Outlet/>
      </PharmaPrivateLayout>
      :LocalStorageService.getAccessToken() && role == ADMIN?<Navigate to='/admin/DashBoard'/>
      :<Navigate to='/login'/>}
      
    </>
  )
}

export default PharmaPrivateGuard
