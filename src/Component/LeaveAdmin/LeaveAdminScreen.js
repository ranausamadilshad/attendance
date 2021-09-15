import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import DeleteLeaveAdmin from "./DeleteLeaveAdmin";
import "./LeaveAdmin.css";

const LeaveAdminScreen = ({
  data,
  initialValues,
  handleSubmit,
  filteredArray,
  leaveCatData,
  setStaffId,
}) => {
  const [id, setId] = useState("");
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <section className="view_admin_Leave_section">
              <div className="admin_leave_calculation_box">
                <div className="admin_leave_calculation_box_detail">
                  <span>Total Leave</span>
                  <small>12</small>
                </div>
                <div className="admin_leave_calculation_box_detail">
                  <span>Leave's Made</span>
                  <small>3</small>
                </div>
                <div className="admin_leave_calculation_box_detail">
                  <span>Remaning Leave</span>
                  <small>4</small>
                </div>
                <div className="admin_leave_calculation_box_detail">
                  <span>Leave History</span>
                  <small>
                    <i className="fas fa-filter"></i>
                  </small>
                </div>
              </div>
              <div className="admin_leave_filter">
                <div className="leave_filter_detail">
                  <div className="admin_name_filter">
                    <label>Employee Name</label>
                    <Field name="employeeName" type="text" />
                  </div>
                </div>
                <div className="leave_filter_detail">
                  <div className="admin_name_filter">
                    <label>Leave Type</label>
                    <Field as="select" name="leaveType">
                      <option value="" selected disabled>
                        Select
                      </option>
                      {leaveCatData &&
                        leaveCatData.leaveCategories.map((leave) => (
                          <option value={leave.id}>{leave.name}</option>
                        ))}
                    </Field>
                  </div>
                </div>
                <div className="leave_filter_detail">
                  <div className="admin_name_filter">
                    <label>Leave Status</label>
                    <Field as="select" name="leaveStatus">
                      <option value="" selected disabled>
                        Select
                      </option>
                      <option value="PENDING">Pending</option>
                      <option value="REJECTED">Rejected</option>
                      <option value="ACCEPTED">Accepted</option>
                    </Field>
                  </div>
                </div>
                <div className="leave_filter_detail">
                  <div className="admin_name_filter">
                    <label>From</label>
                    <Field name="from" type="date" />
                  </div>
                </div>
                <div className="leave_filter_detail">
                  <div className="admin_name_filter">
                    <label>To</label>
                    <Field name="to" type="date" />
                  </div>
                </div>
                <div className="leave_filter_detail">
                  <div className="admin_name_filter">
                    <button type="submit">Search</button>
                  </div>
                </div>
              </div>

              <div className="view_admin_Leave_table">
                <table>
                  <tr className="admin_Leave_table_header">
                    <th>Employee</th>
                    <th>Leave Type</th>
                    <th>From</th>
                    <th>To</th>
                    <th>No Of Days</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th className="view_department_action">Actions</th>
                  </tr>
                  {!filteredArray &&
                    data &&
                    data.applyLeaves.map((data) => (
                      <tr
                        className="admin_Leave_table_body"
                        onClick={() => setStaffId(data.id)}
                      >
                        <td>{data.staff_name}</td>
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
                        <td>
                          <div className="status_selection">
                            <div class="status_active">
                              <small>{data.leave_status}</small>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="view_admin_Leave_action_btn view_admin_Leave_action">
                            <a
                              style={{ color: "blue", cursor: "pointer" }}
                              data-toggle="modal"
                              data-target="#DeleteAdmin"
                              onClick={() => {
                                id ? setId("") : setId(data.id);
                              }}
                            >
                              Respond
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  {filteredArray &&
                    (filteredArray.length > 0 ? (
                      filteredArray.map((data) => (
                        <tr
                          className="admin_Leave_table_body"
                          onClick={() => setStaffId(data.id)}
                        >
                          <td>data.name</td>
                          <td>{data.leaveCategory.name}</td>
                          <td>{data.from.split("T")[0]}</td>
                          <td>{data.to.split("T")[0]}</td>
                          <td>
                            {(new Date(data.to.split("T")[0]).getTime() -
                              new Date(data.from.split("T")[0]).getTime()) /
                              (1000 * 3600 * 24) +
                              1}
                          </td>
                          <td>{data.subject}</td>
                          <td>
                            <div className="status_selection">
                              <div class="status_active">
                                <small>{data.leaveStatus}</small>
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="view_admin_Leave_action_btn view_admin_Leave_action">
                              <a
                                style={{ color: "blue", cursor: "pointer" }}
                                data-toggle="modal"
                                data-target="#DeleteAdmin"
                                onClick={() => {
                                  id ? setId("") : setId(data.id);
                                }}
                              >
                                Respond
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p style={{ margin: 10 }}>No data found</p>
                    ))}
                </table>
              </div>
            </section>
          </Form>
        )}
      </Formik>
      {id && <DeleteLeaveAdmin id={id} />}
    </>
  );
};

export default LeaveAdminScreen;
