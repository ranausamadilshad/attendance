import React from "react";
import "../../Css/Style.css";
import { Link } from "react-router-dom";

const BodyHaiderScreenPlus = (props) => {
  return (
    <>
      <div className="content_body_page_title">
        <div className="body_page_title">
          <h1>{props.main}</h1>
          <span className="body_page_title_detail">
            <Link to="/">Dashboard</Link>
            <span></span>
            <h6>{props.cname}</h6>
          </span>
        </div>
        <div className="body_page_title_create_btn">
          <Link to={props.btnlink} className="btn btn-primary">
            {" "}
            <span> {props.btnName}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BodyHaiderScreenPlus;
