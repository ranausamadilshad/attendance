import React, { useEffect } from "react";
import EmployeesCreateScreen from "./EmployeesCreateScreen";
import * as Yup from "yup";
import * as api from "../../apis/staff";
import * as deptApi from "../../apis/department";
import * as jobApi from "../../apis/jobTitle";
import * as shiftApi from "../../apis/shift";
import useApi from "../../hooks/useApi";

const initialValues = {
  name: "",
  phoneNo: "",
  email: "",
  joiningDate: "",
  department: "",
  jobTitle: "",
  shift: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  password: "",
};

const EmployeesCreate = () => {
  const { request, data, error } = useApi(api.addStaff);
  const getDepts = useApi(deptApi.getDepartments);
  const getShifts = useApi(shiftApi.getAllShifts);
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
        await getShifts.request();
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
    name: Yup.string().required("Required"),
    phoneNo: Yup.number().required("Required"),
    email: Yup.string().required("Required"),
    joiningDate: Yup.date().required("Required").nullable(),
    department: Yup.string().required("Required"),
    jobTitle: Yup.string().required("Required"),
    shift: Yup.string().required("Required"),
    dateOfBirth: Yup.date().required("Required").nullable(),
    gender: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    password: Yup.string().min(8).required("Required"),
  });
  const onSubmit = async (values) => {
    try {
      await request({
        ...values,
        shift: +values.shift,
        jobTitle: +values.jobTitle,
        department: +values.department,
      });
      window.location.reload();
    } catch (_) {}
  };
  return (
    <>
      <EmployeesCreateScreen
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        depts={getDepts.data}
        shifts={getShifts.data}
        jobs={getJob.data}
        data={data}
      />
    </>
  );
};

export default EmployeesCreate;
