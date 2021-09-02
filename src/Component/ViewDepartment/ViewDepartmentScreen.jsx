import React,{useState} from 'react';
import DeleteDepartment from './DeleteDepartment';
import UpdateDepartment from './UpdateDepartment';
import "./ViewDepartment.css";
const ViewDepartmentScreen = () => {
   
    
    const [id, setId] = useState("");
    const department = [
      { id: 1, name: "Health care"},
      { id: 2, name: "Surgery"},
      { id: 3, name: "Gynacologist"},
      { id: 4, name: "Surgery"},
      { id: 5, name: "Pathetic"},
      { id: 6, name: "Surgery"}
    ];

    return (
        <>

 <section class="view_department_section">

    <div class="view_department_table"> 
        <table>
          
            <tr class="table_header">
                <th>Department Name</th>
                <th class="view_department_action">Actions</th>
            </tr>
           
            {/* view_department_do_action  */}
            {department.map((data) => (

            <tr class="table_body">
               
                <td>{data.name}</td>
                <td>
                       <div class="view_department_action_btn view_department_action">
                          <i class="fas fa-ellipsis-v" onClick={() => {id ? setId('') : setId(data.id)}}  ></i>
                          <div  style={{ display: data.id===id ? "block" : "none" }} >
                          <div class="view_department_do_action">
                            {/* <a href="#"><i class="fas fa-eye"></i><span>View</span></a> */}
                            <a data-toggle="modal" data-target="#UpdateDepartment"><i class="fas fa-pen"></i><span>Edit</span></a>
                            <a data-toggle="modal" data-target="#DeleteDepartment"><i class="fas fa-trash-alt"></i><span>Delete</span></a>
                           </div> 
                           </div>
                        </div>
                   
                   
                </td>
            </tr>
            ))} 
        </table>   
     </div>

</section> 

<UpdateDepartment/>
<DeleteDepartment/>
        </>
    )
}

export default ViewDepartmentScreen
