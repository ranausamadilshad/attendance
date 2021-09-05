import React from "react";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import AddLeaveCategoryScreen from "./AddLeaveCategoryScreen";
import * as api from "../../apis/leave-category";

const initialValues = {
  categoryName: "",
};

const AddLeaveCategory = () => {
  const { request, data } = useApi(api.addLeaveCategory);
  const validationSchema = Yup.object({
    categoryName: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    try {
      await request(values);
    } catch (_) {}
  };
  console.log("data", data);
  return (
    <>
      <AddLeaveCategoryScreen
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        data={data}
      />
    </>
  );
};

export default AddLeaveCategory;
