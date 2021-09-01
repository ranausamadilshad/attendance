import React,{useState} from 'react';
import UpdateShift from './UpdateShift';
import "../ViewDepartment/ViewDepartment.css";

const ViewShiftScreen  = () => {
    const [id, setId] = useState("");
    const holidays = [
        { id: 1, day: "Evening", from: "August,6,2021", to: "August,6,2021" },
        { id: 2, day: "Morning", from: "August,6,2021", to: "August,6,2021" },
        { id: 3, day: "Evening", from: "August,6,2021", to: "August,6,2021" },
        { id: 4, day: "Morning", from: "August,6,2021", to: "August,6,2021" },
        { id: 5, day: "Evening", from: "August,6,2021", to: "August,6,2021" },
        { id: 6, day: "Morning", from: "August,6,2021", to: "August,6,2021" }
      ];
 
  

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
                   {holidays.map((data) => (

                   <tr class="table_body">
                      
                       <td>{data.day}</td>
                       <td>{data.from}</td>
                       <td>{data.to}</td>
                       <td>
                              <div class="view_department_action_btn view_department_action">
                                 <i class="fas fa-ellipsis-v" onClick={() => {id ? setId('') : setId(data.id)}}></i>
                                 <div  style={{ display: data.id===id ? "block" : "none" }}>
                                 <div class="view_department_do_action"  >
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
       
       <UpdateShift/>
               </>
    )
}

export default ViewShiftScreen
                      
