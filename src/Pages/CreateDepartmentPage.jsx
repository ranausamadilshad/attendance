import React from 'react'
import BodyHaiderPlus from '../Component/BodyHaiderPlus/BodyHaiderPlus'
import CreateDepartment from '../Component/CreateDepartment/CreateDepartment'

const CreateDepartmentPage = () => {
    return (
        <>
          
          <BodyHaiderPlus main="Department"  cname="Create Department" btnName="View Department" btnlink='/viewdepartment' /> 
        <CreateDepartment/>
        </>
    )
}

export default CreateDepartmentPage
