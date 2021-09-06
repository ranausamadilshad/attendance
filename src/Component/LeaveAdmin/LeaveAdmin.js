import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import LeaveAdminScreen from "./LeaveAdminScreen";
import * as api from "../../apis/applyForLeave";

const LeaveAdmin = () => {
  const { request, data } = useApi(api.getAllLeaves);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  console.log("data", data);
  return (
    <>
      <LeaveAdminScreen data={data} />
    </>
  );
};

export default LeaveAdmin;
