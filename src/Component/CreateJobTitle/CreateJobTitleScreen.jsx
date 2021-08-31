import React from "react";
import "../CreateDepartment/CreateDepartment.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormControl/FormikControl";

const CreateJobTitleScreen = () => {
  const initialValues = {
    jobTitle: "",
    allowedLeaves: "",
  };

  const validationSchema = Yup.object({
    jobTitle: Yup.string().required("Required"),
    allowedLeaves: Yup.number().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Create Job Title data", values);
  };

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
                        Job Title <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="text"
                        name="jobTitle"
                      />
                      {/* <input type="text" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Allowed Leaves <span class="mandatory"> * </span>
                      </label>
                      <FormikControl
                        control="input"
                        type="number"
                        name="allowedLeaves"
                      />
                      {/* <input type="number" placeholder="" required /> */}
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

export default CreateJobTitleScreen;
