import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";


function Layout(){
    return (
        <>
         <Header/>
         {/* outlet means we can change */}
        <Outlet/>   
         <Footer/>
        </>
    )
}

export default Layout