import React, { useEffect } from "react";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import AddLeaveScreen from "./AddLeaveScreen";
import * as api from "../../apis/applyForLeave";
import * as leaveCategoryApi from "../../apis/leave-category";

const initialValues = {
  leaveCategory: "",
  subject: "",
  description: "",
  fromDate: "",
  toDate: "",
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
    description: Yup.string().required("Required"),
    fromDate: Yup.date().required("Required"),
    toDate: Yup.date().required("Required"),
  });

  console.log("dataaaa", data);
  const onSubmit = async (values) => {
    try {
      await request(values);
      // window.location.reload();
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
