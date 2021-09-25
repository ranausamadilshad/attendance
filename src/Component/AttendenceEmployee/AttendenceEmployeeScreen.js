import React from "react";
import "./AttendenceEmployee.css";

const AttendenceEmployeeScreen = ({ data }) => {
  console.log("attendence data", data);
  let hours = "00";
  let minutes = "00";
  let overHours = "00";
  let overMinutes = "00";

  if (data.stats.length > 0) {
    if (data.stats[0].checkin_late_time.hours) {
      hours = data.stats[0].checkin_late_time.hours;
    }
    if (data.stats[0].checkin_late_time.minutes) {
      minutes = data.stats[0].checkin_late_time.minutes;
    }
    if (data.stats[0].over_time.minutes) {
      overMinutes = data.stats[0].over_time.minutes;
    }
    if (data.stats[0].over_time.hours) {
      overHours = data.stats[0].over_time.hours;
    }
  }
  function convertTo12Hours(timeString) {
    const timeString12hr = new Date(
      "1970-01-01T" + timeString + "Z"
    ).toLocaleTimeString(
      {},
      { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
    );
    return timeString12hr;
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

            <div className="daily_attendence_activity_module">
              <div className="daily_attendence_activity_single_module">
                <span>Break</span>
                <span style={{ color: "red" }}>1:10 hour</span>
              </div>
              <div className="daily_attendence_activity_single_module">
                <span>Working hour</span>
                <span>--:--</span>
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
                <span style={{ color: "red" }}>
                  {hours + " hours " + minutes + " minutes"}
                </span>
              </div>
              <div className="daily_attendence_activity_single_module">
                <span>Overtime</span>
                <span style={{ color: "green" }}>
                  {overHours + " hours " + overMinutes + " minutes"}
                </span>
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
                  {data.stats.length > 0
                    ? data.stats[0].time_in === null
                      ? "--"
                      : convertTo12Hours(data.stats[0].time_in)
                    : "--:--"}
                </span>
              </div>
              <div className="daily_attendence_activity_single_module">
                <span>Punch Out at</span>
                <span>
                  <i className="far fa-clock"></i>{" "}
                  {data.stats.length > 0
                    ? data.stats[0].time_out === null
                      ? "--"
                      : convertTo12Hours(data.stats[0].time_out)
                    : "--:--"}
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
