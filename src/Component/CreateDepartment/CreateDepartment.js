import React from "react";
import CreateDepartmentScreen from "./CreateDepartmentScreen";
import * as Yup from "yup";
import * as deptApi from "../../apis/department";
import useApi from "../../hooks/useApi";

const initialValues = {
  email: "",
  name: "",
  address: "",
  phone: "",
};
const CreateDepartment = () => {
  const { request, data, error } = useApi(deptApi.addDepartment);
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    phone: Yup.number()
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .required("Required"),
    address: Yup.string().required("Required"),
    email: Yup.string().email("Email must be valid").required("Required"),
  });

  const onSubmit = async (values) => {
    console.log("Create Department data", values);
    try {
      const data = await request({ ...values });
      data && window.location.reload();
      console.log("returned", data);
    } catch (_) {}
  };
  console.log("error", error);
  return (
    <>
      <CreateDepartmentScreen
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        data={data}
        error={error}
      />
    </>
  );
};

export default CreateDepartment;
