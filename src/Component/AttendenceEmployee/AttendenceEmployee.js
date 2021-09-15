import React, { useEffect } from "react";
import AttendenceEmployeeScreen from "./AttendenceEmployeeScreen";
import * as attendenceApi from "../../apis/attendance";
import useApi from "../../hooks/useApi";

const AttendenceEmployee = () => {
  const { data, request } = useApi(attendenceApi.getStaffAttendance);
  useEffect(() => {
    async function fetchData() {
      try {
        await request(sessionStorage.getItem("staffId"));
      } catch (_) {}
    }
    fetchData();
  }, []);

  return <>{data && <AttendenceEmployeeScreen data={data} />}</>;
};

export default AttendenceEmployee;
