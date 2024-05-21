/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { MuiBox,MuiGrid,MuiPaper,MuiTypography } from '../../Mui-Component'
import { MuiArrowForwardIcon, MuiFiberManualRecordIcon, MuiManageAccountsIcon, MuiVaccinesIcon } from '../../Mui-Icons'
import { get } from '../../../Service/ApiService'

const Paper = ({txt,count,countLogo,status,classNameStatus})=>{
    return(
        <MuiPaper className='paperOverView ThColor TableHead'>
        <MuiBox className='signUpBottomBox signUpBottomBoxOverRide'>
            <MuiTypography>
                {/* HCP USERS */}
                {txt}
            </MuiTypography>
            <MuiTypography>
                <MuiArrowForwardIcon className='ThColor TableHead'/>
            </MuiTypography>
        </MuiBox>
        <MuiBox>
            <MuiTypography component='span'   className={classNameStatus} >
              <MuiFiberManualRecordIcon className='TableHead'/>
               {status}
            </MuiTypography>
        </MuiBox>

        <MuiBox className='signUpBottomBox signUpBottomBoxOverRide'>
            <MuiTypography variant='h3'>
                
                {count}
            </MuiTypography>
            <MuiTypography variant='h3'>
                
                {countLogo}
            </MuiTypography>
            
        </MuiBox>
    </MuiPaper>
    )
}
const DashBoardOverView = () => {
    const [arr,setArr] = useState([]);
    const obj = [
        {heading:'HCP USERS',count:arr[0],countLogo:<MuiManageAccountsIcon className='paperIcon ThColor TableHead countLogoSize' />,status:'Active',class:'activePaper ColorGreen' },

        {heading:'PHRMA COMPANIES',count:arr[1],countLogo:<MuiVaccinesIcon  className='paperIcon ThColor TableHead countLogoSize'/>,statusIcon:<MuiFiberManualRecordIcon className='TableHead'/>,status:'Active',class:'activePaper ColorGreen'},

        {heading:'HCP USERS',count:arr[2],countLogo:<MuiManageAccountsIcon className='paperIcon ThColor TableHead countLogoSize'/>,status:'Delete Requested' ,class:'activePaper ColorRed'},

        {heading:'CONTENT',count:arr[3],countLogo:<MuiManageAccountsIcon className='paperIcon ThColor TableHead countLogoSize'/>,status:'Live' ,class:'activePaper ColorAqua'}
        ,
        {heading:'CONTENT',count:arr[4],countLogo:<MuiManageAccountsIcon className='paperIcon ThColor TableHead countLogoSize'/>,status:'Pre Live' ,class:'activePaper ColorAqua'},
        {heading:'CONTENT',count:arr[5],countLogo:<MuiManageAccountsIcon className='paperIcon ThColor TableHead countLogoSize'/>,status:'Content Draft Ready' ,class:'activePaper ColorAqua'},
    ]
    useEffect(()=>{
            // get(`v1/admin/dashboard`).then((res)=>{
            //     const arr = [
            //         res.data.getHcpCount,
            //         res.data.pharmaCompaniesCount,
            //         res.data.getHcpDeleteRequestedCount,
            //         res.data.getLiveContentCount,
            //         res.data.getPreLiveContentCount,
            //         res.data.getDraftReadyContentCount
                
            //     ]
            //     setArr(arr)
              
            // })
            const arr = [1,44,5,6,8,9 ]
                    setArr(arr)
    },[])
  return (
    <>
    
      <MuiBox className='AdminUser signUpBottomBox signUpBottomBoxOverRide' >
    <MuiTypography className='forgetEmailHeading'>
    DashBoard 
    </MuiTypography>
    </MuiBox>
    <MuiTypography>
        Overview
    </MuiTypography>
    
    <MuiGrid container rowSpacing={2} className='Title largePaddingBottom' >
        {obj.map((v,i)=>{
           
            return(
                <MuiGrid item xl={4} lg={4} md={5} sm={6} xs={12}>
                <Paper txt={v.heading} count={v.count} classNameStatus={v.class} countLogo={v.countLogo} status={v.status}/>
                </MuiGrid>
            )
        })}

    </MuiGrid>
    </>
  )
}

export default DashBoardOverView
