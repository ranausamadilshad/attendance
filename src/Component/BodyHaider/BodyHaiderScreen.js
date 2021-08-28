import React from 'react';
import '../../Css/Style.css';

const BodyHaiderScreen = (props) => {
    return (
        <>
            <div className="content_body_page_title">
             <div className="body_page_title">
              <h1>Department</h1>
              <span className="body_page_title_detail"><a href="#">Dashboard</a><span></span><h6>{props.name}</h6></span>
             </div>
             <div className="body_page_title_create_btn">
                 <button><span>View Department</span></button>
             </div> 
         </div>  
        </>
    )
}

export default BodyHaiderScreen;
