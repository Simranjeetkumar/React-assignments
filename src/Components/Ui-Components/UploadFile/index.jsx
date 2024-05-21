import React from 'react'
import { MuiBox, MuiButton, MuiContainer, MuiPaper, MuiTypography } from '../../Mui-Component'
import { MuiErrorOutlineIcon } from '../../Mui-Icons'
import MyDropzone from '../MyDropzone'
import { useSelector } from 'react-redux'
import { post } from '../../../Service/ApiService'
import {  toast } from 'react-toastify';
import { Content_API_Type } from '../../../ContentDraftConstants'
import axios from 'axios'
import { CustomizedMenus2 } from '../../CommonComponent/CustomizedMenu'


const UploadFile1 = ({name,imgSize,dropZone,acceptedFileProp,imgName,imgUrl,videoUrl}) => {
  return (
    <>
    <MuiPaper className='formPaper paperBorder'>
   <MuiTypography>{name}  <MuiErrorOutlineIcon className='DrawerContent'/>
   {/* <CustomizedMenus2 icon={<MuiErrorOutlineIcon className='DrawerContent'/>}/> */}
   
   </MuiTypography>
   <MuiBox>
    <MyDropzone imgSize={imgSize} imgUrl={imgUrl} videoUrl={videoUrl} acceptedFileProp={acceptedFileProp} dropZone ={dropZone} imgName={imgName}  className='reactDopZone'/>
   </MuiBox>
    </MuiPaper>
      
    </>
  )
}
const UploadFile = ({countFunc,facultId,documentType})=>{
  const data = useSelector((state)=>state.imgHoldSlice)
  const imgUrl= useSelector((state)=>state.EditImgUrl)
  console.log('imgurl',imgUrl.content_url)
  
  const formData1 = new FormData();
  formData1.append('image',data.data1)
    formData1.append('image_type','small')
    formData1.append('content_id', facultId)
    formData1.append(
      'content_api_type',
     'add' === 'add' ? Content_API_Type.CREATE.toString() : Content_API_Type.UPDATE.toString()
  );

  const formData2 = new FormData();
  formData2.append('image',data.data2)
    formData2.append('image_type','large')
    formData2.append('content_id', facultId)
    formData2.append(
      'content_api_type',
     'add' === 'add' ? Content_API_Type.CREATE.toString() : Content_API_Type.UPDATE.toString()
  );
  let payloadForURL = {
    content_id: facultId,
    parts: 1,
    file: data.data3.name,
    file_type: data.data3.type,
    content_type: 1,
    content_api_type: 'add' === 'add' ? Content_API_Type.CREATE : Content_API_Type.UPDATE
};

console.log('document type',documentType)
    const arr  = [
        {name:'Thumbnail Image'},
        {name:'Hero Image'},
        {name:'Upload File'},

]

const acceptFile = {
  'image/png':['.png'],
    'image/jpg':['.jpg'],
    'image/jpeg':['.jpeg'],
    'image/webp':['.webp'],
}
const acceptPdf = {
  // 'application/pdf':['.pdf'],
  'video/mp4': ['.mp4', '.MP4'],
}
const apiCall = ()=>{

  if(documentType == 'edit'){

    if(data.data1 && data.data2 && data.data3){

 
      post(`v1/admin/contents/upload-image`,formData1).then((res)=>{
        // console.log('res',res)
      })
      post(`v1/admin/contents/upload-image`,formData2).then((res)=>{
        // console.log('res',res)
      })
      post(`v1/admin/contents/presigned-urls`,payloadForURL).then((res)=>{
        console.log('res for post',res.data)
        axios.put(res.data.signedUrls[0].url,{
          url: res.data.signedUrls[0].url,
          videoFile: 1,
          part: 1,
          type: data.data3.type
      }).then((res2)=>{
          console.log('url res put',res2.headers.etag)
          console.log('url res',res2)
          post(`v1/admin/contents/merge-presigned-urls`, {
            key: res.data.key,
            uploadId: res.data.uploadId,
            completedParts: [{ETag:res2.headers['etag'], PartNumber:1}],
            content_id: facultId,
            stepOption: 3
        }).then((final)=>{
          console.log('final',final)
          if(final.status==1){
            toast.success('upload successfully', {
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
        })
        })
    
      })
    }
    else if(data.data1 ){
      post(`v1/admin/contents/upload-image`,formData1).then((res)=>{
        console.log('res for img1',res)
        console.log('data1',formData1)
      })
    }
    else if(data.data2 ){
      post(`v1/admin/contents/upload-image`,formData2).then((res)=>{
        console.log('res for img2',res)
      })
    }
    else if(data.data3 ){
      post(`v1/admin/contents/presigned-urls`,payloadForURL).then((res)=>{
        console.log('res for post',res.data)
        axios.put(res.data.signedUrls[0].url,{
          url: res.data.signedUrls[0].url,
          videoFile: 1,
          part: 1,
          type: data.data3.type
      }).then((res2)=>{
          console.log('url res put',res2.headers.etag)
          console.log('url res',res2)
          post(`v1/admin/contents/merge-presigned-urls`, {
            key: res.data.key,
            uploadId: res.data.uploadId,
            completedParts: [{ETag:res2.headers['etag'], PartNumber:1}],
            content_id: facultId,
            stepOption: 3
        }).then((final)=>{
          console.log('final',final)
          if(final.status==1){
            toast.success('api hit successfully', {
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
        })
        })
    
      })
    }
    countFunc()
  }

else if(documentType == 'add'){

  if(data.data1 && data.data2 && data.data3){

 
    post(`v1/admin/contents/upload-image`,formData1).then((res)=>{
      // console.log('res',res)
    })
    post(`v1/admin/contents/upload-image`,formData2).then((res)=>{
      // console.log('res',res)
    })
    post(`v1/admin/contents/presigned-urls`,payloadForURL).then((res)=>{
      console.log('res for post',res.data)
      axios.put(res.data.signedUrls[0].url,{
        url: res.data.signedUrls[0].url,
        videoFile: 1,
        part: 1,
        type: data.data3.type
    }).then((res2)=>{
        console.log('url res put',res2.headers.etag)
        console.log('url res',res2)
        post(`v1/admin/contents/merge-presigned-urls`, {
          key: res.data.key,
          uploadId: res.data.uploadId,
          completedParts: [{ETag:res2.headers['etag'], PartNumber:1}],
          content_id: facultId,
          stepOption: 3
      }).then((final)=>{
        console.log('final',final)
        if(final.status==1){
          toast.success('api hit successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
            countFunc()
        }
      })
      })
  
    })
  }
  else{
     toast.error('upload all', {
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


}
else{
  countFunc()

}
  


  
}




    return(
      <>
      {/* inputFeild */}
      
      <MuiPaper   className='parentPaper inputFeild'>
        {arr.map((v,i)=>{
          if(i==0){
            return (<UploadFile1 imgUrl={imgUrl.small} acceptedFileProp={acceptFile} imgName='small' dropZone={0} imgSize={2e+6} key={v.name} name={v.name}/>)
          }
          else if(i==1){
            return(<UploadFile1 imgUrl={imgUrl.large} acceptedFileProp={acceptFile} imgName = 'large' dropZone={1} imgSize={6e+6} key={v.name} name={v.name}/>)
          }

            return(<UploadFile1 acceptedFileProp={acceptPdf} videoUrl={imgUrl.content_url} imgName='video' imgSize={1e+8} key={v.name} name={v.name}/>)
        })}
      <MuiBox className='formik2Btn uploadFileBtnBox'>
        <MuiButton variant='contained' className='bgForSubmit uploadFileBtn' onClick={apiCall} >Next</MuiButton>
        </MuiBox>
        </MuiPaper>
        </>
        
    )
 
}

export default UploadFile
