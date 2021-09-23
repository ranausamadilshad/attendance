import axios from "axios";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import * as deptApi from "../../apis/department";
import * as jobApi from "../../apis/jobTitle";
import * as shiftApi from "../../apis/shift";
import * as api from "../../apis/staff";
import useApi from "../../hooks/useApi";
import UpdateEmployeeScreen from "./UpdateEmployeeScreen";

let initialValues = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  joining_date: "",
  department: "",
  job_title: "",
  dob: "",
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
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       await getShifts.request();
  //     } catch (_) {}
  //   }
  //   fetchData();
  // }, []);
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
        console.log("single employee", data);
        initialValues = data.staff;
        // initialValues.dob = data.staff.dob.split("T")[0];
        // initialValues.joining_date = data.staff.joining_date.split("T")[0];

        setValues((prev) => ({ ...prev, ...data.staff }));
      } catch (_) {}
    }
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    department: Yup.string().required(),
    job_title: Yup.string().required(),
    gender: Yup.string().required("Required"),
    address: Yup.string().required(),
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
        firstName: values.first_name,
        lastName: values.last_name,
        jobTitle: values.job_title,
        phone: 0,
      });
      // data && uploadAvatar();
      window.location.reload();
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
