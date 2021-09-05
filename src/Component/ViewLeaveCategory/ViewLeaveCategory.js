import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/jobTitle";
import ViewLeaveCategoryScreen from "./ViewLeaveCategoryScreen";
import BodyHaider from "../BodyHaider/BodyHaider";

const ViewLeaveCategory = () => {
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

  return (
    <>
      <BodyHaider
        main="Leave Category"
        cname="Leave Category"
        btnName="Create Leave Categories"
        btnlink="/add-leave-category"
      />
      {data && <ViewLeaveCategoryScreen data={data.jobTitles} />}
    </>
  );
};

export default ViewLeaveCategory;
