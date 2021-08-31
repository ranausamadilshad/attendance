import React from 'react'

const UpdateDepartment = () => {
    return (
        <>
<section className="Viwe_Department_edit_page">
  <div className="modal fade"  id="UpdateDepartment" tabindex="-1" role="dialog" aria-labelledby="UpdateDepartmentTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="UpdateDepartmentTitle">Update Department</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <section className="create_department_form">
            <div className="create_department_container">
                  <form>
                     <div className="create_department_form_fields"> 
                         
                      <div className="input_field">
                      <label>Department Name <span className="mandatory"> *</span></label>
                      <input type="text" placeholder=""/>
                      </div>
                      <div className="input_field">
                      <label>Phone <span className="mandatory"> * </span></label>
                      <input type="number" placeholder="" required/>
                      </div>
                      <div className="input_field">
                        <label>Department Email <span className="Optional">(Optional)</span></label>
                        <input type="email" placeholder=""/>
                        </div>
                        <div className="input_field">
                        <label>Departmant Address <span className="Optional">(Optional)</span></label>
                        <textarea></textarea>
                        </div>
                      <div className="submit_btn">
                      <button type="submit">Update</button>
                      </div>
                  
                     </div> 
                  </form>
            </div>
        </section>

        
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default UpdateDepartment
