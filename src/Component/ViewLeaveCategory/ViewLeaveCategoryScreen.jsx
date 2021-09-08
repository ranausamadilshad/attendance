import React, { useState } from "react";
import "./ViewLeaveCategory.css";
import UpdateLeaveCategory from "./UpdateLeaveCategory";
import DeleteLeaveCategory from "./DeleteLeaveCategory";

const ViewLeaveCategoryScreen = ({ data }) => {
  const [id, setId] = useState("");
  return (
    <>
      <section class="view_Job_Tilte_section">
        <div class="view_Job_Tilte_table">
          <table>
            <tr class="Job_Tilte_table_header">
              <th>Category Name</th>
              <th>Total Leaves</th>
              <th class="view_department_action">Actions</th>
            </tr>
            {data.map((data) => (
              <tr class="Job_Tilte_table_body">
                <td>{data.name}</td>
                <td>{data.name}</td>
                <td>
                  <div class="view_Job_Tilte_action_btn view_Job_Tilte_action">
                    <i
                      class="fas fa-ellipsis-v"
                      onClick={() => {
                        id ? setId("") : setId(data.id);
                      }}
                    ></i>
                    <div style={{ display: data.id === id ? "block" : "none" }}>
                      <div class="view_Job_Tilte_do_action">
                        <a data-toggle="modal" data-target="#UpdateJobTitle">
                          <i class="fas fa-pen"></i>
                          <span>Edit</span>
                        </a>
                        <a data-toggle="modal" data-target="#DeleteJobTitle">
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

      {id && <UpdateLeaveCategory id={id} />}
      {id && <DeleteLeaveCategory id={id} />}
    </>
  );
};

export default ViewLeaveCategoryScreen;
