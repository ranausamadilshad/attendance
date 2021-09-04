import React from 'react'
import AdminHeader from '../Component/AdminHeader/AdminHeader';
import ReportAdmin from '../Component/ReportAdmin/ReportAdmin';


const ReportAdminPage = () => {
    return (
        <>
       <AdminHeader main='Report' cname="Admin"/>
       <ReportAdmin/>
        </>
    )
}

export default ReportAdminPage
