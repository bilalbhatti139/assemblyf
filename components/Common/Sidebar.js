import React, { Fragment } from "react";
import Link from "next/link";

import { SidebarData } from "../../utils/constants";

import s from "../../styles/sidebar.module.css";

const SideBar = () => {
  return (
    <Fragment>
      <nav className={s.nav}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li className={s.navbarText} key={index}>
                <Link href={item.path}>
                  <a>
                    <img src="../../static/assets/images/live.png" alt="live" className="img-fluid" width="25" />
                    <p>{item.title}</p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default SideBar;
