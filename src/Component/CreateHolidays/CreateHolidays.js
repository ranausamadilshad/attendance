import React from 'react'
import CreateHolidaysScreen from './CreateHolidaysScreen'
import * as Yup from "yup";

const initialValues = {
    holidayName: "",
    startTime: "",
    endTime: "",
  };
  const validationSchema = Yup.object({
    holidayName: Yup.string().required("Required"),
    startTime: Yup.date().required("Required"),
    endTime: Yup.date().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Create Holidays data", values);
  };

const CreateHolidays = () => {
 
    return (
        <>
         <CreateHolidaysScreen initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>   
        </>
    )
}

export default CreateHolidays
