import React from 'react'
import UpdateJobTitleScreen from './UpdateJobTitleScreen';
import * as Yup from "yup";


const UpdateJobTitle = () => {
    const initialValues = {
        jobTitle: "",
        allowedLeaves: "",
      };
    
      const validationSchema = Yup.object({
        jobTitle: Yup.string().required("Required"),
        allowedLeaves: Yup.number().required("Required"),
      });
    
      const onSubmit = (values) => {
        console.log("Update Job Title data", values);
      };
    return (
        <>
        <UpdateJobTitleScreen initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>    
        </>
    )
}

export default UpdateJobTitle
