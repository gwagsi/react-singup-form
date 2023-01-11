import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { AiFillLock } from "react-icons/ai";

export const TextField = ({ label,iconState, ...props }) => {
  const [field, meta] = useField(props);
  function iconS(){
    let result="";
    if (iconState=="hidden"){
      result="hidden"
    }
    else {result="inputWithIcon"}
    return result;
  };
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
<div className={`${iconS()}`} ><AiFillLock visibility={`${iconState}`} className="icon"/>

      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      /></div>
      
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}