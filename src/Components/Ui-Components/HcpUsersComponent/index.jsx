import React from 'react'
import { DashBoardComponent, DashBoardSkeleton } from '../DashBoard'
import TableContent from '../../TablePractise/TableContent'

const HcpUsersComponent = () => {
  return (
    <>
      <DashBoardSkeleton heading='HCP Users' component1={<DashBoardComponent table={<TableContent/>}/>}/>
    </>
  )
}

export default HcpUsersComponent
