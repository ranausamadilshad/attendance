import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormControl/FormikControl";
import * as api from "../../apis/shift";
import useApi from "../../hooks/useApi";

let initialValues = {
  name: "",
  startDate: "",
  endDate: "",
};
const UpdateShift = ({ id }) => {
  const [, setValues] = useState({});
  const updateShift = useApi(api.updateShift);
  const { request } = useApi(api.getSingleShift);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request(id);
        initialValues = data.shift;
        initialValues.startDate = data.shift.startDate
          .split("T")[1]
          .split(".")[0];
        initialValues.endDate = data.shift.endDate.split("T")[1].split(".")[0];
        setValues((prev) => ({ ...prev, ...data }));
      } catch (_) {}
    }
    fetchData();
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    startDate: Yup.string().required("Required"),
    endDate: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    let startTime, endTime, shiftName;
    startTime =
      values.startDate === initialValues.startDate
        ? values.startDate
        : values.startDate + ":00";
    endTime =
      values.endDate === initialValues.endDate
        ? values.endDate
        : values.endDate + ":00";
    shiftName = values.name;
    try {
      await updateShift.request({ id, startTime, endTime, shiftName });
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
          <section className="View_shift_edit_page">
            <div
              className="modal fade"
              id="Updateshift"
              tabindex="-1"
              role="dialog"
              aria-labelledby="UpdateshiftTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ padding: "0px 10px" }}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="UpdateshiftTitle">
                      Update Shift
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
                              Shift Name <span class="mandatory"> *</span>
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
                              Start Time <span class="mandatory"> *</span>
                            </label>
                            <FormikControl
                              control="input"
                              type="time"
                              name="startDate"
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
                              name="endDate"
                            />
                            {/* <input type="time" placeholder="" /> */}
                          </div>
                          {updateShift.data && (
                            <p style={{ color: "green" }}>
                              Shift Updated Successfully.
                            </p>
                          )}
                          {updateShift.error.data && (
                            <p style={{ color: "red" }}>
                              {updateShift.error.data.message}
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

export default UpdateShift;
