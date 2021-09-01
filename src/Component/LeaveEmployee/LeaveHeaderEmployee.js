import React from 'react'

const LeaveHeader = () => {
    return (
        <>
             <div className="content_body_page_title">
             <div className="body_page_title">
              <h1>Leave</h1>
              <span className="body_page_title_detail"><a to='/'>Dashboard</a><span></span><h6>Leave</h6></span>
             </div>
             <div className="body_page_title_create_btn">
             <a   className="btn btn-primary"> <i class="fas fa-plus"></i> <span> Add Leave</span></a>
             </div> 
         </div>  
        </>
    )
}

export default LeaveHeader
