import React from 'react'
import CreateJobTitleScreen from './CreateJobTitleScreen'
import * as Yup from "yup";

const initialValues = {
  jobTitle: "",
  allowedLeaves: "",
};

const validationSchema = Yup.object({
  jobTitle: Yup.string().required("Required"),
  allowedLeaves: Yup.number().required("Required"),
});

const onSubmit = (values) => {
  console.log("Create Job Title data", values);
};

const CreateJobTitle = () => {
  
    return (
        <>
          <CreateJobTitleScreen  initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>  
        </>
    )
}

export default CreateJobTitle
