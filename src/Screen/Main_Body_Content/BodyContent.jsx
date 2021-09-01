import React from 'react';
import { HashRouter as  Switch, Route } from "react-router-dom";
import EmployeeDashboard from '../../Pages/EmployeeDashboard';
import AddNewDevicePage from '../../Pages/AddNewDevicePage';
import ViewDevicePage from '../../Pages/ViewDevicePage';
import CreateDepartmentPage from '../../Pages/CreateDepartmentPage';
import ViewDepartmentPage from '../../Pages/ViewDepartmentPage';
import CreateJobTitlePage from '../../Pages/CreateJobTitlePage';
import ViewJobTitlePage from '../../Pages/ViewJobTitlePage';
import CreateShiftPage from '../../Pages/CreateShiftPage';
import ViewShiftPage from '../../Pages/ViewShiftPage';
import CreateHolidaysPage from '../../Pages/CreateHolidaysPage';
import ViewHolidaysPage from '../../Pages/ViewHolidaysPage';
import AdminDashboardPage from '../../Pages/AdminDashboardPage';
import LeaveSettingsPage from '../../Pages/LeaveSettingsPage';
import CreateEmployeesPage from '../../Pages/CreateEmployeesPage';
import ViewEmployeesPage from '../../Pages/ViewEmployeesPage';
import LeaveAdminPage from '../../Pages/LeaveAdminPage';
import LeaveEmployeePage from '../../Pages/LeaveEmployeePage';



// sidebar_section responsive_nav_bar

const BodyContent = ({ sideBar}) => {
    return (
        <>
      <section class={sideBar ? "content_body_wrapper" :"content_body_wrapper responsive_content_body"}>
            {/* <div class="responsive_content_color"></div> */}
           <div class="content_body_wrapper_container">
              <div class="content_body_wrapper_main">

              {/* <AdminDashboard />  */}
              {/* <BodyHaider/> */}


    
        <Switch>
          <Route exact path="/">
          <AdminDashboardPage/>
          </Route>
          <Route  path="/employee">
            <EmployeeDashboard/>
          </Route>
          <Route  path="/addnewdevice">
            <AddNewDevicePage/>
          </Route>
          <Route  path="/viewdevice">
            <ViewDevicePage/>
          </Route>
          <Route  path="/createdepartment">
            <CreateDepartmentPage/>
          </Route>
          <Route  path="/viewdepartment">
            <ViewDepartmentPage/>
          </Route>
          <Route  path="/createjobtitle">
            <CreateJobTitlePage/>
          </Route>
          <Route  path="/viewjobtitle">
            <ViewJobTitlePage/>
          </Route>
          <Route  path="/createshift">
            <CreateShiftPage/>
          </Route>
          <Route  path="/viewshift">
            <ViewShiftPage/>
          </Route>
          <Route  path="/createholidays">
            <CreateHolidaysPage/>
          </Route>
          <Route  path="/viewholidays">
            <ViewHolidaysPage/>
          </Route>
          <Route  path="/leavesetting">
            <LeaveSettingsPage/>
          </Route>
          <Route  path="/createemployees">
           <CreateEmployeesPage/>
          </Route>
          <Route  path="/viewemployees">
           <ViewEmployeesPage/>
          </Route>
          <Route  path="/leaveadmin">
           <LeaveAdminPage/>
          </Route>
          <Route  path="/leaveemployees">
           <LeaveEmployeePage/>
          </Route>
        </Switch>
      



              </div>    
            </div>
      </section>
            
        </>
    )
}

export default BodyContent
