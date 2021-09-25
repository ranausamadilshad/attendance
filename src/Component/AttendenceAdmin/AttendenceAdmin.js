import React, { useEffect, useState } from "react";
import AttendenceAdminScreen from "./AttendenceAdminScreen";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/staff";
import * as deptApi from "../../apis/department";
import * as attendanceApi from "../../apis/attendance";

const initialValues = {
  employee: "",
};

const AttendenceAdmin = () => {
  const [selected, setSelected] = useState("");
  const [staff, setStaff] = useState();
  const employees = useApi(api.getStaffOfDepartment);
  const singleEmployee = useApi(api.getSingleStaff);
  const attendance = useApi(attendanceApi.markAttendance);
  const updateAttendance = useApi(attendanceApi.updateAttendance);
  const absent = useApi(attendanceApi.markAbsent);
  const leave = useApi(attendanceApi.markLeave);
  const { request, data } = useApi(deptApi.getDepartments);

  useEffect(() => {
    async function fetchData() {
      try {
        await employees.request(selected);
      } catch (_) {}
    }
    fetchData();
  }, [selected]);

  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  const onSubmit = async (values) => {
    setStaff(+values.employee);
    try {
      await singleEmployee.request(+values.employee);
    } catch (_) {}
  };

  const markAttendanceIn = async () => {
    try {
      await attendance.request({ staff });
    } catch (_) {}
  };

  const markAttendanceOut = async () => {
    try {
      await updateAttendance.request({ staff });
    } catch (_) {}
  };

  const markLeave = async () => {
    try {
      await leave.request({ staffId: staff });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (_) {}
  };

  const markAbsent = async () => {
    try {
      await absent.request({ staffId: staff });
    } catch (_) {}
  };
  const convertTo12Hours = (timeString) => {
    const timeString12hr = new Date(
      "1970-01-01T" + timeString + "Z"
    ).toLocaleTimeString(
      {},
      { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
    );
    return timeString12hr;
  };

  return (
    <>
      {data && (
        <AttendenceAdminScreen
          data={data}
          setSelected={setSelected}
          onSubmit={onSubmit}
          initialValues={initialValues}
          employeesData={employees.data}
          singleEmp={singleEmployee.data}
          markAttendanceIn={markAttendanceIn}
          markAttendanceOut={markAttendanceOut}
          attendanceData={attendance}
          updateAttendance={updateAttendance}
          markAbsent={markAbsent}
          markLeave={markLeave}
          absentData={absent}
          leaveData={leave}
          convertTo12Hours={convertTo12Hours}
        />
      )}
    </>
  );
};

export default AttendenceAdmin;
