import React from "react";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/jobTitle";

const DeleteLeaveCategory = ({ id }) => {
  const { request } = useApi(api.deleteJobTitle);

  const handleDelete = async () => {
    try {
      await request(id);
      window.location.reload();
    } catch (_) {}
  };
  return (
    <>
      <section className="Viwe_jobtitle_delete_page">
        <div
          className="modal fade"
          id="DeleteJobTitle"
          tabindex="-1"
          role="dialog"
          aria-labelledby="DeleteJobTitleTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ padding: "0px 10px" }}>
              <div
                className="modal-header"
                style={{ padding: "1rm 5px !important" }}
              >
                <h5 className="modal-title" id="DeleteJobTitleTitle">
                  Delete Job Title
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
                className="Delete_Job_Title_form"
                style={{
                  display: " flex",
                  flexDirection: "column",
                  gap: "10px 0px",
                  padding: "10px 10px",
                }}
              >
                <p style={{ color: "#6c757d", fontSize: "16px" }}>
                  Are you sure you want to delete this Job Title?
                </p>
                <button className="btn btn-primary" onClick={handleDelete}>
                  Delete
                </button>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteLeaveCategory;
