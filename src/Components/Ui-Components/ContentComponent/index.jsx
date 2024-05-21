import React from 'react'
import { DashBoardComponent, DashBoardComponent2, DashBoardSkeleton } from '../DashBoard'
import { useNavigate } from 'react-router-dom'
import { MuiButton } from '../../Mui-Component'
import PharmaCompanyTable from '../PharmaTable'
import TableComp from '../../TableComponents/TableComp'
import ContentTable from '../ContentTable'

const ContentTableComponent = ()=>{
  return(
    <DashBoardComponent2  table={<ContentTable/>}/>
  )
}
const ContentComponent = ({component}) => {

  // const decision = window.location.href.includes('upload-document');
  const decision = window.location.href=='http://localhost:5173/admin/manage-content'
    const navigate = useNavigate()
    const btn = (
        <MuiButton onClick={()=>{navigate('upload-document')}} variant='contained' className='bgForSubmit'>Add Content</MuiButton>
    )

  return (
    <>
      <DashBoardSkeleton heading='Content' component1={component} component2={decision?btn:null}/>
    </>
  )
}
export{ContentTableComponent}
export default ContentComponent
