import React from "react";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import AddLeaveCategoryScreen from "./AddLeaveCategoryScreen";
import * as api from "../../apis/leave-category";
import BodyHaider from "../BodyHaider/BodyHaider";
import BodyHaiderPlus from "../BodyHaiderPlus/BodyHaiderPlus";

const initialValues = {
  name: "",
};

const AddLeaveCategory = () => {
  const { request, data } = useApi(api.addLeaveCategory);
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    try {
      await request(values);
      window.location.reload();
    } catch (_) {}
  };
  console.log("data", data);
  return (
    <>
      <BodyHaiderPlus
        main="Leave Category"
        cname="Leave Category"
        btnName="View Leave Categories"
        btnlink="/view-leave-categories"
      />
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
