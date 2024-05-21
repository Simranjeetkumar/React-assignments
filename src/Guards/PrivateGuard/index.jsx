import React from 'react'
import PrivateLayout from '../../Layouts/PrivateLayout'
import { Navigate, Outlet } from 'react-router-dom'
import LocalStorageService from '../../Service/LocalStorageService'
import { ADMIN, PHARMA } from '../../UsersRole'

const PrivateGuard = () => {
  const role= LocalStorageService.getRole();
  return (
    <>
    {LocalStorageService.getAccessToken() && role == ADMIN?<PrivateLayout>
        <Outlet/>
      </PrivateLayout>
      :LocalStorageService.getAccessToken() && role == PHARMA?<Navigate to='/pharma/choose-action'/>
      :<Navigate to='/login'/>}
      
    </>
  )
}

export default PrivateGuard
