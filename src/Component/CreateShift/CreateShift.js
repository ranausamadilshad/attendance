import React from 'react'
import CreateShiftScreen from './CreateShiftScreen'
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
  console.log("Create Shift data", values);
};

const CreateShift = () => {
    return (
        <>
          <CreateShiftScreen initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>  
        </>
    )
}

export default CreateShift
