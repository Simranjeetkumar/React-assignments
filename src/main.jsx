import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './media.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.jsx'
// import CustomRouter from './Helpers/CustomRouter.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
)


// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import App from './App.jsx'
// import AdminUserPage from './Pages/AdminUserPage'
// import EditPage from './Pages/EditPage'
// import InviteAdminPage from './Pages/InviteAdminPage'
// import ViewAdminPage from './Pages/ViewAdminPage'
// import DashBoardPage from './Pages/DashBoardPage'
// import ErrorPage from './Pages/ErrorPage'
// import HCPUserPage from './Pages/HCPUserPage'
// import PrivateGuard from './Guards/PrivateGuard'
// import PublicGuard from './Guards/PublicGuard'
// import LoginPage from './Pages/LoginPage'
// import ForgetPasswordPage from './Pages/ForgetPasswordPage'
// import CreatePasswordPage from './Pages/CreatePasswordPage'
// import ReactDOM from 'react-dom/client'
// import React from 'react'
// import { Provider } from 'react-redux'
// import store from './store/index.jsx'
// import './index.css'
// import history from './Saga/History/History.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//     <Route  element={<PublicGuard/>}>
//       <Route path='/login' element={<LoginPage/>}/>
//       <Route path='/ForgetPassword' element={<ForgetPasswordPage/>}/>
//       <Route path='/reset-Password' element={<CreatePasswordPage/>}/>

//     </Route>
//     <Route path='/admin' element={<PrivateGuard/>}>
//         <Route path='AdminUsers'>
//         <Route index element={<AdminUserPage/>}/>
//         <Route path='edit' element={<EditPage/>}/>
//         <Route path='InviteAdmin' element={<InviteAdminPage/>}/>
//         <Route path='viewAdmin' element={<ViewAdminPage/>}/>
//         </Route>
//         <Route path='DashBoard' element={<DashBoardPage/>}/>
//         <Route path='HcpUsers' element={<HCPUserPage/>}/>
//         <Route path='*' element={<ErrorPage/>}/>
//     </Route>
//   </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <RouterProvider router={router} history={history} />
//     </Provider>
//   </React.StrictMode>
// );