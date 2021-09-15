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
  const getEmployeeLeaveDetails = useApi(staffApi.getEmployeeLeaveDetails);
  const [filteredArray, setFilteredArray] = useState();

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
        await getEmployeeLeaveDetails.request(staffId);
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

  console.log("data", data);

  function handleSubmit(values) {
    console.log("values", data.applyLeaves);
    values.leaveStatus &&
      setFilteredArray(
        data.applyLeaves.filter(
          (element) => element.leaveStatus === values.leaveStatus
        )
      );
    values.leaveType &&
      setFilteredArray(
        data.applyLeaves.filter(
          (element) => element.leaveCategoryId === +values.leaveType
        )
      );
    values.from &&
      setFilteredArray(
        data.applyLeaves.filter(
          (element) => element.from.split("T")[0] === values.from
        )
      );
    values.to &&
      setFilteredArray(
        data.applyLeaves.filter(
          (element) => element.to.split("T")[0] === values.to
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
      />
    </>
  );
};

export default LeaveAdmin;
