import React from 'react'
import BodyHaider from '../Component/BodyHaider/BodyHaider'
import CreateShift from '../Component/CreateShift/CreateShift'

const CreateShiftPage = () => {
    return (
        <>

<BodyHaider main="Shift Management"  cname="Create Shift " btnName="View Shift" btnlink='/viewshift' />
<CreateShift/>
        </>
    )
}

export default CreateShiftPage
