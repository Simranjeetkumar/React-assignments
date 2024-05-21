import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import PrivateLayout from '../Layouts/PrivateLayout'
import AdminUserPage from '../Pages/AdminUserPage'
import EditPage from '../Pages/EditPage'
import InviteAdminPage from '../Pages/InviteAdminPage'
import ViewAdminPage from '../Pages/ViewAdminPage'
import DashBoardPage from '../Pages/DashBoardPage'
import ErrorPage from '../Pages/ErrorPage'
import HCPUserPage from '../Pages/HCPUserPage'
import PrivateGuard from '../Guards/PrivateGuard'
import PublicGuard from '../Guards/PublicGuard'
import LoginPage from '../Pages/LoginPage'
import ForgetPasswordPage from '../Pages/ForgetPasswordPage'
import ResetPasswordPage from '../Pages/ResetPasswordPage'
import CreatePasswordPage from '../Pages/CreatePasswordPage'
import PharmaPrivateGuard from '../Guards/PharmaPrivateGuard'
import PharamLandingPage from '../Pages/PharmaLandingPage'
import PharmaCompanyContentPage from '../Pages/PharmaCompanyContentPage'
import PharmaAdminPage from '../Pages/PharmaAdminPage'
import ContentPage from '../Pages/ContentPage'
import { ContentTableComponent } from '../Components/Ui-Components/ContentComponent'
import UploadDocumentPage from '../Pages/UploadDocumentPage'
import history from '../Saga/History/History'
import RootRoute from '../Pages/ChangePage'
import EditDocumentPage from '../Pages/EditDocumentPage'
import ViewContentPage from '../Pages/ViewContentPage'
import ResponsiveSlider from '../Components/CommonComponent/ReactSlider'
import { ViewDocumentComponent } from '../Components/Ui-Components/AddDocumentComponent'


const FRoutes = () => {
  return (
    <>
   
      <Routes>

        <Route  element={<PublicGuard/>}>
          
          <Route  path='/' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/ForgetPassword' element={<ForgetPasswordPage/>}/>
          <Route path='/reset-Password' element={<ResetPasswordPage/>}/>
          
        </Route>
        
        
        <Route  path='/admin'   element={<PrivateGuard/>}>
        <Route  path='/admin' element={<Navigate to='/admin/DashBoard'/>}/>
            <Route path='adminUsers'>
              <Route index element={<AdminUserPage/>}/>
              <Route path='edit/:id' element={<EditPage/>}/>
              <Route path='InviteAdmin' element={<InviteAdminPage/>}/>
              <Route path='viewAdmin' element={<ViewAdminPage/>}/>
            </Route>
            <Route path='DashBoard' element={<DashBoardPage/>}/>
            <Route path='HcpUsers' element={<HCPUserPage/>}/>
            <Route path='PharmaCompanies' element={<PharmaAdminPage/>}/>
            <Route path='manage-content' element={<ContentPage/>}>
              <Route index element={<ContentTableComponent/>}/>
              <Route path='upload-document' element={<UploadDocumentPage/>}/>
              <Route path='edit-document-content/:id' element={<EditDocumentPage/>}/>
              <Route path='view-video-content/:id' element={<ViewDocumentComponent/>}/>

            </Route>
           
          
        </Route>
        <Route path='/pharma' element={<PharmaPrivateGuard/>}>
        <Route  path='/pharma' element={<Navigate to='/pharma/choose-action'/>}/>
          <Route path='choose-action'element={<PharamLandingPage/>}/>
          <Route  element={<PharmaCompanyContentPage/>}>
            <Route path='home' element={<ResponsiveSlider/>} />
            <Route path='view-content/:id' element={<ViewContentPage/>}/>
          </Route>
        </Route>
        <Route path='/create-Password' element={<CreatePasswordPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      
    </>
  )
}

export default FRoutes
