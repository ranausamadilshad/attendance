import React from 'react';
import CreateJobTitle from '../Component/CreateJobTitle/CreateJobTitle'
import BodyHaiderPlus from '../Component/BodyHaiderPlus/BodyHaiderPlus';

const CreateJobTitlePage = () => {
    return (
        <>
              <BodyHaiderPlus main="Designation"  cname="Create Job Title" btnName="View Job Title" btnlink='/viewjobtitle' />
          <CreateJobTitle/>
        </>
    )
}

export default CreateJobTitlePage
