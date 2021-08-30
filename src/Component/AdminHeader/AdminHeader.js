import React from 'react'
import AdminHeaderScreen from './AdminHeaderScreen'

const AdminHeader = (props) => {
    return (
        <>
      <AdminHeaderScreen  main={props.main} cname={props.cname}/>
        </>
    )
}

export default AdminHeader
