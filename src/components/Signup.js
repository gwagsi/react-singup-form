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
        confirmPassword: ''
      }}
      /* validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }} */
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Create an Account</h1>
          <Form>
            <TextField label="scac" name="scac" type="text" />
            <TextField label="Company Name" name="CompanyName" type="text" />
            <TextField label="Address" name="Address" type="text" />
            <TextField label="Username" name="Username" type="text" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Email" name="email" type="email" />
      
            <TextField label="Phone Number" name="PhoneNumber" type="text" />
            <label>
              <Field type="checkbox" name="checked" value="agre" />
              I agree to <a href='#'>data privacy</a> terms
            </label> 
            <div><button className="btn btn-dark mt-3" type="submit">create Account</button></div>
            
            {/* <input className="btn btn-danger mt-3 ml-3" type="checkbox">I agree to <a href='#'>data privacy</a> terms</input> */}
            
          
          </Form>
        </div>
      )}
    </Formik>
    
  )
}