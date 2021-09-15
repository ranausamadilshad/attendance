import React from "react";
import "./AttendenceEmployee.css";

const AttendenceEmployeeScreen = ({ data }) => {
  let hours = "00";
  let minutes = "00";

  if (data.stats[0].checkin_late_time.hours) {
    hours = data.stats[0].checkin_late_time.hours;
  }
  if (data.stats[0].checkin_late_time.minutes) {
    minutes = data.stats[0].checkin_late_time.minutes;
  }
  return (
    <>
      <section className="daily_attendence_activity_section">
        <div className="daily_attendence_activity_box">
          <div className="daily_attendence_activity_box_detail">
            <div className="daily_attendence_activity_box_header">
              <h4>Timesheet</h4>
              <h5>{new Date().toLocaleDateString()}</h5>
            </div>

            {/* <div className="daily_attendence_activity_punch_btn"><button>Punch In</button><button>Punch Out</button></div> */}

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
                <span>{hours + ":" + minutes + ":00"}</span>
              </div>
              <div className="daily_attendence_activity_single_module">
                <span>Overtime</span>
                <span>
                  {data.stats[0].over_time === null
                    ? "--"
                    : data.stats[0].over_time}
                </span>
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
                  <i className="far fa-clock"></i>{" "}
                  {data.stats[0].time_in === null
                    ? "--"
                    : data.stats[0].time_in}
                </span>
              </div>
              <div className="daily_attendence_activity_single_module">
                <span>Punch Out at</span>
                <span>
                  <i className="far fa-clock"></i>{" "}
                  {data.stats[0].time_out === null
                    ? "--"
                    : data.stats[0].time_out}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AttendenceEmployeeScreen;
