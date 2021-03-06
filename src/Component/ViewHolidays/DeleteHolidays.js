import React from "react";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/holiday";

const DeleteHolidays = ({ id }) => {
  const { request } = useApi(api.deleteHoliday);

  const handleDelete = async () => {
    try {
      await request(id);
      window.location.reload();
    } catch (_) {}
  };
  return (
    <>
      <section className="Viwe_Holidays_delete_page">
        <div
          className="modal fade"
          id="DeleteHolidays"
          tabindex="-1"
          role="dialog"
          aria-labelledby="DeleteHolidaysTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ padding: "0px 10px" }}>
              <div
                className="modal-header"
                style={{ padding: "1rm 5px !important" }}
              >
                <h5 className="modal-title" id="DeleteHolidaysTitle">
                  Delete Holiday{" "}
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
                className="Delete_Holidays_form"
                style={{
                  display: " flex",
                  flexDirection: "column",
                  gap: "10px 0px",
                  padding: "10px 10px",
                }}
              >
                <p style={{ color: "#6c757d", fontSize: "16px" }}>
                  Are you Sure you want to delete this?
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

export default DeleteHolidays;
