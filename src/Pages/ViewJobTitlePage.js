import React from 'react'
import BodyHaider from '../Component/BodyHaider/BodyHaider'
import ViewJobTitle from '../Component/ViewJobTitle/ViewJobTitle';

const ViewJobTitlePage = () => {
    return (
        <>
          <BodyHaider main="Designation"  cname="View Job Title" btnName="Create Job Title" btnlink='/createjobtitle' />
          <ViewJobTitle/>
        </>
    )
}

export default ViewJobTitlePage
