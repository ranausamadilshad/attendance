import React from 'react'
import './Profile.css'
import LoginImg from '../../Assets/image/login_img.png';

const ProfileScreen = () => {
    return (
        <>
         <section className="Profile_page_section" id="view_employee_leave">
  <div className="Profile_page_body">
    <div className="Profile_page_box">
        <figure><img src={LoginImg} /></figure>
        <div className="Profile_page_inner_box">
            <div className="Profile_page_box_detail">
                <h3>John Doe</h3>
                <span>UI/UX Design Team</span>
            </div>
            <div className="Profile_page_box_detail">
                <h4>Date of Join</h4>
                <span>1st Jan 2013</span>
            </div>
        </div>
     </div>  
     <div className="Profile_page_box_two">
         <div className="Profile_page_box_two_detail"><h5>Phone:</h5><span>9876543210</span></div>
         <div className="Profile_page_box_two_detail"><h5>Email:</h5><span>johndoe@example.com</span></div>
         <div className="Profile_page_box_two_detail"><h5>Birthday:</h5><span>24th July</span></div>
         <div className="Profile_page_box_two_detail"><h5>Address:</h5><span>1861 Bayonne Ave, Manchester Township, NJ, 08759</span></div>
         <div className="Profile_page_box_two_detail"><h5>Gender:</h5><span>Male</span></div>
     </div>    
 </div>

</section>
        </>
    )
}

export default ProfileScreen
