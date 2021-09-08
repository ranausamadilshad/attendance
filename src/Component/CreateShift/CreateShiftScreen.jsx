import React from "react";
import "../CreateDepartment/CreateDepartment.css";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const CreateShiftScreen = ({
  initialValues,
  onSubmit,
  validationSchema,
  data,
  error,
}) => {
  console.log("error", error);

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
                        Shift Name <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="text"
                        name="shiftName"
                      />
                      {/* <input type="text" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Start Time <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="time"
                        name="startTime"
                      />
                      {/* <input type="time" placeholder="" /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        End Time <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="time"
                        name="endTime"
                      />
                      {data && (
                        <p style={{ color: "green" }}>
                          Shift Created Successfully.
                        </p>
                      )}
                      {error.data && (
                        <p style={{ color: "red" }}>{error.data.message}</p>
                      )}
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

export default CreateShiftScreen;
