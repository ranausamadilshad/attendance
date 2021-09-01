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

    const handledropodown=()=>{
        if(dropDown){
            setdropdown(false);
        }else{
            setdropdown(true);
            setdropdown1(false);
            setdropdown2(false);
            setdropdown3(false);
            setdropdown4(false);
            setdropdown5(false);
            setdropdown6(false);
            setdropdown7(false);
            setdropdown8(false);
            setdropdown9(false);
            setdropdown10(false);
        }
    }

    const handledropodown1=()=>{
        if(dropDown1){
            setdropdown1(false);
        }else{
            setdropdown1(true);
            setdropdown(false);
            setdropdown2(false);
            setdropdown3(false);
            setdropdown4(false);
            setdropdown5(false);
            setdropdown6(false);
            setdropdown7(false);
            setdropdown8(false);
            setdropdown9(false);
            setdropdown10(false);
        }
    }

    const handledropodown2=()=>{
        if(dropDown2){
            setdropdown2(false);
        }else{
            setdropdown2(true);
            setdropdown1(false);
            setdropdown(false);
            setdropdown3(false);
            setdropdown4(false);
            setdropdown5(false);
            setdropdown6(false);
            setdropdown7(false);
            setdropdown8(false);
            setdropdown9(false);
            setdropdown10(false);
        }
    }


    const handledropodown3=()=>{
        if(dropDown3){
            setdropdown3(false);
        }else{
            setdropdown3(true);
            setdropdown1(false);
            setdropdown2(false);
            setdropdown(false);
            setdropdown4(false);
            setdropdown5(false);
            setdropdown6(false);
            setdropdown7(false);
            setdropdown8(false);
            setdropdown9(false);
            setdropdown10(false);
        }
    }

    const handledropodown4=()=>{
        if(dropDown4){
            setdropdown4(false);
        }else{
            setdropdown4(true);
            setdropdown1(false);
            setdropdown2(false);
            setdropdown3(false);
            setdropdown(false);
            setdropdown5(false);
            setdropdown6(false);
            setdropdown7(false);
            setdropdown8(false);
            setdropdown9(false);
            setdropdown10(false);
        }
    }

    const handledropodown5=()=>{
        if(dropDown5){
            setdropdown5(false);
        }else{
            setdropdown5(true);
            setdropdown1(false);
            setdropdown2(false);
            setdropdown3(false);
            setdropdown4(false);
            setdropdown(false);
            setdropdown6(false);
            setdropdown7(false);
            setdropdown8(false);
            setdropdown9(false);
            setdropdown10(false);
        }
    }

    const handledropodown6=()=>{
        if(dropDown6){
            setdropdown6(false);
        }else{
            setdropdown6(true);
            setdropdown1(false);
            setdropdown2(false);
            setdropdown3(false);
            setdropdown4(false);
            setdropdown5(false);
            setdropdown(false);
            setdropdown7(false);
            setdropdown8(false);
            setdropdown9(false);
            setdropdown10(false);
        }
    }

    const handledropodown7=()=>{
        if(dropDown7){
            setdropdown7(false);
        }else{
            setdropdown7(true);
            setdropdown1(false);
            setdropdown2(false);
            setdropdown3(false);
            setdropdown4(false);
            setdropdown5(false);
            setdropdown6(false);
            setdropdown(false);
            setdropdown8(false);
            setdropdown9(false);
            setdropdown10(false);
        }
    }

    const handledropodown8=()=>{
        if(dropDown8){
            setdropdown8(false);
        }else{
            setdropdown8(true);
            setdropdown1(false);
            setdropdown2(false);
            setdropdown3(false);
            setdropdown4(false);
            setdropdown5(false);
            setdropdown6(false);
            setdropdown7(false);
            setdropdown(false);
            setdropdown9(false);
            setdropdown10(false);
        }
    }

    const handledropodown9=()=>{
        if(dropDown9){
            setdropdown9(false);
        }else{
            setdropdown9(true);
            setdropdown1(false);
            setdropdown2(false);
            setdropdown3(false);
            setdropdown4(false);
            setdropdown5(false);
            setdropdown6(false);
            setdropdown7(false);
            setdropdown8(false);
            setdropdown(false);
            setdropdown10(false);
        }
    }

    const handledropodown10=()=>{
        if(dropDown10){
            setdropdown10(false);
        }else{
            setdropdown(true);
            setdropdown1(false);
            setdropdown2(false);
            setdropdown3(false);
            setdropdown4(false);
            setdropdown5(false);
            setdropdown6(false);
            setdropdown7(false);
            setdropdown8(false);
            setdropdown9(false);
            setdropdown(false);
        }
    }

    
    return (
        <>

        
    <section className= {sideBar ? "sidebar_section responsive_nav_bar " : "sidebar_section responsive_nav_bar responsive_bar"}>
      
    <div className="sidebar_main_wrapper">
        
        <div className="sidebar_main_heading_section">
            <div className="sidebar_main_heading">
                <span className="sidebar_menu_title">Main</span>
                
                

                <div className="sidebar_sub_menu">
                    <Link to="#">
                  <div className="side_bar_single_sub_menu" onClick={handledropodown}> 
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
                     <div className="side_bar_single_sub_menu" onClick={handledropodown1}> 
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
               <div className="side_bar_single_sub_menu" onClick={handledropodown2}> 
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
                  <div className="side_bar_single_sub_menu" onClick={handledropodown3}> 
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
                     <div className="side_bar_single_sub_menu" onClick={handledropodown4}> 
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
                         <div className="side_bar_single_sub_menu" onClick={handledropodown5}> 
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
                             <div className="side_bar_single_sub_menu" onClick={handledropodown6}> 
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
                                 <div className="side_bar_single_sub_menu" onClick={handledropodown7}> 
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
               <div className="side_bar_single_sub_menu" onClick={handledropodown8}> 
                 <div className="logo_plus_sub_menu"><i className="fas fa-tachometer-alt"></i> <span> Employees</span></div>
                 <div className={dropDown8 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
              </div>  
              <object style={{ display: dropDown8 ? "block" : "none"}}>
              <div className="sidebar_sub_child_menu">
                  <div className="sidebar_sub_child_menu_list">
                      <Link to="/createemployees">create Employees</Link>
                      <Link to="/viewemployees">View Employees</Link>
                  </div>   
              </div>
              </object>
               </Link>
                
                 <Link to="#">
                  <div className="side_bar_single_sub_menu" onClick={handledropodown9}> 
                  <div className="logo_plus_sub_menu"><i className="fas fa-cubes"></i> <span> Leave</span></div>
                  <div className={dropDown9 ? "animated_icon animated_icon_responsive" :"animated_icon"}><i className="fas fa-chevron-down"></i></div>
                  </div>    
                  <object style={{ display: dropDown9 ? "block" : "none"}}>
                     <div className="sidebar_sub_child_menu">
                         <div className="sidebar_sub_child_menu_list">
                             <Link to="/leaveadmin">Leave(Admin)</Link>
                             <Link to="/leaveemployees">Leave(Employee)</Link>
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
               <div className="side_bar_single_sub_menu" onClick={handledropodown10}> 
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
