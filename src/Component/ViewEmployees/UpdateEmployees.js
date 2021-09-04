import axios from "axios";
import { setNestedObjectValues } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import * as deptApi from "../../apis/department";
import * as jobApi from "../../apis/jobTitle";
import * as shiftApi from "../../apis/shift";
import * as api from "../../apis/staff";
import useApi from "../../hooks/useApi";
import UpdateEmployeeScreen from "./UpdateEmployeeScreen";

let initialValues = {
  name: "",
  phoneNo: "",
  email: "",
  joiningDate: "",
  departmentId: "",
  jobTitleId: "",
  shiftId: "",
  dateOfBirth: "",
  gender: "",
  address: "",
};

const UpdateEmployees = ({ id }) => {
  const [image, setImage] = useState();
  const [previewImg, setPreviewImg] = useState();
  const [, setValues] = useState({});
  const getDepts = useApi(deptApi.getDepartments);
  const getShifts = useApi(shiftApi.getAllShifts);
  const getJob = useApi(jobApi.getJobTitle);
  const getSingleStaff = useApi(api.getSingleStaff);
  const { request, data } = useApi(api.updateStaff);

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
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getSingleStaff.request(id);
        initialValues = data.staff;
        initialValues.dateOfBirth = data.staff.dob.split("T")[0];
        initialValues.joiningDate = data.staff.joiningDate.split("T")[0];

        setValues((prev) => ({ ...prev, ...data.staff }));
      } catch (_) {}
    }
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    phoneNo: Yup.number().required("Required"),
    email: Yup.string().required("Required"),
    joiningDate: Yup.date().required("Required").nullable(),
    departmentId: Yup.string().required("Required"),
    jobTitleId: Yup.string().required("Required"),
    shiftId: Yup.string().required("Required"),
    dateOfBirth: Yup.date().required("Required").nullable(),
    gender: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  });

  function handleImage(e) {
    setImage(e.target.files[0]);
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
  }

  const uploadAvatar = async () => {
    console.log("inside image upload", image);

    const formData = new FormData();
    formData.append("avatar", image);
    try {
      const { data } = await axios.patch(
        `http://localhost:8000/staff/${id}/avatar`,
        formData
      );
      console.log("uploaded image", data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const onSubmit = async (values) => {
    console.log("Update Employees data", values);
    try {
      const { data } = await request({
        ...values,
        shift: +values.shiftId,
        jobTitle: +values.jobTitleId,
        department: +values.departmentId,
      });
      data && uploadAvatar();
    } catch (_) {}
  };

  return (
    <>
      <UpdateEmployeeScreen
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        depts={getDepts.data}
        shifts={getShifts.data}
        jobs={getJob.data}
        data={data}
        handleImage={handleImage}
        image={previewImg}
      />
    </>
  );
};

export default UpdateEmployees;
