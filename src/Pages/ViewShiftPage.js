import React from 'react'
import BodyHaider from '../Component/BodyHaider/BodyHaider'
import ViewShift from '../Component/ViewShift/ViewShift'

const ViewShiftPage = () => {
    return (
        <>
      <BodyHaider main="Shift Management"  cname="View Shift" btnName=" + Create Shift" btnlink='/createshift' /> 
      <ViewShift/>
        </>
    )
}

export default ViewShiftPage
