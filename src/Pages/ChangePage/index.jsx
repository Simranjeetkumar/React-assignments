import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function RootRoute() {
 
  return(
  <Navigate to='/login'/>
  )


}

export default RootRoute;
