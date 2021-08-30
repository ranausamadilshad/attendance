import React,{useState} from 'react';
import Header from '../Component/Header/Header';
import SideBar from '../Component/SideBar/SideBar';
import BodyContent from '../Screen/Main_Body_Content/BodyContent';


const Home = () => {

    const [sideBar, setSideBar] = useState(true);

    return (
        <>
            <Header sideBar={sideBar} setSideBar={setSideBar} />
            <BodyContent sideBar={sideBar} setSideBar={setSideBar} />
            <SideBar sideBar={sideBar} setSideBar={setSideBar}  />
        </>
    )
}

export default Home
