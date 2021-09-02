import React,{useState} from 'react'
import DeleteLeaveAdmin from './DeleteLeaveAdmin';
import './LeaveAdmin.css'

const LeaveAdminScreen = () => {
    const [id, setId] = useState("");
    const [tid, settid] = useState('');
    const holidays = [
        { id: 1, name: "Defence day", phone: "09", joind: "09", email: "Defence day", department: "Defence day", jobtitle: "Defence day", dateofbirth: "8/9/1990", jobshift: "Defence day", gender: "Defence day", address: "Defence day", image: "Defence day" },
        // { id: 2, name: "Pakistan Day", phone: "09", joind: "09", email: "Defence day", department: "Defence day", jobtitle: "Defence day", dateofbirth: "8/9/1999", jobshift: "Defence day", gender: "Defence day", address: "Defence day", image: "Defence day" },
      ];
    return (
        <>
 <section className="view_admin_Leave_section">

<div className="admin_leave_calculation_box">
<div className="admin_leave_calculation_box_detail">
   
    <span>Total Leave</span>
    <small>12</small>
</div>
<div className="admin_leave_calculation_box_detail">
    <span>Leave's Made</span>
    <small>3</small>
</div>
<div className="admin_leave_calculation_box_detail">
    <span>Remaning Leave</span>
    <small>4</small>
</div>
<div className="admin_leave_calculation_box_detail">
   
    <span>Leave History</span>
    <small><i className="fas fa-filter"></i></small>
</div>
</div>
<div className="admin_leave_filter">
<div className="leave_filter_detail">
    <div className="admin_name_filter">
        <label>admin Name</label>
        <input type="text" />
    </div>
</div>
<div className="leave_filter_detail">
    <div className="admin_name_filter">
        <label>Leave Type</label>
       <select><option value="_Select" selected disabled>Select_</option></select>
    </div>
</div>
<div className="leave_filter_detail">
    <div className="admin_name_filter">
        <label>Leave Status</label>
       <select><option value="_Select" selected disabled>Select_</option></select>
    </div>
</div>
<div className="leave_filter_detail">
    <div className="admin_name_filter">
        <label>From</label>
        <input type="date" />
    </div>
</div>
<div className="leave_filter_detail">
    <div className="admin_name_filter">
        <label>To</label>
        <input type="date" />
    </div>
</div>
<div className="leave_filter_detail">
    <div className="admin_name_filter">
        <button>Search</button>
    </div>
</div>

</div>

<div className="view_admin_Leave_table"> 
    <table>
        <tr className="admin_Leave_table_header">
            <th>Employee</th>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>No Of Days</th>
            <th>Reason</th>
            <th>Status</th>
            <th className="view_department_action">Actions</th>
        </tr>
        {holidays.map((data) => (

        <tr className="admin_Leave_table_body">
             <td>{data.name}</td>
             <td>{data.joind}</td>
             <td>{data.email}</td>
             <td>{data.phone}</td>
             <td>{data.jobtitle}</td>
             <td>{data.jobshift}</td>
            <td>
                <div className="status_selection">
                    <div class="status_active dropdown-toggle" onClick={() => {tid ? settid('') : settid(data.id)}}><small>Approved</small></div>
                    <div style={{ display: data.id===tid ? "block" : "none" }}>
                    <div class="status_selection_list">
                         <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> New</a>
      <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Pending</a>
      <a class="dropdown-item" href="#" data-toggle="modal" data-target="#approve_leave"><i class="fa fa-dot-circle-o text-success"></i> Approved</a>
      <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Declined</a>
                    </div>
                    </div>
                </div>
            
            </td>
        
            <td>
                   <div className="view_admin_Leave_action_btn view_admin_Leave_action">
                      <i className="fas fa-ellipsis-v" onClick={() => {id ? setId('') : setId(data.id)}}></i>
                      <div style={{ display: data.id===id ? "block" : "none" }}>
                      <div className="view_admin_Leave_do_action">
                        {/* <a href="#"><i className="fas fa-eye"></i><span>View</span></a>
                        <a data-toggle="modal" data-target="#123"><i className="fas fa-pen"></i><span>Edit</span></a> */}
                        <a data-toggle="modal" data-target="#DeleteDepartment"><i className="fas fa-trash-alt"></i><span>Delete</span></a>
                       </div> 
                       </div>
                    </div>
               
                   
            </td>
        </tr>
        
        
        ))}

        
    </table>   
 </div>

</section> 
<DeleteLeaveAdmin/> 
        </>
    )
}

export default LeaveAdminScreen
