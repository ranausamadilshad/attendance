import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import UpdateHolidayScreen from "./UpdateHolidayScreen";
import * as api from "../../apis/holiday";

let initialValues = {
  holidayName: "",
  startTime: "",
  endTime: "",
};

const UpdateHolidays = ({ id }) => {
  const [values, setValues] = useState({});
  const { request, data } = useApi(api.getSingleHoliday);
  const updateHoliday = useApi(api.updateHoliday);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request(id);
        initialValues = data.holiday;
        // initialValues.dateOfBirth = data.staff.dob.split("T")[0];
        // initialValues.joiningDate = data.staff.joiningDate.split("T")[0];

        setValues((prev) => ({ ...prev, ...data.staff }));
      } catch (_) {}
    }
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    holidayName: Yup.string().required("Required"),
    startTime: Yup.date().required("Required"),
    endTime: Yup.date().required("Required"),
  });
  const onSubmit = async (values) => {
    console.log("Update Holidays data", values);
    try {
      await updateHoliday.request(values);
    } catch (_) {}
  };
  return (
    <>
      <UpdateHolidayScreen
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        data={updateHoliday.data}
      />
    </>
  );
};

export default UpdateHolidays;
