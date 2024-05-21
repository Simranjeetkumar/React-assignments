import React from 'react'
import SignIn from './Components/Ui-Components/SignIn'
import ForgetPassword from './Components/Ui-Components/ForgetPassword'
import ResponsiveAppBar from './Components/Ui-Components/Footer'
import ResponsiveDrawer from './Components/CommonComponent/SideDrawer'
import Edit from './Components/Ui-Components/Edit'
import FRoutes from './Routes'
import CustomRouter from './Helpers/CustomRouter'
import history from './Saga/History/History'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VimeoPlayer from './VideoPractise'
import { MuiBox } from './Components/Mui-Component'






const App = () => {
  return (
    <>
     {/* <SignIn/>  */}
     {/* <ForgetPassword/> */}
     {/* <CreatePassword/> */}
     {/* <ResponsiveAppBar/> */}
     {/* <ResponsiveDrawer/> */}
     {/* <Edit/> */}

     <CustomRouter history={history}>
     <FRoutes/>
     </CustomRouter>
     <ToastContainer />
     {/* <VimeoPlayer videoId='https://player.vimeo.com/video/76979871?h=8272103f6e' /> */}
{/* <MuiBox></MuiBox> */}


    </>
  )
}

export default App
