import React from 'react'
import { ForgetPasswordSkeleton } from '../ForgetPassword'
import ResponsiveAppBar from '../Footer';
import { MuiBox } from '../../Mui-Component';
import * as Yup from "yup";

const ResetPassword = () => {
    const obj = [
        { type: "password", name: "password", placeHolder: "New Password" },
        { type: "password", name: "confirmPassword", placeHolder: "Confirm Password" }
      ];
      const validationSchema = Yup.object({
        password: Yup.string().required("required"),
        // confirmPassword: Yup.string().required("required"),
      });
      const initialValues = {
        operation:0,
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

export default ResetPassword
