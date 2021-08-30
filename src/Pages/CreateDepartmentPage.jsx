import React from 'react'
import BodyHaider from '../Component/BodyHaider/BodyHaider'
import CreateDepartment from '../Component/CreateDepartment/CreateDepartment'

const CreateDepartmentPage = () => {
    return (
        <>
          <BodyHaider main="Department"  cname="Create Department" btnName="View Department" btnlink='/viewdepartment' /> 
        <CreateDepartment/>
        </>
    )
}

export default CreateDepartmentPage
