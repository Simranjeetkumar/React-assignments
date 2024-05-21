import React from 'react'
import { DashBoardComponent, DashBoardSkeleton } from '../DashBoard'
import { useNavigate } from 'react-router-dom'
import { MuiButton } from '../../Mui-Component'
import PharmaCompanyTable from '../PharmaTable'

const PharmaAdminComponent1 = () => {
    const navigate = useNavigate()
    const btn = (
        <MuiButton className='bgForSubmit' onClick={()=>{navigate('addCompany')}} variant='contained'>Add Company</MuiButton>
    )
  return (
    <>
      <DashBoardSkeleton heading='Pharma Companies' component1={<DashBoardComponent selectId='basicSelectDisplay'   table={<PharmaCompanyTable/>}/>} component2={btn}/>
    </>
  )
}

export default PharmaAdminComponent1
