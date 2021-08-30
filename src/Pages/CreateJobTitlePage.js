import React from 'react';
import BodyHaider from '../Component/BodyHaider/BodyHaider';
import CreateJobTitle from '../Component/CreateJobTitle/CreateJobTitle'

const CreateJobTitlePage = () => {
    return (
        <>
          <BodyHaider main="Designation"  cname="Create Job Title" btnName="View Job Title" btnlink='/viewjobtitle' />
          <CreateJobTitle/>
        </>
    )
}

export default CreateJobTitlePage
