import { Form, Formik, ErrorMessage, Field } from "formik";
import React from "react";
import FormikControl from "../FormControl/FormikControl";
import loginimg from "../../Assets/image/login_img.png";

const UpdateEmployeeScreen = ({
  initialValues,
  validationSchema,
  onSubmit,
  shifts,
  depts,
  jobs,
  data,
  handleImage,
  image,
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
        enableReinitialize
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
                              {image ? (
                                <img src={image} alt="" />
                              ) : (
                                <img src={loginimg} alt="" />
                              )}
                              <div class="change_pic">
                                <label>
                                  Upload
                                  <input
                                    type="file"
                                    placeholder="change"
                                    onChange={handleImage}
                                    required
                                  />
                                </label>
                              </div>
                            </figure>
                          </div>
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
                            <FormikControl
                              control="input"
                              type="email"
                              name="email"
                            />
                            {/* <input type="email" placeholder=""/> */}
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
                            {/* <input type="date" placeholder=""/> */}
                          </div>
                          <div class="input_field">
                            <label>
                              Department <span class="mandatory"> *</span>
                            </label>

                            <Field as="select" name="departmentId">
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
                              name="departmentId"
                            />
                          </div>
                          <div class="input_field">
                            <label>
                              Job Title <span class="mandatory"> *</span>
                            </label>
                            <Field as="select" name="jobTitleId">
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
                              name="jobTitleId"
                            />
                          </div>
                          <div class="input_field create_employee_border_bottom">
                            <label>
                              Job Shift <span class="mandatory"> *</span>
                            </label>
                            <Field as="select" name="shiftId">
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
                            </Field>
                            <ErrorMessage
                              style={{ color: "red" }}
                              component="div"
                              name="shiftId"
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
                            <p style={{ color: "green" }}>
                              Staff Updated Successfully
                            </p>
                          )}
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
      </Formik>
    </>
  );
};

export default UpdateEmployeeScreen;
