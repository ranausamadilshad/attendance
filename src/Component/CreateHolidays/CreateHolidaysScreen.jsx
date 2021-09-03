import React from "react";
import "../CreateDepartment/CreateDepartment.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormControl/FormikControl";

const CreateHolidaysScreen = ({
  initialValues,
  onSubmit,
  validationSchema,
  data,
  error,
}) => {
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
                        Holiday Name <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="text"
                        name="holidayName"
                      />
                      {/* <input type="text" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Start Date <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="date"
                        name="startTime"
                      />
                      {/* <input type="date" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        End Date <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="date"
                        name="endTime"
                      />
                      {/* <input type="date" placeholder="" /> */}
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

export default CreateHolidaysScreen;
