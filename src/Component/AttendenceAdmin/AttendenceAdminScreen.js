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
  markAbsent,
  markLeave,
  absentData,
  leaveData,
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
                          <option value={data.staff_id}>
                            {data.staff_name}
                          </option>
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
                  <h1>
                    {singleEmp.staff.first_name +
                      " " +
                      singleEmp.staff.last_name}
                  </h1>
                )}
                {/* {!singleEmp ? (
                  <span>Employee Designation</span>
                ) : (
                  <span>DataBase Designer</span>
                )} */}
              </div>
            </div>

            <div className="daily_attendence_activity_box">
              <div className="daily_attendence_activity_box_detail">
                <div className="daily_attendence_activity_box_header">
                  <h4>Timesheet</h4>
                  <h5>{new Date().toLocaleDateString()}</h5>
                </div>

                <div className="daily_attendence_activity_punch_btn">
                  <button onClick={markAttendanceIn} disabled={!!!singleEmp}>
                    Punch In
                  </button>

                  <button onClick={markAttendanceOut} disabled={!!!singleEmp}>
                    Punch Out
                  </button>
                </div>
                {attendanceData.error && (
                  <p style={{ color: "red" }}>
                    {attendanceData.error.data &&
                      attendanceData.error.data.message}
                  </p>
                )}
                {updateAttendance.error && (
                  <p style={{ color: "red" }}>
                    {updateAttendance.error.data &&
                      updateAttendance.error.data.message}
                  </p>
                )}
                {absentData && (
                  <p style={{ color: "green" }}>
                    {updateAttendance.error.data &&
                      updateAttendance.error.data.message}
                  </p>
                )}

                <div className="daily_attendence_activity_punch_btn">
                  <button onClick={markAbsent} disabled={!!!singleEmp}>
                    Absent
                  </button>

                  <button onClick={markLeave} disabled={!!!singleEmp}>
                    On Leave
                  </button>
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
                  {!updateAttendance.data ||
                  Object.entries(updateAttendance.data).length <= 0 ? (
                    <div className="daily_attendence_activity_single_module">
                      <span>Punch In at</span>
                      {attendanceData.data &&
                      Object.entries(attendanceData.data).length > 0 ? (
                        <span>
                          <i className="far fa-clock"></i>{" "}
                          {attendanceData.data.attendence.time_in}
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
                      {updateAttendance.data &&
                      Object.entries(updateAttendance.data).length > 0 ? (
                        <span>
                          <i className="far fa-clock"></i>{" "}
                          {updateAttendance.data.attendence.time_in}
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
                    {updateAttendance.data &&
                    Object.entries(updateAttendance.data).length > 0 ? (
                      <span>
                        <i className="far fa-clock"></i>{" "}
                        {updateAttendance.data.attendence.time_out}
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
