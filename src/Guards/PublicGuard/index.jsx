import React from 'react'
import PublicLayout from '../../Layouts/PublicLayout'
import { Navigate, Outlet } from 'react-router-dom'
import LocalStorageService from '../../Service/LocalStorageService'
import { ADMIN, PHARMA } from '../../UsersRole'

const PublicGuard = () => {
  const token = LocalStorageService.getAccessToken()
  const role= LocalStorageService.getRole();
  return (
    <>
    {token && role == ADMIN?<Navigate to ='/admin/DashBoard'/>:LocalStorageService.getAccessToken() && role == PHARMA?
    <Navigate to ='/pharma/choose-action'/>
    :<PublicLayout>
        <Outlet/>
    </PublicLayout>}
    
      
    </>
  )
}

export default PublicGuard
