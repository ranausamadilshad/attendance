import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const AddLeaveCategoryScreen = ({
  onSubmit,
  validationSchema,
  initialValues,
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
          <section class="create_department_section">
            <section class="create_department_form">
              <div class="create_department_container">
                <Form>
                  <div class="create_department_form_fields">
                    <div class="input_field">
                      <label>
                        Leave Category <span class="mandatory"> *</span>
                      </label>
                      <FormikControl control="input" name="name" />
                    </div>
                    {data && (
                      <p style={{ color: "green" }}>
                        Leave Category Added Successfully.
                      </p>
                    )}
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

export default AddLeaveCategoryScreen;
