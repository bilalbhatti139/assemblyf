import React, { Fragment } from "react";
import Link from "next/link";

import s from "../../styles/sidebar.module.css";

import { RightSidebarData } from "../../utils/constants";

const RightSideBar = () => {
  return (
    <Fragment>
      <nav className={s.nav}>
        <ul className="nav-menu-items">
          {RightSidebarData.map((item, index) => {
            return (
              <li className={s.navbarText} key={index}>
                <Link href={item.path}>
                  <a>
                    <img
                      src={`../../static/assets/images/${item.image}`}
                      alt="live"
                      className="img-fluid mb-2"
                      width="25"
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

export default RightSideBar;
