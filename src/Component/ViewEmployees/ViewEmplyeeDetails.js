import React from 'react'
import loginimg from '../../Assets/image/login_img.png';
import './ViewEmployeeDetails.css'


const ViewEmplyeeDetails = () => {
    return (


        <>
<section className="Viwe_employee_edit_page">
  <div className="modal fade"  id="singleEmployeedetail" tabindex="-1" role="dialog" aria-labelledby="singleEmployeedetailTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content" style={{padding:"0px 10px"}}>
        <div className="modal-header">
          <h5 className="modal-title" id="singleEmployeedetailTitle">Details</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <section className="create_department_form">
            <div className="create_department_container">
                  <form>
                  <div class="create_department_form_fields">
                  <div class="create_employee_field">
                    <figure className="single_employee_detail_figure">
                      <img src={loginimg} />
                     
                    </figure>

                    <div class="create_employee_section">
                      <div class="profile_name">
                        <label>
                          First Name
                        </label>
                        {/* <FormikControl
                          control="input"
                          type="text"
                          name="firstName"
                        /> */}
                        <input type="text" value="" readOnly/>
                      </div>
                      <div class="profile_name">
                        <label>
                          Last Name 
                        </label>
                        {/* <FormikControl
                          control="input"
                          type="text"
                          name="lastName"
                        /> */}
                        <input type="text" value="" readOnly/>
                      </div>
                    </div>
                  </div>

                  <div class="input_field">
                    <label>
                      Phone 
                    </label>
                    {/* <FormikControl control="input" type="number" name="phone" /> */}
                    <input type="number" value="" readOnly/>
                  </div>
                  <div class="input_field create_employee_border_bottom">
                    <label>
                      Email 
                    </label>
                    {/* <FormikControl control="input" type="email" name="email" /> */}
                    <input type="email" value="" readOnly/>
                  </div>
                  <div class="input_field">
                    <label>
                      Join Date 
                    </label>
                    {/* <FormikControl
                      control="input"
                      type="date"
                      name="joinDate"
                    /> */}
                    <input type="date" value="" readOnly/>
                  </div>
                  <div class="input_field">
                    <label>
                      Department 
                    </label>
                    {/* <FormikControl
                      control="select"
                      name="department"
                      options={department}
                    /> */}
                   <input type="text" value="" readOnly />
                  </div>
                  <div class="input_field">
                    <label>
                      Job Title 
                    </label>
                    {/* <FormikControl
                      control="select"
                      name="jobTitle"
                      options={jobTitle}
                    /> */}
                  <input type="text" value="" readOnly />
                  </div>
                  <div class="input_field create_employee_border_bottom">
                    <label>
                      Job Shift
                    </label>
                    {/* <FormikControl
                      control="select"
                      name="jobShift"
                      options={jobShift}
                    /> */}
                    <input type="text" value="" readOnly />
                  </div>
                  <div class="input_field">
                    <label>
                      Date Of Birth 
                    </label>
                    {/* <FormikControl
                      control="input"
                      type="date"
                      name="dateOfBirth"
                    /> */}
                    <input type="date" value="" readOnly/>
                  </div>
                  <div class="input_field">
                    <label>
                      Gender 
                    </label>
                     {/* <FormikControl
                      control="select"
                      name="gender"
                      options={gender}
                    /> */}
                    <input type="text" value="" readOnly />
                  </div>
                  <div class="input_field">
                    <label>
                      {" "}
                      Address
                    </label>
                    {/* <FormikControl
                      control="textarea"
                      type="textarea"
                      name="address"
                    /> */}
                    <textarea></textarea>
                  </div>
                  <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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

export default ViewEmplyeeDetails
