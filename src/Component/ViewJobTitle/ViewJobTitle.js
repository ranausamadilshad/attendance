import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import ViewJobTitleScreen from "./ViewJobTitleScreen";
import * as api from "../../apis/jobTitle";
const ViewJobTitle = () => {
  const { request, data } = useApi(api.getJobTitle);
  console.log("data", data);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);
  return <>{data && <ViewJobTitleScreen data={data.jobTitles} />}</>;
};

export default ViewJobTitle;
