import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from './TextField';


export  const Signup = () => {
  
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        iconState:'hidden'
      }}
      /* validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }} */
    >
      {formik => (
        <div className='form'>
          <h1 className="my-4 font-weight-bold .display-4">Create an Account</h1>
          <Form>
            <TextField label="SCAC" name="scac" type="text" iconState="hidden"/>
            <TextField label="Company Name" name="CompanyName" type="text" iconState="hidden"/>
            <TextField label="Address" name="Address" type="text" iconState="hidden"/>
            <TextField label="Username" name="Username" type="text" iconState="hidden"/>
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