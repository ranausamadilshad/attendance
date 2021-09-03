import React from "react";
import "./EmployeesCreate.css";
import "../CreateDepartment/CreateDepartment.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikControl from "../FormControl/FormikControl";

const EmployeesCreateScreen = ({
  initialValues,
  onSubmit,
  validationSchema,
  shifts,
  depts,
  jobs,
  data,
}) => {
  const gender = [
    { key: "MALE", value: "MALE" },
    { key: "FEMALE", value: "FEMALE" },
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <section class="create_department_form">
            <div class="create_department_container">
              <Form>
                <div class="create_department_form_fields">
                  {/* <div class="create_employee_field">
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
                      </div>
                    </div>
                  </div> */}
                  <div class="input_field">
                    <label>
                      Name <span class="mandatory"> * </span>
                    </label>
                    <FormikControl control="input" name="name" />
                  </div>
                  <div class="input_field">
                    <label>
                      Phone <span class="mandatory"> * </span>
                    </label>
                    <FormikControl
                      control="input"
                      type="number"
                      name="phoneNo"
                    />
                  </div>
                  <div class="input_field create_employee_border_bottom">
                    <label>
                      Email <span class="mandatory"> *</span>
                    </label>
                    <FormikControl control="input" type="email" name="email" />
                  </div>
                  <div class="input_field">
                    <label>
                      Password <span class="mandatory"> * </span>
                    </label>
                    <FormikControl
                      control="input"
                      type="password"
                      name="password"
                    />
                  </div>
                  <div class="input_field">
                    <label>
                      Join Date <span class="mandatory"> *</span>
                    </label>
                    <FormikControl
                      control="input"
                      type="date"
                      name="joiningDate"
                    />
                  </div>
                  <div class="input_field">
                    <label>
                      Department <span class="mandatory"> *</span>
                    </label>

                    <Field as="select" name="department">
                      <>
                        <option selected disabled value="">
                          Select
                        </option>
                        {depts &&
                          depts.departments.map((option) => {
                            return (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            );
                          })}
                      </>
                    </Field>
                    <ErrorMessage
                      style={{ color: "red" }}
                      component="div"
                      name="department"
                    />
                  </div>
                  <div class="input_field">
                    <label>
                      Job Title <span class="mandatory"> *</span>
                    </label>
                    <Field as="select" name="jobTitle">
                      <>
                        <option selected disabled value="">
                          Select
                        </option>
                        {jobs &&
                          jobs.jobTitles.map((option) => {
                            return (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            );
                          })}
                      </>
                    </Field>
                    <ErrorMessage
                      style={{ color: "red" }}
                      component="div"
                      name="jobTitle"
                    />
                  </div>
                  <div class="input_field create_employee_border_bottom">
                    <label>
                      Job Shift <span class="mandatory"> *</span>
                    </label>
                    <Field as="select" name="shift">
                      <>
                        <option selected disabled value="">
                          Select
                        </option>
                        {shifts &&
                          shifts.shifts.map((option) => {
                            return (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            );
                          })}
                      </>
                    </Field>
                    <ErrorMessage
                      style={{ color: "red" }}
                      component="div"
                      name="shift"
                    />
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
                  </div>
                  {data && (
                    <p style={{ color: "green" }}>Staff Created Successfully</p>
                  )}
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
