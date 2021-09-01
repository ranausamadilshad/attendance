import React from 'react'
import loginimg from '../../Assets/image/login_img.png';
const UpdateEmployees = () => {
    return (
        <>
          <section className="Viwe_employee_edit_page">
  <div className="modal fade"  id="UpdateEmployee" tabindex="-1" role="dialog" aria-labelledby="UpdatEmployeeTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="UpdateEmployeeTitle">Update Employee</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <section className="create_department_form">
            <div className="create_department_container">
                  <form>
                  <div class="create_department_form_fields">
                  <div class="create_employee_field">
                    <figure>
                      <img src={loginimg} />
                      <div class="change_pic">
                        <label>
                          {" "}
                          upload
                          <input type="file" placeholder="change" />
                        </label>
                      </div>
                    </figure>

                    <div class="create_employee_section">
                      <div class="profile_name">
                        <label>
                          First Name <span class="mandatory"> *</span>
                        </label>
                        {/* <FormikControl
                          control="input"
                          type="text"
                          name="firstName"
                        /> */}
                        <input type="text" placeholder=""/>
                      </div>
                      <div class="profile_name">
                        <label>
                          Last Name <span class="mandatory"> *</span>
                        </label>
                        {/* <FormikControl
                          control="input"
                          type="text"
                          name="lastName"
                        /> */}
                        <input type="text" placeholder=""/>
                      </div>
                    </div>
                  </div>

                  <div class="input_field">
                    <label>
                      Phone <span class="mandatory"> * </span>
                    </label>
                    {/* <FormikControl control="input" type="number" name="phone" /> */}
                    <input type="number" placeholder=""/>
                  </div>
                  <div class="input_field create_employee_border_bottom">
                    <label>
                      Email <span class="mandatory"> *</span>
                    </label>
                    {/* <FormikControl control="input" type="email" name="email" /> */}
                    <input type="email" placeholder=""/>
                  </div>
                  <div class="input_field">
                    <label>
                      Join Date <span class="mandatory"> *</span>
                    </label>
                    {/* <FormikControl
                      control="input"
                      type="date"
                      name="joinDate"
                    /> */}
                    <input type="date" placeholder=""/>
                  </div>
                  <div class="input_field">
                    <label>
                      Department <span class="mandatory"> *</span>
                    </label>
                    {/* <FormikControl
                      control="select"
                      name="department"
                      options={department}
                    /> */}
                    <select><option selected="" disabled="">select Department</option></select>
                  </div>
                  <div class="input_field">
                    <label>
                      Job Title <span class="mandatory"> *</span>
                    </label>
                    {/* <FormikControl
                      control="select"
                      name="jobTitle"
                      options={jobTitle}
                    /> */}
                    <select>
                      <option selected="" disabled="">
                        select Job Title
                      </option>
                    </select>
                  </div>
                  <div class="input_field create_employee_border_bottom">
                    <label>
                      Job Shift <span class="mandatory"> *</span>
                    </label>
                    {/* <FormikControl
                      control="select"
                      name="jobShift"
                      options={jobShift}
                    /> */}
                    <select>
                      <option selected="" disabled="">
                        select Shift
                      </option>
                    </select>
                  </div>
                  <div class="input_field">
                    <label>
                      Date Of Birth <span class="mandatory"> *</span>
                    </label>
                    {/* <FormikControl
                      control="input"
                      type="date"
                      name="dateOfBirth"
                    /> */}
                    <input type="date" placeholder=""/>
                  </div>
                  <div class="input_field">
                    <label>
                      Gender <span class="mandatory"> *</span>
                    </label>
                     {/* <FormikControl
                      control="select"
                      name="gender"
                      options={gender}
                    /> */}
                    <select>
                      <option selected="" disabled="">
                        select Gender
                      </option>
                    </select>
                  </div>
                  <div class="input_field">
                    <label>
                      {" "}
                      Address <span class="mandatory"> *</span>
                    </label>
                    {/* <FormikControl
                      control="textarea"
                      type="textarea"
                      name="address"
                    /> */}
                    <textarea></textarea>
                  </div>
                  <div class="submit_btn">
                    <button type="submit">Update</button>
                  </div>
                </div>
                  </form>
            </div>
        </section>

        
      </div>
    </div>
  </div>
</section>  
        </>
    )
}

export default UpdateEmployees
