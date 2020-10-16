import React, { Fragment } from "react";

// import styles
import s from "../../styles/navbar.module.css";

// import component
import CustomDropDown from "../../components/UI/DropDown";
import { UserDropDownOption } from "../../utils/constants";

const NavBar = () => {
  return (
    <Fragment>
      <div className={s.Navbar}>
        <div className={s.logo}>
          <a href="/" className={s.navbarBrand}>
            <img
              src="../../static/assets/images/logo.png"
              alt="header-logo"
              className="img-fluid"
              width="100"
            />
          </a>
        </div>
        <div className={s.headerRightContent}>
          <div className={s.createEvent}>
            <button>Create Event</button>
          </div>
          <div className={s.Message}>
            <img
              src="../../static/assets/images/notification.png"
              alt="header-logo"
              className="img-fluid"
              width="30"
            />
          </div>
          <div className={s.Notification}>
            <img
              src="../../static/assets/images/ring.png"
              alt="header-logo"
              className="img-fluid"
              width="30"
            />
          </div>
          <CustomDropDown List={UserDropDownOption} />
        </div>
      </div>
    </Fragment>
  );
};
export default NavBar;
