import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const UpdateDepartmentScreen = ({ onSubmit,validationSchema ,initialValues }) => {

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <section className="Viwe_Department_edit_page">
            <div
              className="modal fade"
              id="UpdateDepartment"
              tabindex="-1"
              role="dialog"
              aria-labelledby="UpdateDepartmentTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ padding: "0px 10px" }}>
                  <div
                    className="modal-header"
                    style={{ padding: "1rm 5px !important" }}
                  >
                    <h5 className="modal-title" id="UpdateDepartmentTitle">
                      Update Department
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
                        <div className="create_department_form_fields">
                          <div className="input_field">
                            <label>
                              Department Name{" "}
                              <span className="mandatory"> *</span>
                            </label>
                            <FormikControl control="input" type="text" name="dName" />
                            {/* <input type="text" placeholder="" /> */}
                          </div>
                          <div className="input_field">
                            <label>
                              Phone <span className="mandatory"> * </span>
                            </label>
                            <FormikControl
                        control="input"
                        type="number"
                        name="Phone"
                      />
                            {/* <input type="number" placeholder="" required /> */}
                          </div>
                          <div className="input_field">
                            <label>
                              Department Email{" "}
                              <span className="Optional">(Optional)</span>
                            </label>
                            <FormikControl
                        control="input"
                        type="email"
                        name="email"
                      />
                            {/* <input type="email" placeholder="" /> */}
                          </div>
                          <div className="input_field">
                            <label>
                              Departmant Address{" "}
                              <span className="Optional">(Optional)</span>
                            </label>
                            <FormikControl control="textarea" name="dAddress" />
                            {/* <textarea></textarea> */}
                          </div>
                          <div className="submit_btn">
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

export default UpdateDepartmentScreen;