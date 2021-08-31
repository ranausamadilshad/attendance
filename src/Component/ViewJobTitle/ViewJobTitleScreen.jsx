import React, { useState } from 'react';
import "../ViewDepartment/ViewDepartment.css";
const ViewJobTitleScreen= () => {
    const [toggle, settoggle] = useState(false);
    return (
         <>

 <section class="view_department_section">

    <div class="view_department_table"> 
        <table>
          
            <tr class="table_header">
                <th>Job Title</th>
                <th>Allowed Leaves</th>
                <th class="view_department_action">Actions</th>
            </tr>
           
            <tr class="table_body">
               
                <td>Health Care Center</td>
                <td>20</td>
                <td>
                       <div class="view_department_action_btn view_department_action">
                          <i class="fas fa-ellipsis-v" onClick={()=>{toggle?settoggle(false):settoggle(true)}}></i>
                          <div style={{display:toggle?'block':'none'}}>
                          <div class="view_department_do_action">
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

export default ViewJobTitleScreen
