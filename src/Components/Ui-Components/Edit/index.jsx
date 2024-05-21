import React from 'react'
import { DashBoardSkeleton } from '../DashBoard'
import { useNavigate, useParams } from 'react-router-dom'
import { MuiBox,MuiButton} from '../../Mui-Component'
import { FormikContainer2 } from '../../CommonComponent/FormicContainer'
import { useDispatch, useSelector } from 'react-redux'
import { EDIT_ADMIN_SUCCESSFUL } from '../../../store/Constants'


const EditComponent = ({currentPage,btnText,formikContainer})=>{
    const navigate = useNavigate()
    
    return(
        
        <MuiBox className='formBox hiringAndAllinstituteBox BtnForInstituteSm editAddViewPagePadding'>
        <MuiBox className='formFieldPosition'>
        <MuiButton onClick={()=>{navigate('/admin/adminUsers')}} >Admin Users</MuiButton> &gt;{currentPage}
        </MuiBox>  
        
        {formikContainer}  
    </MuiBox>
    )
}
const AddAnyComponent = ({body,currentPrevComponent})=>{
    
    return(
        
        <MuiBox className='formBox hiringAndAllinstituteBox BtnForInstituteSm editAddViewPagePadding'>
        <MuiBox>
        {currentPrevComponent}
        </MuiBox>  
        
        {body}  
    </MuiBox>
    )
}
const Edit = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const initialValues = useSelector((state)=>state.id);


const dispatchFunc = (values)=>{
    dispatch({type:EDIT_ADMIN_SUCCESSFUL,payload:values,id:id})

  }
  const obj = [
    { type: "text", name: "first_name", placeHolder: "First Name" },
    { type: "text", name: "last_name", placeHolder: "Last Name" },
    { type: "email", name: "email", placeHolder: "Email" },
  ];
  

  return (
    <>
    <DashBoardSkeleton heading='Admin Users' component1={<EditComponent  currentPage='Edit Admin User' formikContainer={<FormikContainer2 dispatchFunc={dispatchFunc} initialValues={initialValues} obj={obj} btnText='save' run={true}/>}/>}/>
      
    </>
  )
}
export{EditComponent,AddAnyComponent}
export default Edit
