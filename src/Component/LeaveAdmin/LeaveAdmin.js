import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import LeaveAdminScreen from "./LeaveAdminScreen";
import * as api from "../../apis/applyForLeave";
import * as leaveCategory from "../../apis/leave-category";
import * as staffApi from "../../apis/staff";

const initialValues = {
  employeeName: "",
  leaveType: "",
  leaveStatus: "",
  from: "",
  to: "",
};

const LeaveAdmin = () => {
  const [staffId, setStaffId] = useState("");
  const { request, data } = useApi(api.getAllLeaves);
  const leaveCat = useApi(leaveCategory.getLeaveCategory);
  const leaveDetails = useApi(staffApi.getEmployeeLeaveDetails);
  const [filteredArray, setFilteredArray] = useState();
  console.log("data", data);

  //Get all leaves that employee have applied for. (for admin)

  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  //Get employee Leave Details

  useEffect(() => {
    async function fetchData() {
      try {
        await leaveDetails.request(staffId);
      } catch (_) {}
    }
    staffId && fetchData();
  }, [staffId]);

  //get all leave categories. (Needed for filtering leaves based on category)

  useEffect(() => {
    async function fetchData() {
      try {
        await leaveCat.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("staff Id", staffId);

  function handleSubmit(values) {
    console.log("data", data.applyLeaves);
    console.log("values", values);
    values.employeeName &&
      setFilteredArray(
        data.applyLeaves.filter((element) =>
          element.staff_name.includes(values.employeeName)
        )
      );
    values.leaveStatus &&
      setFilteredArray(
        data.applyLeaves.filter(
          (element) => element.leave_status === values.leaveStatus
        )
      );
    values.leaveType &&
      setFilteredArray(
        data.applyLeaves.filter(
          (element) => element.category === values.leaveType
        )
      );
    values.from &&
      setFilteredArray(
        data.applyLeaves.filter(
          (element) =>
            new Date(element.from).toLocaleDateString() ===
            new Date(values.from).toLocaleDateString()
        )
      );
    values.to &&
      setFilteredArray(
        data.applyLeaves.filter(
          (element) =>
            new Date(element.to).toLocaleDateString() ===
            new Date(values.to).toLocaleDateString()
        )
      );
  }
  console.log("filtered array", filteredArray);
  return (
    <>
      <LeaveAdminScreen
        data={data}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        filteredArray={filteredArray}
        leaveCatData={leaveCat.data}
        setStaffId={setStaffId}
        staffId={staffId}
      />
    </>
  );
};

export default LeaveAdmin;
