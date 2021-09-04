import React from 'react'
import Profile from '../Component/Profile/Profile'
import AdminHeader from '../Component/AdminHeader/AdminHeader';


const ProfilePage = () => {
    return (
        <>
                <AdminHeader main='Profile' cname="Profile"/>
          <Profile/>
        </>
    )
}

export default ProfilePage
