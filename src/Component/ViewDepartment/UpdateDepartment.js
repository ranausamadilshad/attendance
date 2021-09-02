import React from 'react'
import UpdateDepartmentScreen from './UpdateDepartmentScreen';
import * as Yup from "yup";


const UpdateDepartment = () => {
    const initialValues = {
        email: "",
        dName: "",
        dAddress: "",
        Phone: "",
      };
    
      const validationSchema = Yup.object({
        dName: Yup.string().required("Required"),
        Phone: Yup.number() .required("Required"),
      });
    
      const onSubmit = (values) => {
        console.log("Update Department data", values);
      };
    return (
        <>
           <UpdateDepartmentScreen initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/> 
        </>
    )
}

export default UpdateDepartment
