import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormControl/FormikControl";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/jobTitle";

let initialValues = {
  name: "",
  allowedLeaves: "",
};

const UpdateLeaveCategory = ({ id }) => {
  const [, setValues] = useState({});
  const { request, data } = useApi(api.updateJobTitle);
  const getSingleJobTitle = useApi(api.getSingleJobTitle);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getSingleJobTitle.request(id);
        console.log("job", data);
        initialValues = data.jobTitle;
        setValues((prev) => ({ ...prev, ...data }));
      } catch (_) {}
    }
    fetchData();
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    allowedLeaves: Yup.number().required("Required"),
  });

  const onSubmit = async (values) => {
    try {
      await request({ id, ...values, jobTitle: values.name });
    } catch (_) {}
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {() => (
          <section className="View_JobTitle_edit_page">
            <div
              className="modal fade"
              id="UpdateJobTitle"
              tabindex="-1"
              role="dialog"
              aria-labelledby="UpdateJobTitleTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ padding: "0px 10px" }}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="UpdateJobTitleTitle">
                      Update Job Title
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
                                name="name"
                              />
                              {/* <input type="text" placeholder="" required /> */}
                            </div>
                            <div class="input_field">
                              <label>
                                Allowed Leaves{" "}
                                <span class="mandatory"> * </span>
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
                                Job Updated Succesfully.
                              </p>
                            )}
                            <div class="submit_btn">
                              <button type="submit">Update</button>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </section>
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

export default UpdateLeaveCategory;
