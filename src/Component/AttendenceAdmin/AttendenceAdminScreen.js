import { Form, Formik, Field } from "formik";
import React from "react";
import "./AttendenceAdmin.css";

const AttendenceAdminScreen = ({
  data,
  setSelected,
  initialValues,
  onSubmit,
  employeesData,
  singleEmp,
  attendanceData,
  markAttendanceIn,
  markAttendanceOut,
  updateAttendance,
  getAttendance,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {() => (
          <section className="daily_attendence_activity_section">
            <Form>
              <div className="daily_attendence_activity_employee_filter">
                <div className="attendence_activity_employee_filter_box">
                  <label>Department</label>
                  <select
                    name="department"
                    onChange={({ target }) => setSelected(target.value)}
                    required
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    {data &&
                      data.departments.map((data) => (
                        <>
                          <option value={data.id}>{data.name}</option>
                        </>
                      ))}
                  </select>
                </div>
                <div className="attendence_activity_employee_filter_box">
                  <label>Employee Name</label>
                  <Field as="select" name="employee" required>
                    <option selected disabled value="">
                      Select Department
                    </option>
                    {employeesData &&
                      employeesData.staffMembers.map((data) => (
                        <>
                          <option value={data.id}>{data.name}</option>
                        </>
                      ))}
                  </Field>
                </div>
                <div className="attendence_activity_employee_filter_box">
                  <button type="submit">
                    <i className="fas fa-filter"></i> Filter
                  </button>
                </div>
              </div>
            </Form>

            <div className="daily_attendence_activity_employee">
              <div className="daily_attendence_activity_employee_name">
                {!singleEmp ? (
                  <h1>Employee</h1>
                ) : (
                  <h1>{singleEmp.staff.name}</h1>
                )}
                {!singleEmp ? (
                  <span>Employee Designation</span>
                ) : (
                  <span>DataBase Designer</span>
                )}
              </div>
            </div>

            <div className="daily_attendence_activity_box">
              <div className="daily_attendence_activity_box_detail">
                <div className="daily_attendence_activity_box_header">
                  <h4>Timesheet</h4>
                  <h5>wed, 11th Mar 2019</h5>
                </div>

                <div className="daily_attendence_activity_punch_btn">
                  <button onClick={markAttendanceIn}>Punch In</button>
                  <button onClick={markAttendanceOut}>Punch Out</button>
                </div>

                <div className="daily_attendence_activity_box_footer">
                  <div className="daily_attendence_break_overtime_box">
                    <span>Break</span>
                    <span>1.30 hour</span>
                  </div>
                  <div className="daily_attendence_break_overtime_box">
                    <span>OverTime</span>
                    <span>1.30 hour</span>
                  </div>
                </div>
              </div>
              <div className="daily_attendence_activity_box_detail">
                <div className="daily_attendence_activity_box_header">
                  <h4>Statistics</h4>
                </div>
                <div className="daily_attendence_activity_module">
                  <div className="daily_attendence_activity_single_module">
                    <span>Late</span>
                    <span>1 hour</span>
                  </div>
                  <div className="daily_attendence_activity_single_module">
                    <span>Overtime</span>
                    <span>2 hour</span>
                  </div>
                  <div className="daily_attendence_activity_single_module">
                    <span>working hour</span>
                    <span>8 hour</span>
                  </div>
                </div>
              </div>
              <div className="daily_attendence_activity_box_detail">
                <div className="daily_attendence_activity_box_header">
                  <h4>Today Activity</h4>
                </div>
                <div className="daily_attendence_activity_module">
                  {!updateAttendance ? (
                    <div className="daily_attendence_activity_single_module">
                      <span>Punch In at</span>
                      {attendanceData.data ? (
                        <span>
                          <i className="far fa-clock"></i>{" "}
                          {
                            attendanceData.data.attendence.timeIn
                              .split("T")[1]
                              .split(".")[0]
                          }
                        </span>
                      ) : (
                        <span>
                          <i className="far fa-clock"></i> --:--
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="daily_attendence_activity_single_module">
                      <span>Punch In at</span>
                      {updateAttendance ? (
                        <span>
                          <i className="far fa-clock"></i>{" "}
                          {
                            updateAttendance.attendence.timeIn
                              .split("T")[1]
                              .split(".")[0]
                          }
                        </span>
                      ) : (
                        <span>
                          <i className="far fa-clock"></i> --:--
                        </span>
                      )}
                    </div>
                  )}
                  <div className="daily_attendence_activity_single_module">
                    <span>Punch Out at</span>
                    {updateAttendance ? (
                      <span>
                        <i className="far fa-clock"></i>{" "}
                        {
                          updateAttendance.attendence.timeOut
                            .split("T")[1]
                            .split(".")[0]
                        }
                      </span>
                    ) : (
                      <span>
                        <i className="far fa-clock"></i> --:--
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
};

export default AttendenceAdminScreen;
