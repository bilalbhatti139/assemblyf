import React, { Fragment } from "react";

// Import styles
import s from "../../../styles/profile.module.css";

const ProfilePhoto = () => {
  return (
    <Fragment>
      <div className={s.ProfilePhotoContainer}>
        <div className={s.userImage}>
          <img
            src="../../../static/assets/images/user.png"
            alt="user-img"
            className="img-fluid"
          />
        </div>
        <div className={s.useName}>
          <h1>Ginny Radmall</h1>
          <p>Pitch Coach. World Traveller</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfilePhoto;
