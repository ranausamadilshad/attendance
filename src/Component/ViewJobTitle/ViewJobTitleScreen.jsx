import React, { useState } from 'react';
import "./ViewJobTitle.css";
import UpdateJobTitle from './UpdateJobTitle';
import DeleteJobTitle from './DeleteJobTitle';


const ViewJobTitleScreen= () => {
    const [id, setId] = useState("");
    const department = [
      { id: 1, name: "HOD",leaves:10},
      { id: 2, name: "Sweaper",leaves:12},
      { id: 3, name: "Gynacologist",leaves:13},
      { id: 4, name: "Surgery",leaves:14},
      { id: 5, name: "Pathetic",leaves:15},
      { id: 6, name: "Surgery",leaves:16}
    ];
        return (
         <>

 <section class="view_Job_Tilte_section">

    <div class="view_Job_Tilte_table"> 
        <table>
          
            <tr class="Job_Tilte_table_header">
                <th>Job Title</th>
                <th>Allowed Leaves</th>
                <th class="view_department_action">Actions</th>
            </tr>
            {department.map((data) => (
            <tr class="Job_Tilte_table_body">
               
                <td>{data.name}</td>
                <td>{data.leaves}</td>
                <td>
                       <div class="view_Job_Tilte_action_btn view_Job_Tilte_action">
                          <i class="fas fa-ellipsis-v" onClick={() => {id ? setId('') : setId(data.id)}}></i>
                          <div style={{ display: data.id===id ? "block" : "none" }}>
                          <div class="view_Job_Tilte_do_action">
                            <a data-toggle="modal" data-target="#UpdateJobTitle"><i class="fas fa-pen"></i><span>Edit</span></a>
                            <a data-toggle="modal" data-target="#DeleteJobTitle"><i class="fas fa-trash-alt"></i><span>Delete</span></a>
                           </div> 
                           </div>
                        </div>
                   
                       
                </td>
            </tr>
                        ))} 

        </table>   
     </div>

</section> 

<UpdateJobTitle/>
<DeleteJobTitle/>
       </>
    )
}

export default ViewJobTitleScreen

