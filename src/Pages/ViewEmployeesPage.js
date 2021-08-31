import React from 'react'
import BodyHaider from '../Component/BodyHaider/BodyHaider'
import ViewEmployees from '../Component/ViewEmployees/ViewEmployees'

const ViewEmployeesPage = () => {
    return (
        <>
        <BodyHaider main="Employees"  cname="View Employees" btnName="Create Employees" btnlink='/createemployees' /> 
         <ViewEmployees/>
        </>
    )
}

export default ViewEmployeesPage
