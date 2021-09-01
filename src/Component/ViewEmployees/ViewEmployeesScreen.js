import React,{useState} from 'react'
import './ViewEmployees.css'
import '../CreateDepartment/CreateDepartment.css';
import UpdateEmployees from './UpdateEmployees';


const ViewEmployeesScreen = () => {
    const [id, setId] = useState("");
    const holidays = [
        { id: 1, name: "Defence day", phone: "09", joind: "09", email: "Defence day", department: "Defence day", jobtitle: "Defence day", dateofbirth: "8/9/1990", jobshift: "Defence day", gender: "Defence day", address: "Defence day", image: "Defence day" },
        { id: 2, name: "Pakistan Day", phone: "09", joind: "09", email: "Defence day", department: "Defence day", jobtitle: "Defence day", dateofbirth: "8/9/1999", jobshift: "Defence day", gender: "Defence day", address: "Defence day", image: "Defence day" },
      ];
      
      
      return (
        <>
          
 <section class="view_created_employee_section">

<div class="view_created_employee_table"> 
    <table>

        <tr class="created_employee_table_header">
        <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Join Date</th>
            <th>Department</th>
            <th>Job Title</th>
            <th>Job shift</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th class="view_created_employee_action">Actions</th>
        </tr>
        {holidays.map((data) => (

        <tr class="created_employee_table_body">
           
            <td>{data.image}</td>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
             <td>{data.joind}</td>
             <td>{data.department}</td>
             <td>{data.jobtitle}</td>
             <td>{data.jobshift}</td>
             <td>{data.dateofbirth}</td>
             <td>{data.gender}</td>
             <td>{data.address}</td>
            <td>
                   <div class="view_created_employee_action_btn view_created_employee_action">
                      <i class="fas fa-ellipsis-v"     onClick={() => {id ? setId('') : setId(data.id)}}></i>
                      <div  style={{ display: data.id===id ? "block" : "none" }}>
                      <div class="view_created_employee_do_action">
                        <a data-toggle="modal" data-target="#UpdateDepartment"><i class="fas fa-pen"></i><span>Edit</span></a>
                        <a href="#"><i class="fas fa-trash-alt"></i><span>Delete</span></a>
                       </div> 
                       </div>
                    </div>
               
                   
            </td>
        </tr>
                  ))}
  
    </table>   
 </div>

</section> 
<UpdateEmployees/>
        </>
    )
}

export default ViewEmployeesScreen
