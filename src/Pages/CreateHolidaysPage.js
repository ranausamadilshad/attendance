import React from 'react'
import CreateHolidays from '../Component/CreateHolidays/CreateHolidays';
import BodyHaiderPlus from '../Component/BodyHaiderPlus/BodyHaiderPlus';

const CreateHolidaysPage = () => {
    return (
        <>
      <BodyHaiderPlus main="Holidays"  cname="Create Holidays" btnName="View Holidays" btnlink='/viewholidays' /> 

        <CreateHolidays/>
        </>

    )
}

export default CreateHolidaysPage
