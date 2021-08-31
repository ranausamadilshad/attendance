import React from 'react'
import BodyHaiderPlus from '../Component/BodyHaiderPlus/BodyHaiderPlus'
import EmployeesCreate from '../Component/EmployeesCreate/EmployeesCreate'

const CreateEmployeesPage = () => {
    return (
        <>
                
                  <BodyHaiderPlus main="Employees"  cname="Create Employees" btnName="View Employees" btnlink='/viewemployees' /> 
                 <EmployeesCreate/>
        </>
    )
}

export default CreateEmployeesPage
