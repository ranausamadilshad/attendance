import React, { useEffect, useState } from "react";
import UpdateDepartmentScreen from "./UpdateDepartmentScreen";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import * as deptApi from "../../apis/department";

let initialValues = {
  email: "",
  name: "",
  address: "",
  phone: "",
};

const UpdateDepartment = ({ id }) => {
  const [, setValues] = useState({});
  const updateDept = useApi(deptApi.updateDepartment);
  const { request, data } = useApi(deptApi.getSingleDepartment);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request(id);
        initialValues = data.department;
        setValues((prev) => ({ ...prev, ...data }));
      } catch (_) {}
    }
    fetchData();
  }, [id]);
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
    try {
      await updateDept.request({ id, ...values, phoneNo: values.phone });
      window.location.reload();
    } catch (_) {}
  };
  console.log("uopdated data", updateDept.data);
  return (
    <div>
      {data && (
        <UpdateDepartmentScreen
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          data={data.department}
          updatedData={updateDept.data}
        />
      )}
    </div>
  );
};

export default UpdateDepartment;
