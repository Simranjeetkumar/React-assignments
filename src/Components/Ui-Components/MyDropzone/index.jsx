import React, {useCallback, useEffect, useState} from 'react'
import Dropzone, {useDropzone} from 'react-dropzone'
import { MuiBox, MuiButton, MuiTypography } from '../../Mui-Component'
import { MuiCloudUploadIcon } from '../../Mui-Icons'
import { retry } from 'redux-saga/effects'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import { useDispatch } from 'react-redux'
import {   setForm1, setForm2, setForm3 } from '../../../store/slice/ImgData'
import { Height } from '@mui/icons-material'
import { post } from '../../../Service/ApiService'
import { Content_API_Type } from '../../../ContentDraftConstants'

function MyDropzone({className,imgSize,dropZone,acceptedFileProp,imgName,imgUrl,videoUrl}) {
   
  
 if(videoUrl){

 }else{

 }
  const [files,setFile] = useState(
    [videoUrl? {type:'video/mp4',name:videoUrl.substring(videoUrl.lastIndexOf('-'))}:imgUrl?{type:'img/*',preview:imgUrl} :""]
    
    )
  const validationFunc = (file)=>{
    const img = new Image();
    img.src = URL.createObjectURL(file)
   const arr = []
  img.onload = ()=> {
     const width = img.width
     const  height = img.height
     const minWidth= 320;
     const minHeight= 180;
     const maxWidth= 640;
     const maxHeight= 360;
    
     if ( width <= maxWidth &&  height <= maxHeight && width >= minWidth && height>= minHeight) {
      // File meets the validation criteria
      console.log(`File ${file.name} is valid.`);
      return null
    } else {
      // File does not meet the validation criteria
      // console.error(`File ${file.name} does not meet the required dimensions.`);
     arr.push(true)
     return{
      code: "small-width",
       message: `Image dimensions must be min ${minWidth}*${minHeight} and max ${maxWidth}*${maxHeight}`,
     }
      
    }
   
     
  }              
  }
  const onDrop = useCallback(acceptedFiles => {
   
    const arr = acceptedFiles.map((file,index)=>{
       return Object.assign(file, {preview:URL.createObjectURL(file)})

    })
    setFile(arr)
    
    // acceptedFiles.map((file2,i)=>{
    //   const img = new Image();
    //   img.src = URL.createObjectURL(file2)
    //   img.onload = ()=> {
    //    const width = img.width
    //    const  height = img.height

    //    const minWidth= 320;
    //    const minHeight= 180;
    //    const maxWidth= 640;
    //    const maxHeight= 360;

    //    if ( width <= maxWidth &&  height <= maxHeight && width >= minWidth && height>= minHeight) {
    //     // File meets the validation criteria
    //     console.log(`File ${file2.name} is valid.`);
    //   } else {
    //     // File does not meet the validation criteria
    //     console.error(`File ${file2.name} does not meet the required dimensions.`);
    //     acceptedFiles.splice(0,1)
       
        
    //   }
    //   }
     
    // })
   
    


    
  }, [])
  const {getRootProps, getInputProps,acceptedFiles, fileRejections,isDragActive} = useDropzone({onDrop ,
  accept:acceptedFileProp,
  maxSize:imgSize,
 
  validator:validationFunc,
  
  
})
const items =  fileRejections.map((file,i)=>{
  return (file)
})
const dispatch = useDispatch()


useEffect(()=>{


if(acceptedFiles.length>0){

dropZone==0?dispatch(setForm1(acceptedFiles[0])):dropZone == 1?dispatch(setForm2(acceptedFiles[0])):dispatch(setForm3(acceptedFiles[0]))

}
},[acceptedFiles])



  return (
    <>  
    <MuiBox className='signUpBottomBox'>
     <MuiBox {...getRootProps({
      className : className
     })} >
      <input {...getInputProps()} />
      {
       <MuiBox className='ukhealthcare '>
        <MuiTypography><MuiCloudUploadIcon className='cloudIcon' /></MuiTypography>
        <MuiTypography>Drag and Drop here</MuiTypography>
        <MuiTypography>or</MuiTypography>
        <MuiButton className='ColorAqua'>Browser File</MuiButton>
        </MuiBox>
        
      }

    </MuiBox>
    <MuiBox className='ForgetEmailSubContainer'>
    {files.map((v,i)=>{
      return (
        <>
       
      {v.type=='application/pdf'||v.type=='video/mp4' ?<MuiTypography className='pdfName'>{v.name}</MuiTypography>:
      <img src={v.preview} className='responsiveWidth' alt="" />  }

      </>
      
      )
    })}

    {items.map((value,index)=>{
      return <MuiTypography className='ColorRed' key={index}>{value.errors[0].message}</MuiTypography>
    })}
    </MuiBox>
    </MuiBox> 
    </>

  )
}
export default MyDropzone
