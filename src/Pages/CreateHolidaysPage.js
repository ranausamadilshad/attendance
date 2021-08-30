import React from 'react'
import BodyHaider from '../Component/BodyHaider/BodyHaider'
import CreateHolidays from '../Component/CreateHolidays/CreateHolidays';

const CreateHolidaysPage = () => {
    return (
        <>
      <BodyHaider main="Holidays"  cname="Create Holidays" btnName="View Holidays" btnlink='/viewholidays' /> 
        <CreateHolidays/>
        </>

    )
}

export default CreateHolidaysPage
