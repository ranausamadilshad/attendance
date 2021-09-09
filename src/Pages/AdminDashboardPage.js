import React, { useEffect } from "react";
import AdminHeader from "../Component/AdminHeader/AdminHeader";
import AdminDashboard from "../Component/Admin_Dashboard/AdminDashboard";

const AdminDashboardPage = () => {
  useEffect(() => {
    if (window.localStorage) {
      if (!localStorage.getItem("secondLoad")) {
        localStorage["secondLoad"] = true;
        window.location.reload();
      } else localStorage.removeItem("secondLoad");
    }
  }, []);
  return (
    <>
      <AdminHeader main="Dashboard" cname="Admin" />
      <AdminDashboard />
    </>
  );
};

export default AdminDashboardPage;
