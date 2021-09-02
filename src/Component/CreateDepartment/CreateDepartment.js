import React from 'react'
import CreateDepartmentScreen from './CreateDepartmentScreen'
import * as Yup from "yup";


const initialValues = {
  email: "",
  dName: "",
  dAddress: "",
  Phone: "",
};

const validationSchema = Yup.object({
  dName: Yup.string().required("Required"),
  Phone: Yup.number()
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .required("Required"),
});

const onSubmit = (values) => {
  console.log("Create Department data", values);
};


const CreateDepartment = () => {
    return (
        <>
          <CreateDepartmentScreen initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>  
        </>
    )
}

export default CreateDepartment
