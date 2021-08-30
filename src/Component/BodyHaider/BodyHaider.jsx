import React from 'react';
import BodyHaiderScreen from './BodyHaiderScreen';

const BodyHaider = (props) => {
    return (
        <>
          <BodyHaiderScreen main={props.main} cname={props.cname} btnName={props.btnName} btnlink={props.btnlink}/>  
        </>
    )
}

export default BodyHaider
