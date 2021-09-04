import React from "react";
import CreateHolidaysScreen from "./CreateHolidaysScreen";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/holiday";

const initialValues = {
  hollidayName: "",
  startDate: "",
  endDate: "",
};
const CreateHolidays = () => {
  const { request, data, error } = useApi(api.addHoliday);
  const validationSchema = Yup.object({
    hollidayName: Yup.string().required("Required"),
    startDate: Yup.date().required("Required"),
    endDate: Yup.date().required("Required"),
  });
  const onSubmit = async (values) => {
    console.log("Create Holidays data", values);
    try {
      await request(values);
    } catch (_) {}
  };
  return (
    <>
      <CreateHolidaysScreen
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        data={data}
        error={error}
      />
    </>
  );
};

export default CreateHolidays;
