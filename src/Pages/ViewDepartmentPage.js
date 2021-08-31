import React from 'react';
import BodyHaider from '../Component/BodyHaider/BodyHaider';
import ViewDepartment from '../Component/ViewDepartment/ViewDepartment'

const ViewDepartmentPage = () => {
    return (
        <>
          <BodyHaider main="Department"  cname="View Department" btnName="Create Department" btnlink='/createdepartment' />
          <ViewDepartment/>
        </>
    )
}

export default ViewDepartmentPage
