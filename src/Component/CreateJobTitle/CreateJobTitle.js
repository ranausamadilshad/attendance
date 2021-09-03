import React from "react";
import CreateJobTitleScreen from "./CreateJobTitleScreen";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/jobTitle";

const initialValues = {
  jobTitle: "",
  allowedLeaves: "",
};

const CreateJobTitle = () => {
  const { request, data } = useApi(api.addJobTitle);
  const validationSchema = Yup.object({
    jobTitle: Yup.string().required("Required"),
    allowedLeaves: Yup.number().required("Required"),
  });

  const onSubmit = async (values) => {
    try {
      await request({ ...values });
    } catch (_) {}
  };
  return (
    <>
      <CreateJobTitleScreen
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        data={data}
      />
    </>
  );
};

export default CreateJobTitle;
