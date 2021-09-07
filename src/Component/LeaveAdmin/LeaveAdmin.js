import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import LeaveAdminScreen from "./LeaveAdminScreen";
import * as api from "../../apis/applyForLeave";

const initialValues = {
  employeeName: "",
  leaveType: "",
  leaveStatus: "",
  from: "",
  to: "",
};

const LeaveAdmin = () => {
  const { request, data } = useApi(api.getAllLeaves);
  const [filteredArray, setFilteredArray] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  function handleSubmit(values) {
    console.log(values);
    console.log(data.applyLeaves[0].from.split("T")[0], values.from);

    console.log(data.applyLeaves[0].from.split("T")[0] === values.from);

    values.leaveStatus &&
      setFilteredArray(
        data.applyLeaves.filter(
          (element) => element.leaveStatus === values.leaveStatus
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

  console.log("data", filteredArray);
  return (
    <>
      <LeaveAdminScreen
        data={data}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        filteredArray={filteredArray}
      />
    </>
  );
};

export default LeaveAdmin;
