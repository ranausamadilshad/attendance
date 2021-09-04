import React, { useState } from "react";
import "./ViewHoliday.css";
import UpdateHolidays from "./UpdateHolidays";
import DeleteHolidays from "./DeleteHolidays";

const ViewHolidaysScreen = ({ data }) => {
  const [id, setId] = useState("");
  const holidays = [
    { id: 1, day: "Defence day", from: "August,6,2021", to: "August,6,2021" },
    { id: 2, day: "Pakistan Day", from: "August,6,2021", to: "August,6,2021" },
    { id: 3, day: "Defence day", from: "August,6,2021", to: "August,6,2021" },
    { id: 4, day: "Pakistan Day", from: "August,6,2021", to: "August,6,2021" },
    { id: 5, day: "Defence day", from: "August,6,2021", to: "August,6,2021" },
    { id: 6, day: "Pakistan Day", from: "August,6,2021", to: "August,6,2021" },
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

            {data.map((data) => (
              <tr class="view_holiday_table_body">
                <td>{data.name}</td>
                <td>{new Date(data.from).toDateString()}</td>
                <td>{new Date(data.to).toDateString()}</td>
                <td>
                  <div class="view_holiday_action_btn view_holiday_action">
                    <i
                      class="fas fa-ellipsis-v"
                      onClick={() => {
                        id ? setId("") : setId(data.id);
                      }}
                    ></i>
                    <div style={{ display: data.id === id ? "block" : "none" }}>
                      <div class="view_department_do_action">
                        <a data-toggle="modal" data-target="#UpdateHolidays">
                          <i class="fas fa-pen"></i>
                          <span>Edit</span>
                        </a>
                        <a data-toggle="modal" data-target="#DeleteHolidays">
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
      {id && <UpdateHolidays id={id} />}
      {id && <DeleteHolidays id={id} />}
    </>
  );
};

export default ViewHolidaysScreen;
