import React from 'react'
import UpdateShiftScreen from './UpdateShiftScreen'
import * as Yup from "yup";


const initialValues = {
    shiftName: "",
    startTime: "",
    endTime: "",
  };
  const validationSchema = Yup.object({
   shiftName: Yup.string().required("Required"),
   startTime: Yup.date().required("Required"),
   endTime: Yup.date().required("Required")
  });
  const onSubmit = (values) => {
    console.log("Update Shift data", values);
  };

const UpdateShift = () => {
    return (
        <>
            <UpdateShiftScreen initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>
        </>
    )
}

export default UpdateShift
