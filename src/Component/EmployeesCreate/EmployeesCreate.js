import React from 'react'
import EmployeesCreateScreen from './EmployeesCreateScreen'
import * as Yup from "yup";


const department = [
    { key: "Department", value: "" },
    { key: "Option 1", value: "HR" },
    { key: "Option 2", value: "Development" },
    { key: "Option 3", value: "Marketing" },
  ];
  const jobTitle = [
    { key: "Job Title", value: "" },
    { key: "Option 1", value: "Sweaper" },
  ];
  const jobShift = [
    { key: "Job Shift", value: "" },
    { key: "Option 1", value: " Morning" },
    { key: "Option 2", value: "Evening" },
  ];
  const gender = [
    { key: "Gender", value: "" },
    { key: "Option 1", value: "Male" },
    { key: "Option 2", value: "Female" },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    joinDate: "",
    department: "",
    jobTitle: "",
    jobShift: "",
    dateOfBirth: "",
    gender: "",
    address: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phone: Yup.number().required("Required"),
    email: Yup.string().required("Required"),
    joinDate: Yup.date().required("Required").nullable(),
    department: Yup.string().required("Required"),
    jobTitle: Yup.string().required("Required"),
    jobShift: Yup.string().required("Required"),
    dateOfBirth: Yup.date().required("Required").nullable(),
    gender: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Create Employees data", values);
  };


const EmployeesCreate = () => {
    return (
        <>
         <EmployeesCreateScreen initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} jobShift={jobShift} jobTitle={jobTitle} department={department} gender={gender} />   
        </>
    )
}

export default EmployeesCreate
