import React,{useState} from 'react'
import './ViewEmployees.css'
import '../CreateDepartment/CreateDepartment.css';



const ViewEmployeesScreen = () => {
    const [toggle, settoggle] = useState(false);
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
       
        <tr class="created_employee_table_body">
           
            <td>Health Care Center</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
             <td>20</td>
             <td>20</td>
             <td>20</td>
             <td>20</td>
             <td>20</td>
             <td>20</td>
             <td>20</td>
            <td>
                   <div class="view_created_employee_action_btn view_created_employee_action">
                      <i class="fas fa-ellipsis-v" onClick={()=>{toggle?settoggle(false):settoggle(true)}}></i>
                      <div style={{display:toggle?'block':'none'}}>
                      <div class="view_created_employee_do_action">
                        <a href="#"><i class="fas fa-pen"></i><span>Edit</span></a>
                        <a href="#"><i class="fas fa-trash-alt"></i><span>Delete</span></a>
                       </div> 
                       </div>
                    </div>
               
                   
            </td>
        </tr>
        
    </table>   
 </div>

</section> 
        </>
    )
}

export default ViewEmployeesScreen
