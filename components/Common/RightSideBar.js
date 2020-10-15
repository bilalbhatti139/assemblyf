import React, { Fragment } from "react";

import s from "../../styles/sidebar.module.css";

const RightSideBar = () => {
  return (
    <Fragment>
      <div className={s.RightSideBarContainer}>
        <div className={s.Search}>
          <input type="text" placeholder="search" />
          <img
            src="../../../static/assets/images/search.png"
            className="img-fluid"
            width="12"
          />
        </div>
        <div className={s.chatBoxContainer}>
          <div className={s.chatBox}>
            <div className={s.userImg}>
              <img
                src="../../../static/assets/images/user.png"
                alt="user-img"
                className="img-fluid mr-2"
                width="40"
              />
            </div>
            <div className={s.Message}>
              <p>Alia Isfahan</p>
              <span>I can help you funding</span>
            </div>
          </div>
          <div className={s.chatBox}>
            <div className={s.userImg}>
              <img
                src="../../../static/assets/images/user.png"
                alt="user-img"
                className="img-fluid mr-2"
                width="40"
              />
            </div>
            <div className={s.Message}>
              <p>Alia Isfahan</p>
              <span>I can help you funding</span>
            </div>
          </div>
          <div className={s.chatBox}>
            <div className={s.userImg}>
              <img
                src="../../../static/assets/images/user.png"
                alt="user-img"
                className="img-fluid mr-2"
                width="40"
              />
            </div>
            <div className={s.Message}>
              <p>Alia Isfahan</p>
              <span>I can help you funding</span>
            </div>
          </div>
          <div className={s.chatBox}>
            <div className={s.userImg}>
              <img
                src="../../../static/assets/images/user.png"
                alt="user-img"
                className="img-fluid mr-2"
                width="40"
              />
            </div>
            <div className={s.Message}>
              <p>Alia Isfahan</p>
              <span>I can help you funding</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RightSideBar;
