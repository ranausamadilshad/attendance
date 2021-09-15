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
  console.log("attendence error", attendance.error);
  console.log("attendence data", attendance.data);
  console.log("update error", updateAttendance.error);
  console.log("update data", updateAttendance.data);

  // console.log("employ", singleEmployee.data);

  const onSubmit = async (values) => {
    setStaff(+values.employee);
    // console.log("staff", staff);
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
      await leave.request({ staff });
      // console.log("mark leave", data);
    } catch (_) {}
  };

  const markAbsent = async () => {
    try {
      await absent.request({ staff });
      // console.log("mark absent", data);
    } catch (_) {}
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
          absentData={absent.data}
          leaveData={leave.data}
        />
      )}
    </>
  );
};

export default AttendenceAdmin;
