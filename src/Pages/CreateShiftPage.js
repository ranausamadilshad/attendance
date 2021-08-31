import React from 'react'
import CreateShift from '../Component/CreateShift/CreateShift'
import BodyHaiderPlus from '../Component/BodyHaiderPlus/BodyHaiderPlus'

const CreateShiftPage = () => {
    return (
        <>

<BodyHaiderPlus main="Shift Management"  cname="Create Shift" btnName="View Shift" btnlink='/viewshift' />

<CreateShift/>
        </>
    )
}

export default CreateShiftPage
