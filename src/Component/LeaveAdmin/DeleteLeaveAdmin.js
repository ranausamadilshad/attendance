import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/applyForLeave";

const DeleteLeaveAdmin = ({ id }) => {
  const { request, data } = useApi(api.getSingleLeave);
  const [status, setStatus] = useState("");
  const leaveStatus = useApi(api.updateLeaveStatus);
  console.log(id, status);
  useEffect(() => {
    async function fetchData() {
      try {
        await request(id);
      } catch (_) {}
    }
    fetchData();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("inside form");
    try {
      await leaveStatus.request({ id, leaveStatus: status });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (_) {}
  }
  console.log("dataaaaa", leaveStatus.data);
  return (
    <>
      <section className="Viwe_Employee_delete_page">
        <div
          className="modal fade"
          id="DeleteAdmin"
          tabindex="-1"
          role="dialog"
          aria-labelledby="DeleteAdminTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ padding: "0px 10px" }}>
              <div
                className="modal-header"
                style={{ padding: "1rm 5px !important" }}
              >
                <h5 className="modal-title" id="DeleteAdminTitle">
                  Employee Leave
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
              <section
                className="Delete_Employee_form"
                style={{
                  display: " flex",
                  flexDirection: "column",
                  gap: "10px 0px",
                  padding: "10px 10px",
                }}
              >
                <p style={{ color: "#6c757d", fontSize: "16px" }}>
                  Choose Status for Employee Leave.
                </p>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="radio"
                      name="status"
                      value="ACCEPTED"
                      onChange={({ target }) => setStatus(target.value)}
                      required
                    />
                    <label>Accept</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="status"
                      value="REJECTED"
                      onChange={({ target }) => setStatus(target.value)}
                      required
                    />
                    <label>Reject</label>
                  </div>
                  {leaveStatus.data && (
                    <p style={{ color: "green" }}>
                      Status Updated Successfully.
                    </p>
                  )}
                  <button className="btn btn-primary" type="submit">
                    Update
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteLeaveAdmin;
