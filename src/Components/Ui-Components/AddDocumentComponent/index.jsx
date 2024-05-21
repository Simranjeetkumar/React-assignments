import React, { useEffect, useState } from 'react'
import { AddAnyComponent } from '../Edit'
import { MuiBox, MuiGrid, MuiTypography } from '../../Mui-Component'
import { Link, useParams } from 'react-router-dom'
import MuiStepper from '../Stepper'
import Form1 from '../Form1'
import UploadFile from '../UploadFile'
import { get, patch, post } from '../../../Service/ApiService'
import { toast } from 'react-toastify'
import FacultyRating from '../FacultyRating'
import { FacultyFormikContainer } from '../../CommonComponent/FormicContainer'
import { useDispatch, useSelector } from 'react-redux'
import { setEditImgUrl } from '../../../store/slice/EditImgUrl'
import { setRatingValue } from '../../../store/slice/RatingValue'



const CurrentPrev = ({currentPage})=>{
  
  return (  
  <MuiTypography className='contentPageSubHeading' >
   <Link to='/admin/manage-content' className='contentPageLink '> Content </Link> &gt; {currentPage}
  </MuiTypography>
  
)
}
// Add Document
const ValidateForm = ({initialValues,onSubmit,count,facultId,facultyInitialValue,countFunc,setCountFunc,documentType})=>{
  
  
  const arr = [
    {name:`Display Details`,link:'/admin/manage-content/upload-document'},
    {name:`Behaviour`,link:'/admin/manage-content/upload-document'},
    {name:`Tags`,link:'/admin/manage-content/upload-document'},
    {name:`Upload File`,link:'/admin/manage-content/upload-document'},
    {name:`Prescribing information`,link:'/admin/manage-content/upload-document'},
    {name:`Sharing`,link:'/admin/manage-content/upload-document'},
    {name:`Faculty Rating`,link:'/admin/manage-content/upload-document'}

]
const hideShow = (e)=>{
  console.log('e',e.target.innerHTML)
  if(e.target.innerHTML == 'Display Details'){
    setCountFunc(0)

  }
  else if(e.target.innerHTML == 'Upload File'){
    setCountFunc(3)
  }
  else if(e.target.innerHTML == 'Faculty Rating'){
    setCountFunc(6)
  }
  else{
    setCountFunc(0)
  }

}
  return(
    <MuiGrid container>
      <MuiGrid item xl={3}>
      <MuiStepper steps={arr} count={count} className='contentPageLink menuText' func={hideShow}/>
      </MuiGrid>
      <MuiGrid item xl={8}>
        { count == 0?<Form1 onSubmit={onSubmit} initialValues ={initialValues}/>
        : count == 3?
        <UploadFile countFunc={countFunc} documentType={documentType} facultId={facultId}/>
        :  count == 6?
        <FacultyFormikContainer documentType={documentType} facultyInitialValue={facultyInitialValue} facultId={facultId}/>
        :<Form1 onSubmit={onSubmit} initialValues ={initialValues}/>}
      </MuiGrid>

    </MuiGrid>
  )
}
const AddDocumentComponent = () => {
  const [count,setCount] = useState(0);
  const documentType= 'add';
  const countFunc = ()=>{
    setCount((pre)=>pre+3)

  }
  const setCountFunc = (v)=>{
    setCount(v)

  }
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(setEditImgUrl({}))
  
},[])
  const rating  = useSelector((state)=>state.RatingValue)
  const facultyValue = {
    review:'',
    lastForm:true,
    rating:rating.value
  }
  const [id,setId]  = useState();
  const initialValues ={
    title:"",
    content_type:"",
    company:{_id:id,name:"",type:0},
    one_line_description:"",
    description:"",
    preparation_date:"",
    expiry_date:"",
    job_number:"",
    content_length:"",
    copyright_notice:"",
    declaration_long:"",
    declaration_short:"",
}
const onSubmit = (values, props) => {
  console.log('addDocumentValue',values);
  post(`v1/admin/contents`,values).then((res)=>{
    console.log('res',res.data.content._id)
    setId(res.data.content._id)
    if(res.status){
      toast.success('update successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
       
      }
      else{
        toast.error(' some error', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
  })
  props.resetForm()
  countFunc()
};
  return (
    <>
     <AddAnyComponent currentPrevComponent={<CurrentPrev currentPage='Add Document'/>} body={<ValidateForm onSubmit={onSubmit} documentType={documentType} setCountFunc={setCountFunc} count={count} facultyInitialValue={facultyValue} facultId={id} countFunc={countFunc} initialValues={initialValues}/>}/>
    </>
  )
}
const EditDocumentComponent = () => {
  const dispatch = useDispatch();
  const documentType= 'edit';
  const [count,setCount] = useState(0);
  const countFunc = ()=>{
    setCount((pre)=>pre+3)

  }
  const setCountFunc = (v)=>{
    setCount(v)

  }
  const rating  = useSelector((state)=>state.RatingValue)
  const {id} = useParams()
  const initialValues ={
    title:"",
    content_type:"",
    company:{name:"",type:0},
    one_line_description:"",
    description:"",
    preparation_date:"",
    expiry_date:"",
    job_number:"",
    content_length:"",
    copyright_notice:"",
    declaration_long:"",
    declaration_short:"",
}
const [initialValue1,setInitialValue1] = useState(initialValues)
const [facultyValue,setfacultyValue] = useState({
  review:'',
  lastForm:true,
  rating:rating.value
})

  useEffect(()=>{
      get(`v1/content-detail/${id}`).then((res)=>{
        console.log('data for edit',res.data)
        setfacultyValue({...facultyValue,review:res.data.review})
        dispatch(setRatingValue(res.data.rating))
        dispatch(setEditImgUrl({...res.data.images_url,content_url:res.data.content_url}))
        setInitialValue1( {...initialValue1,
          title:res.data.title,
          content_type:`${res.data.content_type}`,
          one_line_description:res.data.one_line_description,
          description:res.data.description,
          company:{ name:res.data.company.title,type:0},
          preparation_date: res.data.preparation_date ? new Date(res.data.preparation_date) : '',
        expiry_date: res.data.expiry_date ? new Date(res.data.expiry_date) : '', 
          job_number:res.data.job_number,
          content_length:res.data.content_length,
          copyright_notice:res.data.copyright_notice,
          declaration_long:res.data.declaration_long,
          declaration_short:res.data.declaration_short
  })
        
      })
  },[])

  const onSubmit = (values, props) => {
    console.log(values);
    console.log('condition',values == initialValue1);
    
      patch(`v1/admin/contents/update/${id}`,values).then((res)=>{
        console.log('res for updata',res )
        if(res.status){
        toast.success('update successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
        }
        else{
          toast.error(' some error', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      })

      countFunc()
    
    
    
    props.resetForm()
   
  };
  return (
    <>
     <AddAnyComponent  currentPrevComponent={<CurrentPrev currentPage='Edit Document'/>} body={<ValidateForm facultyInitialValue={facultyValue}  facultId={id} onSubmit={onSubmit} documentType={documentType} count={count} setCountFunc={setCountFunc} countFunc={countFunc} initialValues={initialValue1}  />}/>
    </>
  )
}
const ViewDocumentComponent = () => {
  const dispatch = useDispatch();
  const documentType = 'view'
  const [count,setCount] = useState(0);
  const countFunc = ()=>{
    setCount((pre)=>pre+3)

  }
  const setCountFunc = (v)=>{
    setCount(v)

  }
  const rating  = useSelector((state)=>state.RatingValue)
  const {id} = useParams()
  const initialValues ={
    title:"",
    content_type:"",
    company:{name:"",type:0},
    one_line_description:"",
    description:"",
    preparation_date:"",
    expiry_date:"",
    job_number:"",
    content_length:"",
    copyright_notice:"",
    declaration_long:"",
    declaration_short:"",
}
const [initialValue1,setInitialValue1] = useState(initialValues)
const [facultyValue,setfacultyValue] = useState({
  review:'',
  lastForm:true,
  rating:rating.value
})

  useEffect(()=>{
      get(`v1/content-detail/${id}`).then((res)=>{
        console.log('data for edit',res.data)
        setfacultyValue({...facultyValue,review:res.data.review})
        dispatch(setRatingValue(res.data.rating))
        dispatch(setEditImgUrl({...res.data.images_url,content_url:res.data.content_url}))
        setInitialValue1( {...initialValue1,
          title:res.data.title,
          content_type:`${res.data.content_type}`,
          one_line_description:res.data.one_line_description,
          description:res.data.description,
          company:{ name:res.data.company.title,type:0},
          preparation_date: res.data.preparation_date ? new Date(res.data.preparation_date) : '',
        expiry_date: res.data.expiry_date ? new Date(res.data.expiry_date) : '', 
          job_number:res.data.job_number,
          content_length:res.data.content_length,
          copyright_notice:res.data.copyright_notice,
          declaration_long:res.data.declaration_long,
          declaration_short:res.data.declaration_short
  })
        
      })
  },[])

  const onSubmit = (values, props) => {
    console.log(values);
      countFunc() 
    props.resetForm()
  };
  return (
    <>
     <AddAnyComponent  currentPrevComponent={<CurrentPrev currentPage='Edit Document'/>} body={<ValidateForm facultyInitialValue={facultyValue}  facultId={id} onSubmit={onSubmit} documentType={documentType} count={count} setCountFunc={setCountFunc} countFunc={countFunc} initialValues={initialValue1}  />}/>
    </>
  )
}
export{EditDocumentComponent,ViewDocumentComponent}
export default AddDocumentComponent
