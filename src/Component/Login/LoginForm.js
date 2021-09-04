import React from 'react'
import './Login.css';
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const LoginScreen = ({ onSubmit,validationSchema ,initialValues }) => {
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
                        Email <span class="mandatory"> *</span>
                      </label>
                      <FormikControl control="input" type="input" name="email" />
                      
                      {/* <input type="text" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Password <span class="mandatory"> * </span>
                      </label>
                      <FormikControl
                        control="input"
                        type="input"
                        name="password"
                      />
                      {/* <input type="password" placeholder="" required /> */}
                    </div>
                    <div class="submit_btn">
                      <button type="submit">Login</button>
                    </div>
                  </div>
                </Form>
              </div>
            </section>
          </section> 
                  )}
                  </Formik>
        </>
    )
}

export default LoginScreen
