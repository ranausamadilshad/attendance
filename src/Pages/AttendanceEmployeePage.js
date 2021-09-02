import React from 'react'
import AttendenceEmployee from '../Component/AttendenceEmployee/AttendenceEmployee'
import AdminHeader from '../Component/AdminHeader/AdminHeader';



const AttendanceEmployeePage = () => {
    return (
        <>
        <AdminHeader main='Attendence' cname="Employee"/>
            <AttendenceEmployee/>
        </>
    )
}

export default AttendanceEmployeePage
