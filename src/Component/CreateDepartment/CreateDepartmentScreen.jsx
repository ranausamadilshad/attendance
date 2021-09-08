import React from "react";
import "./CreateDepartment.css";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const CreateDepartmentScreen = ({
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
                        Department Name <span className="mandatory"> *</span>
                      </label>
                      <FormikControl control="input" type="text" name="name" />
                    </div>
                    <div className="input_field">
                      <label>
                        Phone <span className="mandatory"> * </span>
                      </label>
                      <FormikControl
                        control="input"
                        type="number"
                        name="phoneNo"
                      />
                    </div>
                    <div className="input_field">
                      <label>
                        Department Email <span className="mandatory"> * </span>
                      </label>
                      <FormikControl
                        control="input"
                        type="email"
                        name="email"
                      />
                    </div>
                    <div className="input_field">
                      <label>
                        Departmant Address{" "}
                        <span className="mandatory"> * </span>
                      </label>
                      <FormikControl control="textarea" name="address" />
                    </div>
                    {data && (
                      <p style={{ color: "green" }}>
                        Department Created Successfully.
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

export default CreateDepartmentScreen;
