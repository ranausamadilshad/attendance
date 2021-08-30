import React from 'react';
import "../CreateDepartment/CreateDepartment.css";

const CreateHolidaysScreen = () => {
    return (
        <>
    
        <section class="create_department_section">
        
                 <section class="create_department_form">
                    <div class="create_department_container">
                          <form>
                             <div class="create_department_form_fields"> 
                                 
                              <div class="input_field">
                              <label>Holiday Name <span class="mandatory"> *</span></label>
                              <input type="text" placeholder="" required />
                              </div>
                              <div class="input_field">
                              <label>Start Date <span class="mandatory"> *</span></label>
                              <input type="date" placeholder="" required />
                              </div>
                              <div class="input_field">
                                <label>Start Date <span class="mandatory"> *</span></label>
                                <input type="date" placeholder="" />
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

export default CreateHolidaysScreen
