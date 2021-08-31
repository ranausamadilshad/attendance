import React, { useState } from "react";
import "./ViewHoliday.css";
const ViewHolidaysScreen = () => {
  const [id, setId] = useState("");
  const holidays = [
    { id: 1, day: "Defence day", from: "August,6,2021", to: "August,6,2021" },
    { id: 2, day: "Pakistan Day", from: "August,6,2021", to: "August,6,2021" },
    { id: 3, day: "Defence day", from: "August,6,2021", to: "August,6,2021" },
    { id: 4, day: "Pakistan Day", from: "August,6,2021", to: "August,6,2021" },
    { id: 5, day: "Defence day", from: "August,6,2021", to: "August,6,2021" },
    { id: 6, day: "Pakistan Day", from: "August,6,2021", to: "August,6,2021" }
  ];

  return (
    <>
      <section class="view_holiday_section">
        <div class="view_holiday_table">
          <table>
            <tr class="view_holiday_table_header">
              <th>Holiday Name</th>
              <th>From</th>
              <th>To</th>
              <th class="view_department_action">Actions</th>
            </tr>

            {holidays.map((data) => (
              <tr class="view_holiday_table_body" >
                <td>{data.day}</td>
                <td>{data.from}</td>
                <td>{data.to}</td>
                <td>
                  <div class="view_holiday_action_btn view_holiday_action">
                    <i
                      class="fas fa-ellipsis-v"
                      onClick={() => {id ? setId('') : setId(data.id)}}
                     
                    ></i>
                    <div style={{ display: data.id===id ? "block" : "none" }}>
                      <div class="view_department_do_action">
                        <a href="#">
                          <i class="fas fa-pen"></i>
                          <span>Edit</span>
                        </a>
                        <a href="#">
                          <i class="fas fa-trash-alt"></i>
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

export default ViewHolidaysScreen;
