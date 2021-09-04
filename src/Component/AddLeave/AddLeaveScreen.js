import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const AddLeaveScreen = ({ onSubmit,validationSchema ,initialValues }) => {
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
                        Leave Category <span class="mandatory"> *</span>
                      </label>
                      <FormikControl control="input" type="number" name="lCategory" />
                      
                      {/* <input type="text" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Subject <span class="mandatory"> * </span>
                      </label>
                      <FormikControl
                        control="input"
                        type="string"
                        name="subject"
                      />
                      {/* <input type="number" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Short Description
                        <span class="mandatory"> * </span>
                     </label>
                      <FormikControl
                        control="input"
                        type="string"
                        name="sDescription"
                      />
                      {/* <input type="email" placeholder="" /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Leave From
                        <span class="mandatory"> * </span>                    
                          </label>
                      <FormikControl control="input" type='date' name="lFrom" />
                    </div>
                    <div class="input_field">
                      <label>
                        Leave To
                        <span class="mandatory"> * </span>               
                        </label>
                      <FormikControl control="input" type='date' name="lTo" />
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

export default AddLeaveScreen;
