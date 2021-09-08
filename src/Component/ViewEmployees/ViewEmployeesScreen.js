import React, { useState } from "react";
import "./ViewEmployees.css";
import "../CreateDepartment/CreateDepartment.css";
import UpdateEmployees from "./UpdateEmployees";
import DeleteEmployees from "./DeleteEmployees";

const ViewEmployeesScreen = ({ data }) => {
  console.log("staff", data);
  const [id, setId] = useState("");

  return (
    <>
      <section class="view_created_employee_section">
        <div class="view_created_employee_table">
          <table>
            <tr class="created_employee_table_header">
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Job Title</th>
              <th>Job shift</th>

              <th class="view_created_employee_action">Actions</th>
            </tr>
            {data.staffMembers.map((data) => (
              <tr class="created_employee_table_body">
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.department.name}</td>
                <td>{data.jobTitle.name}</td>
                <td>{data.shift.name}</td>

                <td>
                  <div class="view_created_employee_action_btn view_created_employee_action">
                    <i
                      class="fas fa-ellipsis-v"
                      onClick={() => {
                        id ? setId("") : setId(data.id);
                      }}
                    ></i>
                    <div style={{ display: data.id === id ? "block" : "none" }}>
                      <div class="view_created_employee_do_action">
                        <a data-toggle="modal" data-target="#UpdateEmployee">
                          <i class="fas fa-pen"></i>
                          <span>Edit</span>
                        </a>
                        <a data-toggle="modal" data-target="#DeleteEmployee">
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
      {id && <UpdateEmployees id={id} />}
      {id && <DeleteEmployees id={id} />}
      {/* <ViewEmplyeeDetails /> */}
    </>
  );
};

export default ViewEmployeesScreen;
