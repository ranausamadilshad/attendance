import React, { useEffect } from "react";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import AddLeaveScreen from "./AddLeaveScreen";
import * as api from "../../apis/applyForLeave";
import * as leaveCategoryApi from "../../apis/leave-category";

const initialValues = {
  leaveCategory: "",
  subject: "",
  shortDescription: "",
  leaveFrom: "",
  leaveTo: "",
};

const AddLeave = () => {
  const { request, data } = useApi(api.applyForLeave);
  const leaveCategory = useApi(leaveCategoryApi.getLeaveCategory);

  useEffect(() => {
    async function fetchData() {
      try {
        await leaveCategory.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    subject: Yup.string().required("Required"),
    leaveCategory: Yup.number().required("Required"),
    shortDescription: Yup.string().required("Required"),
    leaveFrom: Yup.date().required("Required"),
    leaveTo: Yup.date().required("Required"),
  });

  const onSubmit = async (values) => {
    console.log("values", values);
    try {
      await request({
        ...values,
        leaveCategory: +values.leaveCategory,
      });
    } catch (_) {}
  };
  return (
    <>
      <AddLeaveScreen
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        leaveCategory={leaveCategory.data}
        data={data}
      />
    </>
  );
};

export default AddLeave;
