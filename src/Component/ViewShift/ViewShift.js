import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import ViewShiftScreen from "./ViewShiftScreen";
import * as api from "../../apis/shift";

const ViewShift = () => {
  const { request, data } = useApi(api.getAllShifts);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  return <>{data && <ViewShiftScreen data={data.shifts} />}</>;
};

export default ViewShift;
