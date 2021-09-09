import React, { useEffect } from "react";
import AdminDashboardScreen from "./AdminDashboardScreen";
import * as api from "../../apis/staff";
import useApi from "../../hooks/useApi";

const AdminDashboard = () => {
  const { request, data } = useApi(api.getStaff);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  return (
    <>
      <AdminDashboardScreen data={data} />
    </>
  );
};

export default AdminDashboard;
