import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';


export  const Signup = () => {
  const validate = Yup.object({  
    scac: Yup.string()
    .min(3, 'Must be 15 characters or less')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    userName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    })
  
  
  return (
    <Formik
      initialValues={{
        scac: '',
        companyName: '',
        email: '',
        password: '',
        userName: '',
        address: '',
        iconState:'hidden'
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }} 
    >
      {formik => (
        <div className='form'>
          <h1 className="my-4 font-weight-bold .display-4">Create an Account</h1>
          <Form>
            <TextField label="SCAC" name="scac" type="text" iconState="hidden"/>
            <TextField label="Company Name" name="companyName" type="text" iconState="hidden"/>
            <TextField label="Address" name="address" type="text" iconState="hidden"/>
            <TextField label="Username" name="userName" type="text" iconState="hidden"/>
            <TextField label="password" name="password" type="password"  icon="<AiFillLock/>"/>
            <TextField label="Email" name="email" type="email" iconState="hidden"/>
      
            <TextField label="Phone Number" name="PhoneNumber" type="text" iconState="hidden"/>
            <label className='checked'>
              <Field type="checkbox" name="checked" value="agre"/>
              <div>I agree to <a href='#'>data privacy</a> terms</div> 
            </label> 
            <div><button className="btn btn-dark mt-3" type="submit">Create Account</button></div>
            
            {/* <input className="btn btn-danger mt-3 ml-3" type="checkbox">I agree to <a href='#'>data privacy</a> terms</input> */}
            
          
          </Form>
          <p className='login-option'>
            Already have an account? <a href="#">Log In</a>
          </p>
        </div>
      )}
    </Formik>
    
  )
}