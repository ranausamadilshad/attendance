import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "../FormControl/FormikControl";

const UpdateHolidayScreen = ({
  initialValues,
  validationSchema,
  onSubmit,
  data,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {() => (
          <section className="Viwe_Holidays_edit_page">
            <div
              className="modal fade"
              id="UpdateHolidays"
              tabindex="-1"
              role="dialog"
              aria-labelledby="UpdateHolidaysTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ padding: "0px 10px" }}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="UpdateHolidaysTitle">
                      Update Holidays
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
                        <div class="create_department_form_fields">
                          <div class="input_field">
                            <label>
                              Holiday Name <span class="mandatory"> *</span>
                            </label>
                            <FormikControl
                              control="input"
                              type="text"
                              name="hollidayName"
                            />
                          </div>
                          <div class="input_field">
                            <label>
                              Start Date <span class="mandatory"> *</span>
                            </label>
                            <FormikControl
                              control="input"
                              type="date"
                              name="startDate"
                            />
                          </div>
                          <div class="input_field">
                            <label>
                              End Date <span class="mandatory"> *</span>
                            </label>
                            <FormikControl
                              control="input"
                              type="date"
                              name="endDate"
                            />
                          </div>
                          {data && (
                            <p style={{ color: "green" }}>
                              Updated Holiday Successfully.
                            </p>
                          )}
                          <div class="submit_btn">
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

export default UpdateHolidayScreen;
