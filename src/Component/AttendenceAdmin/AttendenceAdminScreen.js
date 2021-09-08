import React from "react";
import "./AttendenceAdmin.css";

const AttendenceAdminScreen = ({ data, setSelected }) => {
  return (
    <>
      <section className="daily_attendence_activity_section">
        <div className="daily_attendence_activity_employee_filter">
          <div className="attendence_activity_employee_filter_box">
            <label>Department</label>
            <select
              onChange={(event) => {
                setSelected(event.target.value);
              }}
            >
              <option selected disabled value="select">
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
            <select>
              <option selected disabled value="select">
                Select
              </option>
            </select>
          </div>
          <div className="attendence_activity_employee_filter_box">
            <button>
              <i className="fas fa-filter"></i> Filter
            </button>
          </div>
        </div>

        <div className="daily_attendence_activity_employee">
          <div className="daily_attendence_activity_employee_name">
            <h1>Jazim Muqet</h1>
            <span>DataBase Designer</span>
          </div>
        </div>

        <div className="daily_attendence_activity_box">
          <div className="daily_attendence_activity_box_detail">
            <div className="daily_attendence_activity_box_header">
              <h4>Timesheet</h4>
              <h5>wed, 11th Mar 2019</h5>
            </div>

            <div className="daily_attendence_activity_punch_btn">
              <button>Punch In</button>
              <button>Punch Out</button>
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
              <div className="daily_attendence_activity_single_module">
                <span>Punch In at</span>
                <span>
                  <i className="far fa-clock"></i> 10:00 pm
                </span>
              </div>
              <div className="daily_attendence_activity_single_module">
                <span>Punch Out at</span>
                <span>
                  <i className="far fa-clock"></i> 02:00 Am
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AttendenceAdminScreen;
