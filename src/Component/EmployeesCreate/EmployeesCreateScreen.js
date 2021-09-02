import React from "react";
import "./EmployeesCreate.css";
import "../CreateDepartment/CreateDepartment.css";
import loginimg from "../../Assets/image/login_img.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormControl/FormikControl";

const EmployeesCreateScreen = ({ onSubmit,validationSchema ,initialValues,department,jobTitle,jobShift,gender }) => {


  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <section class="create_department_form">
            <div class="create_department_container">
              <Form>
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
                        <FormikControl
                          control="input"
                          type="text"
                          name="firstName"
                        />
                        {/* <input type="text" placeholder=""/> */}
                      </div>
                      <div class="profile_name">
                        <label>
                          Last Name <span class="mandatory"> *</span>
                        </label>
                        <FormikControl
                          control="input"
                          type="text"
                          name="lastName"
                        />
                        {/* <input type="text" placeholder=""/> */}
                      </div>
                    </div>
                  </div>

                  <div class="input_field">
                    <label>
                      Phone <span class="mandatory"> * </span>
                    </label>
                    <FormikControl control="input" type="number" name="phone" />
                    {/* <input type="number" placeholder=""/> */}
                  </div>
                  <div class="input_field create_employee_border_bottom">
                    <label>
                      Email <span class="mandatory"> *</span>
                    </label>
                    <FormikControl control="input" type="email" name="email" />
                    {/* <input type="email" placeholder=""/> */}
                  </div>
                  <div class="input_field">
                    <label>
                      Join Date <span class="mandatory"> *</span>
                    </label>
                    <FormikControl
                      control="input"
                      type="date"
                      name="joinDate"
                    />
                    {/* <input type="date" placeholder=""/> */}
                  </div>
                  <div class="input_field">
                    <label>
                      Department <span class="mandatory"> *</span>
                    </label>
                    <FormikControl
                      control="select"
                      name="department"
                      options={department}
                    />
                    {/* <select><option selected="" disabled="">select Department</option></select> */}
                  </div>
                  <div class="input_field">
                    <label>
                      Job Title <span class="mandatory"> *</span>
                    </label>
                    <FormikControl
                      control="select"
                      name="jobTitle"
                      options={jobTitle}
                    />
                    {/* <select>
                      <option selected="" disabled="">
                        select Job Title
                      </option>
                    </select> */}
                  </div>
                  <div class="input_field create_employee_border_bottom">
                    <label>
                      Job Shift <span class="mandatory"> *</span>
                    </label>
                    <FormikControl
                      control="select"
                      name="jobShift"
                      options={jobShift}
                    />
                    {/* <select>
                      <option selected="" disabled="">
                        select Shift
                      </option>
                    </select> */}
                  </div>
                  <div class="input_field">
                    <label>
                      Date Of Birth <span class="mandatory"> *</span>
                    </label>
                    <FormikControl
                      control="input"
                      type="date"
                      name="dateOfBirth"
                    />
                    {/* <input type="date" placeholder=""/> */}
                  </div>
                  <div class="input_field">
                    <label>
                      Gender <span class="mandatory"> *</span>
                    </label>
                     <FormikControl
                      control="select"
                      name="gender"
                      options={gender}
                    />
                    {/* <select>
                      <option selected="" disabled="">
                        select Gender
                      </option>
                    </select> */}
                  </div>
                  <div class="input_field">
                    <label>
                      {" "}
                      Address <span class="mandatory"> *</span>
                    </label>
                    <FormikControl
                      control="textarea"
                      type="textarea"
                      name="address"
                    />
                    {/* <textarea></textarea> */}
                  </div>
                  <div class="submit_btn">
                    <button type="submit">Create</button>
                  </div>
                </div>
              </Form>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
};

export default EmployeesCreateScreen;
