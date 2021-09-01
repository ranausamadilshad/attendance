import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormControl/FormikControl";

const UpdateHolidays = () => {
  const initialValues = {
    holidayName: "",
    startTime: "",
    endTime: "",
  };
  const validationSchema = Yup.object({
    holidayName: Yup.string().required("Required"),
    startTime: Yup.date().required("Required"),
    endTime: Yup.date().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Update Holidays data", values);
  };
    return (
      <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
       
            <section className="Viwe_Holidays_edit_page">
  <div className="modal fade"  id="UpdateHolidays" tabindex="-1" role="dialog" aria-labelledby="UpdateHolidaysTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content" style={{ padding: "0px 10px" }}>
        <div className="modal-header">
          <h5 className="modal-title" id="UpdateHolidaysTitle">Update Holidays</h5>
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
                        Holiday Name <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="text"
                        name="holidayName"
                      />
                      {/* <input type="text" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Start Date <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="date"
                        name="startTime"
                      />
                      {/* <input type="date" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        End Date <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="date"
                        name="endTime"
                      />
                      {/* <input type="date" placeholder="" /> */}
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

export default UpdateHolidays
