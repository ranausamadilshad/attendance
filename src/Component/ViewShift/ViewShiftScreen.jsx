import React,{useState} from 'react';
import DeleteShift from './DeleteShift';
import UpdateShift from './UpdateShift';
import "./ViewShift.css";

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

        <section class="view_shift_section">
       
           <div class="view_shift_table"> 
               <table>
                 
                   <tr class="shift_table_header">
                       <th>Shift Name</th>
                       <th>start Time</th>
                       <th>End Time</th>
                       <th class="view_shift_action">Actions</th>
                   </tr>
                   {holidays.map((data) => (

                   <tr class="shift_table_body">
                      
                       <td>{data.day}</td>
                       <td>{data.from}</td>
                       <td>{data.to}</td>
                       <td>
                              <div class="view_shift_action_btn view_shift_action">
                                 <i class="fas fa-ellipsis-v" onClick={() => {id ? setId('') : setId(data.id)}}></i>
                                 <div  style={{ display: data.id===id ? "block" : "none" }}>
                                 <div class="view_shift_do_action"  >
                                   <a data-toggle="modal" data-target="#Updateshift"><i class="fas fa-pen"></i><span>Edit</span></a>
                                   <a data-toggle="modal" data-target="#DeleteShift"><i class="fas fa-trash-alt"></i><span>Delete</span></a>
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
       <DeleteShift /> 

               </>
    )
}

export default ViewShiftScreen
                      
