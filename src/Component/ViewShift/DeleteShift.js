import React from 'react'

const DeleteShift = () => {
    return (
        <>
             <section className="Viwe_Shift_delete_page">
  <div className="modal fade"  id="DeleteShift" tabindex="-1" role="dialog" aria-labelledby="DeleteShiftTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content" style={{padding:"0px 10px"}}>
        <div className="modal-header" style={{padding:"1rm 5px !important"}}>
          <h5 className="modal-title" id="DeleteShiftTitle">Delete Shift</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <section className="Delete_Shift_form" style={{ display:" flex",flexDirection:'column',gap: "10px 0px",padding: "10px 10px"}}>
           <p style={{color:"#6c757d",fontSize:"16px",}}>Are you Sure ?</p>
           <button className="btn btn-primary">Delete</button>
        </section>

        
      </div>
    </div>
  </div>
</section> 
        </>
    )
}

export default DeleteShift
