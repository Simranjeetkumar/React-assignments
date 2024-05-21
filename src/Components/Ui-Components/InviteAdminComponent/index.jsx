import React from 'react'
import { DashBoardSkeleton } from '../DashBoard'
import { EditComponent } from '../Edit'
import { FormikContainer2 } from '../../CommonComponent/FormicContainer'
import { useDispatch } from 'react-redux'
import { ADD_ADMIN_SUCCESSFUL } from '../../../store/Constants'

const InviteAdminComponent = () => {
  const dispatch = useDispatch()
  const dispatchFunc = (values)=>{
    dispatch({type:ADD_ADMIN_SUCCESSFUL,payload:values})

  }
  const obj = [
    { type: "text", name: "first_name", placeHolder: "First Name" },
    { type: "text", name: "last_name", placeHolder: "Last Name" },
    { type: "email", name: "email", placeHolder: "Email" },
  ];
  const initialValues = {
    first_name:"",
    email: "",
    last_name:""
  };
  return (
    <>
     <DashBoardSkeleton heading='Admin Users' component1={<EditComponent currentPage='Invite an Admin user' formikContainer={<FormikContainer2  dispatchFunc ={dispatchFunc} initialValues={initialValues} obj={obj} btnText={'Invite Admin'}/>}/>}/>
    </>
  )
}

export default InviteAdminComponent
