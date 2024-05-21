import React, { useEffect, useState } from 'react'
import { MuiTypography,MuiBox, MuiButton } from '../../Mui-Component'
import BasicSelect, { BasicSelect2 } from '../BasicSelect'
import { MuiSearchIcon } from '../../Mui-Icons'
import DenseTable from '../EnhancedTable'
import { useNavigate } from 'react-router-dom'
import { get } from '../../../Service/ApiService'
import { useDispatch, useSelector } from 'react-redux'
import  { setSearchData } from '../../../store/slice/SearchData'
import { setTotalPage } from '../../../store/slice/PaginationCount'
import { SearchData } from '../../../store/slice/ContentSearch'
import { MenuItem } from '@mui/material'
import ContentStatus from '../../../ContentDraftConstants'

const DashBoardSkeleton = ({component1,component2,heading})=>{

  return (
    <>
    <MuiBox className='AdminUser signUpBottomBox xsAdminHeading' >
    <MuiTypography className='forgetEmailHeading'>
    {/* Admin Users */}
    {heading}
    </MuiTypography>
   {component2}
    </MuiBox>
    {component1}
  
     
    </>
  )

}

const DashBoardComponent = ({table,selectId}) => {
    const [data,setData] = useState({searchBy:""})
    // const [TotalPage,setTotalPage] = useState(0)
    const dispatch = useDispatch()
    const reload = useSelector((state)=>state.OnDelApiReload)
    const func = (e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    const sliceValue = useSelector((state)=>state.saveMenuValue)
    useEffect(()=>{
        get(`v1/admin/?limit=5&page=${sliceValue.page}&filter=${sliceValue.value}&search=${data.searchBy}`).then((res)=>{
          dispatch(setSearchData(res.data.users))
          console.log('res for pagination',res.data.totalCount)
          if(res.data.totalCount%5!=0){
            const count = res.data.totalCount/5;
            const totalCount = Math.trunc(count)+1;
            dispatch(setTotalPage(totalCount))
           
          }
          else{
            const count = res.data.totalCount/5;
            dispatch(setTotalPage(count))

          }
        })
    },[data,reload,sliceValue])

  return (
    <>
    <MuiBox className='SearchFieldContainer mulit3dAccountContainer'id='adminSeachFeildContainer'>
        <MuiBox className='inputContainer'>
        <input type="text" name='searchBy' className='inputForSearch' onChange={func} placeholder='Search by Name,Email,address' value={data.searchBy} />
       <MuiSearchIcon className='DrawerContent searchIcon'/>
        </MuiBox>

        <MuiBox className='basicMenuContainer' id={selectId}>
        
        <BasicSelect/>
        
        </MuiBox>
       
    </MuiBox>
    {table}
  
     
    </>
  )
}

const DashBoardComponent2 = ({table,selectId}) => {
    const [data,setData] = useState({searchBy:""})
    const dispatch = useDispatch();
    const MenuValue = useSelector((state)=>state.saveMenuValue)
    // console.log('menu value',MenuValue)
   
    const func = (e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    const reloadTable = useSelector((state)=>state.OnDelApiReload)
    // console.log('reload',reloadTable)       
    useEffect(()=>{
      get(`v1/admin/contents?page=1&limit=20&search=${data.searchBy}&status=${MenuValue.value}&company=&format=`).then((res)=>{
        // console.log('res',res.data.contentsData)
        dispatch(SearchData(res.data.contentsData))
      })
    },[data,reloadTable,MenuValue.value])

  return (
    <>
    <MuiBox className='SearchFieldContainer mulit3dAccountContainer'>
        <MuiBox className='inputContainer'>
        <input type="text" name='searchBy' className='inputForSearch' onChange={func} placeholder='Search by Name,Email,address' value={data.searchBy} />
       <MuiSearchIcon className='DrawerContent searchIcon'/>
        </MuiBox>

        <MuiBox className='basicMenuContainer' id={selectId}>
        
        {/* <BasicSelect /> */}
        <BasicSelect2/>
        
        </MuiBox>
       
    </MuiBox>
 
    {table}
  
     
    </>
  )
}

const DashBoard = ()=>{
    const navigate = useNavigate()
    const btn = (
        <MuiButton onClick={()=>{navigate('inviteAdmin')}} variant='contained' className='bgForSubmit inviteAdminBtn'>Invite an Admin</MuiButton>
    )
    return(
        <DashBoardSkeleton heading='Admin Users' component1={<DashBoardComponent table={<DenseTable/>}/>} component2={btn}/>
    )

}

export{DashBoardSkeleton,DashBoardComponent,DashBoardComponent2}
export default DashBoard
