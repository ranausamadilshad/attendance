import React, { useState } from "react";
import DeleteLeaveEmployee from "./DeleteLeaveEmployee";
import "./LeaveEmployee.css";

const LeaveEmployeeScreen = ({ data, leaveData }) => {
  return (
    <>
      <section className="view_Employee_Leave_section" id="view_employee_leave">
        <div className="employee_leave_calculation_box">
          <div className="employee_leave_calculation_box_detail">
            <span>Total Leave</span>
            <small>{leaveData && leaveData.leaveStatus.allowed_leaves}</small>
          </div>
          <div className="employee_leave_calculation_box_detail">
            <span>Leave's Made</span>
            <small>{leaveData && leaveData.leaveStatus.leaves}</small>
          </div>
          <div className="employee_leave_calculation_box_detail">
            <span>Remaning Leave</span>
            <small>
              {leaveData &&
                leaveData.leaveStatus.allowed_leaves -
                  +leaveData.leaveStatus.leaves}
            </small>
          </div>
          {/* <div className="employee_leave_calculation_box_detail">
            <span>Leave History</span>
            <small>
              <i class="fas fa-filter"></i>
            </small>
          </div> */}
        </div>

        <div className="view_Employee_Leave_table">
          <table>
            <tr className="Employee_Leave_table_header">
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Num Of Days</th>
              <th>Reason</th>
              <th>Status</th>

              {/* <th className="view_department_action">Actions</th> */}
            </tr>
            {data &&
              data.applyLeaves.map((data) => (
                <tr className="Employee_Leave_table_body">
                  <td>{data.category}</td>
                  <td>{data.from.split("T")[0]}</td>
                  <td>{data.to.split("T")[0]}</td>
                  <td>
                    {(new Date(data.to.split("T")[0]).getTime() -
                      new Date(data.from.split("T")[0]).getTime()) /
                      (1000 * 3600 * 24) +
                      1}
                  </td>
                  <td>{data.subject}</td>
                  <td>{data.leave_status}</td>

                  {/* <td>
                  <div className="view_Employee_Leave_action_btn view_Employee_Leave_action">
                    <i
                      className="fas fa-ellipsis-v"
                      onClick={() => {
                        id ? setId("") : setId(data.id);
                      }}
                    ></i>
                    <div style={{ display: data.id === id ? "block" : "none" }}>
                      <div className="view_Employee_Leave_do_action">
                        

                        <a data-toggle="modal" data-target="#DeleteEmployee">
                          <i className="fas fa-trash-alt"></i>
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </td> */}
                </tr>
              ))}
          </table>
        </div>
      </section>
      <DeleteLeaveEmployee />
    </>
  );
};

export default LeaveEmployeeScreen;
