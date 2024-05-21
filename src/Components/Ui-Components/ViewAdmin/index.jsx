import React from 'react'
import { EditComponent } from '../Edit'
import { MuiBox, MuiGrid, MuiTypography,MuiButton } from '../../Mui-Component'
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { DashBoardSkeleton } from '../DashBoard';
import { useSelector } from 'react-redux';

const ViewAdmin1 = () => {
    const navigate = useNavigate()
    const data = useSelector((state)=>state.id)
    console.log('view',data)
    const obj = [
        {name:"First Name",text:data.first_name},
        {name:"Last Name",text:data.last_name},
        {name:"email",text:data.email},
    ]
  return (
    <>
     <MuiBox className='formBox hiringAndAllinstituteBox BtnForInstituteSm gridContaine overViewHeight'>
        <MuiBox className='formFieldPosition'>
        <MuiButton onClick={()=>{navigate('/admin/adminUsers')}} >Admin Users</MuiButton> &gt;view Admin user
        </MuiBox>  
       
        <MuiGrid className='' container rowSpacing={2}>
            {obj.map((v,i)=>{
                if(i==2){
                    return(
                        <MuiGrid item key={i} xl={12}>
                            <MuiBox>
                                <MuiTypography>
                                    {v.name}
                                </MuiTypography>
                                <MuiTypography>
                                {v.text}
                                </MuiTypography>

                            </MuiBox>
                         </MuiGrid>

                    )
                }
                return(
                    <MuiGrid item key={i} xl={3}>
                            <MuiBox>
                                <MuiTypography>
                                    {v.name}
                                </MuiTypography>
                                <MuiTypography>
                                  {v.text}
                                </MuiTypography>

                            </MuiBox>
                         </MuiGrid>

                )
            })}

        </MuiGrid>
        
          
    </MuiBox>
    </>
  )
}

const ViewAdmin = ()=>{
    return(
        <DashBoardSkeleton heading='Admin Users' component1={<ViewAdmin1/>}/>
    )
}

export default ViewAdmin
