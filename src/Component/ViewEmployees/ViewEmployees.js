import React, { useEffect } from "react";
import ViewEmployeesScreen from "./ViewEmployeesScreen";
import * as api from "../../apis/staff";
import useApi from "../../hooks/useApi";

const ViewEmployees = () => {
  const { request, data } = useApi(api.getStaff);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  return <>{data && <ViewEmployeesScreen data={data} />}</>;
};

export default ViewEmployees;
