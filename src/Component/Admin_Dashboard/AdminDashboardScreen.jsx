import React from "react";
import "../../Css/Style.css";

const AdminDashboardScreen = ({ data }) => {
  return (
    <>
      <div class="content_body_page_card">
        <div class="single_card">
          <a>
            <i class="fas fa-cubes"></i>
          </a>
          <div class="single_card_counter">
            <h3>202</h3>
            <span>Present</span>
          </div>
        </div>

        <div class="single_card">
          <a>
            <i class="fas fa-cubes"></i>
          </a>
          <div class="single_card_counter">
            <h3>202</h3>
            <span>Absent</span>
          </div>
        </div>

        <div class="single_card">
          <a>
            <i class="fas fa-cubes"></i>
          </a>
          <div class="single_card_counter">
            <h3>202</h3>
            <span>On Leave</span>
          </div>
        </div>
        <div class="single_card">
          <a>
            <i class="fas fa-cubes"></i>
          </a>
          <div class="single_card_counter">
            <h3>202</h3>
            <span>Total Employees</span>
          </div>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <section class="view_created_employee_section">
          <div class="view_created_employee_table">
            <table>
              <tr class="created_employee_table_header">
                <th>Name</th>
                <th>Department</th>
                <th>Job Title</th>
              </tr>
              {data &&
                data.staffMembers.map((data) => (
                  <tr class="created_employee_table_body">
                    <td>{data.name}</td>
                    <td>{data.department.name}</td>
                    <td>{data.jobTitle.name}</td>
                  </tr>
                ))}
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminDashboardScreen;
