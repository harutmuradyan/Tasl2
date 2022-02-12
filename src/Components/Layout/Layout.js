import React from "react";
import './Layout.scss';

//Import Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

const Layout = ({data}) => {
    return (
        <div className="layout">
            <Header/>
                <main>
                    <Content data={data}/>
                    <Sidebar/>
                </main>
            <Footer/>
        </div>
    )
}

export default Layout;