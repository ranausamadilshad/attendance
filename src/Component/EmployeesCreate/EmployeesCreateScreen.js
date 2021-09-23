import React from "react";
import "./EmployeesCreate.css";
import "../CreateDepartment/CreateDepartment.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikControl from "../FormControl/FormikControl";

const EmployeesCreateScreen = ({
  initialValues,
  onSubmit,
  validationSchema,
  depts,
  jobs,
  data,
  error,
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
                  <div class="input_field">
                    <label>
                      First Name <span class="mandatory"> * </span>
                    </label>
                    <FormikControl control="input" name="firstName" />
                  </div>
                  <div class="input_field">
                    <label>
                      Last Name <span class="mandatory"> * </span>
                    </label>
                    <FormikControl control="input" name="lastName" />
                  </div>
                  <div class="input_field">
                    <label>Phone</label>
                    <FormikControl control="input" type="number" name="phone" />
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
                    <label>Department</label>

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
                      component="div"
                      name="department"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div class="input_field">
                    <label>Job Title</label>
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
                      component="div"
                      name="jobTitle"
                      style={{ color: "red" }}
                    />
                  </div>

                  <div class="input_field">
                    <label>Date Of Birth</label>
                    <FormikControl control="input" type="date" name="dob" />
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
                    <label> Address</label>
                    <FormikControl
                      control="textarea"
                      type="textarea"
                      name="address"
                    />
                  </div>
                  {data && Object.entries(data).length > 0 && (
                    <p style={{ color: "green" }}>Staff Created Successfully</p>
                  )}
                  {error && (
                    <p style={{ color: "red" }}>
                      {error.data && error.data.message}
                    </p>
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
