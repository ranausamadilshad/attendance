import React from "react";
import { Link } from "react-router-dom";

const LeaveHeaderAdmin = () => {
  return (
    <>
      <div className="content_body_page_title">
        <div className="body_page_title">
          <h1>Leave</h1>
          <span className="body_page_title_detail">
            <Link to="/">Dashboard</Link>
            <span></span>
            <h6>Leave</h6>
          </span>
        </div>
        <div className="body_page_title_create_btn">
          <Link to="/addleave" className="btn btn-primary">
            {" "}
            <i class="fas fa-plus"></i> <span> Apply For Leave</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeaveHeaderAdmin;
