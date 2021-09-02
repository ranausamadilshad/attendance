import React from 'react'
import UpdateHolidaysScreen from './UpdateHolidaysScreen'
import * as Yup from "yup";


const UpdateHolidays = () => {
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
        console.log("Update Holidays data", values);
      };
    return (
        <>
         <UpdateHolidaysScreen initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>   
        </>
    )
}

export default UpdateHolidays
