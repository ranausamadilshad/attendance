import React from 'react'
import AttendenceAdmin from '../Component/AttendenceAdmin/AttendenceAdmin'
import AdminHeader from '../Component/AdminHeader/AdminHeader';


const AttendenceAdminPage = () => {
    return (
        <>
        <AdminHeader main='Attendence' cname="Admin"/>
        <AttendenceAdmin/>
        </>
    )
}

export default AttendenceAdminPage
