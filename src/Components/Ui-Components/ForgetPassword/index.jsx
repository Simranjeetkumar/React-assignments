import React from 'react'
import { MuiBox, MuiContainer,MuiButton, MuiTypography } from '../../Mui-Component'
import FormikContainer from '../../CommonComponent/FormicContainer';
import img from '../../../assets/multimedCopy.jpg'
import ResponsiveAppBar from '../Footer';
import { useNavigate } from 'react-router-dom';
import img3 from "../../../assets/logo.svg";
import * as Yup from "yup";
import { useDispatch } from "react-redux";


const ForgetPasswordSkeleton = ({obj,initialValues,heading,content,buttonText,footerComponent,FormikLastContent,beforeBtnContent,submitId,validationSchema})=>{
 
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

const ForgetPassword = () => {
  const navigate  = useNavigate()
  const validationSchema = Yup.object({
    email: Yup.string().required("required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'invalid'),
    // password: Yup.string().required("required"),
  });
  
  const obj = [
      { type: "email", name: "email", placeHolder: "Email" },
    ];
    const initialValues = {
      email: "",
    };
    const content = `Enter the email associated with your account and we will send an email with instructions to reset your password.`
    const heading = `Forgot Email/Password`
    const btnText = `send instructions`;

    const FormikLastBox = (
      <MuiBox>
                    <MuiButton onClick={()=>{navigate('/login')}} >Back to Sign in</MuiButton>
                    <MuiTypography className='Title '>If you cannot remember your email address, </MuiTypography>
                    <MuiButton>please contact us</MuiButton>

                  </MuiBox>
    )
return (
  <>
      <ForgetPasswordSkeleton obj={obj} initialValues={initialValues} heading={heading} content={content} buttonText={btnText} footerComponent={<ResponsiveAppBar/>} FormikLastContent={FormikLastBox} validationSchema={validationSchema} />
  </>
)
}

export {ForgetPasswordSkeleton}
export default ForgetPassword
