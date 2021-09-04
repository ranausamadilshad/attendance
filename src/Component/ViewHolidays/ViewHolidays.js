import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import ViewHolidaysScreen from "./ViewHolidaysScreen";
import * as api from "../../apis/holiday";

const ViewHolidays = () => {
  const { request, data } = useApi(api.getHolidays);
  console.log("data", data);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  return <>{data && <ViewHolidaysScreen data={data} />}</>;
};

export default ViewHolidays;
