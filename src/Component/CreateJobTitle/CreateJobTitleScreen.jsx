import React from "react";
import "../CreateDepartment/CreateDepartment.css";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const CreateJobTitleScreen = ({
  initialValues,
  onSubmit,
  validationSchema,
  data,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <section className="create_department_section">
            <section className="create_department_form">
              <div className="create_department_container">
                <Form>
                  <div className="create_department_form_fields">
                    <div className="input_field">
                      <label>
                        Job Title <span className="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="text"
                        name="jobTitle"
                      />
                      {/* <input type="text" placeholder="" required /> */}
                    </div>
                    <div className="input_field">
                      <label>
                        Allowed Leaves <span className="mandatory"> * </span>
                      </label>
                      <FormikControl
                        control="input"
                        type="number"
                        name="allowedLeaves"
                      />
                      {/* <input type="number" placeholder="" required /> */}
                    </div>
                    {data && (
                      <p style={{ color: "green" }}>
                        Successfully Created Job Title
                      </p>
                    )}
                    <div className="submit_btn">
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

export default CreateJobTitleScreen;
