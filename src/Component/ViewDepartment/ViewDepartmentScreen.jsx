import React, { useState } from "react";
import DeleteDepartment from "./DeleteDepartment";
import UpdateDepartment from "./UpdateDepartment";
import "./ViewDepartment.css";
const ViewDepartmentScreen = ({ data }) => {
  const [id, setId] = useState("");
  return (
    <>
      <section class="view_department_section">
        <div class="view_department_table">
          <table>
            <tr class="table_header">
              <th>Department Name</th>
              <th class="view_department_action">Actions</th>
            </tr>

            {data.length > 0 ? (
              data.map((data) => (
                <tr class="table_body">
                  <td>{data.name}</td>
                  <td>
                    <div class="view_department_action_btn view_department_action">
                      <i
                        class="fas fa-ellipsis-v"
                        onClick={() => {
                          id ? setId("") : setId(data.id);
                        }}
                      ></i>
                      <div
                        style={{ display: data.id === id ? "block" : "none" }}
                      >
                        <div class="view_department_do_action">
                          <a
                            data-toggle="modal"
                            data-target="#UpdateDepartment"
                          >
                            <i class="fas fa-pen"></i>
                            <span>Edit</span>
                          </a>
                          <a
                            data-toggle="modal"
                            data-target="#DeleteDepartment"
                          >
                            <i class="fas fa-trash-alt"></i>
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <p style={{ margin: 10 }}>No Departments Found</p>
            )}
          </table>
        </div>
      </section>

      {id && <UpdateDepartment id={id} />}
      {id && <DeleteDepartment id={id} />}
    </>
  );
};

export default ViewDepartmentScreen;
