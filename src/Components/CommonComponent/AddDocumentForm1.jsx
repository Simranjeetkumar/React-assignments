import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import FormicControl from "./FormicControl";
import { MuiBox, MuiButton, MuiGrid, MuiTypography } from "../Mui-Component";
import { get, post } from "../../Service/ApiService";


const AddDocumentForm1 = ({ obj,gridLastBox,btnText,formikLastContent,beforeBtnContent,submitId,dispatchFunc,run,initialValues,onSubmit}) => {
  const [selectOption,setSelectOption] = useState([]);
    const radioOptions = [
        {value:"1" ,key:"Promotional Content"},
        {value:"2" ,key:"Non-Promotional Content"},
        {value:"3" ,key:"Public Content"},
    ]
    
    useEffect(()=>{
        get(`v1/admin/pharma-company/?limit=999999&page=1&search=&sort_by=name&sort_order=1&status=1`).then((res)=>{
          setSelectOption(res.data.companies)
        })
    },[])

   
    const validationSchema = Yup.object({
        title:Yup.string().required("required"),
        content_type:Yup.string().required("required"),
        // company.name:Yup.string().required("required"),
        one_line_description:Yup.string().required("required"),
        description:Yup.string().required("required"),
        preparation_date:Yup.date().required("required"),
        expiry_date: Yup.date()
            .required('Expiry date is required')
            .min(Yup.ref('preparation_date'), 'Expiry date must be after preparation date'),
        job_number:Yup.string().required("required"),
        content_length:Yup.string().required("required"),
        copyright_notice:Yup.string().required("required"),
        declaration_long:Yup.string().required("required"),
        declaration_short:Yup.string().required("required"),
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
                
                   <MuiBox> 
                    <MuiTypography>Title<MuiTypography component='span' className='ColorRed'>*</MuiTypography></MuiTypography>
                    <FormicControl
                        control="input"
                        type='text'
                        name='title'
                        placeholder='title'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin menuText inputFeild"
                      />
                      </MuiBox>

                     
                    <FormicControl
                        control="radio"
                        name='content_type'
                        options={radioOptions}
                        label='Type'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin inputFeild "
                      />
                    <FormicControl
                        control="select"
                        name='company.name'
                        // name='company'
                        options={selectOption}
                        label='Company'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin menuText inputFeild"
                      />
                    <FormicControl
                        control="textarea"
                        name='one_line_description'
                        label='One Line Description'
                        placeholder='One Line Description'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin descriptionBox menuText inputFeild"
                      />
                    <FormicControl
                        control="textarea"
                        name='description'
                        label=' Line Description'
                        placeholder='Long Description'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin descriptionBox2 menuText inputFeild"
                      />
                      <MuiBox className='signUpBottomBox' >
                    <FormicControl
                        control="date"
                        name='preparation_date'
                        label='Preparation Date'
                        placeholder='day-month-year'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin menuText inputFeild"
                      />
                    <FormicControl
                        control="date"
                        name='expiry_date'
                        label='Expire Date'
                        placeholder='day-month-year'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin menuText inputFeild"
                      />
                      </MuiBox>

                      <MuiBox className='signUpBottomBox marginForForm'>
                    <MuiBox className='widthUser'>
                     <MuiTypography>job Number</MuiTypography>
                    <FormicControl
                        control="input"
                        type='text'
                        name='job_number'
                        placeholder='job Number'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin menuText inputFeild"
                      />
                      </MuiBox>
                    <MuiBox className='widthUser'>
                     <MuiTypography>Length of Content</MuiTypography>
                    <FormicControl
                        control="input"
                        type='text'
                        name='content_length'
                        placeholder='Length of Content'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin menuText inputFeild"
                      />
                      </MuiBox>
                      </MuiBox>
                        
                        <MuiBox className='marginForForm'>
                      <MuiTypography>Copy Right Notice</MuiTypography>
                    <FormicControl
                        control="input"
                        type='text'
                        name='copyright_notice'
                        placeholder='Copy Right Notice'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin menuText inputFeild"
                      />
                      </MuiBox>
                    <FormicControl
                        control="textarea"
                        name='declaration_short'
                        label='Declaration of Involment(short Description)'
                        placeholder='short Description'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin descriptionBox menuText inputFeild"
                      />
                      <FormicControl
                        control="textarea"
                        name='declaration_long'
                        label='Declaration of Involment(Long Description)'
                        placeholder='Long Description'
                        className="gridBtn formik2field FeildBackground ThColor zeroMargin descriptionBox2 menuText inputFeild"
                      />
                   <MuiButton type='submit' variant='contained' className='marginForForm bgForSubmit'>Save & next</MuiButton>


                
                
              </Form>
            );
          }}
        </Formik>
      </>
    );
  };

export default AddDocumentForm1
