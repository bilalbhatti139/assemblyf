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
                    <img
                      src={`../../static/assets/images/${item.image}`}
                      alt="live"
                      className="img-fluid mb-2"
                      width="40"
                    />
                    <p className={s.sidebarText}>{item.title}</p>
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
