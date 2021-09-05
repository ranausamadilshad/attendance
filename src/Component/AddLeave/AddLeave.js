import React from "react";
import * as Yup from "yup";
import AddLeaveScreen from "./AddLeaveScreen";
// import * as api from "../../apis";

const initialValues = {
  leaveCategory: "",
  subject: "",
  shortDescription: "",
  leaveFrom: "",
  leaveTo: "",
};

const AddLeave = () => {
  const validationSchema = Yup.object({
    subject: Yup.string().required("Required"),
    leaveCategory: Yup.number().required("Required"),
    shortDescription: Yup.string().required("Required"),
    leaveFrom: Yup.date().required("Required"),
    leaveTo: Yup.date().required("Required"),
  });

  const onSubmit = async (values) => {
    // try {
    //   await request({
    //     ...values,
    //     endTime: values.endTime + ":00",
    //     startTime: values.startTime + ":00",
    //   });
    // } catch (_) {}
  };
  return (
    <>
      <AddLeaveScreen
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default AddLeave;
