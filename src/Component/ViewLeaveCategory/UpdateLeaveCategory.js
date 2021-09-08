import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormControl/FormikControl";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/leave-category";

let initialValues = {
  name: "",
};

const UpdateLeaveCategory = ({ id }) => {
  const [, setValues] = useState({});
  const { request, data } = useApi(api.updateLeaveCategory);
  const getSingleLeaveCategory = useApi(api.getSingleLeaveCategory);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getSingleLeaveCategory.request(id);
        initialValues = data.leaveCategory;
        setValues((prev) => ({ ...prev, ...data }));
      } catch (_) {}
    }
    fetchData();
  }, [id]);

  console.log("uopdate", data);
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    console.log("values", values);
    try {
      await request({ id, ...values, categoryName: values.name });
      window.location.reload();
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
                            {data && (
                              <p style={{ color: "green" }}>
                                Leave Category Updated Succesfully.
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
