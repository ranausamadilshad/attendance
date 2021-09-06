import React from "react";
import AddLeave from "../Component/AddLeave/AddLeave";
import BodyHaiderPlus from "../Component/BodyHaiderPlus/BodyHaiderPlus";

const AddLeavePage = () => {
  return (
    <>
      <BodyHaiderPlus
        main="Apply For Leave"
        cname="Apply"
        btnName="View Leaves"
        btnlink="/leaveemployees"
      />
      <AddLeave />
    </>
  );
};

export default AddLeavePage;
