import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import UpdateHolidayScreen from "./UpdateHolidayScreen";
import * as api from "../../apis/holiday";

let initialValues = {
  hollidayName: "",
  startDate: "",
  endDate: "",
};

const UpdateHolidays = ({ id }) => {
  const [, setValues] = useState({});
  const { request } = useApi(api.getSingleHoliday);
  const updateHoliday = useApi(api.updateHoliday);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request(id);
        console.log("holiday", data);
        initialValues.hollidayName = data.allortment.name;
        initialValues.startDate = data.allortment.from.split("T")[0];
        initialValues.endDate = data.allortment.to.split("T")[0];
        setValues((prev) => ({ ...prev, ...data.staff }));
      } catch (_) {}
    }
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    hollidayName: Yup.string().required("Required"),
    startDate: Yup.date().required("Required"),
    endDate: Yup.date().required("Required"),
  });
  const onSubmit = async (values) => {
    console.log("Update Holidays data", values);
    try {
      await updateHoliday.request({ id, ...values });
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
