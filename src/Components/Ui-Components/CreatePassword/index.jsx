import React from 'react'
import ResponsiveAppBar from '../Footer';
import { ForgetPasswordSkeleton } from '../ForgetPassword'
import { MuiBox } from '../../Mui-Component';
import * as Yup from "yup";



const ForgetPasswordSkeleton2 = ({obj,initialValues,heading,content,buttonText,footerComponent,FormikLastContent,beforeBtnContent,submitId,validationSchema})=>{
 
  return (
  <>
  <MuiBox className='mainContainer'>
  <MuiBox className='forgetPassword' >
                <img src={img3} alt="" />
              </MuiBox>
  <MuiBox className='ForgetEmailContainer'>
      <MuiBox className='ForgetEmailSubContainer'>
          <MuiTypography className='forgetEmailHeading'>{heading}</MuiTypography>
          <MuiTypography>
             {content}.</MuiTypography>
  
          <MuiBox>
              <FormikContainer initialValues={initialValues} obj={obj} btnText={buttonText} formikLastContent={FormikLastContent} beforeBtnContent={beforeBtnContent} submitId={submitId} validationSchema={validationSchema}  />
  
          </MuiBox>
      </MuiBox>
  </MuiBox>
  {footerComponent}
  </MuiBox>
  </>
  )
  
  }

const CreatePassword = () => {
    const obj = [
        { type: "password", name: "password", placeHolder: "New Password" },
        { type: "password", name: "confirmPassword", placeHolder: "Confirm Password" }
      ];
      const validationSchema = Yup.object({
        password: Yup.string().required("required"),
        confirmPassword: Yup.string().required("required"),
      });
      const initialValues = {
        operation:2,
        password: "",
        confirmPassword:"",
      };
      const content = `Please set your password `
      const heading = `Create Your Password`
      const btnText = `Save`;
      const beforeBtnContent = (
        <MuiBox className='beforeBtnContent'>
        By clicking save button, you agree to our Terms. Learn how we collect, use and share your data in our Privacy policy and how we use cookies and similar technology in our Cookies Policy.
        </MuiBox>
      )
  return (
    <>
      <ForgetPasswordSkeleton obj={obj} initialValues={initialValues} heading={heading} content={content} buttonText={btnText} footerComponent={<ResponsiveAppBar/>} beforeBtnContent={beforeBtnContent} submitId='submitBtn' validationSchema={validationSchema}/>
    </>
  )
}

export default CreatePassword
