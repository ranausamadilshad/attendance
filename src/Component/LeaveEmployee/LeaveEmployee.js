import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import LeaveEmployeeScreen from "./LeaveEmployeeScreen";
import * as staffApi from "../../apis/staff";

const LeaveEmployee = () => {
  const { request, data } = useApi(staffApi.getAllLeaves);
  const leaveDetails = useApi(staffApi.getEmployeeLeaveDetails);
  useEffect(() => {
    async function fetchData() {
      try {
        await leaveDetails.request(sessionStorage.getItem("staffId"));
      } catch (_) {}
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  console.log("data", leaveDetails.data);
  return (
    <div>
      <LeaveEmployeeScreen data={data} leaveData={leaveDetails.data} />
    </div>
  );
};

export default LeaveEmployee;
