import React, { Fragment } from "react";

// Import styles
import s from "../../../styles/profile.module.css";

const Followers = () => {
  return (
    <Fragment>
      <div className={s.FollowerContainer}>
        <div className={s.header}>
          <h1>you're Following (31)</h1>
        </div>
        <div className={s.seeAll}>
          <p>
            see all
            <img src="../../../static/assets/images/arrow-right.png" />
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Followers;
