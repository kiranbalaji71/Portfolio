import React from "react";
import "./Layout.scss";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="side">
        <Sidebar />
      </div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
