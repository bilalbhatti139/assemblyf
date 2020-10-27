import React, { Fragment } from "react";
import Dropdown from "react-bootstrap/Dropdown";

// import styles
import s from "../../styles/navbar.module.css";

// import component
import CustomDropDown from "../../components/UI/DropDown";
import { UserDropDownOption, ChannelList } from "../../utils/constants";

const NavBar = () => {
  return (
    <Fragment>
      <div className={s.Navbar}>
        <div className={s.logoContainer}>
          <a href="/" className={s.navbarBrand}>
            <img
              src="../../static/assets/images/logo.png"
              alt="header-logo"
              className="img-fluid"
              width="120"
            />
          </a>
          <div className={s.ChannelName}>
            <span>Channel:</span>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Javascript Academy
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {ChannelList.map((item, index) => {
                  return (
                    <Dropdown.Item key={index}>{item.title}</Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className={s.headerRightContent}>
          <div className={s.goLive}>
            <button>
              Go Live{" "}
              <img
                src="../../static/assets/images/live-white.png"
                className="img-fluid "
                width="25"
              />
            </button>
          </div>
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
          <CustomDropDown List={UserDropDownOption} image="user.png" />
        </div>
      </div>
    </Fragment>
  );
};
export default NavBar;
