import React, { Fragment } from "react";

// Import styles
import s from "../../../styles/profile.module.css";

// Import constants
import { FollowersData } from "../../../utils/constants";

const Followers = () => {
  return (
    <Fragment>
      <div className={s.FollowerSection}>
        <div className={s.FollowerWrapper}>
          <div className={s.header}>
            <h1>You're Following (31)</h1>
            <div className={s.seeAll}>
              <p>
                see all
                <img
                  src="../../../static/assets/images/right-arrow.png"
                  className="img-fluid ml-1"
                  width="14"
                />
              </p>
            </div>
          </div>
          <div className={s.FollowersMain}>
            {FollowersData.map((item, index) => {
              return (
                <div className={s.FollowerImage}>
                  <img
                    src={`../../../static/assets/images/${item.image}`}
                    alt="img"
                    className="img-fluid"
                    width="100"
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={s.FollowingWrapper}>
          <div className={s.header}>
            <h1>Who's Following You (20)</h1>
            <div className={s.seeAll}>
              <p>
                see all
                <img
                  src="../../../static/assets/images/right-arrow.png"
                  className="img-fluid ml-1"
                  width="14"
                />
              </p>
            </div>
          </div>
          <div className={s.FollowingMain}>
            {FollowersData.map((item, index) => {
              return (
                <div className={s.FollowerImage}>
                  <img
                    src={`../../../static/assets/images/${item.image}`}
                    alt="img"
                    className="img-fluid"
                    width="100"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Followers;
