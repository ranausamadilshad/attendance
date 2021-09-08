import React, { useEffect, useState } from "react";
import AttendenceAdminScreen from "./AttendenceAdminScreen";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/department";

const AttendenceAdmin = () => {
  const [selected, setSelected] = useState("");
  const employees = useApi(api.getDepartmentEmployees);

  useEffect(() => {
    console.log(selected);

    async function fetchData() {
      try {
        await employees.request();
      } catch (_) {}
    }
    fetchData();
  }, [selected]);
  const { request, data } = useApi(api.getDepartments);
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
      {data && <AttendenceAdminScreen data={data} setSelected={setSelected} />}
    </>
  );
};

export default AttendenceAdmin;
