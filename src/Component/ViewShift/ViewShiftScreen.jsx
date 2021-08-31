import React,{useState} from 'react';

import "../ViewDepartment/ViewDepartment.css";

const ViewShiftScreen  = () => {
 
    const [toggle, settoggle] = useState(false);

    // style={{ display: dropDown ? "block" : "none"}}
    return (
        <>

        <section class="view_department_section">
       
           <div class="view_department_table"> 
               <table>
                 
                   <tr class="table_header">
                       <th>Shift Name</th>
                       <th>start Time</th>
                       <th>End Time</th>
                       <th class="view_department_action">Actions</th>
                   </tr>
                  
                   <tr class="table_body">
                      
                       <td>Evening</td>
                       <td>09:30 Am</td>
                       <td>06:30 pm</td>
                       <td>
                              <div class="view_department_action_btn view_department_action">
                                 <i class="fas fa-ellipsis-v" onClick={()=>{toggle?settoggle(false):settoggle(true)}}></i>
                                 <div  style={{ display: toggle ? "block" : "none"}}>
                                 <div class="view_department_do_action"  >
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

export default ViewShiftScreen
                      