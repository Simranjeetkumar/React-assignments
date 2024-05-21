/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { MuiBox, MuiButton, MuiGrid } from "../../Mui-Component";
import img1 from "../../../assets/doctorImg1.avif";
import img2 from "../../../assets/login.png";
import img3 from "../../../assets/logo.svg";
import FormikContainer from "../../CommonComponent/FormicContainer";
import CheckboxLabels from "../../CommonComponent/CheckBox";
import { Link } from "react-router-dom";
import * as Yup from "yup";
// import { useDispatch } from "react-redux";
import { USER_FETCH_REQUESTED } from "../../../store/Constants";

const SignInSkeleton = ({Component1,rightSideHeading,bgImg,...rest})=>{
  return (
    <>
    <MuiBox className="signUpContainer">
        <MuiGrid container className="signUpGrid">
          <MuiGrid item xl={5} lg={5} md={6} sm={12} xs={12} className='gridItem1Xs formGridItem'>
            <MuiBox className='signupLogo' >
              <img src={img3} alt="" />
            </MuiBox>
            {Component1}

            <MuiBox className="mulit3dAccountContainer">
              <ul className="listContainer listItems">
                <li>Contact us</li>
                <li className="marginLi">Help Center</li>
                <li>Cookies</li>
                <li>Privacy</li>
              </ul>
              <ul className="listContainer listItems" >
                <li>Legal Notices</li>
                <li>Terms of use</li>
                <li>About us</li>
                <li>Sales</li>
              </ul>
            </MuiBox>
          </MuiGrid>
          <MuiGrid item xl={6} lg={6} md={5} sm={12} xs={12}>
            {rightSideHeading}
          </MuiGrid>
        </MuiGrid>
       
        <img src={bgImg} className="loginBgImg" {...rest}  alt="" />
       
      </MuiBox>
    </>
  )
}
const SignInComponent1 = ()=>{
  const obj = [
    { type: "email", name: "email", placeHolder: "Email" },
    { type: "password", name: "password", placeHolder: "Password" },
  ];
  
  const initialValues = {
    email: "sanjay@yopmail.com",
    password: "Admin@123",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'invalid format'),
    password: Yup.string().required("required"),
  });
  const formLastBox = (
    <MuiBox className="signUpBottomBox gridBtnWidthOverRide">
      <CheckboxLabels className='checkBox' label="Remember me" />
      <MuiBox className="needHelp">
        <Link to='/forgetPassword'>Need help signing in?</Link>
      </MuiBox>
    </MuiBox>
  );
  return(
  <>
  <MuiBox className='xsForm' >
              <MuiBox className="signUpHeading">Sign In</MuiBox>
              <MuiBox>
                <FormikContainer
                  initialValues={initialValues}
                  obj={obj}
                  gridLastBox={formLastBox}
                  btnText='submit'
                  validationSchema={validationSchema}
                 
                />
              </MuiBox>
            </MuiBox>

            <MuiBox className="mulit3dAccountContainer">
              <MuiBox className="dontMulti3dAccount">
                <MuiButton variant="text" className="accountBtn1">
                  Don't have a MultiM3d account?
                </MuiButton>
              </MuiBox>
              <MuiBox>
                <MuiButton variant="outlined" className="gridBtnWidthOverRide">
                  Register now
                </MuiButton>
              </MuiBox>
            </MuiBox>

            <MuiBox className="content">
              MultiM3d is currently in beta. We are committed to continually
              improving the platform for the benefit of the medical community.
              We welcome your feedback and suggestion. Please email us at
              <a href="#" className="email">
                feedback@multim3d.net
              </a>
            </MuiBox>
  
  </>)
}

const SignIn = () => {
  const headingBox = ( <MuiBox className='ukhealthcare'>
  Streamed pharma content for UK healthcare professionals
</MuiBox>)
  return (
    <>
      <SignInSkeleton  Component1={<SignInComponent1/>} rightSideHeading={headingBox} bgImg={img2}/>
    </>
  );
};
export{SignInSkeleton}
export default SignIn;
