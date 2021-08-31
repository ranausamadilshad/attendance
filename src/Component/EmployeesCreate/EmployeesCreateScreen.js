import React from 'react';
import './EmployeesCreate.css'
import '../CreateDepartment/CreateDepartment.css';
import loginimg from '../../Assets/image/login_img.png'

const EmployeesCreateScreen = () => {
    return (
        <>
            <section class="create_department_form">
            <div class="create_department_container">
                  <form>
                     <div class="create_department_form_fields"> 
                         
                        <div class="create_employee_field">
                    
                            <figure>
                              <img src={loginimg}/>
                              <div class="change_pic">
                               <label> upload 
                             <input type="file" placeholder="change"/>
                                </label>
                              </div> 
                            </figure>
        
                            <div class="create_employee_section">
                              <div class="profile_name">
                                <label>First Name <span class="mandatory"> *</span></label>
                                <input type="text" placeholder=""/>
                              </div>
                              <div class="profile_name">
                                <label>Last Name <span class="mandatory"> *</span></label>
                                <input type="text" placeholder=""/>
                              </div>
                            </div>
                          </div>

                      
                      <div class="input_field">
                      <label>Phone <span class="mandatory"> * </span></label>
                      <input type="number" placeholder=""/>
                      </div>
                      <div class="input_field create_employee_border_bottom">
                        <label>Email <span class="mandatory"> *</span></label>
                        <input type="email" placeholder=""/>
                        </div>
                        <div class="input_field">
                            <label>Join Date <span class="mandatory"> *</span></label>
                            <input type="date" placeholder=""/>
                            </div>
                            <div class="input_field">
                                <label>Department <span class="mandatory"> *</span></label>
                               <select><option selected="" disabled="">select Department</option></select>
                                </div> 
                                <div class="input_field">
                                    <label>Job Title <span class="mandatory"> *</span></label>
                                   <select><option selected="" disabled="">select Job Title</option></select>
                                    </div> 
                                    <div class="input_field create_employee_border_bottom">
                                        <label>Job Shift <span class="mandatory"> *</span></label>
                                       <select><option selected="" disabled="">select Shift</option></select>
                                        </div>           
                            <div class="input_field">
                                <label>Date Of Birth <span class="mandatory"> *</span></label>
                                <input type="date" placeholder=""/>
                                </div> 
                                <div class="input_field">
                                    <label>Gender <span class="mandatory"> *</span></label>
                                    <select><option selected="" disabled="">select Gender</option></select>
                                    </div>   
                        <div class="input_field">
                        <label> Address <span class="mandatory"> *</span></label>
                        <textarea></textarea>
                        </div>
                      <div class="submit_btn">
                      <button type="submit">Create</button>
                      </div>
                  
                     </div> 
                  </form>
            </div>
        </section>  
        </>
    )
}

export default EmployeesCreateScreen;
