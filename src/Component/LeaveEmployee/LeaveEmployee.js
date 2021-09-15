import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import LeaveEmployeeScreen from "./LeaveEmployeeScreen";
import * as staffApi from "../../apis/staff";

const LeaveEmployee = () => {
  const { request, data } = useApi(staffApi.getAllLeaves);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  console.log("data", data);
  return <div>{data && <LeaveEmployeeScreen data={data} />}</div>;
};

export default LeaveEmployee;
