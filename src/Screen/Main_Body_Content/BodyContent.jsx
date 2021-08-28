import React from 'react';
import AdminDashboard from '../../Component/Admin_Dashboard/AdminDashboard';

// sidebar_section responsive_nav_bar

const BodyContent = ({ sideBar}) => {
    return (
        <>
      <section class={sideBar ? "content_body_wrapper" :"content_body_wrapper responsive_content_body"}>
            {/* <div class="responsive_content_color"></div> */}
           <div class="content_body_wrapper_container">
              <div class="content_body_wrapper_main">

              <AdminDashboard />  

              </div>    
            </div>
      </section>
            
        </>
    )
}

export default BodyContent
