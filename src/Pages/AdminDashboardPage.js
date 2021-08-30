import React from 'react';
import AdminHeader from '../Component/AdminHeader/AdminHeader';
import AdminDashboard from '../Component/Admin_Dashboard/AdminDashboard';


const AdminDashboardPage = () => {
    return (
        <> 
        <AdminHeader main='Dashboard' cname="Admin"/>
        <AdminDashboard/>  
        </>
    )
}

export default AdminDashboardPage
