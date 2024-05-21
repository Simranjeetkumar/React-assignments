/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import FormicControl from "./FormicControl";
import { MuiButton, MuiGrid, MuiBox, MuiTypography, MuiPaper} from "../Mui-Component";
import LocalStorageService from "../../Service/LocalStorageService";
import { Navigate, useNavigate } from "react-router-dom";
import { patch, post } from "../../Service/ApiService";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ADMIN_SUCCESSFUL, CREATE_PASSWORD_SUCCESSFUL, RESET_PASSWORD_SUCCESSFUL, USER_FETCH_REQUESTED, USER_VERIFY_EMAIL } from "../../store/Constants";
import { setValues } from "../../store/slice/EditValues";
import Rating from '@mui/material/Rating';
import { toast } from 'react-toastify'
import { setRatingValue } from "../../store/slice/RatingValue";




const FormikContainer = ({ initialValues, obj,gridLastBox,btnText,formikLastContent,beforeBtnContent,submitId,validationSchema,apiFunction}) => {
  const dispatch = useDispatch();

  const onSubmit = (values, props) => {
    console.log(values);
   const  start = window.location.href.indexOf('token=');
   const  end = window.location.href.indexOf('&') ;
  const token =  window.location.href.substring(start+6,end)

    console.log('validation',validationSchema._nodes.length==2)

    validationSchema._nodes.includes('email') && validationSchema._nodes.length==2 ?
    dispatch({type:USER_FETCH_REQUESTED,payload:values}) 
    :validationSchema._nodes.length==1 && validationSchema._nodes.includes('password') ?
     dispatch({type:RESET_PASSWORD_SUCCESSFUL,payload:values,id:token})
     :initialValues.operation == 2?
     dispatch({type:CREATE_PASSWORD_SUCCESSFUL,payload:{operation:values.operation,password:values.password},id:token})

    :dispatch({type:USER_VERIFY_EMAIL,payload:values})
    
   props.resetForm()
  
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <>
            <Form className="SimpleForm">
              <MuiGrid container className="formContainer">
                {obj.map((value, index) => {
                  return (
                    <MuiGrid item xl={12} lg={12} md={12} sm={12} xs={12} key={index}>
                      <FormicControl
                        control="input"
                        type={value.type}
                        name={value.name}
                        label={value.label}
                        placeholder={value.placeHolder}
                        className="gridBtn"
                      />
                    </MuiGrid>
                  );
                })}
                <MuiGrid xl={12} lg={12} md={12} sm={12} xs={12} item>
                  {beforeBtnContent}
                  <MuiButton
                    type="submit"
                    id={submitId}
                    className="gridBtn gridBtnWidthOverRide bgForSubmit"
                    variant="contained"
                  >
                    {btnText}
                  </MuiButton>
                  
                  {formikLastContent}
                </MuiGrid>
              </MuiGrid>
            </Form>
            {gridLastBox}
            </>
          );
        }}
      </Formik>
    </>
  );
};
const FormikContainer2 = ({ initialValues, obj,gridLastBox,btnText,formikLastContent,beforeBtnContent,submitId,dispatchFunc,run}) => {
  const dispatch = useDispatch();
  const onSubmit = (values, props) => {
    console.log(values);
    dispatchFunc(values)
    props.resetForm()
    run?dispatch(setValues(["","",""])):null;
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("required"),
    first_name: Yup.string().required("required"),
    last_name: Yup.string().required("required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form className="SimpleForm">
              <MuiGrid container columnSpacing={2} className="formContainer">
                {obj.map((value, index) => {
                  if(index==2){
                    return(
                    <MuiGrid item xl={8} lg={12} md={12} sm={6} xs={12} key={index}>
                      <MuiTypography>Email</MuiTypography>
                      <FormicControl
                        control="input"
                        type={value.type}
                        name={value.name}
                        label={value.label}
                        placeholder={value.placeHolder}
                        className="gridBtn formik2field TableHead ThColor"
                      />
                    </MuiGrid>
                    )
                  }
                  return (
                    <MuiGrid item xl={4} lg={6} md={6} sm={6} xs={12} key={index}>
                      <MuiTypography>{value.placeHolder}</MuiTypography>
                      <FormicControl
                        control="input"
                        type={value.type}
                        name={value.name}
                        label={value.label}
                        placeholder={value.placeHolder}
                        className="gridBtn formik2field TableHead ThColor"
                      />
                    </MuiGrid>
                  );
                })}
                <MuiGrid xl={8} lg={8} md={8} sm={12} xs={12} item>
                  <MuiBox className='formik2Btn'>
                  <MuiButton
                    type="submit"
                    id={submitId}
                    className="formik2BtnMargin"
                    variant="contained"
                  >
                    {btnText}
                  </MuiButton>
                  <MuiButton
                    type="submit"
                    id={submitId}
                    className=""
                    variant="outlined"
                  >
                   Cancel
                  </MuiButton>

                  </MuiBox>
                 
                </MuiGrid>
              </MuiGrid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
const FacultyFormikContainer = ({facultyInitialValue,facultId,documentType}) => {
  const dispatch = useDispatch();
 const rating = useSelector((state)=>state.RatingValue)
  const navigate = useNavigate();
  const onSubmit = (values, props) => {
    console.log(values);
    if(documentType == 'view'){
      navigate('/admin/manage-content')
    }
    else{

      patch(`v1/admin/contents/update/${facultId}`,values).then((res)=>{
        console.log('res',res)
        navigate('/admin/manage-content')
        if(res.message == "Content updated successfully."){
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
      })
    }
    props.resetForm();
   
  };
  const validationSchema = Yup.object({
    review: Yup.string().required("required"),
  }); 

  return (
    <>
      <Formik
        initialValues={facultyInitialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <>
            <Form className="SimpleForm facultyForm">
            <MuiPaper  className=' facultyPaper inputFeild'>
        <MuiBox className='SearchFieldContainer'>
        <MuiTypography component="legend">Facult(Rating)</MuiTypography>
      <Rating
        ame="simple-controlled"
        value={rating.value}
        onChange={(event, newValue) => {
          // setValue(newValue);
          dispatch(setRatingValue(newValue))
        }}
      />
      </MuiBox>
        <MuiBox className='facultDes'>
       
      <FormicControl
      control="textarea"
      name='review'
      label='Facult(Review)'
      className='facultDes facultDes1 inputFeild'
      placeholder='Faculty Review'
      
      />
      
      </MuiBox>
      <MuiBox className='facultyBtn'>
        <MuiButton type='submit' className='bgForSubmit'>Close</MuiButton>
      </MuiBox>
    </MuiPaper>
            </Form>
           
            </>
          );
        }}
      </Formik>
    </>
  );
};





export{FormikContainer2,FacultyFormikContainer}
export default FormikContainer;
