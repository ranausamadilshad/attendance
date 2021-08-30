import React from 'react'
import BodyHaider from '../Component/BodyHaider/BodyHaider'
import ViewHolidays from '../Component/ViewHolidays/ViewHolidays';

const ViewHolidaysPage = () => {
    return (
        <>
      <BodyHaider main="Holidays"  cname="View Holidays" btnName="+ Create Holidays" btnlink='/createholidays' /> 
       <ViewHolidays/>
        </>
    )
}

export default ViewHolidaysPage
