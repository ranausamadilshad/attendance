import React from 'react';
import "./CreateDepartment.css";
const CreateDepartmentScreen= () => {
    return (
        <>
    
<section class="create_department_section">

         <section class="create_department_form">
            <div class="create_department_container">
                  <form>
                     <div class="create_department_form_fields"> 
                         
                      <div class="input_field">
                      <label>Department Name <span class="mandatory"> *</span></label>
                      <input type="text" placeholder="" required />
                      </div>
                      <div class="input_field">
                      <label>Phone <span class="mandatory"> * </span></label>
                      <input type="number" placeholder="" required />
                      </div>
                      <div class="input_field">
                        <label>Department Email <span class="Optional">(Optional)</span></label>
                        <input type="email" placeholder="" />
                        </div>
                        <div class="input_field">
                        <label>Departmant Address <span class="Optional">(Optional)</span></label>
                        <textarea></textarea>
                        </div>
                      <div class="submit_btn">
                      <button type="submit">Create</button>
                      </div>
                  
                     </div> 
                  </form>
            </div>
        </section>

   </section>      

        </>
    )
}

export default CreateDepartmentScreen

