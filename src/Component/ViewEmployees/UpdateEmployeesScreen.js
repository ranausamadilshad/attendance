import React from "react";
import loginimg from "../../Assets/image/login_img.png";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const UpdateEmployeesScreen = ({
  onSubmit,
  validationSchema,
  initialValues,
  department,
  jobTitle,
  jobShift,
  gender,
}) => {
  return (
    <>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <section className="Viwe_employee_edit_page">
            <div
              className="modal fade"
              id="UpdateEmployee"
              tabindex="-1"
              role="dialog"
              aria-labelledby="UpdatEmployeeTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ padding: "0px 10px" }}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="UpdateEmployeeTitle">
                      Update Employee
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <section className="create_department_form">
                    <div className="create_department_container">
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
                          </div>

                          <div class="input_field">
                            <label>
                              Phone <span class="mandatory"> * </span>
                            </label>
                            <FormikControl
                              control="input"
                              type="number"
                              name="phone"
                            />
                          </div>
                          <div class="input_field create_employee_border_bottom">
                            <label>
                              Email <span class="mandatory"> *</span>
                            </label>
                            <FormikControl
                              control="input"
                              type="email"
                              name="email"
                            />
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
                          <div class="submit_btn">
                            <button type="submit">Update</button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik> */}
    </>
  );
};

export default UpdateEmployeesScreen;
