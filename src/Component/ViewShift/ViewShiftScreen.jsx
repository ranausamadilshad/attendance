import React, { useState } from "react";
import DeleteShift from "./DeleteShift";
import UpdateShift from "./UpdateShift";
import "./ViewShift.css";

const ViewShiftScreen = ({ data }) => {
  const [id, setId] = useState("");

  return (
    <>
      <section class="view_shift_section">
        <div class="view_shift_table">
          <table>
            <tr class="shift_table_header">
              <th>Shift Name</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th class="view_shift_action">Actions</th>
            </tr>
            {data.map((data) => (
              <tr class="shift_table_body">
                <td>{data.name}</td>
                <td>{data.startDate.split("T")[1].split(".")[0]}</td>
                <td>{data.endDate.split("T")[1].split(".")[0]}</td>
                <td>
                  <div class="view_shift_action_btn view_shift_action">
                    <i
                      class="fas fa-ellipsis-v"
                      onClick={() => {
                        id ? setId("") : setId(data.id);
                      }}
                    ></i>
                    <div style={{ display: data.id === id ? "block" : "none" }}>
                      <div class="view_shift_do_action">
                        <a data-toggle="modal" data-target="#Updateshift">
                          <i class="fas fa-pen"></i>
                          <span>Edit</span>
                        </a>
                        <a data-toggle="modal" data-target="#DeleteShift">
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

      {id && <UpdateShift id={id} />}
      {id && <DeleteShift id={id} />}
    </>
  );
};

export default ViewShiftScreen;
