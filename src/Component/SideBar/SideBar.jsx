import React,{useState} from 'react';
import "../../Css/Style.css";
import {Link} from 'react-router-dom';

const SideBar = ({sideBar}) => {
    const [dropDown, setdropdown] = useState(false);
    const [dropDown1, setdropdown1] = useState(false);
    const [dropDown2, setdropdown2] = useState(false);
    const [dropDown3, setdropdown3] = useState(false);
    const [dropDown4, setdropdown4] = useState(false);
    const [dropDown5, setdropdown5] = useState(false);
    const [dropDown6, setdropdown6] = useState(false);
    const [dropDown7, setdropdown7] = useState(false);
    const [dropDown8, setdropdown8] = useState(false);
    const [dropDown9, setdropdown9] = useState(false);
    const [dropDown10, setdropdown10] = useState(false);
    const [dropDown11, setdropdown11] = useState(false);


    
    return (
        <>

        
    <section className= {sideBar ? "sidebar_section responsive_nav_bar " : "sidebar_section responsive_nav_bar responsive_bar"}>
      
    <div className="sidebar_main_wrapper">
        
        <div className="sidebar_main_heading_section">
            <div className="sidebar_main_heading">
                <span className="sidebar_menu_title">Main</span>
                
                

                <div className="sidebar_sub_menu">
                    <Link to="#">
                  <div className="side_bar_single_sub_menu" onClick={()=>{dropDown? setdropdown(false):setdropdown(true)}}> 
                    <div className="logo_plus_sub_menu"><i className="fas fa-tachometer-alt"></i> <span> Dashboard</span></div>
                    <div className={dropDown ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down" ></i></div>
                 </div>  
                 <object style={{ display: dropDown ? "block" : "none"}}>
                 <div className="sidebar_sub_child_menu">
                     <div className="sidebar_sub_child_menu_list">
                         <Link to="/">admin dashboard</Link>
                         <Link to="/employee">Employee dashboard</Link>
                     </div>   
                 </div>
                 </object>
                  </Link>
                   
                    <Link to="#">
                     <div className="side_bar_single_sub_menu" onClick={()=>{dropDown1? setdropdown1(false):setdropdown1(true)}}> 
                     <div className="logo_plus_sub_menu"><i className="fas fa-cubes"></i> <span> Device Managment</span></div>
                     <div className={dropDown1 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
                     </div>   
                     <object style={{ display: dropDown1 ? "block" : "none"}}>
                         <div className="sidebar_sub_child_menu">
                             <div className="sidebar_sub_child_menu_list">
                                 <Link to="/addnewdevice">Add New Device</Link>
                                 <Link to="/viewdevice">View Devices</Link>
                             </div>   
                         </div>
                     </object>
                     
                     </Link>
                    
                 </div>
            

            </div>

            <div className="sidebar_main_heading">
             <span className="sidebar_menu_title">Configuration</span>
             
             <div className="sidebar_sub_menu">
                 <Link to="#">
               <div className="side_bar_single_sub_menu" onClick={()=>{dropDown2? setdropdown2(false):setdropdown2(true)}}> 
                 <div className="logo_plus_sub_menu"><i className="fas fa-tachometer-alt"></i> <span>Department</span></div>
                 <div className={dropDown2 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
              </div>  
              <object style={{ display: dropDown2 ? "block" : "none"}}>
              <div className="sidebar_sub_child_menu">
                  <div className="sidebar_sub_child_menu_list">
                      <Link to="/createdepartment">Create Department</Link>
                      <Link to="/viewdepartment">View Department</Link>
                  </div>   
              </div>
              </object>
               </Link>
                
                 <Link to="#">
                  <div className="side_bar_single_sub_menu" onClick={()=>{dropDown3? setdropdown3(false):setdropdown3(true)}}> 
                  <div className="logo_plus_sub_menu"><i className="fas fa-cubes"></i> <span> Designation</span></div>
                  <div className={dropDown3 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
                  </div>  
                  <object style={{ display: dropDown3 ? "block" : "none"}}>
                     <div className="sidebar_sub_child_menu">
                         <div className="sidebar_sub_child_menu_list">
                             <Link to="/createjobtitle">Create job Title</Link>
                             <Link to="/viewjobtitle">View job Title</Link>
                         </div>   
                     </div>
                     </object>  
                  </Link>
                 
                  <Link to="#">
                     <div className="side_bar_single_sub_menu" onClick={()=>{dropDown4? setdropdown4(false):setdropdown4(true)}}> 
                     <div className="logo_plus_sub_menu"><i className="fas fa-cubes"></i> <span>Shift Managment</span></div>
                     <div className={dropDown4 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
                     </div>  
                     <object style={{ display: dropDown4 ? "block" : "none"}}>
                        <div className="sidebar_sub_child_menu">
                            <div className="sidebar_sub_child_menu_list">
                                <Link to="/createshift">Create shift</Link>
                                <Link to="/viewshift">View shift</Link>
                            </div>   
                        </div>
                        </object>  
                     </Link>

                     <Link to="#">
                         <div className="side_bar_single_sub_menu" onClick={()=>{dropDown5? setdropdown5(false):setdropdown5(true)}}> 
                         <div className="logo_plus_sub_menu"><i className="fas fa-cubes"></i> <span>Holidays</span></div>
                         <div className={dropDown5 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
                         </div>  
                         <object style={{ display: dropDown5 ? "block" : "none"}}>
                            <div className="sidebar_sub_child_menu">
                                <div className="sidebar_sub_child_menu_list">
                                    <Link to="/createholidays">Create Holidays</Link>
                                    <Link to="/viewholidays">View Holidays</Link>
                                </div>   
                            </div>
                            </object>  
                         </Link>

                         <Link to="#">
                             <div className="side_bar_single_sub_menu" onClick={()=>{dropDown6? setdropdown6(false):setdropdown6(true)}}> 
                             <div className="logo_plus_sub_menu"><i className="fas fa-cubes"></i> <span>Leaves</span></div>
                             <div className={dropDown6 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
                             </div>  
                             <object style={{ display: dropDown6 ? "block" : "none"}}>
                                <div className="sidebar_sub_child_menu">
                                    <div className="sidebar_sub_child_menu_list">
                                        <Link to="/leavesetting">Leave Setting</Link>
                                        
                                    </div>   
                                </div>
                                </object>  
                             </Link>

                             <Link to="#">
                                 <div className="side_bar_single_sub_menu" onClick={()=>{dropDown7? setdropdown7(false):setdropdown7(true)}}> 
                                 <div className="logo_plus_sub_menu"><i className="fas fa-cubes"></i> <span>Attendence</span></div>
                                 <div className={dropDown7 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
                                 </div>  
                                 <object style={{ display: dropDown7 ? "block" : "none"}}>
                                    <div className="sidebar_sub_child_menu">
                                        <div className="sidebar_sub_child_menu_list">
                                            <Link to="#">Attendence Rules</Link>
                                            
                                        </div>   
                                    </div>
                                    </object>  
                                 </Link>

              </div>
         </div>


         <div className="sidebar_main_heading">
             <span className="sidebar_menu_title">Employees</span>
             
             <div className="sidebar_sub_menu">
                 <Link to="#">
               <div className="side_bar_single_sub_menu" onClick={()=>{dropDown8? setdropdown8(false):setdropdown8(true)}}> 
                 <div className="logo_plus_sub_menu"><i className="fas fa-tachometer-alt"></i> <span> Employees</span></div>
                 <div className={dropDown8 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
              </div>  
              <object style={{ display: dropDown8 ? "block" : "none"}}>
              <div className="sidebar_sub_child_menu">
                  <div className="sidebar_sub_child_menu_list">
                      <Link to="#">create Employees</Link>
                      <Link to="#">View Employees</Link>
                  </div>   
              </div>
              </object>
               </Link>
                
                 <Link to="#">
                  <div className="side_bar_single_sub_menu" onClick={()=>{dropDown9? setdropdown9(false):setdropdown9(true)}}> 
                  <div className="logo_plus_sub_menu"><i className="fas fa-cubes"></i> <span> Leave</span></div>
                  <div className={dropDown9 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
                  </div>    
                  <object style={{ display: dropDown9 ? "block" : "none"}}>
                     <div className="sidebar_sub_child_menu">
                         <div className="sidebar_sub_child_menu_list">
                             <Link to="#">Leave(Admin)</Link>
                             <Link to="#">Leave(Employee)</Link>
                         </div>   
                     </div>
                     </object>
                  </Link>
                 
              </div>
         </div>


         <div className="sidebar_main_heading">
             <span className="sidebar_menu_title">Attendence</span>
             
             <div className="sidebar_sub_menu">
                 <Link to="#">
               <div className="side_bar_single_sub_menu" onClick={()=>{dropDown10? setdropdown10(false):setdropdown10(true)}}> 
                 <div className="logo_plus_sub_menu"><i className="fas fa-tachometer-alt"></i> <span> Attendence</span></div>
                 <div className={dropDown10 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
              </div>  
              <object style={{ display: dropDown10 ? "block" : "none"}}>
              <div className="sidebar_sub_child_menu">
                  <div className="sidebar_sub_child_menu_list">
                      <Link to="#">Mark Attendence</Link>
                      <Link to="#"> Attendence(Admin)</Link>
                      <Link to="#"> Attendence(Employee)</Link>
                  </div>   
              </div>
              </object>
               </Link>
                
                 <Link to="#">
                  <div className="side_bar_single_sub_menu" onClick={()=>{dropDown11? setdropdown(false):setdropdown(true)}}> 
                  <div className="logo_plus_sub_menu"><i className="fas fa-cubes"></i> <span> Apps</span></div>
                  <div className={dropDown11 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
                  </div>    
                  </Link>
                 
              </div>
         </div>


       


        
            
        </div>

     </div>


  </section>

            
        </>
    )
}

export default SideBar
