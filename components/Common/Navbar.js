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
        <div className={s.LogoContainer}>
          <div className={s.logo}>
            <a href="#home" class={s.navbarBrand}>
              <img src="../../static/assets/images/logo.png" alt="header-logo" className="img-fluid" />
            </a>
          </div>
        </div>
        {/* <div className={s.headerRightContent}>
          <CustomDropDown List={UserDropDownOption} />
        </div> */}
      </div>
    </Fragment>
  );
};
export default NavBar;
