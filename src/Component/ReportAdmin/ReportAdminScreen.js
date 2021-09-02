import React from 'react'
import './ReportAdmin.css'

const ReportAdminScreen = () => {
    return (
        <>
            <section className="admin_report_section">
            
            <div className="admin_report_filter">
          <div className="report_filter_detail">
            <div className="report_admin_name_filter">
              <label>Employee Name</label>
              <select>
                <option value="_Select" selected disabled>
                 All
                </option>
              </select>
            </div>
          </div>
          <div className="report_filter_detail">
            <div className="report_admin_name_filter">
              <label>Department</label>
              <select>
                <option value="_Select" selected disabled>
                 All
                </option>
              </select>
            </div>
          </div>
          <div className="report_filter_detail">
            <div className="report_admin_name_filter">
              <label>From</label>
              <input type="date" />
            </div>
          </div>
          <div className="report_filter_detail">
            <div className="report_admin_name_filter">
              <label>To</label>
              <input type="date" />
            </div>
          </div>
          <div className="report_filter_detail">
            <div className="report_admin_name_filter">
              <button>Search</button>
            </div>
          </div>
        </div>


        <div className="view_admin_report_table">
          <table>
            <tr className="admin_report_table_header">
              <th>Name</th>
              <th>Date</th>
              <th>Department</th>
              <th>Shift</th>
              <th>On Duty</th>
              <th>Off Duty</th>
              <th>Clock IN</th>
              <th>Clock Out</th>
              <th>Absent</th>
              <th>Clock IN</th>
              <th>Clock Out</th>
              <th>Absent</th>

              <th className="view_department_action">Actions</th>
            </tr>
              <tr className="admin_report_table_body">
                <td>Fahad Mustafa</td>
                <td>18/08/21</td>
                <td>Faisal</td>
                <td>E</td>
                <td>09:30</td>
                <td>06:00</td>
                <td>11:00</td>
                <td>6:00</td>
                <td>Yes</td>
                <td>11:00</td>
                <td>6:00</td>
                <td>Yes</td>
                <td> <div className="view_admin_Leave_action_btn view_admin_Leave_action">
                    <i className="fas fa-ellipsis-v"></i>
                      {/* <div className="view_admin_Leave_do_action">
                        <a href="#"><i className="fas fa-eye"></i><span>View</span></a>
                        <a data-toggle="modal" data-target="#123"><i className="fas fa-pen"></i><span>Edit</span></a>
                       
                      </div> */}
                    </div>
                </td>
              </tr>
      
          </table>
        </div>

            </section>
        </>
    )
}

export default ReportAdminScreen
