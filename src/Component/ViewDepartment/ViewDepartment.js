import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import ViewDepartmentScreen from "./ViewDepartmentScreen";
import * as deptApi from "../../apis/department";

const ViewDepartment = () => {
  const { request, data } = useApi(deptApi.getDepartments);
  console.log("data", data);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  return <>{data && <ViewDepartmentScreen data={data.departments} />}</>;
};

export default ViewDepartment;
