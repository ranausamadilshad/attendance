import React, { useEffect } from "react";
import EmployeesCreateScreen from "./EmployeesCreateScreen";
import * as Yup from "yup";
import * as api from "../../apis/staff";
import * as deptApi from "../../apis/department";
import * as jobApi from "../../apis/jobTitle";
import useApi from "../../hooks/useApi";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  joiningDate: "",
  dob: "",
  gender: "",
  address: "",
  password: "",
};

const EmployeesCreate = () => {
  const { request, data, error } = useApi(api.addStaff);
  const getDepts = useApi(deptApi.getDepartments);
  const getJob = useApi(jobApi.getJobTitle);

  useEffect(() => {
    async function fetchData() {
      try {
        await getDepts.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        await getJob.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    joiningDate: Yup.date().required("Required"),
    dob: Yup.date().required("Required"),
    gender: Yup.string().required("Required"),
    password: Yup.string().min(8).required("Required"),
  });
  const onSubmit = async (values) => {
    try {
      await request(values);
      // window.location.reload();
    } catch (_) {}
  };

  return (
    <>
      <EmployeesCreateScreen
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        depts={getDepts.data}
        jobs={getJob.data}
        data={data}
      />
    </>
  );
};

export default EmployeesCreate;
