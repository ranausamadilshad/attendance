import React from 'react'
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";


const UpdateShiftScreen
 = ({ onSubmit,validationSchema ,initialValues }) => {

    return (
        <>
          <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
           <section className="View_shift_edit_page">
  <div className="modal fade"  id="Updateshift" tabindex="-1" role="dialog" aria-labelledby="UpdateshiftTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content" style={{ padding: "0px 10px" }}>
        <div className="modal-header">
          <h5 className="modal-title" id="UpdateshiftTitle">Update Shift</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <section className="create_department_form">
            <div className="create_department_container">
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
                        type="date"
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
                        type="date"
                        name="endTime"
                      />
                      {/* <input type="time" placeholder="" /> */}
                    </div>
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
    )
}

export default UpdateShiftScreen

