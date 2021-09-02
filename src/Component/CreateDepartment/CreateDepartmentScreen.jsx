import React from "react";
import "./CreateDepartment.css";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const CreateDepartmentScreen = ({ onSubmit,validationSchema ,initialValues }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <section class="create_department_section">
            <section class="create_department_form">
              <div class="create_department_container">
                <Form>
                  <div class="create_department_form_fields">
                    <div class="input_field">
                      <label>
                        Department Name <span class="mandatory"> *</span>
                      </label>
                      <FormikControl control="input" type="text" name="dName" />
                      
                      {/* <input type="text" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Phone <span class="mandatory"> * </span>
                      </label>
                      <FormikControl
                        control="input"
                        type="number"
                        name="Phone"
                      />
                      {/* <input type="number" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Department Email{" "}
                        <span class="Optional">(Optional)</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="email"
                        name="email"
                      />
                      {/* <input type="email" placeholder="" /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Departmant Address{" "}
                        <span class="Optional">(Optional)</span>
                      </label>
                      <FormikControl control="textarea" name="dAddress" />
                      {/* <textarea></textarea> */}
                    </div>
                    <div class="submit_btn">
                      <button type="submit">Create</button>
                    </div>
                  </div>
                </Form>
              </div>
            </section>
          </section>
        )}
      </Formik>
    </>
  );
};

export default CreateDepartmentScreen;
