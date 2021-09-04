import React from 'react'
import './ReportAdmin.css'

const ReportAdminScreen = () => {
  const report = [
    { id: 1, name: "Health care",date:'26/7/21',department:'HR',Shift:'E',OnDuty:'9 am',OffDuty:'5 am',ClockIn:'2',ClockOut:'4',Absent:'N'},
    { id: 2, name: "Surgery",date:'26/7/21',department:'HR',Shift:'E',OnDuty:'9 am',OffDuty:'5 am',ClockIn:'2',ClockOut:'4',Absent:'N'},
    { id: 3, name: "Gynacologist",date:'26/7/21',department:'HR',Shift:'E',OnDuty:'9 am',OffDuty:'5 am',ClockIn:'2',ClockOut:'4',Absent:'N'},
    { id: 4, name: "Surgery",date:'26/7/21',department:'HR',Shift:'E',OnDuty:'9 am',OffDuty:'5 am',ClockIn:'2',ClockOut:'4',Absent:'N'},
    { id: 5, name: "Pathetic",date:'26/7/21',department:'HR',Shift:'E',OnDuty:'9 am',OffDuty:'5 am',ClockIn:'2',ClockOut:'4',Absent:'N'},
    { id: 6, name: "Surgery",date:'26/7/21',department:'HR',Shift:'E',OnDuty:'9 am',OffDuty:'5 am',ClockIn:'2',ClockOut:'4',Absent:'N'}
  ];





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
            {report.map((data)=>(
              <tr className="admin_report_table_body">
                <td>{data.name}</td>
                <td>{data.date}</td>
                <td>{data.department}</td>
                <td>{data.Shift}</td>
                <td>{data.OnDuty}</td>
                <td>{data.OffDuty}</td>
                <td>{data.Absent}</td>
                <td>{data.Absent}</td>
                <td>{data.Absent}</td>
                <td>{data.Absent}</td>
                <td>{data.OffDuty}</td>
                <td>{data.Absent}</td>
                <td> <div className="view_admin_Leave_action_btn view_admin_Leave_action">
                    <i className="fas fa-ellipsis-v"></i>
                      {/* <div className="view_admin_Leave_do_action">
                        <a href="#"><i className="fas fa-eye"></i><span>View</span></a>
                        <a data-toggle="modal" data-target="#123"><i className="fas fa-pen"></i><span>Edit</span></a>
                       
                      </div> */}
                    </div>
                </td>
              </tr>
      ))}
          </table>
        </div>

            </section>
        </>
    )
}

export default ReportAdminScreen
