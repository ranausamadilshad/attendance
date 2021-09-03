import React from 'react'
import * as Yup from "yup";
import AddLeaveScreen from './AddLeaveScreen'



const initialValues = {
  lCategory: "",
  subject: "",
  sDescription: "",
  lFrom: "",
  lTo: "",
};

const validationSchema = Yup.object({
  subject: Yup.string().required("Required"),
  lCategory: Yup.number().required("Required"),
  sDescription: Yup.string().required("Required"),
  lFrom: Yup.date().required("Required"),
  lTo: Yup.date().required("Required")
});

const onSubmit = (values) => {
  console.log("Create Department data", values);
};


const AddLeave = () => {
    return (
        <>
          <AddLeaveScreen initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>  
        </>
    )
}

export default AddLeave
