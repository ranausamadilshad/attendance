import React, { useState } from "react";
import "./LeaveEmployee.css";

const LeaveEmployeeScreen = () => {
  const [id, setId] = useState("");
  const holidays = [
    {
      id: 1,
      name: "Defence day",
      phone: "09",
      joind: "09",
      email: "Defence day",
      department: "Defence day",
      jobtitle: "Defence day",
      dateofbirth: "8/9/1990",
      jobshift: "Defence day",
      gender: "Defence day",
      address: "Defence day",
      image: "Defence day",
    },
    {
      id: 2,
      name: "Pakistan Day",
      phone: "09",
      joind: "09",
      email: "Defence day",
      department: "Defence day",
      jobtitle: "Defence day",
      dateofbirth: "8/9/1999",
      jobshift: "Defence day",
      gender: "Defence day",
      address: "Defence day",
      image: "Defence day",
    },
  ];
  return (
    <>
      <section className="view_Employee_Leave_section" id="view_employee_leave">
        <div className="employee_leave_calculation_box">
          <div className="employee_leave_calculation_box_detail">
            <span>Total Leave</span>
            <small>12</small>
          </div>
          <div className="employee_leave_calculation_box_detail">
            <span>Leave's Made</span>
            <small>3</small>
          </div>
          <div className="employee_leave_calculation_box_detail">
            <span>Remaning Leave</span>
            <small>4</small>
          </div>
          <div className="employee_leave_calculation_box_detail">
            <span>Leave History</span>
            <small>
              <i class="fas fa-filter"></i>
            </small>
          </div>
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
              <th>Approved By</th>
              <th className="view_department_action">Actions</th>
            </tr>
            {holidays.map((data) => (
              <tr className="Employee_Leave_table_body">
                <td>{data.name}</td>
                <td>{data.joind}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.jobtitle}</td>
                <td>{data.jobshift}</td>
                <td>{data.gender}</td>

                <td>
                  <div className="view_Employee_Leave_action_btn view_Employee_Leave_action">
                    <i
                      className="fas fa-ellipsis-v"
                      onClick={() => {
                        id ? setId("") : setId(data.id);
                      }}
                    ></i>
                    <div style={{ display: data.id === id ? "block" : "none" }}>
                      <div className="view_Employee_Leave_do_action">
                        {/* <a href="#"><i className="fas fa-eye"></i><span>View</span></a>
                        <a data-toggle="modal" data-target="#123"><i className="fas fa-pen"></i><span>Edit</span></a> */}
                        <a data-toggle="modal" data-target="#DeleteDepartment">
                          <i className="fas fa-trash-alt"></i>
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </>
  );
};

export default LeaveEmployeeScreen;
