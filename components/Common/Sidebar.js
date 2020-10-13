import React, { Fragment } from "react";
import Link from "next/link";

import { SidebarData } from "../../utils/constants";

import s from "../../styles/sidebar.module.css";

const SideBar = () => {
  return (
    <Fragment>
      {/* <nav className={s.nav}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li className={s.navbarText} key={index}>
                <Link href={item.path}>
                  <a>
                    <i class={`fa fa-${item.fIcon}`}></i>
                    <span>{item.title}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav> */}
      <p>Side Bar</p>
    </Fragment>
  );
};

export default SideBar;
