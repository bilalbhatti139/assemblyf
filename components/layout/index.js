import React, { Fragment } from "react";

// import components
import NavBar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";
import RightSideBar from "../Common/RightSideBar";
import ChatBox from "../chatBox";

// import styles
import s from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <div className={s.DashboardMainContent}>
        <Sidebar />
        <div className={s.content}>{children}</div>
        <ChatBox />
        <RightSideBar />
      </div>
    </Fragment>
  );
};

export default Layout;
