import React from 'react';
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <div className='content'>
          <Outlet />
        </div>
        )
}

export default Layout;