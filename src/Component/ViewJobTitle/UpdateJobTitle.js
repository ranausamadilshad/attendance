import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormControl/FormikControl";

const UpdateJobTitle = () => {
  const initialValues = {
    jobTitle: "",
    allowedLeaves: "",
  };

  const validationSchema = Yup.object({
    jobTitle: Yup.string().required("Required"),
    allowedLeaves: Yup.number().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Update Job Title data", values);
  };
    return (
        <>
           <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
           <section className="View_JobTitle_edit_page">
  <div className="modal fade"  id="UpdateJobTitle" tabindex="-1" role="dialog" aria-labelledby="UpdateJobTitleTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content" style={{ padding: "0px 10px" }}>
        <div className="modal-header">
          <h5 className="modal-title" id="UpdateJobTitleTitle">Update Job Title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
    )
}

export default UpdateJobTitle
