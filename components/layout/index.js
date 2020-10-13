import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { navBarHideFrom } from "../../utils/constants";

// import components
import NavBar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";
import RightSideBar from "../Common/RightSideBar";

// import styles
import s from "../../styles/layout.module.css";

// import bootstrap components
import Container from "react-bootstrap/Container";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <div className={s.DashboardMainContent}>
        <Sidebar />
        <div className={s.contentContainer}>
          <div className={s.content}>{children}</div>
        </div>
        <RightSideBar />
      </div>
    </Fragment>
  );
};

export default Layout;
