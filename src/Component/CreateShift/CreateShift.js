import React from "react";
import CreateShiftScreen from "./CreateShiftScreen";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/shift";

const initialValues = {
  shiftName: "",
  startTime: "",
  endTime: "",
};

const CreateShift = () => {
  const { request, data, error } = useApi(api.addShift);
  const validationSchema = Yup.object({
    shiftName: Yup.string().required("Required"),
    startTime: Yup.string().required("Required"),
    endTime: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    try {
      await request({
        ...values,
        endTime: values.endTime + ":00",
        startTime: values.startTime + ":00",
      });
    } catch (_) {}
  };

  return (
    <>
      <CreateShiftScreen
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        data={data}
        error={error}
      />
    </>
  );
};

export default CreateShift;
